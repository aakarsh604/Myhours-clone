import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Input,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";
import { AddIcon, ArrowUpIcon, ExternalLinkIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import Sidebar from "../sidebar/Sidebar";



const Teamdisplay = () => {
  const Nevigete = useNavigate()
  return (
    <>
    <div  style={{display:"flex",justifyContent:"space-between"}}>
 <div>
  {<Sidebar/>}
 </div>
 <div  style={{marginTop:"0px"}}>
    
 <Box width="100%" p="" m="15px  200px 0px  0px">
      <Flex>
        <Heading size="xl" fontWeight="500">
          Team members
        </Heading>
        <Spacer />
        <Button colorScheme="blue"  onClick={()=>{Nevigete("/team/add")}} leftIcon={<AddIcon />}>
          New Team Member
        </Button>
      </Flex>
      <Box mt="4">
        <Input w="270px" placeholder="Search by Team member name" />
      </Box>

      <TableContainer mt="5">
        <Table size="md">
          <Thead borderBottom="2px solid lightGray" fontSize="lg">
            <Tr >
              <Th fontWeight="500" fontSize="15">NAME <ArrowUpIcon boxSize="5" mb="1"/></Th>
              <Th fontWeight="500" fontSize="15">ACTIVITY</Th>
              <Th fontWeight="500" fontSize="15">EMAIL</Th>
              <Th fontWeight="500" fontSize="15" isNumeric>LABOR RATE</Th>
              <Th fontWeight="500" fontSize="15" isNumeric>BILLABLE RATE</Th>
              <Th fontWeight="500" fontSize="15">ROLE</Th>
              <Th fontWeight="500" fontSize="15">STATUS <ArrowUpIcon boxSize="5" mb="1"/></Th>
              <Th fontWeight="500" fontSize="15">ACTION</Th>  
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontSize="14">Aakarsh</Td>
              <Td fontSize="14" cursor="pointer" color="blue" _hover={{color : "darkBlue"}}>View Activity <ExternalLinkIcon mb="1"/> </Td>
              <Td fontSize="14">aakarsh604@gmail.com</Td>
              <Td fontSize="14" isNumeric>{`₹ 50.00`}</Td>
              <Td fontSize="14" isNumeric>{`₹ 50.00`}</Td>
              <Td fontSize="14">Admin</Td>
              <Td fontSize="14">Active</Td>
              <Td fontSize="14" cursor="pointer" _hover={{fontWeight : 500}}>Edit <EditIcon mb="1"/></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  </div>
    </div>

    </>
  );
};

export default Teamdisplay;
