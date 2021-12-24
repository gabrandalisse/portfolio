// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cv from '@db/local/CV.json';

export default (req, res) => {
  res.statusCode = 200;
  res.json(cv);
}
