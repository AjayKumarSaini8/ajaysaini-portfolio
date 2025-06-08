'use client';

import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

const MotionBox = motion(Box);

const Contact: NextPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <MotionBox
      id="contact"
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
          Contact Me
        </Heading>
        <VStack maxW="lg" w="full" gap={4}>
          <Box w="full">
            <Text color="gray.300" mb={2}>
              Name
            </Text>
            <Input
              placeholder="Your Name"
              bg="gray.700"
              color="white"
              p={3}
              borderRadius="lg"
            />
          </Box>
          <Box w="full">
            <Text color="gray.300" mb={2}>
              Email
            </Text>
            <Input
              placeholder="Your Email"
              bg="gray.700"
              color="white"
              p={3}
              borderRadius="lg"
              type="email"
            />
          </Box>
          <Box w="full">
            <Text color="gray.300" mb={2}>
              Message
            </Text>
            <Textarea
              placeholder="Your Message"
              bg="gray.700"
              color="white"
              p={3}
              borderRadius="lg"
              rows={4}
            />
          </Box>
          <Button
            bg="brand.500"
            color="white"
            size="lg"
            borderRadius="full"
            w="full"
            _hover={{ bg: 'brand.600' }}
          >
            Send Message
          </Button>
        </VStack>
      </VStack>
    </MotionBox>
  );
};

export default Contact;
