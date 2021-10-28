import React from 'react';
import {
  VStack,
  HStack,
  Center,
  Button,
  StackDivider,
  useDisclosure,
  Box,
  Flex,
  Spacer,
  CloseButton,
} from '@chakra-ui/react';
import { MainImg } from '../MainImg';
import CompSci from '../components/CompSci'
import Projects from '../components/Projects';
import SocialLinks from '../components/SocialLinks';
import { BsPersonFill } from 'react-icons/bs'
import { VscProject } from 'react-icons/vsc'
import { AnimatePresence, motion } from 'framer-motion';

const MotionFlex = motion(Flex)

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

    const aboutVariants = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

    const projVariants = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

    return (
        <Flex>
            <Box pl={5} w={1/3}>
                <AnimatePresence>
                    {isOpenCV && (
                        <MotionFlex variants={aboutVariants} initial="hidden" animate="visible" exit="hidden">
                            <CompSci close={onCloseCV} />
                            <CloseButton onClick={onCloseCV} />
                        </MotionFlex>
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

            <Box pr={5} w={1/3}>
                <AnimatePresence>
                    {isOpenProjects && (
                        <MotionFlex variants={projVariants} initial="hidden" animate="visible" exit="hidden">
                            <Spacer />
                            <Projects close={onCloseProjects} />
                            <CloseButton onClick={onCloseProjects} />
                        </MotionFlex>
                    )}
                </AnimatePresence>
            </Box>
        </Flex>
    )
}

export default LandingPage