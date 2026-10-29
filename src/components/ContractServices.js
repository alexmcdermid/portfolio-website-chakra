import { useColorMode } from '@chakra-ui/color-mode'
import { Flex, Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useMediaQuery } from '@chakra-ui/media-query';
import { DiJava } from 'react-icons/di'
import { SiSpringboot, SiReact, SiOracle, SiOpenid, SiJsonwebtokens, SiKong, SiSwagger, SiRedhatopenshift, SiKubernetes, SiGithubactions, SiDocker, SiPrometheus, SiOwasp, SiVault } from 'react-icons/si'
import { FaKey, FaUserShield, FaLock, FaCode, FaCubes, FaBell, FaBook, FaShieldAlt, FaFileUpload, FaLinkedin, FaGithub } from 'react-icons/fa'
import React from 'react'

const workstreams = [
    {
        title: 'Full Stack Rebuild',
        description: 'Rebuilt a Java 8 Struts/JSP application, a separate admin site, and a report server as one Spring Boot and React app on the existing Oracle database. Replaced dozens of stored-procedure calls with JDBC queries, cutting average lookup time by 43.3% in benchmarks. Added new multi-file uploads with instant validation in an accessible UI.',
        stack: [
            { icon: DiJava, label: 'Java' },
            { icon: SiSpringboot, label: 'Spring Boot' },
            { icon: SiReact, label: 'React' },
            { icon: SiOracle, label: 'Oracle' },
        ],
    },
    {
        title: 'Identity & Access',
        description: 'Moved staff and business-user sign-in to Keycloak single sign-on with OpenID Connect and PKCE. Redesigned roles so approvers act only within their own regions and no one holds both approval roles, enforced by backend checks that fail closed. Led the same migration for sister applications, auditing and rebuilding their role models.',
        stack: [
            { icon: FaKey, label: 'Keycloak' },
            { icon: SiOpenid, label: 'OIDC' },
            { icon: SiJsonwebtokens, label: 'JWT' },
            { icon: FaUserShield, label: 'RBAC' },
        ],
    },
    {
        title: 'Partner API & Gateway',
        description: 'Built and documented a submission API for a federal partner, secured at the Kong gateway and backend with Keycloak client credentials and JWT checks. Every submission gets an immediate accept or reject, idempotency keys make retries safe, and support for JSON, XML, and SOAP meant the partner could switch with minimal changes.',
        stack: [
            { icon: SiKong, label: 'Kong' },
            { icon: SiSwagger, label: 'OpenAPI' },
            { icon: FaLock, label: 'OAuth 2.0' },
            { icon: FaCode, label: 'XML / SOAP' },
        ],
    },
    {
        title: 'OpenShift & GitHub Actions',
        description: 'Set up DEV, TEST, and PROD on OpenShift with network policies, non-root read-only containers, and deployers limited to short-lived tokens. Every pull request gets a preview environment, and tagged production releases promote the tested image by digest, with documented rollback. Standardized the setup across sister applications.',
        stack: [
            { icon: SiRedhatopenshift, label: 'OpenShift' },
            { icon: SiKubernetes, label: 'Kubernetes' },
            { icon: SiGithubactions, label: 'GitHub Actions' },
            { icon: SiDocker, label: 'Docker' },
        ],
    },
    {
        title: 'Distributed & Observable',
        description: 'Designed the backend to scale horizontally: stateless services, scheduled jobs that run exactly once across pods through ShedLock, and optimistic locking for concurrent edits. It degrades gracefully when a dependency fails, reports Prometheus metrics, applies Sysdig alerts on every release, and ships with runbooks for DevOps handoff.',
        stack: [
            { icon: FaCubes, label: 'Scaling' },
            { icon: SiPrometheus, label: 'Prometheus' },
            { icon: FaBell, label: 'Sysdig' },
            { icon: FaBook, label: 'Runbooks' },
        ],
    },
    {
        title: 'Security Hardening',
        description: 'Fixed vulnerability-assessment findings with cookie, WAF, and security-header hardening. Bounded XML parsing so crafted payloads cannot stall the server, and scanned every upload for malware. Found a secret printing in deployment logs, traced it to a shared deployment action, shipped a stopgap, and worked with DevOps on the upstream fix.',
        stack: [
            { icon: SiOwasp, label: 'OWASP' },
            { icon: FaShieldAlt, label: 'WAF' },
            { icon: FaFileUpload, label: 'ClamAV' },
            { icon: SiVault, label: 'Vault' },
        ],
    },
]

