'use client';

import {
  Box,
  VStack,
  Avatar,
  Heading,
  Text,
  Flex,
  Link,
  HStack,
  Badge,
  IconButton,
  useBreakpointValue,
  Container,
  Code,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaTerminal,
  FaRobot,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMedal
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiDjango,
  SiDocker,
  SiAew,
  SiPostgresql
} from 'react-icons/si';
import { MdVerified, MdSpeed } from 'react-icons/md';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

const Profile = () => {
  // Tech Color Palette
  const colors = {
    primary: '#0A3D62',
    secondary: '#00D4AA',
    accent: '#7B61FF',
    cream: '#E8F7FF',
    charcoal: '#0F172A',
    terminal: '#39FF14',
    code: '#FF6B9D',
    warning: '#FFBD2E',
  };

  // Responsive values
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
  const avatarSize = useBreakpointValue({ base: '160px', sm: '180px', md: '200px', lg: '220px' });
  const iconSize = useBreakpointValue({ base: '14px', sm: '16px', md: '18px' });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Simplified tech icons for orbit
  const techIcons = [
    { icon: SiNextdotjs, color: colors.cream, delay: 0 },
    { icon: SiPython, color: colors.code, delay: 0.2 },
    { icon: SiTypescript, color: colors.accent, delay: 0.4 },
    { icon: SiDjango, color: colors.terminal, delay: 0.6 },
    { icon: SiDocker, color: colors.secondary, delay: 0.8 },
    { icon: SiAew, color: colors.warning, delay: 1.0 },
  ];

  // Core tech stack
  const coreStack = [
    'Next.js',
    'React.js',
    'TypeScript',
    'Python',
    'Django',
    'PostgreSQL',
    'Docker',
    'AWS',
    'GraphQL',
    'Redis',
    'CI/CD'
  ];

  // Social links
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/ajaykumar-saini-914534245', color: colors.secondary },
    { icon: FaGithub, href: 'https://github.com/ajaysaini-work', color: colors.cream },
    { icon: FaTwitter, href: 'https://twitter.com/ajaysaini_work', color: colors.accent },
  ];

  return (
    <Container maxW="6xl" px={{ base: 4, sm: 6, md: 8 }} py={{ base: 8, md: 12 }}>
      <MotionFlex
        minH={{ base: 'auto', md: '80vh' }}
        align="center"
        justify="center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <MotionBox
          w="full"
          bg={`linear-gradient(145deg, ${colors.charcoal}EE, ${colors.primary}EE)`}
          borderRadius={{ base: 'lg', md: 'xl' }}
          p={{ base: 4, md: 6 }}
          boxShadow={`
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 0 1px ${colors.secondary}15
          `}
          border={`1px solid ${colors.secondary}20`}
          variants={item}
          position="relative"
        >
          {/* Terminal Header - Cleaner */}
          <MotionFlex
            align="center"
            justify="space-between"
            mb={6}
            p={3}
            bg={`linear-gradient(90deg, ${colors.charcoal}, ${colors.primary}25)`}
            borderRadius="md"
            border={`1px solid ${colors.secondary}15`}
            variants={item}
          >
            <HStack spacing={2}>
              <Box w="8px" h="8px" bg={colors.code} borderRadius="full" />
              <Box w="8px" h="8px" bg={colors.warning} borderRadius="full" />
              <Box w="8px" h="8px" bg={colors.terminal} borderRadius="full" />
              <Text
                fontSize="sm"
                color={colors.cream}
                fontFamily="monospace"
                flex={1}
                minW={0}
              >
                ~/profile.js
              </Text>
            </HStack>
            <Badge
              fontSize="2xs"
              bg={colors.secondary + '20'}
              color={colors.secondary}
              px={2}
              py={1}
              borderRadius="md"
            >
              <FaTerminal size="12px" style={{ marginRight: '4px', display: 'inline' }} />
              ACTIVE
            </Badge>
          </MotionFlex>

          {/* Main Content - Simplified Layout */}
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 6, md: 8 }}
            alignItems="center"
          >

            {/* Animated Avatar */}
            <MotionBox variants={item} position="relative">
              <Box position="relative" w={avatarSize} h={avatarSize} mx="auto">
                {/* Tech Orbit - Only desktop */}
                {!isMobile && (
                  <MotionBox
                    position="absolute"
                    inset="-10px"
                    borderRadius="50%"
                    border={`1px dashed ${colors.secondary}20`}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {techIcons.map((tech, idx) => (
                      <MotionBox
                        key={idx}
                        position="absolute"
                        top={`${50 + 50 * Math.sin(idx * Math.PI / 3)}%`}
                        left={`${50 + 50 * Math.cos(idx * Math.PI / 3)}%`}
                        transform="translate(-50%, -50%)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: tech.delay }}
                      >
                        <Box
                          p={2}
                          bg={`linear-gradient(135deg, ${colors.charcoal}, ${colors.primary})`}
                          borderRadius="md"
                          border={`1px solid ${tech.color}30`}
                        >
                          <tech.icon size={isMobile ? "16px" : "18px"} color={tech.color} />
                        </Box>
                      </MotionBox>
                    ))}
                  </MotionBox>
                )}

                {/* Avatar */}
                <Box
                  position="relative"
                  w="full"
                  h="full"
                  borderRadius="full"
                  p="1px"
                  bg={`linear-gradient(45deg, ${colors.secondary}, ${colors.accent})`}
                  boxShadow={`0 8px 32px ${colors.secondary}20`}
                >
                  <Avatar
                    size="full"
                    src="/me.png"
                    border="3px solid"
                    borderColor={colors.charcoal}
                    borderRadius="full"
                    filter="grayscale(10%) contrast(110%)"
                  />
                </Box>

                {/* Floating Achievement Card 1 - Right Top */}
                <MotionBox
                  position="absolute"
                  top="20%"
                  left={{ base: '15px', md: '25px', lg: '35px' }}
                  rounded="lg"
                  px={{ base: 3, md: 4 }}
                  py={2}
                  bg={`linear-gradient(135deg, ${colors.primary}EE, ${colors.charcoal}EE)`}
                  borderWidth="1px"
                  borderColor={`${colors.secondary}40`}
                  backdropFilter="blur(12px)"
                  boxShadow={`0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px ${colors.secondary}15`}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 3, 0],
                    transition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  zIndex={2}
                  w={{ base: '130px', md: '150px' }}
                  display={{ base: 'none', sm: 'block' }} // Hide on mobile
                >
                  <HStack spacing={2}>
                    <FaMedal color={colors.secondary} size={isMobile ? "14px" : "16px"} />
                    <VStack align="flex-start" spacing={0}>
                      <Text
                        color={colors.cream}
                        fontSize={{ base: '2xs', md: 'xs' }}
                        fontWeight="medium"
                        letterSpacing="wide"
                        fontFamily="monospace"
                      >
                        ARCHITECTURE
                      </Text>
                      <Text
                        color={colors.secondary}
                        fontSize={{ base: 'xs', md: 'sm' }}
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        Enterprise Scale
                      </Text>
                    </VStack>
                  </HStack>
                </MotionBox>

                {/* Floating Achievement Card 2 - Right Bottom */}
                <MotionBox
                  position="absolute"
                  bottom="30%"
                  right={{ base: '-35px', md: '-45px', lg: '-55px' }}
                  rounded="lg"
                  px={{ base: 3, md: 4 }}
                  py={2}
                  bg={`linear-gradient(135deg, ${colors.accent}EE, ${colors.charcoal}EE)`}
                  borderWidth="1px"
                  borderColor={`${colors.accent}40`}
                  backdropFilter="blur(12px)"
                  boxShadow={`0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px ${colors.accent}15`}
                  animate={{
                    y: [0, 8, 0],
                    x: [0, -2, 0],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  zIndex={2}
                  w={{ base: '120px', md: '140px' }}
                  display={{ base: 'none', sm: 'block' }} // Hide on mobile
                >
                  <HStack spacing={2}>
                    <FaCode color={colors.accent} size={isMobile ? "14px" : "16px"} />
                    <VStack align="flex-start" spacing={0}>
                      <Text
                        color={colors.cream}
                        fontSize={{ base: '2xs', md: 'xs' }}
                        fontWeight="medium"
                        letterSpacing="wide"
                        fontFamily="monospace"
                      >
                        CRAFTSMANSHIP
                      </Text>
                      <Text
                        color={colors.accent}
                        fontSize={{ base: 'xs', md: 'sm' }}
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        Clean Code
                      </Text>
                    </VStack>
                  </HStack>
                </MotionBox>

                {/* Status Badge */}
                <MotionBox
                  position="absolute"
                  bottom={2}
                  right={2}
                  p={2}
                  bg={`linear-gradient(135deg, ${colors.primary}, ${colors.accent})`}
                  borderRadius="full"
                  boxShadow={`0 4px 12px ${colors.secondary}40`}
                  variants={floatAnimation}
                  animate="animate"
                >
                  <MdSpeed size={iconSize} color={colors.cream} />
                </MotionBox>

              </Box>
            </MotionBox>

            {/* Right Column - Info */}
            <MotionVStack spacing={5} align="start" variants={container}>
              {/* Name & Title */}
              <VStack spacing={2} align="start" w="full">
                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                  color={colors.cream}
                  fontWeight="700"
                  fontFamily="'SF Mono', monospace"
                  lineHeight="1.1"
                >
                  Ajay_Saini()
                </Heading>

                <Flex align="center" gap={2} flexWrap="wrap">
                  <Badge
                    fontSize="sm"
                    bg={`linear-gradient(90deg, ${colors.primary}30, ${colors.accent}30)`}
                    color={colors.secondary}
                    px={3}
                    py={1}
                    borderRadius="md"
                    fontWeight="500"
                    border={`1px solid ${colors.secondary}20`}
                  >
                    Software Engineer
                  </Badge>
                  <Box
                    p={1}
                    bg={`linear-gradient(135deg, ${colors.secondary}20, ${colors.accent}20)`}
                    borderRadius="md"
                  >
                    <MdVerified size="18px" color={colors.secondary} />
                  </Box>
                </Flex>

                <Code
                  fontSize={{ base: 'sm', md: 'md' }}
                  bg={`linear-gradient(90deg, ${colors.primary}20, ${colors.accent}20)`}
                  color={colors.secondary}
                  px={4}
                  py={2}
                  borderRadius="md"
                  fontWeight="500"
                  border={`1px solid ${colors.secondary}20`}
                  w="full"
                  textAlign="center"
                >
                  Frontend • Full Stack • Cloud Architecture
                </Code>
              </VStack>

              {/* Contact Info */}
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
                <MotionBox variants={item}>
                  <Flex align="center" gap={3}>
                    <Box
                      p={2}
                      bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                      borderRadius="md"
                      border={`1px solid ${colors.secondary}20`}
                    >
                      <FaMapMarkerAlt color={colors.secondary} size={iconSize} />
                    </Box>
                    <VStack align="start" spacing={0}>
                      <Text color={colors.cream} fontSize="xs" fontWeight="medium">
                        LOCATION
                      </Text>
                      <Text color={colors.secondary} fontSize="sm" fontWeight="bold">
                        Mumbai, India
                      </Text>
                    </VStack>
                  </Flex>
                </MotionBox>

                <MotionBox variants={item}>
                  <Flex align="center" gap={3}>
                    <Box
                      p={2}
                      bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                      borderRadius="md"
                      border={`1px solid ${colors.accent}20`}
                    >
                      <FaEnvelope color={colors.accent} size={iconSize} />
                    </Box>
                    <VStack align="start" spacing={0}>
                      <Text color={colors.cream} fontSize="xs" fontWeight="medium">
                        EMAIL
                      </Text>
                      <Link
                        href="mailto:ajaysaini.work@gmail.com"
                        fontSize="sm"
                        color={colors.secondary}
                        fontWeight="bold"
                        _hover={{
                          color: colors.accent,
                          textDecoration: 'underline',
                        }}
                        isTruncated
                      >
                        ajaysaini.work@gmail.com
                      </Link>
                    </VStack>
                  </Flex>
                </MotionBox>
              </SimpleGrid>

              {/* Current Role */}
              <MotionBox variants={item} w="full">
                <Flex
                  p={4}
                  bg={`linear-gradient(135deg, ${colors.primary}15, ${colors.charcoal}20)`}
                  borderRadius="lg"
                  borderLeft={`3px solid ${colors.secondary}`}
                  align="start"
                  gap={3}
                >
                  <FaRobot color={colors.secondary} size={iconSize} />
                  <VStack align="start" spacing={1} flex={1}>
                    <Text color={colors.cream} fontSize="xs" fontWeight="medium">
                      CURRENT ROLE
                    </Text>
                    <Text color={colors.secondary} fontSize="md" fontWeight="bold">
                      Frontend Developer @ Sapat International
                    </Text>
                    <Text fontSize="xs" color={`${colors.cream}AA`} fontFamily="monospace">
                      // Building scalable AI infrastructure
                    </Text>
                  </VStack>
                </Flex>
              </MotionBox>

              {/* Tech Stack - Desktop */}
              {!isMobile && (
                <MotionBox variants={item} w="full">
                  <Text fontSize="sm" color={`${colors.secondary}CC`} mb={2} fontWeight="500">
                    TECH STACK
                  </Text>
                  <Flex gap={2} wrap="wrap">
                    {coreStack.map((tech) => (
                      <Badge
                        key={tech}
                        px={3}
                        py={1.5}
                        bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                        color={colors.cream}
                        fontSize="xs"
                        fontWeight="500"
                        fontFamily="monospace"
                        borderRadius="md"
                        border={`1px solid ${colors.secondary}15`}
                        _hover={{
                          borderColor: colors.secondary,
                          transform: 'translateY(-1px)',
                        }}
                        transition="all 0.2s ease"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </MotionBox>
              )}

              {/* Social Links */}
              <MotionBox variants={item} w="full">
                <Flex
                  justify="space-between"
                  align="center"
                  flexDir={{ base: 'column', sm: 'row' }}
                  gap={4}
                >
                  <VStack align={{ base: 'center', sm: 'start' }} spacing={3}>
                    <Text fontSize="sm" color={`${colors.secondary}CC`} fontWeight="500">
                      CONNECT
                    </Text>
                    <HStack spacing={3}>
                      {socialLinks.map((social) => (
                        <IconButton
                          key={social.href}
                          aria-label={social.href}
                          icon={<social.icon size="20px" />}
                          as={Link}
                          href={social.href}
                          isExternal
                          size="md"
                          bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                          color={social.color}
                          border={`1px solid ${social.color}20`}
                          borderRadius="lg"
                          _hover={{
                            bg: `${social.color}15`,
                            borderColor: social.color,
                            transform: 'translateY(-2px)',
                          }}
                          transition="all 0.3s ease"
                        />
                      ))}
                    </HStack>
                  </VStack>

                  <Link
                    href="/resume"
                    bg={`linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`}
                    color={colors.charcoal}
                    px={5}
                    py={2.5}
                    borderRadius="lg"
                    fontWeight="bold"
                    fontFamily="monospace"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: `0 6px 20px ${colors.secondary}40`,
                      textDecoration: 'none',
                    }}
                    transition="all 0.3s ease"
                    fontSize="sm"
                  >
                    VIEW RESUME
                  </Link>
                </Flex>
              </MotionBox>
            </MotionVStack>
          </SimpleGrid>

          {/* Status Footer */}
          <MotionBox
            variants={item}
            mt={6}
            pt={4}
            borderTop={`1px solid ${colors.secondary}15`}
          >
            <Flex align="center" gap={3} color={colors.secondary} fontFamily="monospace" fontSize="sm">
              <FaTerminal />
              <Text flex={1}>$ status --engineer</Text>
              <HStack spacing={4}>
                <Text color={colors.terminal}>● Active</Text>
                <Text color={colors.accent}>● Open</Text>
                <Text color={colors.code}>● AI/ML</Text>
              </HStack>
            </Flex>
          </MotionBox>
        </MotionBox>
      </MotionFlex>
    </Container>
  );
};

export default Profile;