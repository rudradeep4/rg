import {
    Box,
    Text,
    VStack,
    HStack,
    Divider,
    useOutsideClick,
} from '@chakra-ui/react'
import React from 'react'
import { FaBrain } from 'react-icons/fa'
import { SiPython, SiJavascript, SiReact, SiJava, SiFlutter, SiUnity, SiTensorflow, SiAdobeillustrator } from 'react-icons/si'
import MatlabIcon from './MatlabIcon'
import RIcon from './RIcon'

const CompSci = ({close}) => {
    const ref = React.useRef()
    useOutsideClick({
        ref: ref,
        handler: () => close()
    })

    return (
        <Box ref={ref} textColor="black" fontFamily="Inconsolata" fontSize="sm">
            <VStack>
                <Text pt={10} fontSize="lg" fontWeight="semibold">Rudradeep Guha</Text>
                <Text pb={10} fontSize="lg" fontWeight="semibold">Cognitive science, coder</Text>
                <Text fontSize="md">M.Sc. Cognitive Science</Text>
                <Text fontSize="md">National Research University Higher School of Economics</Text>
                <Text fontSize="md">Moscow, Russia</Text>
                <Divider bgColor="black" borderColor="black" pt={1} />
                <Text fontWeight="semibold">Thesis:</Text>
                <Text>Novel Word Learning in Native and Non-Native Orthographies</Text>
                <HStack><FaBrain /><Text>EEG</Text></HStack>
                
                <Text pt={20} fontSize="md">B.Sc. Computer Science</Text>
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
}

export default CompSci