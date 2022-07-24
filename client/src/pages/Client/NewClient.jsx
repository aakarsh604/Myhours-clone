import { Box, FormLabel, HStack, Input, TagLabel, Textarea,Heading, Button, FormControl,Flex,Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from 'react-router-dom';

const NewClient = () => {
  const  navigate = useNavigate()
  const[Client,SetClient]=useState({})
  
  const handleChange=(e)=>{
    SetClient({
      ...Client,
      [e.target.name]:e.target.value
    })
  }
  const postData =async(client)=>{
    let data = await fetch(`https://masaihours.herokuapp.com/client/clientpost`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(client)
        
    })
    data= await data.json()
    navigate("/clients")


   
   
}
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(Client);
    postData(Client)
    navigate('/clients')
    
  }
 
  return (
    <Flex w='100%'>
    <Box>
      <Sidebar />
    </Box>
    
   <Box w='40%' ml={'20rem'}  pt='3rem' pb='2rem'>
      <Heading>New client</Heading>
      <FormControl  onSubmit={handleSubmit} style={{width:'80%'}}>
        <FormLabel fontSize='12px'mt='1rem' color='gray.600'>NAME</FormLabel>
        <Input onChange={handleChange} w='100%' variant='outline' name='name' ></Input>
        <FormLabel fontSize='12px'mt='1rem' color='gray.600'>CONTACT PERSON</FormLabel>
        <Input onChange={handleChange} w='100%' variant='outline' name='contactperson'  ></Input>
        <FormLabel fontSize='12px'mt='1rem' color='gray.600'>EMAIL</FormLabel>
        <Input type='email' onChange={handleChange} w='100%' variant='outline' name='email' ></Input>
        <FormLabel fontSize='12px'mt='1rem' color='gray.600'>PHONE</FormLabel>
        <Input onChange={handleChange} w='100%' variant='outline' name='phone' ></Input>
        <FormLabel fontSize='12px'mt='1rem' color='gray.600'>ADDRESS</FormLabel>
        <Textarea onChange={handleChange} size='lg' h='4rem' w='100%' name='address'></Textarea>
        <HStack spacing={1} justifyContent='space-betwee6'>
        <Box w='46%'>
        <FormLabel fontSize='12px'mt='1rem' color='gray.600'>TAX NAME</FormLabel>
        <Input onChange={handleChange} w='100%' variant='outline' name='taxname' ></Input>
        </Box>
       <Box w='46%'>
        <FormLabel fontSize='12px'mt='1rem' color='gray.600'>TAX PERCENTAGE</FormLabel>
        <Input type='number' onChange={handleChange} w='100%' variant='outline' name='taxparcentage' ></Input>
        </Box>
      </HStack>
        <FormLabel fontSize='12px'mt='1rem' color='gray.600'>TAX NUMBER</FormLabel>
        <Input onChange={handleChange} w='100%' variant='outline' name='taxnumber' ></Input>
        <Button
          fontSize={"lg"}
            fontWeight={400}
            href={"#"}
            _hover={{
              bg: "blue.800",
            }}
            bg={"blue.400"}
            color={"white"}
            align="center"
            mb={'3px'}
            mr={'1rem'}
            mt={'1rem'}
            onClick={handleSubmit}
          >
           Save
          </Button>
          <Button
            fontSize={"lg"}
            fontWeight={400}
            href={"#"}
            _hover={{
              bg: "blue.100",
            }}
            bg={"blue.50"}
            color={"blue.800"}
            align="center"
            mb={'3px'}
            mt={'1rem'}
            onClick={() =>navigate(-1)}
          >
           Cancel
          </Button>
      </FormControl>
   </Box>
   </Flex>
  )
}

export default NewClient