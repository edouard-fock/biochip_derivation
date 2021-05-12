import type {NextApiRequest, NextApiResponse} from 'next';
import getSql from 'utils/api/getSql';


const handler = async (req:NextApiRequest, res:NextApiResponse): Promise<void> => {
  const {range} = req.query;
  const data = await getSql()`
  SELECT * FROM public."Points" ORDER BY id desc limit ${range};
  `;
  if (range == undefined) {
    return res.status(400).json({message: 'usage: /api/pull?range=number'});
  }
  return res.status(200).json({data});
};

export default handler;
