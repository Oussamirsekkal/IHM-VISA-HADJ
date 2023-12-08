"use server"
import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'DELETE') {
      const { id } = req.body; // Assuming the ID is provided in the request body

      if (!id) {
        return res.status(400).json({ error: 'ID is required for deletion' });
      }

      const result = await sql`
        DELETE FROM infoclient
        WHERE id = ${id}
      `;

      res.status(200).json({ message: 'Data deleted successfully!', result });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    res.status(500).json({ error: errorMessage });
  }
}
