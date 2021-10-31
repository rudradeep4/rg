import {
    Box,
    Text,
    VStack,
    HStack,
    Divider,
    useOutsideClick,
    useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import { FaBrain } from 'react-icons/fa'
import { SiPython, SiJavascript, SiReact, SiJava, SiFlutter, SiUnity, SiTensorflow, SiAdobeillustrator } from 'react-icons/si'
import MatlabIcon from './MatlabIcon'
import RIcon from './RIcon'

const About = React.forwardRef(({close}, ref) => {

    const [isLargeScreen] = useMediaQuery("(min-width: 768px)")

    useOutsideClick({
        ref: ref,
        handler: () => close(),
        enabled: isLargeScreen ? true : false
    })

    return (
        <Box ref={ref} textAlign="center" textColor="black" fontFamily="Inconsolata" fontSize="sm">
            <VStack>
                <Text py={10} fontSize="md" fontWeight="semibold">
                    Hi, I'm Rudradeep Guha.
                    <br />
                    I'm a cognitive scientist and coder interested in creating beautiful and performant web apps.
                </Text>
                <Text fontSize="md">M.Sc. Cognitive Science</Text>
                <Text fontSize="md">National Research University Higher School of Economics</Text>
                <Text fontSize="md">Moscow, Russia</Text>
                <Divider bgColor="black" borderColor="black" pt={1} />
                <Text fontWeight="semibold">Thesis:</Text>
                <Text>Novel Word Learning in Native and Non-Native Orthographies</Text>
                <HStack><FaBrain /><Text>EEG</Text></HStack>
                <br />
                <br />
                <br />
                <Text fontSize="md">B.Sc. Computer Science</Text>
                <Text fontSize="md">Ashoka University</Text>
                <Text fontSize="md">New Delhi, India</Text>
                <Divider bgColor="black" borderColor="black" pt={1} />
                <Text fontWeight="semibold">Skills:</Text>
                <HStack spacing={10}>
                    <VStack>
                        <HStack><SiPython /><Text>Python</Text></HStack>
                        <HStack><SiJavascript /><Text>Javascript</Text></HStack>
                        <HStack><SiJava /><Text>Java</Text></HStack>
                        <HStack><MatlabIcon /><Text>MATLAB</Text></HStack>
                        <HStack><RIcon /><Text>R</Text></HStack>
                    </VStack>
                    <VStack>
                        <HStack><SiReact /><Text>React.js</Text></HStack>
                        <HStack><SiFlutter /><Text>Flutter</Text></HStack>
                        <HStack><SiTensorflow /><Text>TensorFlow</Text></HStack>
                        <HStack><SiAdobeillustrator /><Text>Illustrator</Text></HStack>
                        <HStack><SiUnity /><Text>Unity 3D</Text></HStack>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    )
})

export default About