function ContractServices() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <>
            <Text as='h2' fontSize="4xl" fontWeight="semibold" pt={{ base: '10', md: '14' }} pb='6' id='contract-work'>Contract Work</Text>
            <Text fontSize={isNotSmallerScreen ? "xl" : "lg"} color={isDark ? "gray.200" : "gray.700"} maxW='1000px' mx='auto' px='4' pb='10'>
                Through my incorporated B.C. company, I take on full stack contract work: new services and APIs, front ends, identity and access, cloud delivery, and legacy modernization. Clients work directly with me, from technical discovery through production handoff.
            </Text>
            <Text fontSize={isNotSmallerScreen ? "2xl" : "xl"} fontWeight="semibold" px='4' pb='1'>
                BC Ministry of Forests · Forestry Digital Services
            </Text>
            <Text fontSize='md' color={isDark ? "gray.200" : "gray.700"} px='4' pb='4'>
                Recent engagement · Senior Full Stack Developer (contract) · May – Oct 2026
            </Text>
            <Text fontSize={isNotSmallerScreen ? "xl" : "lg"} maxW='1000px' mx='auto' px='4' pb='6'>
                I led the technical delivery of the Log Exemption Information System (LEXIS) modernization and applied its identity, deployment, and operational patterns to sister applications.
            </Text>
            <Flex justify='center' align='center' gap={isNotSmallerScreen ? '4' : '2'} px='4' pb='10'>
                <Button as='a' href="https://github.com/bcgov/nr-lexis" target='_blank' rel='noopener noreferrer' leftIcon={<FaGithub/>} size={isNotSmallerScreen ? 'lg' : 'md'}>GitHub</Button>
                <Button as='a' href="https://openapi.apps.gov.bc.ca/?url=https://raw.githubusercontent.com/bcgov/nr-lexis/main/gateway/openapi.yaml" target='_blank' rel='noopener noreferrer' leftIcon={<SiSwagger/>} size={isNotSmallerScreen ? 'lg' : 'md'}>API Docs</Button>
            </Flex>

            <Flex wrap='wrap' justify='center' align='stretch' gap='8' w='100%' maxW='1280px' mx='auto' px='4' textAlign='center'>
                {workstreams.map(({ title, description, stack }) => (
                    <Box key={title} w={{ base: '100%', md: 'calc(50% - 1rem)', xl: 'calc(33.333% - 1.334rem)' }} rounded='10px' overflow='hidden' boxShadow='md' bg={isDark ? 'gray.700' : 'gray.200'} shadow='xl' display='flex' flexDirection='column'>
                        <Text as='h3' fontSize='2xl' px='4' pt='4' pb='2'>{title}</Text>
                        <Text fontSize={isNotSmallerScreen ? 'xl' : 'lg'} textAlign='left' px='4' pb='4'>{description}</Text>
                        <Flex justify='space-around' flexWrap='wrap' mt='auto' px='2' pb='4'>
                            {stack.map(({ icon: StackIcon, label }) => (
                                <Flex key={label} flexDirection='column' px='2' py={isNotSmallerScreen ? '4' : '2'} align='center'>
                                    <StackIcon size={isNotSmallerScreen ? '3em' : '2em'}/>
                                    <Text fontSize='sm'>{label}</Text>
                                </Flex>
                            ))}
                        </Flex>
                    </Box>
                ))}
            </Flex>

            <Flex direction='column' align='center' gap='4' pt='10' px={isNotSmallerScreen ? "8" : "2"}>
                <Text fontSize={isNotSmallerScreen ? '2xl' : 'xl'} fontWeight='semibold'>Have a project that needs a senior full stack developer?</Text>
                <Button as='a' href="https://www.linkedin.com/in/alexmcdermid" target='_blank' rel='noopener noreferrer' leftIcon={<FaLinkedin/>} size={isNotSmallerScreen ? 'lg' : 'md'}>Start a conversation</Button>
            </Flex>
        </>
    )
}

export default ContractServices
