import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Flex, Box, Text, Link } from '@chakra-ui/layout';
import { Button, IconButton } from '@chakra-ui/button';
import { Image } from '@chakra-ui/react/dist/chakra-ui-react.cjs';
import YouTube from 'react-youtube';
import { useMediaQuery } from '@chakra-ui/media-query';
import { DiRubyRough, DiMongodb, DiJavascript, DiPython, DiPostgresql, DiGit, DiDjango, DiJava, DiNodejs } from 'react-icons/di'
import { SiOracle, SiReact, SiSpringboot, SiVuedotjs, SiRedhatopenshift, SiGithubactions, SiTypescript } from 'react-icons/si'
import { BiLogoFlask } from 'react-icons/bi'
import { FaGithub, FaGlobe, FaDocker } from 'react-icons/fa'
import React from 'react'
import ContractServices from './ContractServices'

const currentStack = [
    { icon: DiJava, label: 'Java' },
    { icon: SiSpringboot, label: 'Spring Boot' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: SiReact, label: 'React' },
    { icon: SiOracle, label: 'Oracle' },
    { icon: SiRedhatopenshift, label: 'OpenShift' },
]

const otherStack = [
    { icon: SiVuedotjs, label: 'Vue.js' },
    { icon: DiNodejs, label: 'Node.js' },
    { icon: DiJavascript, label: 'JavaScript' },
    { icon: DiPython, label: 'Python' },
    { icon: BiLogoFlask, label: 'Flask' },
    { icon: DiDjango, label: 'Django' },
    { icon: DiRubyRough, label: 'Ruby on Rails' },
    { icon: DiPostgresql, label: 'PostgreSQL' },
    { icon: DiMongodb, label: 'MongoDB' },
    { icon: FaDocker, label: 'Docker' },
    { icon: SiGithubactions, label: 'GitHub Actions' },
    { icon: DiGit, label: 'Git' },
]

