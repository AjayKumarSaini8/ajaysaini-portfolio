'use client';

import {
  Box,
  VStack,
  Avatar,
  Heading,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const MotionBox = motion(Box);

const Profile = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <MotionBox
      minH="60vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.900"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Box bg="gray.800" borderRadius="lg" p={6} maxW="lg" w="full">
        <Flex gap={4}>
          {/* Profile Image */}
          <Avatar
            size="xl"
            src="/profile-placeholder.jpg" // Replace with your image path
            border="2px solid"
            borderColor="gray.600"
          />
          {/* Profile Details */}
          <VStack spacing={2} align="start">
            {/* Name */}
            <Heading as="h1" size="md" color="white" fontWeight="bold">
              Ajay Saini
            </Heading>

            {/* Job Title */}
            <Text fontSize="sm" color="gray.400">
              Software Engineer
            </Text>

            {/* Location */}
            <Flex align="center" gap={2}>
              <FaMapMarkerAlt color="gray.400" size="14px" />
              <Text fontSize="sm" color="gray.400">
                Mumbai, India
              </Text>
            </Flex>

            {/* Email */}
            <Flex align="center" gap={2}>
              <FaEnvelope color="gray.400" size="14px" />
              <Link
                href="mailto:ajaysaini.work@gmail.com"
                fontSize="sm"
                color="gray.400"
                _hover={{ color: 'brand.500' }}
              >
                ajaysaini.work@gmail.com
              </Link>
            </Flex>

            {/* LinkedIn */}
            <Flex align="center" gap={2}>
              <FaLinkedin color="gray.400" size="14px" />
              <Link
                href="https://linkedin.com/in/ajaykumar-saini-914534245"
                fontSize="sm"
                color="gray.400"
                _hover={{ color: 'brand.500' }}
                isExternal
              >
                ajaysaini
              </Link>
            </Flex>

            {/* Job Description */}
            <Text fontSize="sm" color="gray.300" mt={2}>
              Continuous. Adaptive. Personalized. AI at{' '}
              <Text as="span" color="orange.400">
                Sapat International
              </Text>
            </Text>
          </VStack>
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default Profile;
