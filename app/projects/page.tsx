'use client';

import {
  Box,
  Heading,
  Grid,
  VStack,
  Text,
  HStack,
  Badge,
  Flex,
  Link,
  IconButton,
  Container,
  useBreakpointValue,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode,
  FaServer,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaLock,
  FaBolt
} from 'react-icons/fa';
import { 
  SiReact,
  SiNextdotjs, 
  SiTypescript, 
  SiPython, 
  SiDjango,
  SiDocker,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiJavascript
} from 'react-icons/si';
import { FaAws } from "react-icons/fa";
import projects from '../../data/projects.json';
import { Project } from '../../lib/types';

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const Projects = () => {
  const colors = {
    primary: '#0A3D62',
    secondary: '#00D4AA',
    accent: '#7B61FF',
    cream: '#E8F7FF',
    charcoal: '#0F172A',
    terminal: '#39FF14',
    code: '#FF6B9D',
    warning: '#FFBD2E',
    error: '#FF5F56',
  };

  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? true;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const techFloat = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  // Tech icon mapping
  const techIcons = {
    'reactjs': SiReact,
    'nextjs': SiNextdotjs,
    'typescript': SiTypescript,
    'python': SiPython,
    'django': SiDjango,
    'docker': SiDocker,
    'postgresql': SiPostgresql,
    'redis': SiRedis,
    'aws': FaAws,
    'graphql': SiGraphql,
    'javascript': SiJavascript,
    'ai': FaRobot,
    'database': FaDatabase,
    'cloud': FaCloud,
    'mobile': FaMobileAlt,
    'security': FaLock,
    'performance': FaBolt,
  };

  const getTechIcon = (tech: string) => {
    const key = tech.toLowerCase();
    return techIcons[key as keyof typeof techIcons] || FaCode;
  };

  const getTechColor = (tech: string) => {
    const techMap: Record<string, string> = {
      'reactjs': colors.cream,
      'nextjs': colors.cream,
      'typescript': colors.accent,
      'python': colors.code,
      'django': colors.terminal,
      'docker': colors.secondary,
      'postgresql': colors.secondary,
      'redis': colors.error,
      'aws': colors.warning,
      'graphql': colors.code,
      'javascript': colors.warning,
      'ai': colors.accent,
      'database': colors.terminal,
      'cloud': colors.secondary,
      'mobile': colors.accent,
      'security': colors.code,
      'performance': colors.terminal,
    };
    return techMap[tech.toLowerCase()] || colors.secondary;
  };

  return (
    <MotionBox
      id="projects"
      py={{ base: 12, md: 20 }}
      bg={`linear-gradient(135deg, ${colors.charcoal} 0%, #1E293B 100%)`}
      minH="100vh"
      display="flex"
      alignItems="center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
    >
      <Container maxW="8xl" px={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 8, md: 12 }} maxW="full">
          {/* Header Section */}
          <MotionBox variants={item} textAlign="center">
            <VStack spacing={4}>
              <Badge
                px={4}
                py={2}
                bg={`linear-gradient(135deg, ${colors.primary}40, ${colors.accent}40)`}
                color={colors.secondary}
                fontSize="sm"
                fontWeight="500"
                borderRadius="full"
                border={`1px solid ${colors.secondary}30`}
                fontFamily="monospace"
              >
                <FaCode style={{ display: 'inline', marginRight: '8px' }} />
                PROJECT PORTFOLIO
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: '2.5rem', md: '3.5rem' }}
                color={colors.cream}
                fontWeight="700"
                fontFamily="'SF Mono', monospace"
                letterSpacing="-0.5px"
              >
                &lt;Code_Projects/&gt;
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={`${colors.cream}CC`}
                maxW="2xl"
                textAlign="center"
              >
                Building scalable solutions that solve real-world problems with modern technology
              </Text>
            </VStack>
          </MotionBox>

          {/* Projects Grid */}
          <MotionGrid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={{ base: 6, md: 8 }}
            w="full"
            variants={container}
          >
            {projects.map((project, index: number) => {
              // Ensure status is typed correctly for Project
              const typedProject: Project = {
                ...project,
                year: project.year ? parseInt(project.year, 10) : new Date().getFullYear(),
                status: (['completed', 'in-progress', 'planned'].includes(project.status)
                  ? project.status
                  : undefined) as 'completed' | 'in-progress' | 'planned' | undefined,
              };
              return (
                <MotionBox
                  key={index}
                  variants={item}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <ProjectCard 
                    project={typedProject} 
                    colors={colors}
                    isMobile={isMobile}
                    getTechIcon={getTechIcon}
                    getTechColor={getTechColor}
                    techFloat={techFloat}
                  />
                </MotionBox>
              );
            })}
          </MotionGrid>

          {/* Stats Footer */}
          {!isMobile && (
            <MotionBox
              variants={item}
              mt={8}
              w="full"
              maxW="4xl"
              mx="auto"
            >
              <SimpleGrid 
                columns={{ base: 2, md: 4 }} 
                spacing={6}
                p={6}
                bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                borderRadius="xl"
                border={`1px solid ${colors.secondary}20`}
              >
                {[
                  { label: 'Total Projects', value: projects.length, icon: FaCode, color: colors.secondary },
                  { label: 'Open Source', value: Math.floor(projects.length * 0.6), icon: FaGithub, color: colors.cream },
                  { label: 'Production Ready', value: Math.floor(projects.length * 0.8), icon: FaServer, color: colors.terminal },
                  { label: 'AI/ML Focus', value: Math.floor(projects.length * 0.4), icon: FaRobot, color: colors.accent },
                ].map((stat) => (
                  <VStack key={stat.label} spacing={2}>
                    <Text fontSize="2xl" color={stat.color} fontWeight="bold" fontFamily="monospace">
                      {stat.value}+
                    </Text>
                    <Text fontSize="sm" color={`${colors.cream}AA`} textAlign="center">
                      {stat.label}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </MotionBox>
          )}
        </VStack>
      </Container>
    </MotionBox>
  );
};

// ProjectCard Component
interface ProjectCardProps {
  project: Project;
  colors: any;
  isMobile: boolean;
  getTechIcon: (tech: string) => any;
  getTechColor: (tech: string) => string;
  techFloat: any;
}

const ProjectCard = ({ 
  project, 
  colors, 
  isMobile, 
  getTechIcon, 
  getTechColor,
  techFloat 
}: ProjectCardProps) => {
  const ProjectIcon = getTechIcon(project.category || 'code');
  const iconColor = getTechColor(project.category || 'code');

  return (
    <MotionBox
      variants={techFloat}
      whileHover="hover"
      h="full"
    >
      <Box
        h="full"
        bg={`linear-gradient(145deg, ${colors.charcoal}EE, ${colors.primary}EE)`}
        p={{ base: 4, md: 6 }}
        borderRadius="xl"
        border={`1px solid ${colors.secondary}30`}
        boxShadow={`
          0 10px 30px rgba(0, 0, 0, 0.4),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `}
        position="relative"
        overflow="hidden"
        _hover={{
          borderColor: colors.secondary,
          boxShadow: `
            0 20px 50px rgba(0, 0, 0, 0.6),
            0 0 0 1px ${colors.secondary}40,
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
        transition="all 0.3s ease"
      >
        {/* Tech Category Badge */}
        <Box
          position="absolute"
          top={4}
          right={4}
          p={2}
          bg={`linear-gradient(135deg, ${colors.primary}80, ${colors.charcoal}80)`}
          borderRadius="lg"
          border={`1px solid ${iconColor}40`}
          zIndex={2}
        >
          <ProjectIcon size={isMobile ? "16px" : "18px"} color={iconColor} />
        </Box>

        {/* Project Image/Icon */}
        <Flex
          justify="center"
          align="center"
          mb={4}
          h="120px"
          bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
          borderRadius="lg"
          border={`1px solid ${colors.secondary}20`}
          position="relative"
          overflow="hidden"
        >
          {project.image ? (
            <Box
              as="img"
              // src={project.image}
              alt={project.title}
              objectFit="cover"
              w="full"
              h="full"
              opacity={0.7}
              _hover={{ opacity: 0.9 }}
              transition="opacity 0.3s ease"
            />
          ) : (
            <ProjectIcon size="48px" color={iconColor} opacity={0.7} />
          )}
        </Flex>

        {/* Project Content */}
        <VStack align="start" spacing={4} h="calc(100% - 140px)">
          {/* Title and Description */}
          <VStack align="start" spacing={2} w="full">
            <Heading
              as="h3"
              fontSize={{ base: 'lg', md: 'xl' }}
              color={colors.cream}
              fontWeight="600"
              fontFamily="'SF Mono', monospace"
            >
              {project.title}
            </Heading>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color={`${colors.cream}CC`}
              lineHeight="1.6"
              noOfLines={3}
            >
              {project.description}
            </Text>
          </VStack>

          {/* Tech Stack */}
          {project.techStack && (
            <VStack align="start" spacing={2} w="full">
              <Text fontSize="xs" color={`${colors.secondary}CC`} letterSpacing="wide">
                TECH STACK
              </Text>
              <Flex gap={2} wrap="wrap">
                {project.techStack.slice(0, 4).map((tech: string, idx: number) => (
                  <Badge
                    key={idx}
                    px={2}
                    py={1}
                    bg={`linear-gradient(135deg, ${colors.primary}40, ${colors.charcoal}40)`}
                    color={colors.cream}
                    fontSize="2xs"
                    fontFamily="monospace"
                    borderRadius="md"
                    border={`1px solid ${getTechColor(tech)}30`}
                  >
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 4 && (
                  <Badge
                    px={2}
                    py={1}
                    bg={`linear-gradient(135deg, ${colors.primary}40, ${colors.accent}40)`}
                    color={colors.cream}
                    fontSize="2xs"
                    fontFamily="monospace"
                    borderRadius="md"
                  >
                    +{project.techStack.length - 4}
                  </Badge>
                )}
              </Flex>
            </VStack>
          )}

          {/* Action Buttons */}
          <HStack spacing={3} w="full" mt="auto">
            {project.github && (
              <IconButton
                as={Link}
                href={project.github}
                isExternal
                aria-label="GitHub"
                icon={<FaGithub />}
                size={isMobile ? "sm" : "md"}
                bg={`linear-gradient(135deg, ${colors.primary}40, ${colors.charcoal}40)`}
                color={colors.cream}
                border={`1px solid ${colors.secondary}30`}
                borderRadius="lg"
                _hover={{
                  bg: `${colors.secondary}30`,
                  color: colors.secondary,
                  borderColor: colors.secondary,
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s ease"
              />
            )}
            {project.link && (
              <IconButton
                as={Link}
                href={project.link}
                isExternal
                aria-label="Live Demo"
                icon={<FaExternalLinkAlt />}
                size={isMobile ? "sm" : "md"}
                bg={`linear-gradient(135deg, ${colors.accent}40, ${colors.charcoal}40)`}
                color={colors.cream}
                border={`1px solid ${colors.accent}30`}
                borderRadius="lg"
                _hover={{
                  bg: `${colors.accent}30`,
                  color: colors.accent,
                  borderColor: colors.accent,
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s ease"
              />
            )}
            <Text
              ml="auto"
              fontSize="xs"
              color={`${colors.cream}AA`}
              fontFamily="monospace"
            >
              {project.year || '2024'}
            </Text>
          </HStack>
        </VStack>

        {/* Status Indicator */}
        {project.status && (
          <Box
            position="absolute"
            bottom={4}
            left={4}
            px={2}
            py={1}
            bg={`linear-gradient(135deg, ${
              project.status === 'completed' ? colors.terminal :
              project.status === 'in-progress' ? colors.warning :
              project.status === 'planned' ? colors.accent :
              colors.secondary
            }30, transparent)`}
            color={
              project.status === 'completed' ? colors.terminal :
              project.status === 'in-progress' ? colors.warning :
              project.status === 'planned' ? colors.accent :
              colors.secondary
            }
            fontSize="2xs"
            fontWeight="500"
            borderRadius="md"
            border={`1px solid ${
              project.status === 'completed' ? colors.terminal :
              project.status === 'in-progress' ? colors.warning :
              project.status === 'planned' ? colors.accent :
              colors.secondary
            }30`}
          >
            {project.status.toUpperCase()}
          </Box>
        )}
      </Box>
    </MotionBox>
  );
};

export default Projects;