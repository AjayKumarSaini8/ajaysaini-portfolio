'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

const MotionBox = motion(Box);

const About: NextPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <MotionBox
      id="about"
      py={16}
      bg="gray.800"
      minH="100vh"
      display="flex"
      alignItems="center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <VStack maxW="container.lg" mx="auto" px={4} gap={8}>
        <Heading as="h2" size="xl" color="brand.500" textAlign="center">
          About Me
        </Heading>
        <Text fontSize="lg" color="gray.300" maxW="2xl" textAlign="center">
          I'm a passionate web developer with expertise in Next.js, TypeScript,
          Chakra UI, and Framer Motion. I specialize in creating modern,
          responsive, and animated web experiences that captivate users. Let's
          build something amazing together!
        </Text>
      </VStack>
    </MotionBox>
  );
};

export default About;
