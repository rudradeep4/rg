import React from 'react';
import {
    Flex,
    Box,
    VStack,
    HStack,
    Center,
    Button,
    StackDivider,
    useDisclosure
} from '@chakra-ui/react';
import { MainImg } from '../MainImg';
import { BsPersonFill } from 'react-icons/bs'
import { VscProject } from 'react-icons/vsc'
import SocialLinks from '../components/SocialLinks';
import About from '../components/About'
import Projects from '../components/Projects'
import { AnimatePresence, motion } from 'framer-motion';
 
const LandingPage = () => {

    const { 
        isOpen: isOpenCV,
        onOpen: onOpenCV,
        onClose: onCloseCV
    } = useDisclosure()
    const {
        isOpen: isOpenProjects,
        onOpen: onOpenProjects,
        onClose: onCloseProjects,
    } = useDisclosure()

    const variants = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

    const MotionAbout = motion(About, { forwardMotionProps: true })
    const MotionProjects = motion(Projects, { forwardMotionProps: true })


    return (
        <Flex>
            <Box w={1/3}>
                <AnimatePresence>
                    {isOpenCV && (
                        <MotionAbout close={onCloseCV} variants={variants} initial="hidden" animate="visible" exit="hidden" />
                    )}
                </AnimatePresence>
            </Box>

            <Center w={1/3}>
                <VStack>
                    <MainImg />
                    <HStack spacing={5} pt={20} pb={3} divider={<StackDivider borderColor="black" />}>
                        <Button  
                            onClick={onOpenCV} 
                            leftIcon={<BsPersonFill />} 
                            size="md" 
                            _hover={{bg:'#FA7B62', textColor:'white'}}
                            textColor="black" 
                            variant="link"
                        >
                            About Me
                        </Button>
                        <Button  
                            onClick={onOpenProjects} 
                            leftIcon={<VscProject />} 
                            size="md" 
                            _hover={{bg:'#FA7B62', textColor:'white'}}
                            textColor="black" 
                            variant="link"
                        >
                            Projects
                        </Button>
                    </HStack>
                    <SocialLinks />
                </VStack>
            </Center>

            <Box w={1/3}>
                <AnimatePresence>
                    {isOpenProjects && (
                        <MotionProjects close={onCloseProjects} variants={variants} initial="hidden" animate="visible" exit="hidden" />
                    )}
                </AnimatePresence>
            </Box>
        </Flex>
    )
}

export default LandingPage