import type {NextApiRequest, NextApiResponse} from 'next';

const handler = (req:NextApiRequest, res:NextApiResponse): void => {
  const {x} = req.query;
  const {y} = req.query;
  if (x == undefined || y == undefined) {
    return res.status(400).json({message: 'usage: /api/push?x=number&y=number'});
  }
  // TODO
  return res.status(200).json({message: 'Coordinate successfully pushed !'});
};

export default handler;
