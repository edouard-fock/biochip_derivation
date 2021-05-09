import type {NextApiRequest, NextApiResponse} from 'next';

const handler = (req:NextApiRequest, res:NextApiResponse): void => {
  const {range} = req.query;
  const data = [
    {
      x: 1,
      y: 1,
    },
    {
      x: 2,
      y: 2,
    },
  ];
  if (range == undefined) {
    return res.status(400).json({message: 'usage: /api/pull?range=number'});
  }
  return res.status(200).json({...data});
};

export default handler;
