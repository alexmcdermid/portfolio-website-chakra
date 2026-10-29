import { VStack, Flex, Heading, IconButton, useColorMode, Spacer } from "@chakra-ui/react";
import {FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useMediaQuery } from '@chakra-ui/media-query';
import Content from "./components/Content";

function App() {

  const {colorMode,toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark'
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <VStack>
      <Flex w='100%' p='4'>
        <Heading as='span' m1='8' size={isNotSmallerScreen ? 'lg' : 'md'} fontWeight='semibold' color='orange.400'>
          alex.dev 
        </Heading>

        <Spacer/>
        <IconButton as='a' href="https://www.linkedin.com/in/alexmcdermid" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn profile' icon={<FaLinkedin />} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' />
        <IconButton as='a' href="https://www.github.com/alexmcdermid" target='_blank' rel='noopener noreferrer' aria-label='GitHub profile' icon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' />
        <IconButton aria-label={isDark ? 'Use light mode' : 'Use dark mode'} icon={isDark ? <FaSun/> : <FaMoon/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' onClick={toggleColorMode} />
        
      </Flex>
      <Content/>
      <Heading m1='8' size={isNotSmallerScreen ? 'lg' : 'md'} fontWeight='semibold' color='orange.400' pt=''>
          Contact me
        </Heading>
      <Flex pb='8'>
        <IconButton as='a' href="https://www.linkedin.com/in/alexmcdermid" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn profile' icon={<FaLinkedin />} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' />
        <IconButton as='a' href="https://www.github.com/alexmcdermid" target='_blank' rel='noopener noreferrer' aria-label='GitHub profile' icon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' />
      </Flex>
    </VStack>
  );
}

export default App;
