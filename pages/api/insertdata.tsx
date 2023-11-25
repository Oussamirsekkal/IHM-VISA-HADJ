"use server"
import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';
import { toast } from 'react-toastify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const {
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
        INSERT INTO infoclient (
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
          business_phone_number
        ) 
        VALUES (
          ${first_name},
          ${full_name},
          ${mother_name},
          ${date_of_birth},
          ${place_of_birth},
          ${previous_nationality},
          ${present_nationality},
          ${sex},
          ${status},
          ${sect},
          ${religion},
          ${place_of_issue},
          ${qualification},
          ${profession},
          ${address},
          ${phone_number},
          ${business_address},
          ${business_phone_number}
        ) RETURNING *`;
        toast.success('Data inserted successfully!');
      res.status(200).json({ message: 'Data inserted successfully!', result });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    res.status(500).json({ error: errorMessage });
  }
}
