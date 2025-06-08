import { Box, Heading, Grid, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import ProjectCard from '../../components/ProjectCard';
import projects from '../../data/projects.json';
import { Project } from '../../lib/types';

const MotionBox = motion(Box);

const Projects: NextPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <MotionBox
      id="projects"
      py={16}
      bg="gray.900"
      minH="100vh"
      display="flex"
      alignItems="center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <VStack maxW="container.xl" mx="auto" px={4} gap={8}>
        <Heading as="h2" size="xl" color="brand.500" textAlign="center">
          My Projects
        </Heading>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={8}
        >
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Grid>
      </VStack>
    </MotionBox>
  );
};

export default Projects;
