import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const profile = formData.get('profile'); // File object

    // ✅ Save uploaded image to /public/uploads
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const buffer = Buffer.from(await profile.arrayBuffer());
    const fileName = `${Date.now()}-${profile.name}`;
    const uploadPath = path.join(uploadDir, fileName);
    fs.writeFileSync(uploadPath, buffer);

    // ✅ Save form data to JSON
    const dataDir = path.join(process.cwd(), 'public', 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    const jsonFile = path.join(dataDir, 'registrations.json');
    let existingData = [];

    if (fs.existsSync(jsonFile)) {
      const fileContents = fs.readFileSync(jsonFile, 'utf-8');
      existingData = JSON.parse(fileContents || '[]');
    }

    const newEntry = {
      name,
      email,
      phone,
      profileImage: `/uploads/${fileName}`, // for frontend display
      timestamp: new Date().toISOString(),
    };

    existingData.push(newEntry);
    fs.writeFileSync(jsonFile, JSON.stringify(existingData, null, 2));

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
