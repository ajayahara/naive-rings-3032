import { Image } from '@chakra-ui/image'
import { Box, Center, SimpleGrid, Text } from '@chakra-ui/layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ImageCrausel2 = () => {
  
    const[mg,setMet]=useState([])
    useEffect(()=>{
         axios.get("https://kiwi-discovered-pyjama.glitch.me/img_crau2")
    .then((res)=>setMet(res.data))

    },[])
  return (
<>
<Text textAlign={"left"} ml={"38px"} fontSize={"20px"} fontWeight= {'bold'}>Health & Personal Care</Text>
    <Box mt={"20px"} h={"300px"} color={"black"} >
  

    <Box ml={"40px"} >
   
        <SimpleGrid columns={[1,2,4,6]} w={"83%"}  >
           {mg.length>0 && mg.map(({img},index)=>(
                <SimpleGrid  key={index} columns={1}  w={"200px"}  rounded='md'  >
                <Center>
                <Box >
                <Image  src={img} w={"180px"} h={"210px"}   _groupHover={{ color: 'tomato' }}></Image>
                </Box>
                </Center>
                
               
               
                </SimpleGrid >
            ))
           }
         
        </SimpleGrid>
        
    </Box>
   
    </Box>
    </>
  )
  
}

export default ImageCrausel2