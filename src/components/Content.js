import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { Button, IconButton } from '@chakra-ui/button';
import YouTube from 'react-youtube';
import { useMediaQuery } from '@chakra-ui/media-query';
import { DiRubyRough, DiMongodb, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiJavascript, DiPython, DiPostgresql, DiGit } from 'react-icons/di'
import { SiRubyonrails } from 'react-icons/si'
import { BiLogoFlask } from 'react-icons/bi'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const opts = {
        width: isNotSmallerScreen ? '590' : '350',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" align="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : '4'} align='center'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I'm,</Text>
                    <Text fontSize={isNotSmallerScreen ? "7xl" : "6xl"} fontWeight="bold" bgGradient="linear(to-r, orange.400, orange.500, orange.600)" bgClip='text' paddingBottom='1%'>Alexander McDermid</Text>
                    <Text fontSize={isNotSmallerScreen ? "3xl" : "1xl"} color={isDark ? "gray.200" : "gray.700"} paddingBottom='5%' px={isNotSmallerScreen ? "8" : "2"}>
                        A software developer and solution seeker, who works for moments of clarity after solving the last piece of a problem.
                    </Text> 
                    <Text fontSize="4xl" fontWeight="semibold" paddingBottom='1%'>Skills</Text>
                    <Text fontSize={isNotSmallerScreen ? "3xl" : "1xl"} color={isDark ? "gray.200" : "gray.700"} px={isNotSmallerScreen ? "8" : "2"}>
                        I specialize in building scalabe and robust web applications. Recently my tools of choice are Ruby on Rails and React, but I excel at many technologies and possess a strong background in computer science, data analytics and development.
                    </Text>
                    <Flex flexDirection='column' align='center'>
                    <Flex direction='row' spacing="200px"  textAlign='center'>
                        <Flex flexDirection='column' p={isNotSmallerScreen ? "6" : "2"} align='center'>
                            <DiRubyRough size={isNotSmallerScreen ? '6em' : '4em'}/>
                            <Text>Ruby</Text>
                        </Flex>
                        <Flex flexDirection='column' p={isNotSmallerScreen ? "6" : "2"} align='center'>
                            <SiRubyonrails size={isNotSmallerScreen ? '6em' : '4em'}/>
                            <Text>Rails</Text>
                        </Flex>
                        <Flex flexDirection='column' p={isNotSmallerScreen ? "6" : "2"} align='center'>
                            <DiReact size={isNotSmallerScreen ? '6em' : '4em'}/>
                            <Text>React.js</Text>
                        </Flex>
                        <Flex flexDirection='column' p={isNotSmallerScreen ? "6" : "2"} align='center'>
                            <DiPostgresql size={isNotSmallerScreen ? '6em' : '4em'}/>
                            <Text>PostgreSQL</Text>
                        </Flex>
                    </Flex>
                    </Flex>
                    <Flex flexDirection='column' align='center'>
                    <Flex direction='row' spacing="200px" p='2' textAlign='center' justify='space-around' flexWrap='wrap' paddingBottom='4%'>
                        <Flex flexDirection='column' p='4' align='center'>
                            <DiJavascript size='3em'/>
                            <Text>JavaScript</Text>
                        </Flex>
                        <Flex flexDirection='column' p='4' align='center'>
                            <DiHtml5 size='3em'/>
                            <Text>HTML5</Text>
                        </Flex>
                        <Flex flexDirection='column' p='4' align='center'>
                            <DiCss3 size='3em'/>
                            <Text>CSS3</Text>
                        </Flex>
                        <Flex flexDirection='column' p='4' align='center'>
                            <DiPython size='3em'/>
                            <Text>Python</Text>
                        </Flex>
                        <Flex flexDirection='column' p='4' align='center'>
                            <BiLogoFlask size='3em'/>
                            <Text>Flask</Text>
                        </Flex>   
                        <Flex flexDirection='column' p='4' align='center'>
                            <DiMongodb size='3em'/>
                            <Text>MongoDB</Text>
                        </Flex>
                        <Flex flexDirection='column' p='4' align='center'>
                            <DiNodejsSmall size='3em'/>
                            <Text>Node.js</Text>
                        </Flex>
                        <Flex flexDirection='column' p='4' align='center'>
                            <DiGit size='3em'/>
                            <Text>Git</Text>
                        </Flex>
                    </Flex>
                    </Flex>
                    <Text fontSize="4xl" fontWeight="semibold" paddingBottom='1%'>Projects</Text>
                   
                    <Flex direction='row' spacing="200px" p='2' textAlign='center' justify='space-around' flexWrap='wrap'>
                        <Box w={isNotSmallerScreen ? '590px' : '350px'} h={isNotSmallerScreen ? '597px' : '538px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} m='1%' shadow='xl'  >
                            <Text fontSize='3xl' p='2%'>Rhyme Time</Text>
                            <Flex justify='space-around' >
                                <IconButton icon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' onClick={() => window.open("https://www.github.com/alexmcdermid/rhymetime")}></IconButton>
                                <IconButton icon={<FaGlobe/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' onClick={() => window.open("https://rhymetimehome.herokuapp.com/")}></IconButton>
                            </Flex>
                            <Text fontSize={isNotSmallerScreen ? '2xl' : '1xl'} p='1%'>A mobile first, full stack web application, that allows users to search words and be given a list of rhyming words as a result. </Text>
                            <YouTube videoId="ufdOikrghik"  opts={opts}/>

                        </Box>
                        <Box  w={isNotSmallerScreen ? '590px' : '350px'}  h={isNotSmallerScreen ? '597px' : '538px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} m='1%' shadow='xl'>
                            <Text fontSize='3xl' p='2%'>Tigerpins</Text>
                            <Flex justify='space-around' >
                                <IconButton icon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' onClick={() => window.open("https://www.github.com/alexmcdermid/tigerpins")}></IconButton>
                                <IconButton icon={<FaGlobe/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' onClick={() => window.open("https://tigerpin.herokuapp.com/")}></IconButton>
                            </Flex>
                            <Text fontSize={isNotSmallerScreen ? '2xl' : '1xl'} p='1%'>A full-stack web application that allows users to log places that they’ve been to, and take a look at places that other users have been to. </Text>
                            <YouTube videoId="IB2bAzOVM7U"  opts={opts}/>


                        </Box>
                        <Box  w={isNotSmallerScreen ? '590px' : '350px'} h={isNotSmallerScreen ? '597px' : '538px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} m='1%' shadow='xl' >
                            <Text fontSize='3xl' p='2%'>Brewfinder</Text>
                            <Flex justify='space-around' >
                                <IconButton icon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' onClick={() => window.open("https://www.github.com/alexmcdermid/brewfinder")}></IconButton>
                                <IconButton icon={<FaGlobe/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' onClick={() => window.open("https://brewfinderwebapp.herokuapp.com/")}></IconButton>
                            </Flex>
                            <Text fontSize={isNotSmallerScreen ? '2xl' : '1xl'} p='1%'>A full-stack web application that allows users to search cities to find listings of breweries and comment on their experiences. </Text>
                            <YouTube videoId="74zDJUpQe9Q"  opts={opts}/>

                        </Box>
                        
                    </Flex>

                    
                    <Button mt='4%' mb='2%' onClick={()=>{window.scrollTo({top: 0,behavior: "smooth"})}}>Back to top</Button>
                    
                </Box>
            </Flex>
        </Stack>
    )
}

export default Header