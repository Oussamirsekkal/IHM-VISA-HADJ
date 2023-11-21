import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { user } = req.query;

    // Ensure user is a string
    const userId = Array.isArray(user) ? user[0] : user;

    if (typeof userId === 'string') {
      // Update the SQL query to fetch data from the 'infoclient' table
      //const { rows } = await sql`SELECT * FROM infoclient WHERE id = ${userId}`;
      const { rows } = await sql`SELECT * FROM infoclient`;
      res.status(200).json(rows);
    } else {
      res.status(400).json({ error: 'Invalid user ID' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}


