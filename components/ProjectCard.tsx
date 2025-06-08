'use client';

import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Project } from '../lib/types';

const MotionBox = motion(Box);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <MotionBox
      bg="gray.700"
      p={6}
      borderRadius="lg"
      shadow="lg"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Heading as="h3" size="md" color="brand.500" mb={2}>
        {project.title}
      </Heading>
      <Text color="gray.300" mb={4}>
        {project.description}
      </Text>
      <Link
        href={project.link}
        color="brand.500"
        _hover={{ textDecor: 'underline' }}
      >
        View Project
      </Link>
    </MotionBox>
  );
};

export default ProjectCard;
