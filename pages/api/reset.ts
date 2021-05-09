import type {NextApiRequest, NextApiResponse} from 'next';
import getSql from 'utils/api/getSql';

const handler = (req:NextApiRequest, res:NextApiResponse): void => {
  getSql()``;
  return res.status(200).json({message: 'reset done !'});
};

export default handler;
