import { VStack, Flex, Heading, IconButton, useColorMode, Spacer } from "@chakra-ui/react";
import {FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import { useMediaQuery } from '@chakra-ui/media-query';
import Content from "./components/Content";

function App() {

  const {colorMode,toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark'
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <VStack padding='4'>
      <Flex w='100%'>
        <Heading m1='8' size={isNotSmallerScreen ? 'lg' : 'md'} fontWeight='semibold' color='orange.400'>
          alex.dev 
        </Heading>
        <Spacer/>
        <IconButton icon={<FaLinkedin />} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' onClick={() => window.open("https://www.linkedin.com/in/alexmcdermid")}></IconButton>
        <IconButton icon={<FaEnvelope/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' onClick={() => window.open("mailto:alexander.mcdermid@gmail.com")}></IconButton>
        <IconButton icon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' onClick={() => window.open("https://www.github.com/alexmcdermid")}></IconButton>
        <IconButton icon={isDark ? <FaSun/> : <FaMoon/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' onClick={toggleColorMode} />
      </Flex>
      <Content></Content>
    </VStack>
  );
}

export default App;
