import { sql } from '@vercel/postgres';
import { put } from '@vercel/blob';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const profile = formData.get('profile');

    // Ensure the database table exists
    await sql`
      CREATE TABLE IF NOT EXISTS registrations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        profile_image_url TEXT,
        timestamp TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    // Upload the profile picture to Vercel Blob
    const { url: profileImageUrl } = await put(profile.name, profile, {
      access: 'public',
    });

    // Save form data to the Postgres database
    await sql`
      INSERT INTO registrations (name, email, phone, profile_image_url)
      VALUES (${name}, ${email}, ${phone}, ${profileImageUrl});
    `;

    return new Response(JSON.stringify({ message: 'Registered successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Error:', error.message);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}