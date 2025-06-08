'use client';

import { Box, Flex, Text, IconButton, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaShareAlt,
} from 'react-icons/fa';

const MotionBox = motion(Box);

const Nav = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleShare = () => {
    // Check if the browser supports the Web Share API
    if (navigator.share) {
      navigator.share({
        title: 'Your Website Title',
        text: 'Check out this amazing website!',
        url: window.location.href,
      });
    } else {
      // Fallback solution for browsers that don't support the Web Share API
      const shareLink = `${window.location.href}`;
      const shareText = 'Check out this amazing website!';
      const shareSubject = 'Your Website Title';
      const mailToLink = `mailto:?subject=${shareSubject}&body=${shareText} ${shareLink}`;
      window.open(mailToLink, '_blank');
    }
  };

  return (
    <MotionBox
      as="nav"
      p={4}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      display="flex"
      justifyContent="center"
      zIndex={10}
      shadow="md"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Flex
        maxW="container.sm"
        mx="auto"
        justify="center"
        align="center"
        bg="gray.700"
        borderRadius="lg"
        p={2}
        gap={4}
      >
        <Tooltip
          label="GitHub"
          placement="top"
          bg="gray.600"
          color="white"
          fontSize="sm"
          px={2}
          py={1}
          rounded="md"
        >
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            colorScheme="gray.700"
            variant="ghost"
            as="a"
            href="https://github.com/AjayKumarSaini8"
            target="_blank"
          />
        </Tooltip>
        <Tooltip
          label="LinkedIn"
          placement="top"
          bg="gray.600"
          color="white"
          fontSize="sm"
          px={2}
          py={1}
          rounded="md"
        >
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            colorScheme="gray.700"
            variant="ghost"
            as="a"
            href="https://linkedin.com/in/ajaykumar-saini-914534245"
            target="_blank"
          />
        </Tooltip>
        <Tooltip
          label="Twitter"
          placement="top"
          bg="gray.600"
          color="white"
          fontSize="sm"
          px={2}
          py={1}
          rounded="md"
        >
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            colorScheme="gray.700"
            variant="ghost"
            as="a"
            href="https://x.com/WebWizDev"
            target="_blank"
          />
        </Tooltip>
        <Tooltip
          label="Email"
          placement="top"
          bg="gray.600"
          color="white"
          fontSize="sm"
          px={2}
          py={1}
          rounded="md"
        >
          <IconButton
            aria-label="Email"
            icon={<FaEnvelope />}
            colorScheme="gray.700"
            variant="ghost"
            as="a"
            href="mailto:ajaysaini.work@gmail.com"
            target="_blank"
          />
        </Tooltip>
        <Tooltip
          label="Share"
          placement="top"
          bg="gray.600"
          color="white"
          fontSize="sm"
          px={2}
          py={1}
          rounded="md"
        >
          <IconButton
            aria-label="Share"
            icon={<FaShareAlt />}
            colorScheme="gray.700"
            variant="ghost"
            onClick={handleShare}
          />
        </Tooltip>
      </Flex>
    </MotionBox>
  );
};

export default Nav;
