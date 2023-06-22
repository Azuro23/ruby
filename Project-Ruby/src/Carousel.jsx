import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { placeholders } from './assets/images';

export default function Carousel() {
    let currentSlide = 0
    const [slide, setSlide] = useState(currentSlide)
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const changeSlide = (e) => {
        setSlide(e.target.name)
        console.log( typeof e.target.name, e)
    }
    const previousSlide = () => {
        setSlide(slide -1)
    }
    const nextSlide = () => {
        setSlide(slide +1)
    }

const handleTouchStart= (e)=> {
    setTouchStart(e.targetTouches[0].clientX);
}

const handleTouchMove= (e)=> {
    setTouchEnd(e.targetTouches[0].clientX);
}

const handleTouchEnd= () =>{
    if (touchStart - touchEnd > 150) {
        // do your stuff here for left swipe
        setSlide(slide +1);
    }

    if (touchStart - touchEnd < -150) {
        // do your stuff here for right swipe
        setSlide(slide -1);
    }
}
    const focusedSlide = placeholders.map((item, index) => slide == index ? <div key={index} className="active" style={{ display: 'flex' }}><Image boxSize={'80vh'} src={item} /></div> : <div key={index} className="hidden" style={{ display: 'none' }}><Image src={item} /></div>)
    const minislides = <Flex flexFlow={'row nowrap'} width={'80%'} minH={'120px'} margin={'20px 15px'} overflowX={'scroll'}>{placeholders.map((item, index) => slide == index ?
        <Box minW={'100px'} minH={'100px'} key={index} margin={'0px 15px'}  className="active" style={{ display: 'flex' }}><Image onClick={changeSlide} name={index}borderRadius={'8px'} boxSize={'100px'}  src={item} /></Box> :
        <Box minW={'100px'} minH={'100px'} key={index} margin={'0px 15px'} ><Image onClick={changeSlide} name={index}borderRadius={'8px'} boxSize={'100px'} src={item} /></Box>)}</Flex>
    return (
        <Flex flexFlow={'column nowrap'} placeContent={'center'} placeItems={'center'} textAlign={'center'} h={'100vh'} w={'100vw'}>
            {focusedSlide}
            {minislides}
            <HStack>
                <Button onClick={previousSlide}>Previous</Button>
                <Button onClick={nextSlide}>Next</Button>
            </HStack>
        </Flex>
    )
}