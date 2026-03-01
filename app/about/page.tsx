'use client';

import type { NextPage } from 'next';
import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  HStack,
  Tag,
  TagLabel,
  Image,
  Highlight,
  Badge,
  Flex,
  Container,
  Grid,
  GridItem,
  Code,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaRobot, 
  FaServer, 
  FaDatabase, 
  FaCloud, 
  FaBolt,
  FaShieldAlt,
  FaMicrochip,
  FaNetworkWired,
  FaTerminal,
  FaPython,
  FaReact
} from 'react-icons/fa';
import { 
  SiReact,
  SiNextdotjs, 
  SiTypescript, 
  SiDjango, 
  SiDocker, 
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiTerraform,
  SiGraphql,
  SiGit
} from 'react-icons/si';
import { FaAws } from "react-icons/fa";
import { TbApi, TbBrandVscode } from 'react-icons/tb';
import { MdSpeed, MdSecurity, MdStorage, MdDevices } from 'react-icons/md';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionText = motion(Text);
const MotionGrid = motion(Grid);

const About: NextPage = () => {
  // Tech Color Palette
  const colors = {
    primary: '#0A3D62', // Deep Navy
    secondary: '#00D4AA', // Cyber Teal
    accent: '#7B61FF', // Purple
    cream: '#E8F7FF', // Ice Blue
    charcoal: '#0F172A', // Space Gray
    terminal: '#39FF14', // Terminal Green
    code: '#FF6B9D', // Code Pink
    warning: '#FFBD2E', // Warning Yellow
    error: '#FF5F56', // Error Red
  };

  // Responsive values
  const isMobile = useBreakpointValue({ base: true, md: false });
  const headingSize = useBreakpointValue({ base: '2.2rem', md: '3rem', lg: '3.8rem' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg', lg: 'xl' });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
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
      y: -3,
      transition: { duration: 0.2 }
    }
  };

  const orbitAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <MotionBox
      id="about"
      position="relative"
      overflow="hidden"
      py={{ base: 12, md: 20, lg: 28 }}
      bg={`linear-gradient(135deg, ${colors.charcoal} 0%, #1E293B 50%, ${colors.primary} 100%)`}
      minH="100vh"
      display="flex"
      alignItems="center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Animated Tech Background */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.03}
        // backgroundImage="url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4AA' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      />

      {/* Animated Tech Particles */}
      {[...Array(20)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          w="1px"
          h="1px"
          bg={colors.secondary}
          borderRadius="full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            x: Math.random() * 100 - 50 + 'vw',
            y: Math.random() * 100 - 50 + 'vh',
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <Container maxW="8xl" px={{ base: 4, md: 8, lg: 12 }}>
        <MotionGrid
          templateColumns={{ base: '1fr', lg: '1.2fr 1fr' }}
          gap={{ base: 8, md: 12, lg: 16 }}
          align="center"
          variants={container}
        >
          {/* Left: Text content */}
          <GridItem>
            <MotionVStack
              align="flex-start"
              spacing={{ base: 6, md: 8 }}
              variants={container}
            >
              {/* Tech Header Tag */}
              <MotionBox variants={item}>
                <Tag
                  size={{ base: 'md', md: 'lg' }}
                  borderRadius="full"
                  bg={`linear-gradient(135deg, ${colors.primary}40, ${colors.accent}40)`}
                  borderWidth="2px"
                  borderColor={colors.secondary}
                  px={{ base: 4, md: 5 }}
                  py={{ base: 2, md: 2 }}
                  backdropFilter="blur(12px)"
                  boxShadow={`0 4px 20px ${colors.secondary}30`}
                >
                  <FaTerminal style={{ marginRight: '8px', color: colors.secondary }} />
                  <TagLabel 
                    fontSize={{ base: 'xs', md: 'sm' }} 
                    letterSpacing="wider" 
                    color={colors.cream}
                    fontFamily="monospace"
                  >
                    SENIOR ENGINEER · AI ARCHITECT · SYSTEMS BUILDER
                  </TagLabel>
                </Tag>
              </MotionBox>

              <MotionBox variants={item}>
                <Heading
                  as="h2"
                  fontSize={headingSize}
                  lineHeight="1.1"
                  color={colors.cream}
                  fontWeight="700"
                  fontFamily="'SF Mono', monospace"
                  letterSpacing="-0.02em"
                >
                  Building{' '}
                  <Text as="span" color={colors.secondary} fontStyle="italic">
                    Scalable
                  </Text>{' '}
                  Systems with{' '}
                  <Text as="span" color={colors.accent}>
                    Precision
                  </Text>
                </Heading>
              </MotionBox>

              <MotionText
                fontSize={textSize}
                color={colors.cream}
                opacity={0.9}
                lineHeight="1.8"
                variants={item}
                fontFamily="'Inter', sans-serif"
              >
                <Highlight
                  query={['Ajay Saini', 'full-stack', 'enterprise-grade']}
                  styles={{
                    color: colors.secondary,
                    fontWeight: '600',
                    fontFamily: 'monospace',
                  }}
                >
                  I'm Ajay Saini, a software engineer specializing in full-stack development and AI systems. 
                  I architect enterprise-grade solutions using Python, Django, Next.js, and TypeScript — building 
                  robust systems that scale with precision.
                </Highlight>
              </MotionText>

              {/* Tech Cards Grid */}
              <MotionGrid
                templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
                gap={4}
                w="full"
                variants={container}
              >
                <MotionBox variants={item}>
                  <Flex
                    p={4}
                    bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                    borderRadius="lg"
                    borderLeft={`4px solid ${colors.code}`}
                    align="start"
                    gap={3}
                    h="full"
                  >
                    <Box
                      p={2}
                      bg={`linear-gradient(135deg, ${colors.code}20, ${colors.charcoal}20)`}
                      borderRadius="md"
                    >
                      <FaCode color={colors.code} size="20px" />
                    </Box>
                    <VStack align="start" spacing={1}>
                      <Text color={colors.cream} fontSize="sm" fontWeight="medium" letterSpacing="wide">
                        CODE ARCHITECTURE
                      </Text>
                      <Text color={colors.secondary} fontSize="sm" fontWeight="bold">
                        Clean, Scalable Code
                      </Text>
                      <Text color={`${colors.cream}AA`} fontSize="xs">
                        Building maintainable systems with best practices
                      </Text>
                    </VStack>
                  </Flex>
                </MotionBox>

                <MotionBox variants={item}>
                  <Flex
                    p={4}
                    bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                    borderRadius="lg"
                    borderLeft={`4px solid ${colors.accent}`}
                    align="start"
                    gap={3}
                    h="full"
                  >
                    <Box
                      p={2}
                      bg={`linear-gradient(135deg, ${colors.accent}20, ${colors.charcoal}20)`}
                      borderRadius="md"
                    >
                      <FaRobot color={colors.accent} size="20px" />
                    </Box>
                    <VStack align="start" spacing={1}>
                      <Text color={colors.cream} fontSize="sm" fontWeight="medium" letterSpacing="wide">
                        AI INTEGRATION
                      </Text>
                      <Text color={colors.secondary} fontSize="sm" fontWeight="bold">
                        Intelligent Systems
                      </Text>
                      <Text color={`${colors.cream}AA`} fontSize="xs">
                        Implementing AI solutions that drive business value
                      </Text>
                    </VStack>
                  </Flex>
                </MotionBox>
              </MotionGrid>

              <MotionText
                fontSize={{ base: 'md', md: 'lg' }}
                color={`${colors.cream}CC`}
                lineHeight="1.7"
                borderLeft={`3px solid ${colors.secondary}`}
                pl={4}
                py={3}
                bg={`linear-gradient(90deg, ${colors.secondary}10, transparent)`}
                variants={item}
                fontFamily="'Inter', sans-serif"
              >
                <Box as="span" color={colors.secondary} mr={2}>
                  <FaBolt />
                </Box>
                I focus on <b>strategic automation and system optimization</b> — creating tools and 
                workflows that eliminate friction and amplify productivity across development teams.
              </MotionText>

              <MotionText
                fontSize={{ base: 'md', md: 'lg' }}
                color={`${colors.cream}CC`}
                lineHeight="1.7"
                borderLeft={`3px solid ${colors.accent}`}
                pl={4}
                py={3}
                bg={`linear-gradient(90deg, ${colors.accent}10, transparent)`}
                variants={item}
                fontFamily="'Inter', sans-serif"
              >
                <Box as="span" color={colors.accent} mr={2}>
                  <FaCloud />
                </Box>
                Through technical content and open-source contributions, I share insights on 
                <b> cloud architecture, DevOps practices, and full-stack development</b> — 
                transforming complex concepts into actionable knowledge.
              </MotionText>

              {/* Tech Stack */}
              <MotionBox variants={item} w="full">
                <VStack align="start" spacing={4}>
                  <Flex align="center" gap={2}>
                    <FaMicrochip color={colors.secondary} />
                    <Text fontSize="sm" color={`${colors.secondary}CC`} letterSpacing="wide" fontWeight="500">
                      PRIMARY TECH STACK
                    </Text>
                  </Flex>
                  <Grid 
                    column={{ base: 2, sm: 3, md: 4 }} 
                    gap={3}
                    w="full"
                  >
                    {[
                      { tech: 'React.js', icon: SiReact, color: colors.cream },
                      { tech: 'Next.js', icon: SiNextdotjs, color: colors.cream },
                      { tech: 'TypeScript', icon: SiTypescript, color: colors.accent },
                      { tech: 'Python', icon: FaPython, color: colors.code },
                      { tech: 'Django', icon: SiDjango, color: colors.terminal },
                      { tech: 'PostgreSQL', icon: SiPostgresql, color: colors.secondary },
                      { tech: 'Docker', icon: SiDocker, color: colors.secondary },
                      { tech: 'AWS', icon: FaAws, color: colors.warning },
                      { tech: 'GraphQL', icon: SiGraphql, color: colors.code },
                    ].map((item) => (
                      <Flex
                        key={item.tech}
                        align="center"
                        gap={2}
                        p={3}
                        bg={`linear-gradient(135deg, ${colors.primary}40, ${colors.charcoal}40)`}
                        borderRadius="lg"
                        border={`1px solid ${item.color}30`}
                        _hover={{
                          borderColor: item.color,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 4px 15px ${item.color}30`,
                        }}
                        transition="all 0.2s ease"
                      >
                        <item.icon size={isMobile ? "16px" : "18px"} color={item.color} />
                        <Text 
                          color={colors.cream} 
                          fontSize={{ base: 'xs', md: 'sm' }} 
                          fontWeight="500"
                          fontFamily="monospace"
                        >
                          {item.tech}
                        </Text>
                      </Flex>
                    ))}
                  </Grid>
                </VStack>
              </MotionBox>
            </MotionVStack>
          </GridItem>

          {/* Right: Tech Visualization */}
          <GridItem>
            <MotionBox
              variants={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <Box position="relative" w={{ base: '280px', sm: '320px', md: '380px' }} mx="auto">
                {/* Tech Orbit System */}
                <MotionBox
                  position="absolute"
                  inset="-40px"
                  variants={orbitAnimation}
                  animate="animate"
                >
                  {[
                    { icon: SiReact, color: colors.cream, size: 24, delay: 0 },
                    { icon: SiNextdotjs, color: colors.cream, size: 24, delay: 0 },
                    { icon: FaPython, color: colors.code, size: 24, delay: 0.2 },
                    { icon: SiTypescript, color: colors.accent, size: 24, delay: 0.4 },
                    { icon: SiDjango, color: colors.terminal, size: 24, delay: 0.6 },
                    { icon: SiDocker, color: colors.secondary, size: 22, delay: 0.8 },
                    { icon: FaAws, color: colors.warning, size: 22, delay: 1 },
                  ].map((tech, idx) => (
                    <MotionBox
                      key={idx}
                      position="absolute"
                      top={`${50 + 55 * Math.sin(idx * Math.PI / 3)}%`}
                      left={`${50 + 55 * Math.cos(idx * Math.PI / 3)}%`}
                      transform="translate(-50%, -50%)"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: tech.delay, type: 'spring' }}
                    >
                      <Box
                        p={3}
                        bg={`linear-gradient(135deg, ${colors.charcoal}, ${colors.primary})`}
                        borderRadius="xl"
                        border={`2px solid ${tech.color}40`}
                        boxShadow={`
                          0 8px 32px ${tech.color}30,
                          inset 0 1px 0 rgba(255,255,255,0.1)
                        `}
                        _hover={{
                          borderColor: tech.color,
                          transform: 'scale(1.1)',
                          boxShadow: `0 12px 40px ${tech.color}50`,
                        }}
                        transition="all 0.3s ease"
                      >
                        <tech.icon size={tech.size} color={tech.color} />
                      </Box>
                    </MotionBox>
                  ))}
                </MotionBox>

                {/* Developer Center */}
                <Box
                  position="relative"
                  w="full"
                  h={{ base: '280px', sm: '320px', md: '380px' }}
                  borderRadius="24px"
                  p="3px"
                  bg={`linear-gradient(45deg, ${colors.secondary}, ${colors.accent}, ${colors.code})`}
                  boxShadow={`
                    0 25px 50px -12px rgba(0, 0, 0, 0.5),
                    inset 0 0 30px ${colors.secondary}30
                  `}
                  mx="auto"
                >
                  <Box
                    w="full"
                    h="full"
                    borderRadius="21px"
                    bg={`linear-gradient(135deg, ${colors.charcoal}, ${colors.primary})`}
                    overflow="hidden"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {/* Terminal-like Code Display */}
                    <VStack spacing={4} p={6} align="start" w="full">
                      <Flex align="center" gap={3} mb={4}>
                        <Box w="10px" h="10px" bg={colors.error} borderRadius="full" />
                        <Box w="10px" h="10px" bg={colors.warning} borderRadius="full" />
                        <Box w="10px" h="10px" bg={colors.terminal} borderRadius="full" />
                        <Text color={colors.cream} fontSize="sm" fontFamily="monospace">
                          terminal ~/about.js
                        </Text>
                      </Flex>

                      <Code
                        colorScheme="blackAlpha"
                        bg="transparent"
                        color={colors.secondary}
                        fontSize={{ base: 'xs', md: 'sm' }}
                        fontFamily="monospace"
                        w="full"
                      >
                        <Text color={colors.terminal}>const engineer = {'{'}</Text>
                        <Text color={colors.cream} ml={4}>name: <Text as="span" color={colors.code}>"Ajay Saini"</Text>,</Text>
                        <Text color={colors.cream} ml={4}>role: <Text as="span" color={colors.accent}>"Senior Engineer"</Text>,</Text>
                        <Text color={colors.cream} ml={4}>focus: <Text as="span" color={colors.secondary}>["AI Systems", "Scalability"]</Text>,</Text>
                        <Text color={colors.cream} ml={4}>stack: <Text as="span" color={colors.warning}>["Next.js", "Python", "TypeScript"]</Text></Text>
                        <Text color={colors.terminal}>{'}'};</Text>
                      </Code>

                      <Image
                        src="/me.png"
                        alt="Ajay Saini - Software Engineer"
                        position="absolute"
                        bottom={0}
                        right={0}
                        w="60%"
                        h="60%"
                        objectFit="cover"
                        borderRadius="16px 0 21px 0"
                        filter="grayscale(30%) contrast(120%)"
                        opacity={0.9}
                      />
                    </VStack>
                  </Box>
                </Box>

                {/* Tech Metrics Floating */}
                <MotionBox
                  position="absolute"
                  top="-20px"
                  left="-20px"
                  p={4}
                  bg={`linear-gradient(135deg, ${colors.primary}EE, ${colors.charcoal}EE)`}
                  borderRadius="xl"
                  border={`1px solid ${colors.secondary}40`}
                  backdropFilter="blur(20px)"
                  boxShadow={`0 15px 35px rgba(0,0,0,0.4), 0 0 0 1px ${colors.secondary}20`}
                  animate={{
                    y: [0, -10, 0],
                    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  zIndex={2}
                  w={{ base: '140px', md: '160px' }}
                >
                  <VStack align="start" spacing={1}>
                    <Flex align="center" gap={2}>
                      <MdSpeed color={colors.secondary} size="18px" />
                      <Text color={colors.cream} fontSize="xs" fontWeight="medium" letterSpacing="wide">
                        PERFORMANCE
                      </Text>
                    </Flex>
                    <Text color={colors.secondary} fontSize="sm" fontWeight="bold" fontFamily="monospace">
                      Optimized Systems
                    </Text>
                    <Text color={`${colors.cream}AA`} fontSize="2xs">
                      Low latency, high throughput
                    </Text>
                  </VStack>
                </MotionBox>

                <MotionBox
                  position="absolute"
                  bottom="-30px"
                  right="-30px"
                  p={4}
                  bg={`linear-gradient(135deg, ${colors.accent}EE, ${colors.charcoal}EE)`}
                  borderRadius="xl"
                  border={`1px solid ${colors.accent}40`}
                  backdropFilter="blur(20px)"
                  boxShadow={`0 15px 35px rgba(0,0,0,0.4), 0 0 0 1px ${colors.accent}20`}
                  animate={{
                    y: [0, 10, 0],
                    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  zIndex={2}
                  w={{ base: '140px', md: '160px' }}
                >
                  <VStack align="start" spacing={1}>
                    <Flex align="center" gap={2}>
                      <MdSecurity color={colors.accent} size="18px" />
                      <Text color={colors.cream} fontSize="xs" fontWeight="medium" letterSpacing="wide">
                        SECURITY
                      </Text>
                    </Flex>
                    <Text color={colors.accent} fontSize="sm" fontWeight="bold" fontFamily="monospace">
                      Enterprise Grade
                    </Text>
                    <Text color={`${colors.cream}AA`} fontSize="2xs">
                      Auth, encryption, best practices
                    </Text>
                  </VStack>
                </MotionBox>
              </Box>

              {/* Signature with Tech Twist */}
              <MotionBox
                mt={8}
                textAlign="center"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <Code
                  fontSize={{ base: 'lg', md: 'xl' }}
                  bg={`linear-gradient(90deg, ${colors.primary}40, ${colors.accent}40)`}
                  color={colors.secondary}
                  px={6}
                  py={3}
                  borderRadius="lg"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  Ajay_Saini()
                </Code>
                <Text
                  fontSize="sm"
                  color={`${colors.cream}CC`}
                  letterSpacing="wide"
                  mt={2}
                  fontFamily="monospace"
                >
                  // Software Engineer
                </Text>
              </MotionBox>
            </MotionBox>
          </GridItem>
        </MotionGrid>

        {/* Bottom Tech Stack */}
        <MotionBox
          mt={{ base: 8, md: 16 }}
          variants={item}
        >
          <VStack spacing={4} align="center">
            <Flex align="center" gap={2}>
              <FaNetworkWired color={colors.secondary} />
              <Text fontSize="sm" color={`${colors.secondary}CC`} letterSpacing="wide" fontWeight="500">
                INFRASTRUCTURE & TOOLS
              </Text>
            </Flex>
            <Flex 
              gap={3} 
              wrap="wrap" 
              justify="center"
              maxW="800px"
              mx="auto"
            >
              {[
                { name: 'Docker', icon: SiDocker, color: colors.secondary },
                { name: 'Kubernetes', icon: SiKubernetes, color: colors.accent },
                { name: 'AWS', icon: FaAws, color: colors.warning },
                { name: 'Terraform', icon: SiTerraform, color: colors.code },
                { name: 'Redis', icon: SiRedis, color: colors.error },
                { name: 'Git', icon: SiGit, color: colors.terminal },
                { name: 'REST APIs', icon: TbApi, color: colors.cream },
                { name: 'VS Code', icon: TbBrandVscode, color: colors.accent },
              ].map((tool) => (
                <Badge
                  key={tool.name}
                  px={4}
                  py={2}
                  bg={`linear-gradient(135deg, ${colors.primary}40, ${colors.charcoal}40)`}
                  color={tool.color}
                  fontSize="sm"
                  fontWeight="500"
                  borderRadius="lg"
                  border={`1px solid ${tool.color}30`}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  _hover={{
                    borderColor: tool.color,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 25px ${tool.color}30`,
                  }}
                  transition="all 0.3s ease"
                >
                  <tool.icon size="16px" />
                  {tool.name}
                </Badge>
              ))}
            </Flex>
          </VStack>
        </MotionBox>
      </Container>
    </MotionBox>
  );
};

export default About;