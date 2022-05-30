import { FiMenu } from 'react-icons/fi';

import { Flex, HStack, Link, IconButton, Icon, Center } from '@chakra-ui/react';

import { Logo } from './Logo';

type NavbarProps = {
  openDrawer: () => void;
  isLargeScreen: boolean;
};

export function Navbar({ openDrawer, isLargeScreen }: NavbarProps) {
  return (
    <Flex
      mx="auto"
      px={8}
      height="80px"
      maxW="1366px"
      justify="space-between"
      align="center"
      borderBottom="1px"
      borderColor="gray.700"
    >
      <Logo />
      <HStack spacing={4}>
        {isLargeScreen && (
          <>
            <Link
              href="https://gist.github.com/lucaspar/2c20754b37920217678cebb64170cb7a"
              target="_blank"
              rel="noreferrer"
            >
              Gist INSS
            </Link>

            <Link href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </Link>
          </>
        )}
        {!isLargeScreen && (
          <IconButton
            variant="unstyled"
            onClick={openDrawer}
            aria-label="Open drawer"
            icon={
              <Center>
                <Icon as={FiMenu} fontSize={20} color="green.500" />
              </Center>
            }
          />
        )}
      </HStack>
    </Flex>
  );
}
