import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'PUT') {
      const {
        id,
        first_name,
        full_name,
        mother_name,
        date_of_birth,
        place_of_birth,
        previous_nationality,
        present_nationality,
        sex,
        status,
        sect,
        religion,
        place_of_issue,
        qualification,
        profession,
        address,
        phone_number,
        business_address,
        business_phone_number,
      } = req.body;

      const result = await sql`
        UPDATE infoclient
        SET
          first_name = ${first_name},
          full_name = ${full_name},
          mother_name = ${mother_name},
          date_of_birth = ${date_of_birth},
          place_of_birth = ${place_of_birth},
          previous_nationality = ${previous_nationality},
          present_nationality = ${present_nationality},
          sex = ${sex},
          status = ${status},
          sect = ${sect},
          religion = ${religion},
          place_of_issue = ${place_of_issue},
          qualification = ${qualification},
          profession = ${profession},
          address = ${address},
          phone_number = ${phone_number},
          business_address = ${business_address},
          business_phone_number = ${business_phone_number}
        WHERE id = ${id}
        RETURNING *`;

      res.status(200).json({ message: 'Data updated successfully!', result });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    res.status(500).json({ error: errorMessage });
  }
}
