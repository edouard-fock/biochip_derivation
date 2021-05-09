import type {NextApiRequest, NextApiResponse} from 'next';

const handler = (req:NextApiRequest, res:NextApiResponse) => {
  const {data} = req.query;
  res.status(200).json({ message: data })
}

export default handler;
