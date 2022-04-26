import {
    Link,
    IconButton,
    HStack
} from '@chakra-ui/react'
import { SiLinkedin, SiGmail } from 'react-icons/si'
import { AiFillFile } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'

const SocialLinks = () => {
    return (
        <HStack>
            <Link href="/RudradeepGuha_CV.pdf" target="_blank">
                <IconButton
                    aria-label="Resume" 
                    icon={<AiFillFile />} 
                    size="md" 
                    bgColor="#FA7B62" 
                    _hover={{bgColor:"#FA7B62", textColor: "white"}}
                    _active={{bgColor:"#FA7B62", textColor:"white"}}
                />
            </Link>
            <Link pr={1} href="mailto:rudradeep4@gmail.com" isExternal>
                <IconButton
                    aria-label="Email" 
                    icon={<SiGmail />} 
                    size="md" 
                    bgColor="#FA7B62" 
                    _hover={{bgColor:"#FA7B62", textColor: "white"}}
                    _active={{bgColor:"#FA7B62", textColor:"white"}}
                />
            </Link>
            <Link href="https://linkedin.com/in/rudradeep4" isExternal>
                <IconButton
                    aria-label="LinkedIn" 
                    icon={<SiLinkedin />} 
                    size="md" 
                    bgColor="#FA7B62" 
                    _hover={{bgColor:"#FA7B62", textColor: "white"}}
                    _active={{bgColor:"#FA7B62", textColor:"white"}}
                />
            </Link>
            <Link href="https://github.com/rudradeep4" isExternal>
                <IconButton 
                    aria-label="Github" 
                    icon={<VscGithub />} 
                    size="md" 
                    bgColor="#FA7B62" 
                    _hover={{bgColor:"#FA7B62", textColor:"white"}}
                    _active={{bgColor:"#FA7B62", textColor:"white"}}
                />
            </Link>
        </HStack>
    )
}

export default SocialLinks