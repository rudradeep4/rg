import React from 'react';
import {
    Box,
    VStack,
    Center,
    Button,
    useDisclosure,
    HStack,
    StackDivider,
    Drawer,
    DrawerCloseButton,
    DrawerBody,
    DrawerContent,
} from '@chakra-ui/react';
import { MainImg } from '../MainImg';
import SocialLinks from '../components/SocialLinks';
import CompSci from '../components/CompSci'
import { BsPersonFill } from 'react-icons/bs'
import { VscProject } from 'react-icons/vsc'
import Projects from '../components/Projects';

const LandingPageMobile = () => {

    const { isOpen: isOpenAbout, onOpen: onOpenAbout, onClose: onCloseAbout } = useDisclosure()
    const { isOpen: isOpenProjects, onOpen: onOpenProjects, onClose: onCloseProjects } = useDisclosure()



    return (
        <Box>
            <Center pt={75}>
                <VStack>
                    <MainImg />
                    <HStack spacing={5} pt={20} pb={3} divider={<StackDivider borderColor="black" />}>
                        <Button  
                            onClick={onOpenAbout} 
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

            <Drawer
                isOpen={isOpenAbout}
                placement="left"
                size="md"
                onClose={onCloseAbout}
            >
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody bg="#FA7B62">
                    <CompSci close={onCloseAbout} />
                </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Drawer
                isOpen={isOpenProjects}
                placement="right"
                size="md"
                onClose={onCloseProjects}
            >
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody bg="#FA7B62">
                    <Projects close={onCloseProjects} />
                </DrawerBody>
                </DrawerContent>
            </Drawer>            
        </Box>
    )
}

export default LandingPageMobile