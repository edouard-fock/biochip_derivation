import type {NextApiRequest, NextApiResponse} from 'next';

const handler = (req:NextApiRequest, res:NextApiResponse) => {
  const {x} = req.query;
  const {y} = req.query;
  if (x == undefined || y == undefined) {
    res.status(400).json({message: 'usage: /api/push?x=number&y=number'});
  }
  // TODO
  res.status(200).json({message: 'Coordinate successfully pushed !'});
};

export default handler;
