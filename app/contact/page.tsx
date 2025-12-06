'use client';

import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Container,
  Flex,
  Badge,
  IconButton,
  useBreakpointValue,
  SimpleGrid,
  Grid,
  GridItem,
  TextProps,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import {
  FaPaperPlane,
  FaTerminal,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaRobot,
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPython } from 'react-icons/si';
import { MdEmail, MdMessage, MdPerson, MdSend } from 'react-icons/md';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionGrid = motion(Grid);
const MotionButton = motion(Button);

const Contact = () => {
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
    error: '#FF5F56',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: 'Message Sent!',
        description: 'Thanks for reaching out. I\'ll get back to you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const TerminalText = (props: TextProps) => (
    <Text
      fontFamily="'SF Mono', monospace"
      fontSize={{ base: 'xs', md: 'sm' }}
      color={colors.terminal}
      {...props}
    />
  );

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'EMAIL',
      value: 'ajaysaini.work@gmail.com',
      color: colors.secondary,
      link: 'mailto:ajaysaini.work@gmail.com',
    },
    {
      icon: FaPhone,
      title: 'PHONE',
      value: 'Available on request',
      color: colors.accent,
    },
    {
      icon: FaMapMarkerAlt,
      title: 'LOCATION',
      value: 'Mumbai, India',
      color: colors.code,
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ajaysaini-work', label: 'GitHub', color: colors.cream },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/ajaykumar-saini-914534245', label: 'LinkedIn', color: colors.secondary },
    { icon: FaTwitter, href: 'https://twitter.com/ajaysaini_work', label: 'Twitter', color: colors.accent },
  ];

  return (
    <MotionBox
      id="contact"
      py={{ base: 12, md: 20, lg: 28 }}
      bg={`linear-gradient(135deg, ${colors.charcoal} 0%, #1E293B 100%)`}
      minH="100vh"
      display="flex"
      alignItems="center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      position="relative"
      overflow="hidden"
    >
      {/* Animated Background Elements */}
      <MotionBox
        position="absolute"
        top="10%"
        right="10%"
        w="40vmin"
        h="40vmin"
        borderRadius="50%"
        bg={`radial-gradient(circle, ${colors.secondary}10 0%, transparent 70%)`}
        filter="blur(40px)"
        pointerEvents="none"
        {...floatAnimation}
      />
      
      <MotionBox
        position="absolute"
        bottom="20%"
        left="5%"
        w="30vmin"
        h="30vmin"
        borderRadius="50%"
        bg={`radial-gradient(circle, ${colors.accent}10 0%, transparent 70%)`}
        filter="blur(30px)"
        pointerEvents="none"
        animate={{
          y: [0, 15, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />

      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <MotionVStack spacing={{ base: 8, md: 12 }} variants={container}>
          {/* Header Section */}
          <MotionVStack spacing={4} textAlign="center" variants={item}>
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
              display="flex"
              alignItems="center"
              gap={2}
            >
              <FaPaperPlane size="14px" />
              GET IN TOUCH
            </Badge>
            
            <Heading
              as="h2"
              fontSize={{ base: '2.5rem', md: '3.5rem', lg: '4rem' }}
              color={colors.cream}
              fontWeight="700"
              fontFamily="'SF Mono', monospace"
              letterSpacing="-0.5px"
              lineHeight="1.1"
            >
              &lt;Contact_Me/&gt;
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={`${colors.cream}CC`}
              maxW="2xl"
              textAlign="center"
              lineHeight="1.6"
            >
              Let&apos;s build something amazing together. Whether it&apos;s a project, 
              collaboration, or just tech talk—I&apos;d love to connect.
            </Text>
          </MotionVStack>

          {/* Main Content Grid */}
          <MotionGrid
            templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
            gap={{ base: 8, lg: 12 }}
            w="full"
            variants={container}
          >
            {/* Left Column: Contact Form */}
            <GridItem>
              <MotionBox
                variants={item}
                p={{ base: 6, md: 8 }}
                bg={`linear-gradient(145deg, ${colors.charcoal}EE, ${colors.primary}EE)`}
                borderRadius="2xl"
                border={`1px solid ${colors.secondary}30`}
                boxShadow={`
                  0 20px 60px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `}
              >
                {/* Form Terminal Header */}
                <Flex
                  align="center"
                  justify="space-between"
                  mb={6}
                  p={3}
                  bg={`linear-gradient(90deg, ${colors.charcoal}, ${colors.primary}30)`}
                  borderRadius="lg"
                  border={`1px solid ${colors.secondary}20`}
                >
                  <HStack spacing={3}>
                    <Box w="10px" h="10px" bg={colors.error} borderRadius="full" />
                    <Box w="10px" h="10px" bg={colors.warning} borderRadius="full" />
                    <Box w="10px" h="10px" bg={colors.terminal} borderRadius="full" />
                    <TerminalText>contact_form.js</TerminalText>
                  </HStack>
                  <FaTerminal color={colors.secondary} size="16px" />
                </Flex>

                <form onSubmit={handleSubmit}>
                  <VStack spacing={6}>
                    {/* Name Field */}
                    <Box w="full">
                      <Flex align="center" gap={2} mb={2}>
                        <MdPerson color={colors.secondary} size="18px" />
                        <TerminalText>NAME</TerminalText>
                      </Flex>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                        color={colors.cream}
                        border={`1px solid ${colors.secondary}30`}
                        borderRadius="lg"
                        p={4}
                        _hover={{
                          borderColor: colors.secondary,
                        }}
                        _focus={{
                          borderColor: colors.secondary,
                          boxShadow: `0 0 0 1px ${colors.secondary}40`,
                        }}
                        _placeholder={{
                          color: `${colors.cream}50`,
                          fontFamily: 'monospace',
                        }}
                        fontFamily="monospace"
                      />
                    </Box>

                    {/* Email Field */}
                    <Box w="full">
                      <Flex align="center" gap={2} mb={2}>
                        <MdEmail color={colors.secondary} size="18px" />
                        <TerminalText>EMAIL</TerminalText>
                      </Flex>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                        color={colors.cream}
                        border={`1px solid ${colors.secondary}30`}
                        borderRadius="lg"
                        p={4}
                        _hover={{
                          borderColor: colors.secondary,
                        }}
                        _focus={{
                          borderColor: colors.secondary,
                          boxShadow: `0 0 0 1px ${colors.secondary}40`,
                        }}
                        _placeholder={{
                          color: `${colors.cream}50`,
                          fontFamily: 'monospace',
                        }}
                        fontFamily="monospace"
                      />
                    </Box>

                    {/* Message Field */}
                    <Box w="full">
                      <Flex align="center" gap={2} mb={2}>
                        <MdMessage color={colors.secondary} size="18px" />
                        <TerminalText>MESSAGE</TerminalText>
                      </Flex>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        required
                        rows={6}
                        bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                        color={colors.cream}
                        border={`1px solid ${colors.secondary}30`}
                        borderRadius="lg"
                        p={4}
                        _hover={{
                          borderColor: colors.secondary,
                        }}
                        _focus={{
                          borderColor: colors.secondary,
                          boxShadow: `0 0 0 1px ${colors.secondary}40`,
                        }}
                        _placeholder={{
                          color: `${colors.cream}50`,
                          fontFamily: 'monospace',
                        }}
                        fontFamily="monospace"
                        resize="vertical"
                      />
                    </Box>

                    {/* Submit Button */}
                    <MotionButton
                      type="submit"
                      w="full"
                      size="lg"
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      bg={`linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`}
                      color={colors.charcoal}
                      fontWeight="bold"
                      borderRadius="lg"
                      py={6}
                      fontFamily="monospace"
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: `0 10px 30px ${colors.secondary}50`,
                      }}
                      _active={{
                        transform: 'translateY(0)',
                      }}
                      transition="all 0.3s ease"
                      leftIcon={<MdSend />}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      EXECUTE_SEND()
                    </MotionButton>
                  </VStack>
                </form>

                {/* Form Footer */}
                <Flex
                  mt={6}
                  pt={4}
                  borderTop={`1px solid ${colors.secondary}20`}
                  justify="space-between"
                  align="center"
                >
                  <TerminalText fontSize="2xs">
                    Form validation: {formData.name && formData.email && formData.message ? '✓ Ready' : '✗ Incomplete'}
                  </TerminalText>
                  <TerminalText fontSize="2xs">
                    Status: {isSubmitting ? 'Processing...' : 'Idle'}
                  </TerminalText>
                </Flex>
              </MotionBox>
            </GridItem>

            {/* Right Column: Contact Info & Social */}
            <GridItem>
              <VStack spacing={{ base: 6, md: 8 }} h="full">
                {/* Contact Info Cards */}
                <MotionBox variants={item} w="full">
                  <VStack spacing={4} align="start" w="full">
                    <Flex align="center" gap={2}>
                      <FaRobot color={colors.secondary} size="20px" />
                      <TerminalText fontSize="md">CONTACT_INFO</TerminalText>
                    </Flex>
                    
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                      {contactInfo.map((info) => (
                        <Box
                          key={info.title}
                          p={4}
                          bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                          borderRadius="lg"
                          border={`1px solid ${info.color}30`}
                          _hover={{
                            borderColor: info.color,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 25px ${info.color}30`,
                          }}
                          transition="all 0.3s ease"
                        >
                          <Flex align="center" gap={3} mb={2}>
                            <Box
                              p={2}
                              bg={`linear-gradient(135deg, ${info.color}20, ${colors.charcoal}20)`}
                              borderRadius="md"
                            >
                              <info.icon color={info.color} size="16px" />
                            </Box>
                            <Text
                              fontSize="xs"
                              color={`${colors.cream}CC`}
                              fontWeight="500"
                              letterSpacing="wide"
                              fontFamily="monospace"
                            >
                              {info.title}
                            </Text>
                          </Flex>
                          {info.link ? (
                            <a href={info.link}>
                              <Text
                                color={info.color}
                                fontSize="sm"
                                fontWeight="bold"
                                fontFamily="monospace"
                                _hover={{
                                  textDecoration: 'underline',
                                  textDecorationColor: info.color,
                                }}
                              >
                                {info.value}
                              </Text>
                            </a>
                          ) : (
                            <Text
                              color={info.color}
                              fontSize="sm"
                              fontWeight="bold"
                              fontFamily="monospace"
                            >
                              {info.value}
                            </Text>
                          )}
                        </Box>
                      ))}
                    </SimpleGrid>
                  </VStack>
                </MotionBox>

                {/* Social Links */}
                <MotionBox variants={item} w="full">
                  <VStack spacing={4} align="start" w="full">
                    <Flex align="center" gap={2}>
                      <FaCode color={colors.secondary} size="20px" />
                      <TerminalText fontSize="md">CONNECT_WITH_ME</TerminalText>
                    </Flex>
                    
                    <HStack spacing={3} w="full" justify={{ base: 'center', md: 'flex-start' }}>
                      {socialLinks.map((social) => (
                        <IconButton
                          key={social.label}
                          as="a"
                          href={social.href}
                          target="_blank"
                          aria-label={social.label}
                          icon={<social.icon size="22px" />}
                          size="lg"
                          bg={`linear-gradient(135deg, ${colors.primary}40, ${colors.charcoal}40)`}
                          color={social.color}
                          border={`1px solid ${social.color}30`}
                          borderRadius="xl"
                          _hover={{
                            bg: `${social.color}20`,
                            borderColor: social.color,
                            transform: 'translateY(-3px) rotate(5deg)',
                            boxShadow: `0 10px 30px ${social.color}40`,
                          }}
                          transition="all 0.3s ease"
                        />
                      ))}
                    </HStack>
                  </VStack>
                </MotionBox>

                {/* Tech Stack */}
                <MotionBox variants={item} w="full">
                  <VStack spacing={4} align="start" w="full">
                    <Flex align="center" gap={2}>
                      <SiNextdotjs color={colors.secondary} size="20px" />
                      <TerminalText fontSize="md">PREFERRED_TECH</TerminalText>
                    </Flex>
                    
                    <Flex gap={2} wrap="wrap">
                      {[
                        { tech: 'Next.js', icon: SiNextdotjs, color: colors.cream },
                        { tech: 'TypeScript', icon: SiTypescript, color: colors.accent },
                        { tech: 'Python', icon: SiPython, color: colors.code },
                        { tech: 'Django', color: colors.terminal },
                        { tech: 'PostgreSQL', color: colors.secondary },
                        { tech: 'AWS', color: colors.warning },
                      ].map((item) => (
                        <Badge
                          key={item.tech}
                          px={4}
                          py={2}
                          display="flex"
                          alignItems="center"
                          gap={2}
                          bg={`linear-gradient(135deg, ${colors.primary}40, ${colors.charcoal}40)`}
                          color={item.color}
                          fontSize="sm"
                          fontWeight="500"
                          borderRadius="lg"
                          border={`1px solid ${item.color}30`}
                          fontFamily="monospace"
                          _hover={{
                            borderColor: item.color,
                            transform: 'translateY(-2px)',
                          }}
                          transition="all 0.3s ease"
                        >
                          {item.icon && <item.icon size="14px" />}
                          {item.tech}
                        </Badge>
                      ))}
                    </Flex>
                  </VStack>
                </MotionBox>

                {/* Availability Status */}
                <MotionBox
                  variants={item}
                  w="full"
                  p={4}
                  bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                  borderRadius="lg"
                  border={`1px solid ${colors.secondary}30`}
                >
                  <Flex align="center" gap={3}>
                    <Box
                      w="10px"
                      h="10px"
                      bg={colors.terminal}
                      borderRadius="full"
                      boxShadow={`0 0 10px ${colors.terminal}`}
                    />
                    <VStack align="start" spacing={0}>
                      <Text
                        fontSize="xs"
                        color={`${colors.cream}CC`}
                        fontFamily="monospace"
                      >
                        CURRENTLY AVAILABLE FOR
                      </Text>
                      <Text
                        color={colors.secondary}
                        fontSize="md"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        Projects & Collaborations
                      </Text>
                    </VStack>
                  </Flex>
                  <Text
                    fontSize="xs"
                    color={`${colors.cream}AA`}
                    mt={2}
                    fontFamily="monospace"
                  >
                    // Response time: Usually within 24 hours
                  </Text>
                </MotionBox>
              </VStack>
            </GridItem>
          </MotionGrid>
        </MotionVStack>
      </Container>
    </MotionBox>
  );
};

export default Contact;