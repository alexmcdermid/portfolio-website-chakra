import { VStack, Flex, Heading, IconButton, useColorMode, Spacer } from "@chakra-ui/react";
import {FaSun, FaMoon, FaGithub, FaLinkedin} from 'react-icons/fa'
import Header from "./components/Header";

function App() {

  const {colorMode,toggleColorMode} = useColorMode();
  const isDark = colorMode == 'dark'

  return (
    <VStack padding='5'>
      <Flex w='100%'>
        <Heading m1='8' size='md' fontWeight='semibold' color='cyan'>
            <Header></Header>
        </Heading>
        <Spacer/>
        <IconButton icon={<FaLinkedin/>} isRound='true'></IconButton>
        <IconButton icon={<FaGithub/>} isRound='true'></IconButton>
        <IconButton icon={isDark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode} />
      </Flex>
    </VStack>
  );
}

export default App;
