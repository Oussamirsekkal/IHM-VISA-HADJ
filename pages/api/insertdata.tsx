import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      // Extract the data to be inserted from the request body
      const { field1, field2, /* Add other fields */ } = req.body;

      // Create a connection pool
      const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
      });

      // Get a client from the pool
      const client = await pool.connect();

      // Perform the insertion operation
      const result = await client.query(
        `INSERT INTO infoclient (field1, field2 /* Add other fields */) VALUES ($1, $2 /* Add other values */)
         RETURNING *`,
        [field1, field2 /* Add other values */]
      );

      // Release the client back to the pool
      client.release();

      // Send a success response with inserted data
      res.status(200).json({ message: 'Data inserted successfully!', result });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
