import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';

export async function GET() {
  try {
    const jsonPath = path.join(process.cwd(), 'public', 'data', 'registrations.json');

    if (!fs.existsSync(jsonPath)) {
      return new Response(JSON.stringify({ error: 'No registration data found.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

    // Convert JSON to worksheet
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');

    // Generate buffer
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    return new Response(excelBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="registrations.xlsx"',
      },
    });
  } catch (err) {
    console.error('Error exporting to Excel:', err);
    return new Response(JSON.stringify({ error: 'Failed to export data.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
