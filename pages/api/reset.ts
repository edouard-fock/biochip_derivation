import type {NextApiRequest, NextApiResponse} from 'next';
import getSql from 'utils/api/getSql';


const handler = async (req:NextApiRequest, res:NextApiResponse): Promise<void> => {
  const sql = getSql();

  await sql`
    DROP TABLE public."Points";
  `;

  await sql`
  CREATE TABLE public."Points"
  (
    id serial NOT NULL,
    x double precision NOT NULL,
    y double precision NOT NULL,
    PRIMARY KEY (id)
  );
  `;
  await sql`
    ALTER TABLE public."Points"
    OWNER to postgres;
  `;

  return res.status(200).json({message: 'reset done !'});
};

export default handler;
