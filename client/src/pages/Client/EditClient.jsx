import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Input,
  Textarea,
  Spacer,
  HStack,
 
  Button,
  Flex
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react"
import axios from "axios";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";


const EditClient = () => {

  const [form, setForm] = useState({});
  console.log('form:', form)
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value} = e.target;
    
    
      setForm({
        ...form,
        [name]: value,
      });
    
  };

  useEffect(() => {
    getData();
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePatch();
  };

  const getData = async () => {
    console.log(form);
    const res = await axios(`http://localhost:4040/client/${id}`);
    setForm(res.data);
    console.log(res.data)
}

const handlePatch = async () => {
  console.log(form)
   await axios.put(`http://localhost:4040/client/${id}`, form);
     
     navigate("/Clients");
}

  return (
    <Flex w='100%'>
    <Box>
      <Sidebar />
    </Box>
    
    <Box w='40%' ml={'20rem'}  pt='3rem' pb='2rem'>
    <Heading>Edit client</Heading>
    <FormControl  onSubmit={handleSubmit} style={{width:'80%'}}>
      <FormLabel fontSize='12px'mt='1rem' color='gray.600' value={form.name}>NAME</FormLabel>
      <Input onChange={handleChange} w='100%' variant='outline' name='name'  value={form.name}></Input>
      <FormLabel fontSize='12px'mt='1rem' color='gray.600' value={form.contactperson}  >CONTACT PERSON</FormLabel>
      <Input type="text" onChange={handleChange} w='100%' variant='outline' name='contactperson' value={form.contactperson} ></Input>
      <FormLabel fontSize='12px'mt='1rem' color='gray.600' value={form.email}>EMAIL</FormLabel>
      <Input type='email' onChange={handleChange} w='100%' variant='outline' name='email' value={form.email}></Input>
      <FormLabel fontSize='12px'mt='1rem' color='gray.600' value={form.phone}>PHONE</FormLabel>
      <Input onChange={handleChange} w='100%' variant='outline' name='phone' value={form.phone} ></Input>
      <FormLabel fontSize='12px'mt='1rem' color='gray.600' >ADDRESS</FormLabel>
      <Textarea onChange={handleChange} size='lg' h='4rem' w='100%' name='address' value={form.address}></Textarea>
      <HStack spacing={1} justifyContent='space-betwee6'>
      <Box w='46%'>
      <FormLabel fontSize='12px'mt='1rem' color='gray.600'>TAX NAME</FormLabel>
      <Input onChange={handleChange}  value={form.taxname} w='100%' variant='outline' name='taxName' ></Input>
      </Box>
     <Box w='46%'>
      <FormLabel fontSize='12px'mt='1rem' color='gray.600'>TAX PERCENTAGE</FormLabel>
      <Input type='number' onChange={handleChange}  value={form.taxparcentage} w='100%' variant='outline' name='taxparcentage' ></Input>
      </Box>
    </HStack>
      <FormLabel fontSize='12px'mt='1rem' color='gray.600'>TAX NUMBER</FormLabel>
      <Input onChange={handleChange} w='100%'  value={form.taxnumber} variant='outline' name='taxNumber' ></Input>
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
  );
};

export default EditClient;
