import React from 'react';
import { Image } from '@chakra-ui/react';
import mainImg from './me2.svg';

export const MainImg = props => {
  return <Image src={mainImg} h={300} w={300}/>;
};
