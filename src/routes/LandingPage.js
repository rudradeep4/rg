import React from 'react';
import {
    Flex,
    Box,
    VStack,
    Text,
    Center
} from '@chakra-ui/react';
import { MainImg } from '../MainImg';
import SocialLinks from '../components/SocialLinks';
 
const LandingPage = () => {

    return (
        <Flex>
            <Box w={1/3}></Box>

            <Center w={1/3}>
                <VStack>
                    <MainImg />
                    <Text pt={8} pb={4} textAlign='center'>
                        I'm <b>Rudradeep Guha</b>, a cognitive neuroscientist studying the neural bases of language and consciousness.
                    </Text>
                    <SocialLinks />
                </VStack>
            </Center>

            <Box w={1/3}></Box>
        </Flex>
    )
}

export default LandingPage