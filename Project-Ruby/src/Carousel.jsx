import { Box, Button, Flex, HStack, Image, Text, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { placeholders } from './assets/images';
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '420px',
  md: '955px',
  lg: '1100px',
  xl: '2200px',
  '2xl': '3536px',
}
const titles = ['placeholder1', 'placeholder2', 'placeholder3', 'placeholder4', 'placeholder5', 'placeholder6', 'placeholder7', 'placeholder8', 'placeholder9', 'placeholder10', 'placeholder11', 'placeholder12', 'placeholder13','placeholder14', 'placeholder15', 'placeholder16', 'placeholder17', 'placeholder18', 'placeholder19', 'placeholder20'  ]
// 3. Extend the theme
export default function Carousel() {
    let currentSlide = 0
    const [slide, setSlide] = useState(currentSlide)
    const [touchStart, setTouchStart] = useState([0, 0]);
    const [touchEnd, setTouchEnd] = useState(0);
    const theme = extendTheme({ breakpoints })
    const changeSlide = (e) => {
        setSlide(Number(e.target.name))
        console.log( typeof e.target.name, e)
    }
    const previousSlide = () => {
        if (slide === 0) {
            setSlide(placeholders.length - 1)
        } else {
        setSlide(slide - 1)}
    }
    const nextSlide = () => {
        if (slide === placeholders.length - 1) {
            setSlide(0)
            console.log(slide)
        } else {
            setSlide(slide + 1)
            console.log(slide)
        }
    }

    const handleTouchStart = (e) => {
    setTouchStart([e.targetTouches[0].clientX, e.targetTouches[0].clientY]);
}

    const handleTouchMove= (e)=> {
    setTouchEnd([e.targetTouches[0].clientX, e.targetTouches[0].clientY]);
}

    const handleTouchEnd= () =>{
    if (touchStart[0] - touchEnd[0] > 150 || touchStart[1] - touchEnd[1] > 150) {
        nextSlide()
    }

    if (touchStart[0] - touchEnd[0] < -150 || touchStart[1] - touchEnd[1] > 150) {
        previousSlide()
    }
}
    const textbanner = <Flex>{titles.map((title, idx) => slide == idx ? <Text key={idx} fontSize={'2.5em'}>{title}</Text> : console.log(idx))}</Flex>
    const focusedSlide = <Flex flexFlow={'column nowrap'} alignItems={'center'}>{textbanner} {placeholders.map((item, index) => slide == index ?
        <Box key={index} className="active" style={{ display: 'flex' }}
                minW={['95vw', '60vw', null, '80vh']} maxW={['70vw', '70vw', null, '80vh']} 
                minH={['95vw', '60vw', null, '80vh']} maxH={['70vw', '70vw', null, '80vh']}>
            <Image boxSize={'100%'} src={item} 
        onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}/></Box> :
        <Box key={index} className="hidden" style={{ display: 'none' }}
                minW={['70vw', '60vw', null, '80vh']} maxW={['70vw', '60vw', null, '80vh']} 
                minH={['70vw', '60vw', null, '80vh']} maxH={['70vw', '60vw', null, '80vh']}>
            <Image boxSize={'100%'} src={item} /></Box>)}</Flex>
    const minislides =
        <Flex flexFlow={[ 'column nowrap', 'column nowrap', null,'row nowrap']} 
        width={[null, null, '120px', '80%']} 
        minH={'120px'} maxH={['85vw','80vh']} 
        position={["fixed", 'relative']} right={'10px'}
        margin={'20px 15px'} overflow={[ 'hidden scroll','hidden scroll',null, 'scroll hidden']}>
            {placeholders.map((item, index) => slide == index ?
            <Box
                minW={['2rem','100px']} maxW={['2rem','100px']}
                minH={['2rem','100px']}
                key={index} 
                margin={'0px 15px 10px'} 
                className="active" >
                    <Image onClick={changeSlide} 
                        name={index} 
                        borderRadius={['50px','8px']} boxSize={'100%'} 
                        src={item} /></Box> :
            <Box 
                minW={['2rem','100px']} maxW={['2rem','100px']} 
                minH={['2rem','100px']} maxH={['2rem','100px']}
                key={index}  
                margin={'0px 15px 10px'} >
                    <Image onClick={changeSlide} 
                        name={index}
                        borderRadius={['50px','8px']} boxSize={'100%'} 
                        src={item} /></Box>)}
        </Flex>
    return (
        <Flex flexFlow={[null,'row nowrap','row nowrap','column nowrap']} 
        placeContent={'center'} placeItems={'center'} textAlign={'center'} 
        h={'100vh'} w={'100vw'}>
            {focusedSlide}
            {minislides}
            <HStack display={["none","none",null,'flex']} position={"fixed"} width={'95vw'} justifyContent={'space-between'} >
                <Button onClick={previousSlide}>Previous</Button>
                <Button onClick={nextSlide}>Next</Button>
            </HStack>
        </Flex>
    )
}