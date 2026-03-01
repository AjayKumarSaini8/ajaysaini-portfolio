'use client';

import { useEffect, useState } from 'react';
import { Box, Center, Spinner } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const SectionLoader = () => (
  <Center py={10}>
    <Spinner size="sm" speed="0.8s" />
  </Center>
);

const Profile = dynamic(() => import('../components/Profile'), {
  ssr: false,
  loading: SectionLoader,
});

const About = dynamic(() => import('./about/page'), {
  ssr: false,
  loading: SectionLoader,
});

const Projects = dynamic(() => import('./projects/page'), {
  ssr: false,
  loading: SectionLoader,
});

const Contact = dynamic(() => import('./contact/page'), {
  ssr: false,
  loading: SectionLoader,
});

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

export default function Home() {
  const [showHeavySections, setShowHeavySections] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const idleWindow = window as IdleWindow;

    const loadSections = () => {
      if (!cancelled) setShowHeavySections(true);
    };

    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(loadSections, { timeout: 2000 });
      return () => {
        cancelled = true;
        idleWindow.cancelIdleCallback?.(idleId);
      };
    }

    const timeoutId = setTimeout(loadSections, 1200);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Box>
      <Profile />
      {showHeavySections ? (
        <>
          <About />
          <Projects />
          <Contact />
        </>
      ) : (
        <SectionLoader />
      )}
    </Box>
  );
}