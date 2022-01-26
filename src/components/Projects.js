import {
    Box,
    Text,
    Divider,
    Image,
    Center,
    LinkBox,
    LinkOverlay,
    useOutsideClick,
    useMediaQuery,
    VStack
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const MotionImage = motion(Image)
const MotionBox = motion(Box)

const Projects = React.forwardRef(({close}, ref) => {

    const [isLargeScreen] = useMediaQuery("(min-width: 768px)")

    const useOverlayDisp = () => {
        const [details, setDetails] = useState(false)

        const showDetails = () => {
            setDetails(true)
        }
        const hideDetails = () => {
            setDetails(false)
        }

        return {
            details,
            showDetails,
            hideDetails
        }
    }

    const variants = {
        visible: {opacity: 1, scaleY: 1, originY: 0},
        hidden: {opacity: 0, scaleY: 0, originY: 0},
    }

    const btDts = useOverlayDisp()
    const bardoDts = useOverlayDisp()
    const sg8Dts = useOverlayDisp()

    useOutsideClick({
        ref: ref,
        handler: () => close(),
        enabled: isLargeScreen ? true : false
    })

    return (
        <VStack 
            ref={ref} 
            textAlign="center" 
            spacing={10} 
            h={700} 
            overflowY='scroll'
            css={{
                '&::-webkit-scrollbar': {
                  width: '2px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '2px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "#000000",
                  borderRadius: '24px',
                },
            }}
        >

            <Text pt={10} pb={5} fontSize="lg" fontWeight="semibold">
                Projects
            </Text>

            <LinkBox 
                onMouseEnter={btDts.showDetails} 
                onMouseLeave={btDts.hideDetails} 
            >
                <LinkOverlay href="http://burning-trees.vercel.app" isExternal>
                    <MotionBox fontSize="md" variants={variants} initial="hidden" animate="visible" pb={2}>
                        <Text fontWeight="semibold">Burning Trees</Text>
                        <Text>My personal music library.</Text>
                        <Center pt={2}>
                            <MotionImage 
                                w={250}
                                h={150}
                                loading="eager"
                                src="bt.png" 
                                rounded="lg" 
                                variants={variants} 
                                initial="hidden"
                                animate="visible"
                            />
                        </Center>
                    </MotionBox>
                </LinkOverlay>
            </LinkBox>

            <LinkBox 
                onMouseEnter={bardoDts.showDetails} 
                onMouseLeave={bardoDts.hideDetails} 
            >
                <LinkOverlay href="http://bardocap.herokuapp.com" isExternal>
                    <MotionBox fontSize="md" variants={variants} initial="hidden" animate="visible" pb={2}>
                        <Text fontWeight="semibold">Bardo Capital</Text>
                        <Text>Design for an upcoming hedge fund with a minimalist ethos.</Text>
                        <Center pt={2}>
                            <MotionImage 
                                w={250}
                                h={150}
                                loading="eager"
                                src="bardocap.png" 
                                rounded="lg" 
                                variants={variants} 
                                initial="hidden"
                                animate="visible"
                            />
                        </Center>
                    </MotionBox>
                </LinkOverlay>
            </LinkBox>

            <LinkBox 
                onMouseEnter={sg8Dts.showDetails} 
                onMouseLeave={sg8Dts.hideDetails} 
            >
                <LinkOverlay href="http://sg8.vercel.app" isExternal>
                    <MotionBox fontSize="md" variants={variants} initial="hidden" animate="visible" pb={2}>
                        <Text fontWeight="semibold">SG8</Text>
                        <Text>Portfolio website for financial analyst and trader.</Text>
                        <Center pt={2}>
                            <MotionImage 
                                w={250}
                                h={150}
                                loading="eager"
                                src="sg8.png" 
                                rounded="lg" 
                                variants={variants} 
                                initial="hidden"
                                animate="visible"
                            />
                        </Center>
                    </MotionBox>
                </LinkOverlay>
            </LinkBox>
        </VStack>
    )
})

export default Projects