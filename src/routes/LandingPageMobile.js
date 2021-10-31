import React from 'react';
import {
  VStack,
  HStack,
  Center,
  Button,
  StackDivider,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { MainImg } from '../MainImg';
import SocialLinks from '../components/SocialLinks';
import { BsPersonFill } from 'react-icons/bs'
import { VscProject } from 'react-icons/vsc'
import Projects from '../components/Projects';
import About from '../components/About';

const LandingPageMobile = () => {

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


    return (
        <Center>
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

                <Drawer
                    isOpen={isOpenCV}
                    placement="left"
                    onClose={onCloseCV}
                    size="md"
                >
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody bg="#FA7B62">
                            <About close={onCloseCV} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

                <Drawer
                    isOpen={isOpenProjects}
                    placement="right"
                    onClose={onCloseProjects}
                    size="md"
                >
                    <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody bg="#FA7B62">
                                <Projects close={onCloseProjects} />
                            </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </VStack>
        </Center>
    )
}

export default LandingPageMobile