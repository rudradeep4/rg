import {
    Box,
    Text,
    AspectRatio,
    Image,
    LinkBox,
    LinkOverlay,
    useOutsideClick,
    useMediaQuery
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const MotionLinkBox = motion(LinkBox)
const MotionText = motion(Text)
const MotionImage = motion(Image)

const Projects = ({close}) => {

    const [isLargeScreen] = useMediaQuery("(min-width: 768px)")

    const ref = React.useRef()
    useOutsideClick({
        ref: ref,
        handler: () => close()
    })

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

    const textVariants = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

    const imgVariants = {
        visible: {opacity: 1},
        hidden: {opacity: 0.1}
    }

    const bardoDts = useOverlayDisp()
    const sg8Dts = useOverlayDisp()

    return (
        <Box ref={ref} w={[null, 400]} textAlign="center">
            <Text py={10} fontSize="lg" fontWeight="semibold">Projects</Text>
            <MotionLinkBox 
                pb={10} 
                onMouseOver={isLargeScreen ? bardoDts.showDetails : null} 
                onMouseOut={isLargeScreen ? bardoDts.hideDetails : null}
            >
                {isLargeScreen 
                    ?   null 
                    :   <Text fontSize="sm" fontWeight="semibold">
                            Bardo Capital<br />An initial design for a hedge fund that prides itself on simplicity and a minimalist ethos.
                        </Text>
                }
                <LinkOverlay href="http://bardocap.herokuapp.com" isExternal>
                    <AspectRatio ratio={16/9} >
                        <Box>
                            <AnimatePresence>
                                {bardoDts.details && (
                                    <MotionText 
                                        pl={5} 
                                        pr={5} 
                                        fontSize="sm"
                                        fontWeight="semibold" 
                                        color="white" 
                                        pos="absolute" 
                                        variants={textVariants} 
                                        initial="hidden" 
                                        animate="visible" 
                                        exit="hidden"
                                    >
                                        Bardo Capital<br /><br />An initial design for a hedge fund that prides itself on simplicity and a minimalist ethos.
                                    </MotionText>
                                )}
                            </AnimatePresence>
                            <MotionImage 
                                src='./bardocap.png' 
                                alt="Bardo Preview Photo" 
                                objectFit="contain" 
                                borderRadius="md" 
                                variants={imgVariants} 
                                initial={bardoDts.details ? "visible" : "hidden"} 
                                animate={bardoDts.details ? "hidden" : "visible"} 
                            />
                        </Box>
                    </AspectRatio>
                </LinkOverlay>
            </MotionLinkBox>

            <MotionLinkBox 
                onMouseOver={isLargeScreen ? sg8Dts.showDetails : null} 
                onMouseOut={isLargeScreen ? sg8Dts.hideDetails : null}
            >
                {isLargeScreen 
                    ?   null 
                    :   <Text fontSize="sm" fontWeight="semibold">
                            SG8<br />A portfolio website for a financial analyst and trader.
                        </Text>
                }
                <LinkOverlay href="http://sg8.vercel.app" isExternal>
                    <AspectRatio ratio={16/9} >
                        <Box>
                            <AnimatePresence>
                                {sg8Dts.details && (
                                    <MotionText 
                                        pl={5} 
                                        pr={5} 
                                        fontSize="sm"
                                        fontWeight="semibold" 
                                        color="white" 
                                        pos="absolute" 
                                        variants={textVariants} 
                                        initial="hidden" 
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        SG8<br /><br />A portfolio website for a financial analyst and trader. 
                                    </MotionText>
                                )}
                            </AnimatePresence>
                            <MotionImage 
                                src='./sg8.png' 
                                alt="SG8 Preview Photo" 
                                objectFit="contain" 
                                borderRadius="md" 
                                variants={imgVariants} 
                                initial={sg8Dts.details ? "visible" : "hidden"} 
                                animate={sg8Dts.details ? "hidden" : "visible"} 
                            />
                        </Box>
                    </AspectRatio>
                </LinkOverlay>
            </MotionLinkBox>
        </Box>
    )
}

export default Projects