function Content() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const [isWideScreen] = useMediaQuery("(min-width:768px)");
    const opts = {
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    return (
        <Stack as='main' w='100%' minW='0'>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" align="flex-start" minW='0'>
                <Box w='100%' minW='0' mt={isNotSmallerScreen ? "0" : "4"} align='center'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I'm</Text>
                    <Text as='h1' fontSize={isNotSmallerScreen ? "7xl" : "5xl"} fontWeight="bold" bgGradient="linear(to-r, orange.400, orange.500, orange.600)" bgClip='text' pb='4'>Alexander McDermid</Text>
                    <Text fontSize={isNotSmallerScreen ? "3xl" : "xl"} color={isDark ? "gray.200" : "gray.700"} maxW='1000px' mx='auto' px='4'>
                        Senior full stack developer who builds and scales data-intensive distributed systems across the full development lifecycle.
                    </Text> 
                    <Text fontSize={isNotSmallerScreen ? "xl" : "md"} color={isDark ? "gray.400" : "gray.600"} maxW='1000px' mx='auto' px='4' pt='4'>
                        Recently led the technical delivery of the LEXIS modernization for the BC Ministry of Forests.
                    </Text>
                    <Flex justify='center' flexWrap='wrap' gap='4' px='4' pt='8'>
                        <Button as='a' href='#contract-work' size={isNotSmallerScreen ? 'lg' : 'md'} bg={isDark ? 'orange.300' : 'orange.600'} color={isDark ? 'gray.900' : 'white'} _hover={{ bg: isDark ? 'orange.200' : 'orange.700' }}>See recent work</Button>
                        <Button as='a' href='#projects' size={isNotSmallerScreen ? 'lg' : 'md'} variant='outline'>Personal projects</Button>
                    </Flex>
                    <Text as='h2' fontSize="4xl" fontWeight="semibold" pt={{ base: '10', md: '14' }} pb='6'>Skills</Text>
                    <Text fontSize={isNotSmallerScreen ? "xl" : "lg"} color={isDark ? "gray.200" : "gray.700"} maxW='1000px' mx='auto' px='4' pb='8'>
                        My recent work spans Java with Spring Boot, TypeScript with React, Oracle and PostgreSQL, and OpenShift with GitHub Actions. I also work with Vue.js, Node.js, Python, and Ruby on Rails.
                    </Text>
                    <Flex direction='row' textAlign='center' justify='center' flexWrap='wrap' maxW='1280px' mx='auto' px='4' rowGap='6' color={isDark ? 'gray.300' : 'gray.600'}>
                        {currentStack.map(({ icon: ToolIcon, label }) => (
                            <Flex key={label} flexDirection='column' w={isNotSmallerScreen ? 'auto' : '33.33%'} px={isWideScreen ? '3' : '2'} align='center'>
                                <ToolIcon size={isWideScreen ? '6em' : isNotSmallerScreen ? '4em' : '3em'} aria-hidden='true' focusable='false'/>
                                <Text>{label}</Text>
                            </Flex>
                        ))}
                    </Flex>
                    <Flex direction='row' textAlign='center' justify='center' flexWrap='wrap' w='100%' maxW={{ base: '768px', lg: '1280px' }} mx='auto' px='4' pt='10' rowGap='6' color={isDark ? 'gray.300' : 'gray.600'}>
                        {otherStack.map(({ icon: ToolIcon, label }) => (
                            <Flex key={label} flexDirection='column' w={{ base: '33.333%', md: '16.666%', lg: 'auto' }} px={{ base: '2', xl: '4' }} align='center'>
                                <ToolIcon size={isNotSmallerScreen ? '3em' : '2em'} aria-hidden='true' focusable='false'/>
                                <Text fontSize='sm' lineHeight='short' mt='2'>{label}</Text>
                            </Flex>
                        ))}
                    </Flex>

                    <ContractServices/>

                    <Text as='h2' fontSize="4xl" fontWeight="semibold" pt={{ base: '10', md: '14' }} pb='6' id='projects'>Current Projects</Text>

                    <Flex wrap='wrap' justify='center' align='stretch' gap='8' w='100%' maxW='1280px' mx='auto' px='4' textAlign='center'>
                        <Box w={{ base: '100%', lg: 'calc(50% - 1rem)' }} minH={isNotSmallerScreen ? '590px' : '470px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl' display='flex' flexDirection='column'>
                            <Text as='h3' fontSize='3xl' px='4' pt='4' pb='2'>TradeLog</Text>
                            <Flex justify='center' align='center' gap={isNotSmallerScreen ? '4' : '2'} px='2%'>
                                <Button as='a' href="https://github.com/alexmcdermid/tradingView" target='_blank' rel='noopener noreferrer' leftIcon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'}>Frontend</Button>
                                <Button as='a' href="https://github.com/alexmcdermid/transaction-api" target='_blank' rel='noopener noreferrer' leftIcon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'}>API</Button>
                                <IconButton as='a' href="https://www.tradelog.ca/" target='_blank' rel='noopener noreferrer' aria-label='Open TradeLog website' icon={<FaGlobe/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' />
                            </Flex>
                            <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pt='2' pb='4'>A full-stack trading journal for recording stock and option trades, tracking realized profit and loss, and reviewing performance through dashboards and monthly calendars.</Text>
                            <Link href="https://www.tradelog.ca/" aria-label="Open TradeLog website" isExternal mt='auto'>
                                <Image w='100%' h={isNotSmallerScreen ? '332px' : '197px'} objectFit='cover' src={isDark ? 'tradelog-homepage-dark.jpg' : 'tradelog-homepage.jpg'} alt="TradeLog trading dashboard homepage" loading="lazy"/>
                            </Link>
                        </Box>
                        <Box w={{ base: '100%', lg: 'calc(50% - 1rem)' }} minH={isNotSmallerScreen ? '590px' : '470px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl' display='flex' flexDirection='column'>
                            <Text as='h3' fontSize='3xl' px='4' pt='4' pb='2'>Real Estate Quest BC</Text>
                            <Flex justify='center' align='center' gap={isNotSmallerScreen ? '8' : '4'} px='2%'>
                                <Button as='a' href="https://github.com/alexmcdermid/real-estate-quest" target='_blank' rel='noopener noreferrer' leftIcon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'}>GitHub</Button>
                                <IconButton as='a' href="https://bcrealestatequest.ca/" target='_blank' rel='noopener noreferrer' aria-label='Open Real Estate Quest website' icon={<FaGlobe/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' />
                            </Flex>
                            <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pt='2' pb='4'>Real Estate Quest is a web application designed to help users prepare for the British Columbia Real Estate licensing exam. I used this project to explore Stripe integration for subscriptions and payments.</Text>
                            <Link href="https://bcrealestatequest.ca/" aria-label="Open Real Estate Quest website" isExternal mt='auto'>
                                <Image w='100%' h={isNotSmallerScreen ? '332px' : '197px'} objectFit='cover' src={isDark ? 'real-estate-quest-homepage-dark.jpg' : 'real-estate-quest-homepage.jpg'} alt="Real Estate Quest BC homepage" loading="lazy"/>
                            </Link>
                        </Box>
                    </Flex>

                    <Text as='h2' fontSize="4xl" fontWeight="semibold" pt={{ base: '10', md: '14' }} pb='6'>Blogs</Text>

                    <Flex wrap='wrap' justify='center' align='stretch' gap='8' w='100%' maxW='1280px' mx='auto' px='4' textAlign='center'>
                        <Box w={{ base: '100%', lg: 'calc(50% - 1rem)' }} h={isNotSmallerScreen ? '385px' : '335px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl'>
                            <Link href="https://harled.ca/blog/what_is_ahoy_and_application_level_optimizations" _focus={{ outline: 'none' }} isExternal>
                                <Flex direction={'column'} justifyContent={'space-between'} height={'100%'} paddingBlockEnd={'.5em'}>
                                    <Text as='h3' fontSize='3xl' px='4' pt='4' pb='2' sx={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>Ahoy Deep Dive Part 1: What is Ahoy? And Application Level Optimizations</Text>
                                    <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pt='2' pb='4'>An overview of Ahoy and industry standard practices to optimize Ahoy events and visits at the application level.</Text>
                                    <Flex justify={'space-between'} px='4' pb='4'>
                                        <Flex>
                                            <Image w={isNotSmallerScreen ? '120px' : '80px'} h={isNotSmallerScreen ? '120px' : '80px'} src="harledProfile.jpg" alt="Alex McDermid Harled Work Profile Photo"/>
                                            <Flex direction={'column'} justifyContent={'center'} pl={'2%'} textAlign={'start'}>
                                                <Text fontSize={isNotSmallerScreen ? 'lg' : 'md'} p='1%'>Alex McDermid</Text>
                                                <Text fontSize={isNotSmallerScreen ? 'lg' : 'md'} p='1%' whiteSpace={{ base: 'normal', md: 'nowrap' }}>September 16th, 2023</Text>
                                            </Flex>
                                        </Flex>
                                        <Image w={isNotSmallerScreen ? '120px' : '80px'} h={isNotSmallerScreen ? '120px' : '80px'} src="harledLogo.jpeg" alt="Harled Inc Logo"/>
                                    </Flex>
                                </Flex>
                            </Link>
                        </Box>
                        <Box w={{ base: '100%', lg: 'calc(50% - 1rem)' }} h={isNotSmallerScreen ? '385px' : '335px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl'  >
                            <Link href="https://harled.ca/blog/database_indexing_strategies" _focus={{ outline: 'none' }} isExternal>
                                <Flex direction={'column'} justifyContent={'space-between'} height={'100%'} paddingBlockEnd={'.5em'}>
                                    <Text as='h3' fontSize='3xl' px='4' pt='4' pb='2' sx={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>Ahoy Deep Dive Part 2: Database Indexing Strategies</Text>
                                    <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pt='2' pb='4'>How to optimize Ahoy events and visits at the database and infrastructure levels for performance and scale.</Text>
                                    <Flex justify={'space-between'} px='4' pb='4'>
                                        <Flex>
                                            <Image w={isNotSmallerScreen ? '120px' : '80px'} h={isNotSmallerScreen ? '120px' : '80px'} src="harledProfile.jpg" alt="Alex McDermid Harled Work Profile Photo"/>
                                            <Flex direction={'column'} justifyContent={'center'} pl={'2%'} textAlign={'start'}>
                                                <Text fontSize={isNotSmallerScreen ? 'lg' : 'md'} p='1%'>Alex McDermid</Text>
                                                <Text fontSize={isNotSmallerScreen ? 'lg' : 'md'} p='1%' whiteSpace={{ base: 'normal', md: 'nowrap' }}>September 16th, 2023</Text>
                                            </Flex>
                                        </Flex>
                                        <Image w={isNotSmallerScreen ? '120px' : '80px'} h={isNotSmallerScreen ? '120px' : '80px'} src="harledLogo.jpeg" alt="Harled Inc Logo"/>
                                    </Flex>
                                </Flex>
                            </Link>
                        </Box>
                        <Box w={{ base: '100%', lg: 'calc(50% - 1rem)' }} h={isNotSmallerScreen ? '385px' : '335px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl'  >
                            <Link href="https://harled.ca/blog/the_battle_of_factories_vs_fixtures_when_using_rspec" _focus={{ outline: 'none' }} isExternal>
                                <Flex direction={'column'} justifyContent={'space-between'} height={'100%'} paddingBlockEnd={'.5em'}>
                                    <Text as='h3' fontSize='3xl' px='4' pt='4' pb='2' sx={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>Rails Testing: The Battle of Factories vs Fixtures when using RSpec</Text>
                                    <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pt='2' pb='4'>A comparison of the pros/cons of using factories vs fixtures for testing Ruby on Rails applications with RSpec.</Text>
                                    <Flex justify={'space-between'} px='4' pb='4'>
                                        <Flex>
                                            <Image w={isNotSmallerScreen ? '120px' : '80px'} h={isNotSmallerScreen ? '120px' : '80px'} src="harledProfile.jpg" alt="Alex McDermid Harled Work Profile Photo"/>
                                            <Flex direction={'column'} justifyContent={'center'} pl={'2%'} textAlign={'start'}>
                                                <Text fontSize={isNotSmallerScreen ? 'lg' : 'md'} p='1%'>Alex McDermid</Text>
                                                <Text fontSize={isNotSmallerScreen ? 'lg' : 'md'} p='1%' whiteSpace={{ base: 'normal', md: 'nowrap' }}>August 18th, 2023</Text>
                                            </Flex>
                                        </Flex>
                                        <Image w={isNotSmallerScreen ? '120px' : '80px'} h={isNotSmallerScreen ? '120px' : '80px'} src="harledLogo.jpeg" alt="Harled Inc Logo"/>
                                    </Flex>
                                </Flex>
                            </Link>
                        </Box>
                    </Flex>

                    <Text as='h2' fontSize="4xl" fontWeight="semibold" pt={{ base: '10', md: '14' }} pb='6'>Past Projects</Text>
                    <Text fontSize={isNotSmallerScreen ? "xl" : "lg"} color={isDark ? "gray.200" : "gray.700"} maxW='1000px' mx='auto' px='4' pb='8'>These projects are no longer actively maintained, but they remain deployed and available to explore.</Text>

                    <Flex wrap='wrap' justify='center' align='stretch' gap='8' w='100%' maxW='1280px' mx='auto' px='4' textAlign='center'>
                        <Box  w={{ base: '100%', lg: 'calc(50% - 1rem)' }} minH={isNotSmallerScreen ? '596px' : '538px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl' >
                            <Text as='h3' fontSize='3xl' px='4' pt='4' pb='2'>Railestate</Text>
                            <Flex justify='center' align='center' gap={isNotSmallerScreen ? '8' : '4'}>
                                <Button as='a' href="https://www.github.com/alexmcdermid/railestate" target='_blank' rel='noopener noreferrer' leftIcon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'}>GitHub</Button>
                                <IconButton as='a' href="https://railestate.herokuapp.com/" target='_blank' rel='noopener noreferrer' aria-label='Open Railestate website' icon={<FaGlobe/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' />
                            </Flex>
                            <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pt='2' pb='4'>Railestate is a Ruby on Rails 7 webapp built to explore built in SPA functionality from the Hotwired suite (Stimulus, Turbo).</Text>
                            <YouTube videoId="gyEO1cZ-QXk"  opts={opts}/>
                        </Box>
                        <Box  w={{ base: '100%', lg: 'calc(50% - 1rem)' }} minH={isNotSmallerScreen ? '596px' : '538px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl' display='flex' flexDirection='column'>
                            <Text as='h3' fontSize='3xl' px='4' pt='4' pb='2'>Grok the Coding Interview Randomizer</Text>
                            <Flex justify='center' align='center' gap={isNotSmallerScreen ? '8' : '4'}>
                                <Button as='a' href="https://github.com/alexmcdermid/grokkingTheCodingInterviewRandomizer" target='_blank' rel='noopener noreferrer' leftIcon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'}>GitHub</Button>
                                <IconButton as='a' href="https://grokking-the-coding-interview-randomizer.vercel.app" target='_blank' rel='noopener noreferrer' aria-label='Open Grok the Coding Interview Randomizer website' icon={<FaGlobe/>} size={isNotSmallerScreen ? 'lg' : 'md'} isRound='true' />
                            </Flex>
                            <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pt='2' pb='4'>Filter interview practice questions by coding pattern and difficulty, select a random LeetCode problem, and track completion after signing in.</Text>
                            <Link href="https://grokking-the-coding-interview-randomizer.vercel.app" aria-label="Open Grok the Coding Interview Randomizer website" isExternal mt='auto'>
                                <Image w='100%' h={isNotSmallerScreen ? '332px' : '197px'} objectFit='cover' src={isDark ? 'grok-randomizer-dark.jpg' : 'grok-randomizer.jpg'} alt="Grok coding interview randomizer with category and difficulty filters" loading="lazy"/>
                            </Link>
                        </Box>
                    </Flex>

                    <Text as='h2' fontSize="4xl" fontWeight="semibold" pt={{ base: '10', md: '14' }} pb='6'>Archived Projects</Text>
                    <Text fontSize={isNotSmallerScreen ? "xl" : "lg"} color={isDark ? "gray.200" : "gray.700"} maxW='1000px' mx='auto' px='4' pb='8'>These projects are no longer deployed. Their repositories and recorded demos remain available if you'd like to explore the work.</Text>

                    <Flex wrap='wrap' justify='center' align='stretch' gap='8' w='100%' maxW='1280px' mx='auto' px='4' textAlign='center'>
                        <Box  w={{ base: '100%', lg: 'calc(50% - 1rem)' }} minH={isNotSmallerScreen ? '596px' : '538px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl' >
                            <Text as='h3' fontSize='3xl' px='4' pt='4' pb='2'>IS24 Challenge</Text>
                            <Flex justify='center' align='center'>
                                <Button as='a' href="https://www.github.com/alexmcdermid/Alexander-McDermid-ecc-dssb-IS24-code-challenge" target='_blank' rel='noopener noreferrer' leftIcon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'}>GitHub</Button>
                            </Flex>
                            <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pt='2' pb='4'>This repository contains a web application that tracks and manages mock Web Applications developed by the Province of BC.</Text>
                            <YouTube videoId="5EXRuzREMCc"  opts={opts}/>
                        </Box>
                        <Box  w={{ base: '100%', lg: 'calc(50% - 1rem)' }}  minH={isNotSmallerScreen ? '596px' : '538px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl'>
                            <Text as='h3' fontSize='3xl' px='4' pt='4' pb='2'>Tigerpins</Text>
                            <Flex justify='center' align='center'>
                                <Button as='a' href="https://www.github.com/alexmcdermid/tigerpins" target='_blank' rel='noopener noreferrer' leftIcon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'}>GitHub</Button>
                            </Flex>
                            <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pt='2' pb='4'>A full-stack web application that allows users to log places that they’ve been to, and take a look at places that other users have been to. </Text>
                            <YouTube videoId="IB2bAzOVM7U"  opts={opts}/>
                        </Box>
                        <Box w={{ base: '100%', lg: 'calc(50% - 1rem)' }} minH={isNotSmallerScreen ? '596px' : '538px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl'  >
                            <Text as='h3' fontSize='3xl' px='4' pt='4' pb='2'>Rhyme Time</Text>
                            <Flex justify='center' align='center'>
                                <Button as='a' href="https://www.github.com/alexmcdermid/rhymetime" target='_blank' rel='noopener noreferrer' leftIcon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'}>GitHub</Button>
                            </Flex>
                            <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pt='2' pb='4'>A mobile first, full stack web application, that allows users to search words and be given a list of rhyming words as a result. </Text>
                            <YouTube videoId="ufdOikrghik"  opts={opts}/>
                        </Box>
                        <Box  w={{ base: '100%', lg: 'calc(50% - 1rem)' }} minH={isNotSmallerScreen ? '596px' : '538px'} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl' >
                            <Text as='h3' fontSize='3xl' px='4' pt='4' pb='2'>Brewfinder</Text>
                            <Flex justify='center' align='center'>
                                <Button as='a' href="https://www.github.com/alexmcdermid/brewfinder" target='_blank' rel='noopener noreferrer' leftIcon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'}>GitHub</Button>
                            </Flex>
                            <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pt='2' pb='4'>A full-stack web application that allows users to search cities to find listings of breweries and comment on their experiences. </Text>
                            <YouTube videoId="74zDJUpQe9Q"  opts={opts}/>
                        </Box>
                    </Flex>
                    
                    <Button mt={{ base: '10', md: '14' }} mb='8' onClick={()=>{window.scrollTo({top: 0,behavior: "smooth"})}}>Back to top</Button>
                    
                </Box>
            </Flex>
        </Stack>
    )
}

export default Content
