// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';

type Project = {
  _id: string;
  image: string;
  name: string;
  content: string;
  type: string[];
};

const projects: Project[] = [
  {
    _id: '1',
    image: '1.webp',
    name: 'minimal design',
    content: 'Animated, portfolio',
    type: ['latest'],
  },
  {
    _id: '2',
    image: '2.webp',
    name: 'Paint wall',
    content: 'Animated, portfolio',
    type: ['popular'],
  },
  {
    _id: '3',
    image: '3.webp',
    name: 'female light',
    content: 'Animated, portfolio',
    type: ['latest'],
  },
  {
    _id: '4',
    image: '4.webp',
    name: 'fourth air',
    content: 'Animated, portfolio',
    type: ['popular'],
  },
  {
    _id: '5',
    image: '5.webp',
    name: 'multiply fowl',
    content: 'Animated, portfolio',
    type: ['following'],
  },
  {
    _id: '6',
    image: '6.webp',
    name: 'together sign',
    content: 'Animated, portfolio',
    type: ['upcoming'],
  },
  {
    _id: '7',
    image: '7.webp',
    name: 'Green heaven',
    content: 'Animated, portfolio',
    type: ['upcoming', 'following'],
  },
  {
    _id: '8',
    image: '8.webp',
    name: 'fly male',
    content: 'Animated, portfolio',
    type: ['following'],
  },
  {
    _id: '9',
    image: '9.webp',
    name: 'Season face',
    content: 'Animated, portfolio',
    type: ['upcoming'],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ projects });
}
