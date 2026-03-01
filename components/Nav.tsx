'use client';

import { 
  Box, 
  Flex, 
  Text, 
  IconButton, 
  Tooltip, 
  useBreakpointValue,
  HStack,
  Badge,
  Portal,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  VStack,
  Circle
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaShareAlt,
  FaCode,
  FaTerminal,
  FaRobot,
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaCog,
  FaDotCircle
} from 'react-icons/fa';
import { 
  SiReact,
  SiNextdotjs, 
  SiPython, 
  SiTypescript,
  SiDjango,
  SiDocker,
} from 'react-icons/si';
import { FaAws } from "react-icons/fa";
import { MdSettings } from 'react-icons/md';
import { useState, useEffect } from 'react';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHStack = motion(HStack);

const Nav = () => {
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

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeApp, setActiveApp] = useState('home');
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 150,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.2 }
    }
  };

  const dockItemVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.15, 
      y: -8,
      transition: { 
        type: 'spring',
        stiffness: 500,
        damping: 15
      }
    },
    tap: { scale: 0.85 }
  };

  const indicatorVariants = {
    idle: { scale: 0, opacity: 0 },
    active: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 600,
        damping: 25
      }
    }
  };

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ajay Saini | Software Engineer',
        text: 'Check out my portfolio showcasing full-stack development and AI systems!',
        url: window.location.href,
      });
    } else {
      const shareLink = `${window.location.href}`;
      const shareText = 'Check out my portfolio showcasing full-stack development and AI systems!';
      const shareSubject = 'Ajay Saini | Software Engineer';
      const mailToLink = `mailto:?subject=${encodeURIComponent(shareSubject)}&body=${encodeURIComponent(shareText + ' ' + shareLink)}`;
      window.open(mailToLink, '_blank');
    }
  };

  // MacBook Dock Apps
  const dockApps = [
    { 
      id: 'home',
      icon: FaHome, 
      label: 'Home', 
      href: '#home',
      color: colors.secondary,
      badge: null
    },
    { 
      id: 'about',
      icon: FaUser, 
      label: 'About', 
      href: '#about',
      color: colors.accent,
      badge: null
    },
    { 
      id: 'projects',
      icon: FaProjectDiagram, 
      label: 'Projects', 
      href: '#projects',
      color: colors.code,
      badge: '5+'
    },
    { 
      id: 'tech',
      icon: FaCode, 
      label: 'Tech', 
      href: '#tech',
      color: colors.terminal,
      badge: '12+'
    },
  ];

  // Social/Utility Apps
  const utilityApps = [
    { 
      id: 'github',
      icon: FaGithub, 
      label: 'GitHub', 
      href: 'https://github.com/ajaysaini-work',
      color: colors.cream,
      badge: null
    },
    { 
      id: 'linkedin',
      icon: FaLinkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/ajaykumar-saini-914534245',
      color: colors.secondary,
      badge: null
    },
    { 
      id: 'twitter',
      icon: FaTwitter, 
      label: 'Twitter', 
      href: 'https://twitter.com/ajaysaini_work',
      color: colors.accent,
      badge: null
    },
    { 
      id: 'email',
      icon: FaEnvelope, 
      label: 'Email', 
      href: 'mailto:ajaysaini.work@gmail.com',
      color: colors.code,
      badge: null
    },
    { 
      id: 'share',
      icon: FaShareAlt, 
      label: 'Share', 
      onClick: handleShare,
      color: colors.terminal,
      badge: null
    },
  ];

  // Tech Stack Apps (for desktop)
  const techApps = [
    { icon: SiNextdotjs, label: 'Next.js', color: colors.cream },
    { icon: SiTypescript, label: 'TS', color: colors.accent },
    { icon: SiPython, label: 'Python', color: colors.code },
    { icon: SiDjango, label: 'Django', color: colors.terminal },
    { icon: SiDocker, label: 'Docker', color: colors.secondary },
    { icon: FaAws, label: 'AWS', color: colors.warning },
  ];

  // Handle app click
  const handleAppClick = (appId: string, href?: string, onClick?: () => void) => {
    setActiveApp(appId);
    
    if (onClick) {
      onClick();
    } else if (href) {
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.open(href, '_blank');
      }
    }
  };

  // Render Dock Item
  const DockItem = ({ app, isActive }: { app: any, isActive: boolean }) => (
    <MotionBox
      variants={dockItemVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      position="relative"
    >
      <Tooltip
        label={app.label}
        placement="top"
        bg={`linear-gradient(135deg, ${colors.primary}, ${colors.charcoal})`}
        color={colors.cream}
        fontSize="2xs"
        px={2}
        py={1}
        borderRadius="md"
        border={`1px solid ${colors.secondary}20`}
        hasArrow
      >
        <VStack spacing={0.5}>
          <Box position="relative">
            <IconButton
              aria-label={app.label}
              icon={<app.icon size={isMobile ? "16px" : "18px"} />}
              size={isMobile ? "sm" : "md"}
              bg={`linear-gradient(135deg, ${colors.primary}40, ${colors.charcoal}40)`}
              color={app.color}
              border={`1.5px solid ${isActive ? app.color : `${app.color}20`}`}
              borderRadius="xl"
              _hover={{
                bg: `${app.color}20`,
                borderColor: app.color,
                boxShadow: `0 6px 20px ${app.color}30`
              }}
              transition="all 0.2s ease"
              onClick={() => handleAppClick(app.id, app.href, app.onClick)}
            />
            
            {/* Active Indicator */}
            {isActive && (
              <MotionBox
                position="absolute"
                bottom="-4px"
                left="50%"
                transform="translateX(-50%)"
                variants={indicatorVariants}
                initial="idle"
                animate="active"
              >
                <FaDotCircle size="8px" color={app.color} />
              </MotionBox>
            )}
          </Box>
          
          {/* Badge */}
          {app.badge && (
            <Badge
              fontSize="3xs"
              px={1}
              py={0.5}
              bg={`linear-gradient(135deg, ${app.color}40, ${colors.charcoal}40)`}
              color={app.color}
              borderRadius="full"
              position="absolute"
              top="-2px"
              right="-2px"
              border={`1px solid ${app.color}20`}
              fontWeight="bold"
            >
              {app.badge}
            </Badge>
          )}
        </VStack>
      </Tooltip>
    </MotionBox>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          as="nav"
          position="fixed"
          bottom={0}
          left={0}
          right={0}
          zIndex={1000}
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* MacBook Style Bottom Dock - Thinner */}
          {!isMobile && (
            <MotionFlex
              justify="center"
              align="flex-end"
              pb={3} // Reduced from 4
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Dock Container - Thinner */}
              <MotionFlex
                px={5} // Reduced from 6
                py={3} // Reduced from 4
                bg={`linear-gradient(135deg, rgba(15, 23, 42, 0.97), rgba(10, 61, 98, 0.97))`}
                backdropFilter="blur(15px)" // Reduced from 20px
                borderRadius="xl" // Reduced from 2xl
                border={`1px solid ${colors.secondary}15`} // Reduced opacity
                boxShadow={`
                  0 8px 30px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.08),
                  0 0 0 0.5px ${colors.secondary}08
                `} // Reduced shadows
                align="center"
                gap={4} // Reduced from 6
                position="relative"
              >
                {/* Left Separator - Thinner */}
                <Box
                  w="0.5px"
                  h="24px" // Reduced from 30px
                  bg={`linear-gradient(to bottom, transparent, ${colors.secondary}30, transparent)`}
                />

                {/* Navigation Apps - Tighter spacing */}
                <MotionHStack spacing={3}> {/* Reduced from 4 */}
                  {dockApps.map((app) => (
                    <DockItem 
                      key={app.id} 
                      app={app} 
                      isActive={activeApp === app.id}
                    />
                  ))}
                </MotionHStack>

                {/* Center Separator with Terminal - Compact */}
                <VStack spacing={0.5}> {/* Reduced spacing */}
                  <Box
                    w="0.5px"
                    h="16px" // Reduced from 20px
                    bg={`linear-gradient(to bottom, transparent, ${colors.secondary}30, transparent)`}
                  />
                  <Flex
                    align="center"
                    gap={1.5} // Reduced from 2
                    px={2.5} // Reduced from 3
                    py={1} // Reduced from 1.5
                    bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                    borderRadius="md" // Reduced from lg
                    border={`1px solid ${colors.secondary}20`}
                  >
                    <FaTerminal size="12px" color={colors.secondary} /> {/* Smaller */}
                    <Text
                      fontSize="2xs" // Smaller
                      color={colors.cream}
                      fontWeight="500"
                      fontFamily="monospace"
                    >
                      Ajay_Saini
                    </Text>
                  </Flex>
                  <Box
                    w="0.5px"
                    h="16px" // Reduced from 20px
                    bg={`linear-gradient(to bottom, transparent, ${colors.secondary}30, transparent)`}
                  />
                </VStack>

                {/* Social Apps - Tighter spacing */}
                <MotionHStack spacing={3}> {/* Reduced from 4 */}
                  {utilityApps.map((app) => (
                    <DockItem 
                      key={app.id} 
                      app={app} 
                      isActive={activeApp === app.id}
                    />
                  ))}
                </MotionHStack>

                {/* Right Separator - Thinner */}
                <Box
                  w="0.5px"
                  h="24px" // Reduced from 30px
                  bg={`linear-gradient(to bottom, transparent, ${colors.secondary}30, transparent)`}
                />

                {/* Tech Stack Indicator - Compact */}
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Tech stack"
                    icon={<FaCog size="14px" />} // Smaller
                    size="xs" // Smaller
                    bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                    color={colors.secondary}
                    border={`1px solid ${colors.secondary}20`}
                    borderRadius="md" // Reduced from lg
                    _hover={{
                      bg: `${colors.secondary}15`,
                      borderColor: colors.secondary,
                      transform: 'rotate(30deg)', // Reduced rotation
                    }}
                    transition="all 0.2s ease"
                  />
                  <Portal>
                    <MenuList
                      bg={`linear-gradient(135deg, ${colors.charcoal}, ${colors.primary})`}
                      border={`1px solid ${colors.secondary}20`}
                      borderRadius="lg" // Reduced from xl
                      py={1.5} // Reduced from 2
                      minW="140px" // Reduced from 150px
                      boxShadow={`0 8px 30px rgba(0, 0, 0, 0.6)`} // Reduced
                    >
                      <Text
                        px={2.5} // Reduced
                        py={1.5} // Reduced
                        fontSize="3xs" // Smaller
                        color={`${colors.secondary}CC`}
                        fontFamily="monospace"
                        letterSpacing="wide"
                      >
                        TECH STACK
                      </Text>
                      {techApps.map((tech) => (
                        <MenuItem
                          key={tech.label}
                          fontSize="xs" // Smaller
                          color={colors.cream}
                          _hover={{
                            bg: `${colors.secondary}15`,
                          }}
                          fontFamily="monospace"
                          icon={<tech.icon size="12px" color={tech.color} />} // Smaller
                          closeOnSelect={false}
                          py={1.5} // Reduced
                        >
                          {tech.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Portal>
                </Menu>
              </MotionFlex>

              {/* Dock Reflection - Subtler */}
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                height="0.5px" // Thinner
                bg={`linear-gradient(90deg, transparent, ${colors.secondary}20, transparent)`}
              />
            </MotionFlex>
          )}

          {/* Mobile Bottom Dock - Thinner */}
          {isMobile && (
            <MotionFlex
              justify="center"
              align="center"
              pb={1} // Reduced from 2
              px={3} // Reduced from 4
            >
              {/* Mobile Dock Container - Thinner */}
              <MotionFlex
                px={3} // Reduced from 4
                py={2} // Reduced from 3
                bg={`linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(10, 61, 98, 0.98))`}
                backdropFilter="blur(15px)" // Reduced
                borderRadius="lg" // Reduced from xl
                border={`1px solid ${colors.secondary}15`}
                boxShadow={`
                  0 -3px 20px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.08)
                `} // Reduced
                align="center"
                justify="space-between"
                w="full"
                maxW="380px" // Slightly reduced
              >
                {/* Left: Main Apps */}
                <HStack spacing={2}> {/* Reduced from 3 */}
                  {dockApps.slice(0, 2).map((app) => (
                    <DockItem 
                      key={app.id} 
                      app={app} 
                      isActive={activeApp === app.id}
                    />
                  ))}
                </HStack>

                {/* Center: Terminal - Compact */}
                <VStack spacing={0}>
                  <MotionBox
                    whileHover={{ scale: 1.05 }} // Reduced
                    whileTap={{ scale: 0.85 }}
                  >
                    <Circle
                      size="44px" // Reduced from 50px
                      bg={`linear-gradient(135deg, ${colors.primary}, ${colors.accent})`}
                      border={`1.5px solid ${colors.secondary}`} // Thinner
                      boxShadow={`0 3px 15px ${colors.secondary}30`} // Reduced
                      onClick={() => handleAppClick('terminal', '#home')}
                    >
                      <FaTerminal size="18px" color={colors.cream} /> {/* Smaller */}
                    </Circle>
                  </MotionBox>
                  <Text
                    fontSize="3xs" // Smaller
                    color={`${colors.cream}CC`}
                    mt={0.5} // Reduced
                    fontFamily="monospace"
                  >
                    Ajay_Saini
                  </Text>
                </VStack>

                {/* Right: Social Apps */}
                <HStack spacing={2}> {/* Reduced from 3 */}
                  {utilityApps.slice(0, 2).map((app) => (
                    <DockItem 
                      key={app.id} 
                      app={app} 
                      isActive={activeApp === app.id}
                    />
                  ))}
                </HStack>

                {/* Menu for more options - Compact */}
                <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
                  <MenuButton
                    as={IconButton}
                    aria-label="More options"
                    icon={<MdSettings size="16px" />} // Smaller
                    size="xs" // Smaller
                    bg={`linear-gradient(135deg, ${colors.primary}30, ${colors.charcoal}30)`}
                    color={colors.secondary}
                    border={`1px solid ${colors.secondary}20`}
                    borderRadius="md" // Reduced
                    ml={1.5} // Reduced
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  />
                  <Portal>
                    <MenuList
                      bg={`linear-gradient(135deg, ${colors.charcoal}, ${colors.primary})`}
                      border={`1px solid ${colors.secondary}20`}
                      borderRadius="lg" // Reduced
                      py={1.5} // Reduced
                      minW="160px" // Reduced
                      boxShadow={`0 8px 30px rgba(0, 0, 0, 0.6)`} // Reduced
                    >
                      <Text
                        px={2.5} // Reduced
                        py={1.5} // Reduced
                        fontSize="3xs" // Smaller
                        color={`${colors.secondary}CC`}
                        fontFamily="monospace"
                        letterSpacing="wide"
                      >
                        QUICK MENU
                      </Text>
                      {dockApps.slice(2).map((app) => (
                        <MenuItem
                          key={app.id}
                          fontSize="xs" // Smaller
                          color={colors.cream}
                          _hover={{
                            bg: `${colors.secondary}15`,
                          }}
                          fontFamily="monospace"
                          icon={<app.icon size="12px" color={app.color} />} // Smaller
                          onClick={() => handleAppClick(app.id, app.href)}
                          py={1.5} // Reduced
                        >
                          {app.label}
                        </MenuItem>
                      ))}
                      <MenuDivider borderColor={`${colors.secondary}15`} />
                      {utilityApps.slice(2).map((app) => (
                        <MenuItem
                          key={app.id}
                          fontSize="xs" // Smaller
                          color={colors.cream}
                          _hover={{
                            bg: `${colors.secondary}15`,
                          }}
                          fontFamily="monospace"
                          icon={<app.icon size="12px" color={app.color} />} // Smaller
                          onClick={() => handleAppClick(app.id, app.href, app.onClick)}
                          py={1.5} // Reduced
                        >
                          {app.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Portal>
                </Menu>
              </MotionFlex>
            </MotionFlex>
          )}

          {/* Subtle Background Glow - Reduced */}
          <Box
            position="absolute"
            bottom={0}
            left="15%"
            right="15%"
            height="30px" // Reduced from 50px
            bg={`radial-gradient(ellipse at center, ${colors.secondary}08 0%, transparent 70%)`} // Reduced opacity
            filter="blur(15px)" // Reduced
            pointerEvents="none"
            zIndex={-1}
          />
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default Nav;