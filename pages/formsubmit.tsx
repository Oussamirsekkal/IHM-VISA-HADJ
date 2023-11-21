// pages/api/formSubmit.js
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ihm',
});

export default async function handler(req: { method: string; body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    try {
      const formData = req.body;

      // Insert form data into the database
      const [result] = await connection.execute(
        `
          INSERT INTO formdata (
            firstName,
            fullName,
            motherName,
            dateOfBirth,
            placeOfBirth,
            previousNationality,
            presentNationality,
            sex,
            status,
            sect,
            religion,
            placeOfIssue,
            qualification,
            profession,
            addressphn,
            PhoneNumberphn,
            businessAddress,
            businessnum,
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)
        `,
        [
          formData.firstName,
          formData.fullName,
          formData.motherName,
          formData.dateOfBirth,
          formData.placeOfBirth,
          formData.previousNationality,
          formData.presentNationality,
          formData.sex,
          formData.status,
          formData.sect,
          formData.religion,
          formData.placeOfIssue,
          formData.qualification,
          formData.profession,
          formData.addressphn,
          formData.PhoneNumberphn,
          formData.businessAddress,
          formData.businessnum,
        ]
      );
      

      // Handle success as needed
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
