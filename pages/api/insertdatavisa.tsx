import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const {
        purpose_travel,
        passnum,
        datePassportIssued,
        datePassportExpiration,
        passIssuePlace,
        dateDeparture,
        dateArrival,
        durationStayKingdom,
        modePayment,
        chequeRecepNum,
        dateRecep,
        mahram,
        mahramRelationship,
        carrierName,
        destination,
      } = req.body;

      const result = await sql`
        INSERT INTO infoclient (
          purpose_travel,
          passnum,
          date_passport_issued,
          date_passport_expiration,
          pass_issue_place,
          date_departure,
          date_arrival,
          duration_stay_kingdom,
          mode_payment,
          cheque_recep_num,
          date_recep,
          mahram,
          mahram_relationship,
          carrier_name,
          destination
        ) 
        VALUES (
          ${purpose_travel},
          ${passnum},
          ${datePassportIssued},
          ${datePassportExpiration},
          ${passIssuePlace},
          ${dateDeparture},
          ${dateArrival},
          ${durationStayKingdom},
          ${modePayment},
          ${chequeRecepNum},
          ${dateRecep},
          ${mahram},
          ${mahramRelationship},
          ${carrierName},
          ${destination}
        ) RETURNING *`;
    
      res.status(200).json({ message: 'Data inserted successfully!', result });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    res.status(500).json({ error: errorMessage });
  }
}
