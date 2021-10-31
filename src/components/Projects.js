import {
    Box,
    Text,
    Divider,
    Image,
    LinkBox,
    LinkOverlay,
    useOutsideClick,
    Center,
    useMediaQuery
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const MotionImage = motion(Image)
const MotionText = motion(Text)

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
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

    const bardoDts = useOverlayDisp()
    const sg8Dts = useOverlayDisp()

    useOutsideClick({
        ref: ref,
        handler: () => close(),
        enabled: isLargeScreen ? true : false
    })

    return (
        <Box ref={ref} textAlign="center">
            <Text py={10} fontSize="lg" fontWeight="semibold">
                Projects
            </Text>
            <Center>
                <LinkBox 
                    onMouseEnter={bardoDts.showDetails} 
                    onMouseLeave={bardoDts.hideDetails} 
                    w={[250, 350]} 
                    h={200} 
                    alignItems="center"
                    display="flex"
                >
                    <LinkOverlay href="http://bardocap.herokuapp.com" isExternal>
                        {isLargeScreen 
                            ?   <AnimatePresence>
                                    {bardoDts.details && (
                                        <MotionImage 
                                            src="bardocap.png" 
                                            rounded="lg" 
                                            variants={variants} 
                                            initial="hidden" 
                                            animate="visible" 
                                            exit="hidden" 
                                        />
                                    )}
                                    {!bardoDts.details && (
                                        <MotionText fontSize="md" variants={variants} initial="hidden" animate="visible">
                                            <Text fontWeight="semibold">Bardo Capital</Text>
                                            <Text>Design for an upcoming hedge fund with a minimalist ethos.</Text>
                                        </MotionText>
                                    )}
                                </AnimatePresence>
                            :   <Image 
                                    src="bardocap.png" 
                                    rounded="lg" 
                                />
                        }
                    </LinkOverlay>
                </LinkBox>
            </Center>
            <br />
            <Divider bgColor="black" borderColor="black" pt={1} />
            <br />
            <Center>
                <LinkBox 
                    onMouseEnter={sg8Dts.showDetails} 
                    onMouseLeave={sg8Dts.hideDetails} 
                    w={[250, 350]} 
                    h={200} 
                    alignItems="center"
                    display="flex"
                >
                    <LinkOverlay href="http://sg8.vercel.app" isExternal>
                        {isLargeScreen 
                            ?   <AnimatePresence>
                                    {sg8Dts.details && (
                                        <MotionImage 
                                            src="sg8.png" 
                                            rounded="lg" 
                                            variants={variants} 
                                            initial="hidden" 
                                            animate="visible" 
                                            exit="hidden" />
                                    )}
                                    {!sg8Dts.details && (
                                        <MotionText fontSize="md" variants={variants} initial="hidden" animate="visible">
                                            <Text fontWeight="semibold">SG8</Text>
                                            <Text>Portfolio website for financial analyst and trader.</Text>
                                        </MotionText>
                                    )}
                                </AnimatePresence>
                            :   <Image 
                                    src="sg8.png" 
                                    rounded="lg" 
                                /> 
                        }   
                    </LinkOverlay>
                </LinkBox>
            </Center>
        </Box>
    )
})

export default Projects