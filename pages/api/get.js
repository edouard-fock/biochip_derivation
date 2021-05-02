// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (req, res) => {
  const {data} = req.query;
  res.status(200).json({ message: data })
}

export default handler;

