import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useMediaQuery } from '@chakra-ui/media-query';
import { DiMongodb, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiJavascript, DiPython, DiDjango, DiPostgresql, DiGit } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "16" : "0"} align="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : '4'} align='center'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I'm,</Text>
                    <Text fontSize={isNotSmallerScreen ? "7xl" : "6xl"} fontWeight="bold" bgGradient="linear(to-r, orange.400, orange.500, orange.600)" bgClip='text' paddingBottom='1%'>Alexander McDermid</Text>
                    <Text fontSize={isNotSmallerScreen ? "2xl" : "1xl"} color={isDark ? "gray.200" : "gray.700"} paddingBottom='5%'>A software developer and solution seeker, who works for moments of clarity after solving the last piece of a problem.</Text> 
                    <Text fontSize="4xl" fontWeight="semibold" paddingBottom='1%'>Skills</Text>
                    <Text fontSize={isNotSmallerScreen ? "2xl" : "1xl"} color={isDark ? "gray.200" : "gray.700"} > I specialize in the MERN stack, but excel at many technologies and have a robust background in computer science, data analytics and development.</Text>
                    <Flex flexDirection='column' align='center'>
                    <Flex direction='row' spacing="200px"  textAlign='center'  >
                        <Flex flexDirection='column' p={isNotSmallerScreen ? "6" : "2"} align='center'>
                            <DiMongodb size={isNotSmallerScreen ? '6em' : '5em'}/>
                            <Text>MongoDB</Text>
                        </Flex>
                        <Flex flexDirection='column' p={isNotSmallerScreen ? "6" : "2"} align='center'>
                            <SiExpress size={isNotSmallerScreen ? '6em' : '5em'}/>
                            <Text>Express.js</Text>
                        </Flex>
                        <Flex flexDirection='column' p={isNotSmallerScreen ? "6" : "2"} align='center'>
                            <DiReact size={isNotSmallerScreen ? '6em' : '5em'}/>
                            <Text>React.js</Text>
                        </Flex>
                        <Flex flexDirection='column' p={isNotSmallerScreen ? "6" : "2"} align='center'>
                            <DiNodejsSmall size={isNotSmallerScreen ? '6em' : '5em'}/>
                            <Text>Node.js</Text>
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
                            <DiDjango size='3em'/>
                            <Text>Django</Text>
                        </Flex>
                        <Flex flexDirection='column' p='4' align='center'>
                            <DiPostgresql size='3em'/>
                            <Text>PostgreSQL</Text>
                        </Flex>
                        <Flex flexDirection='column' p='4' align='center'>
                            <DiGit size='3em'/>
                            <Text>Git</Text>
                        </Flex>
                        
                    </Flex>
                    </Flex>
                    <Text fontSize="4xl" fontWeight="semibold" paddingBottom='1%'>Portfolio</Text>
                    {isNotSmallerScreen ? <></> :
                    <Button onClick={()=>{window.scrollTo({top: 0,behavior: "smooth"})}}>Back to top</Button>
                    }
                </Box>
            </Flex>
        </Stack>
    )
}

export default Header