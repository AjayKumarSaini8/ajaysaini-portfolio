'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  ButtonProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Profile from '../components/Profile';

const MotionBox = motion(Box);

interface CustomButtonProps {
  href: string;
  children: React.ReactNode;
  buttonProps?: ButtonProps;
}

const CustomLinkButton = ({
  href,
  children,
  buttonProps,
}: CustomButtonProps) => {
  return (
    <Button as={Link} href={href} {...buttonProps}>
      {children}
    </Button>
  );
};

const Home: NextPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box>
      {/* <Head>
        <title>Ajay Saini - Portfolio</title>
        <meta name="description" content="Portfolio of Your Name" />
      </Head> */}

      {/* Hero Section */}
      <Profile />
    </Box>
  );
};

export default Home;
