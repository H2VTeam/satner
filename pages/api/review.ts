// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';

type Review = {
  _id: string;
  image: string;
  name: string;
  content: string;
};

const reviewList: Review[] = [
  {
    _id: '1',
    image: '1.webp',
    name: 'Elite Martin',
    content:
      "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from ",
  },
  {
    _id: '2',
    image: '2.webp',
    name: 'Davil Saden',
    content:
      "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from ",
  },
  {
    _id: '3',
    image: '1.webp',
    name: 'Elite Martin',
    content:
      "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from ",
  },
  {
    _id: '4',
    image: '2.webp',
    name: 'Davil Saden',
    content:
      "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from ",
  },
  {
    _id: '5',
    image: '1.webp',
    name: 'Elite Martin',
    content:
      "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from ",
  },
  {
    _id: '6',
    image: '2.webp',
    name: 'Davil Saden',
    content:
      "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from ",
  },
  {
    _id: '7',
    image: '1.webp',
    name: 'Elite Martin',
    content:
      "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from ",
  },
  {
    _id: '8',
    image: '2.webp',
    name: 'Davil Saden',
    content:
      "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from ",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ reviewList });
}
