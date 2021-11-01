import {
    Box,
    Text,
    Divider,
    Image,
    Center,
    IconButton,
    LinkBox,
    LinkOverlay,
    useOutsideClick,
    useMediaQuery,
    VStack
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { BiLinkExternal } from 'react-icons/bi'

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

    const bardoDts = useOverlayDisp()
    const sg8Dts = useOverlayDisp()

    useOutsideClick({
        ref: ref,
        handler: () => close(),
        enabled: isLargeScreen ? true : false
    })

    return (
        <VStack ref={ref} textAlign="center" spacing={10}>

            <Text py={10} fontSize="lg" fontWeight="semibold">
                Projects
            </Text>

            <LinkBox 
                onMouseEnter={bardoDts.showDetails} 
                onMouseLeave={bardoDts.hideDetails} 
            >
                {isLargeScreen 
                    ?   <LinkOverlay href="http://bardocap.herokuapp.com" isExternal>
                            <MotionBox fontSize="md" variants={variants} initial="hidden" animate="visible" pb={2}>
                                <Text fontWeight="semibold">Bardo Capital</Text>
                                <Text>Design for an upcoming hedge fund with a minimalist ethos.</Text>
                                <AnimatePresence>
                                    {!bardoDts.details && (
                                        <IconButton 
                                            icon={<BiLinkExternal />} 
                                            variant="ghost" 
                                            variants={variants} 
                                            initial="visible" 
                                            animate="hidden" />
                                    )}
                                </AnimatePresence>
                            </MotionBox>
                            {bardoDts.details && (
                                <AnimatePresence>
                                    <Center>
                                        <MotionImage 
                                            w={300}
                                            h={175}
                                            loading="eager"
                                            src="bardocap.png" 
                                            rounded="lg" 
                                            variants={variants} 
                                            initial="hidden"
                                            animate="visible"
                                        />
                                    </Center>
                                </AnimatePresence>
                            )}
                        </LinkOverlay>
                    :   <LinkOverlay href="http://bardocap.herokuapp.com" isExternal>
                            <MotionBox fontSize="md" variants={variants} initial="hidden" animate="visible" pb={2}>
                                <Text fontWeight="semibold">Bardo Capital</Text>
                                <Text>Design for an upcoming hedge fund with a minimalist ethos.</Text>
                                <Center pt={2}>
                                    <MotionImage 
                                        w={300}
                                        h={175}
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
                }
            </LinkBox>

            <Divider bgColor="black" borderColor="black" pt={1} />

            <LinkBox 
                onMouseEnter={sg8Dts.showDetails} 
                onMouseLeave={sg8Dts.hideDetails} 
            >
                {isLargeScreen
                    ?  <LinkOverlay href="http://sg8.vercel.app" isExternal>
                            <MotionBox fontSize="md" variants={variants} initial="hidden" animate="visible" pb={2}>
                                <Text fontWeight="semibold">SG8</Text>
                                <Text>Portfolio website for financial analyst and trader.</Text>
                                <AnimatePresence>
                                    {!sg8Dts.details && (
                                        <IconButton 
                                            icon={<BiLinkExternal />} 
                                            variant="ghost" 
                                            variants={variants} 
                                            initial="visible" 
                                            animate="hidden" />
                                    )}
                                </AnimatePresence>
                            </MotionBox>
                            {sg8Dts.details && (
                                <AnimatePresence>
                                    <Center>
                                        <MotionImage 
                                            w={300}
                                            h={175}
                                            loading="eager"
                                            src="sg8.png" 
                                            rounded="lg" 
                                            variants={variants} 
                                            initial="hidden"
                                            animate="visible"
                                        />
                                    </Center>
                                </AnimatePresence>
                            )}
                        </LinkOverlay> 
                    :   <LinkOverlay href="http://sg8.vercel.app" isExternal>
                            <MotionBox fontSize="md" variants={variants} initial="hidden" animate="visible" pb={2}>
                                <Text fontWeight="semibold">SG8</Text>
                                <Text>Portfolio website for financial analyst and trader.</Text>
                                <Center pt={2}>
                                    <MotionImage 
                                        w={300}
                                        h={175}
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
                }
            </LinkBox>
        </VStack>
    )
})

export default Projects