import { useColorMode } from '@chakra-ui/color-mode'
import { Flex, Box, Text } from '@chakra-ui/layout';
import { VisuallyHidden } from '@chakra-ui/react';
import React from 'react'

// Median seconds until a record is ready to work with, ten opens per record and system,
// legacy and rebuilt LEXIS on the same records and test database (November 20, 2026).
const openTimesByRecordType = [
    {
        recordType: 'Exemptions',
        headline: 'Up to 13× faster',
        records: [
            { size: '11 linked applications', legacySeconds: 2.20, rebuiltSeconds: 0.73 },
            { size: '20 linked applications', legacySeconds: 3.01, rebuiltSeconds: 0.56 },
            { size: '40 linked applications', legacySeconds: 5.30, rebuiltSeconds: 0.73 },
            { size: '81 linked applications', legacySeconds: 10.43, rebuiltSeconds: 0.78 },
        ],
    },
    {
        recordType: 'Permits',
        headline: 'Nearly 3× faster',
        records: [
            { size: '92 scale lines', legacySeconds: 2.45, rebuiltSeconds: 1.06 },
            { size: '192 scale lines', legacySeconds: 3.18, rebuiltSeconds: 1.08 },
            { size: '249 scale lines', legacySeconds: 3.43, rebuiltSeconds: 1.16 },
        ],
    },
    {
        recordType: 'Applications',
        headline: 'Nearly 2× faster',
        records: [
            { size: '74 scale lines', legacySeconds: 1.77, rebuiltSeconds: 0.95 },
            { size: '124 scale lines', legacySeconds: 1.67, rebuiltSeconds: 0.92 },
            { size: '157 scale lines', legacySeconds: 1.96, rebuiltSeconds: 1.02 },
        ],
    },
]

const slowestSeconds = Math.max(...openTimesByRecordType.flatMap(({ records }) => records.map(({ legacySeconds }) => legacySeconds)))

function SecondsBar({ systemName, seconds, barColor }) {
    return (
        <Flex align='center' gap='2' mt='1'>
            <Box h='10px' w={`${(seconds / slowestSeconds) * 80}%`} flexShrink='0' rounded='full' bg={barColor} aria-hidden='true'/>
            <Text fontSize='sm' lineHeight='1' whiteSpace='nowrap'>
                <VisuallyHidden>{systemName}: </VisuallyHidden>{seconds.toFixed(2)} s
            </Text>
        </Flex>
    )
}

function LexisOpenTimes() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const legacyBarColor = isDark ? 'gray.400' : 'gray.500';
    const rebuiltBarColor = isDark ? 'orange.300' : 'orange.500';
    const mutedTextColor = isDark ? 'gray.300' : 'gray.600';

    return (
        <Box rounded='10px' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl' px={{ base: '4', md: '6' }} py='5' textAlign='left'>
            <Text fontSize='lg' fontWeight='semibold'>Time to open a record</Text>
            <Flex wrap='wrap' gap='4' pt='1' fontSize='sm' color={mutedTextColor}>
                <Flex align='center' gap='2'><Box w='10px' h='10px' rounded='full' bg={legacyBarColor} aria-hidden='true'/>Legacy LEXIS</Flex>
                <Flex align='center' gap='2'><Box w='10px' h='10px' rounded='full' bg={rebuiltBarColor} aria-hidden='true'/>Rebuilt LEXIS</Flex>
            </Flex>
            {openTimesByRecordType.map(({ recordType, headline, records }) => (
                <Box key={recordType} pt='5'>
                    <Flex justify='space-between' align='baseline' wrap='wrap' columnGap='4'>
                        <Text fontWeight='semibold'>{recordType}</Text>
                        <Text fontWeight='bold' color={isDark ? 'orange.300' : 'orange.600'}>{headline}</Text>
                    </Flex>
                    {records.map(({ size, legacySeconds, rebuiltSeconds }) => (
                        <Flex key={size} pt='2' direction={{ base: 'column', md: 'row' }} align={{ base: 'stretch', md: 'center' }} columnGap='4'>
                            <Text fontSize='sm' color={mutedTextColor} w={{ md: '170px' }} flexShrink='0'>{size}</Text>
                            <Box flex='1' minW='0'>
                                <SecondsBar systemName='Legacy LEXIS' seconds={legacySeconds} barColor={legacyBarColor}/>
                                <SecondsBar systemName='Rebuilt LEXIS' seconds={rebuiltSeconds} barColor={rebuiltBarColor}/>
                            </Box>
                        </Flex>
                    ))}
                </Box>
            ))}
            <Text fontSize='sm' color={mutedTextColor} pt='5'>
                Seconds until the record is ready to work with: median of ten opens per record and system, timed on the same records and test database in November 2026. Offers open in under 0.3 s in both.
            </Text>
        </Box>
    )
}

export default LexisOpenTimes
