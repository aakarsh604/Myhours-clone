import React, { useState, useEffect } from "react";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
} from "@chakra-ui/react";
import {
  AddIcon,
  ChevronDownIcon,
  ArrowUpIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import Sidebar from "../sidebar/Sidebar";

const ClientDetails = () => {
  const [clients, setClients] = useState([]);
  const clientsData = async () => {
    try {
      let data = await fetch(`https://masaihours.herokuapp.com/client/clientdata`);
      data = await data.json();
      setClients(data);
      console.log(clients);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://masaihours.herokuapp.com/client/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        clientsData()
      })
      .catch((err) => console.error(err));
  };
  // const search = async(data)=>{
  //   await axios.get(`http://localhost:4040/`)
  //   .then((res) =>setClients(res.data) )
  //   .catch((err) => console.log(err))
  // }
  useEffect(() => {
    clientsData();
  },[]);
  const navigate = useNavigate()

  return (
    <Flex w='100%'>
    <Box>
      <Sidebar />
    </Box>
    <Spacer/>
    <Box width="85%"  pt='3rem'>
     <Flex>
        <Heading size="xl" fontWeight="500">
          Clients
        </Heading>
        <Spacer />
        <Button  colorScheme="blue" leftIcon={<AddIcon />}>
          <Link to="/addClient">New Client</Link>
        </Button>
      </Flex>
      <HStack mt="4">
        <Input w="270px" placeholder="Search by Client name" />
      </HStack>

      <TableContainer mt="5">
        <Table size="md">
          <Thead borderBottom="2px solid lightGray" fontSize="lg">
            <Tr>
              <Th w={"50%"} fontWeight="500" fontSize="15">
                NAME <ArrowUpIcon boxSize="5" mb="1" />
              </Th>
              <Th fontWeight="500" fontSize="15">
                CONTACT PERSON
              </Th>
              <Th fontWeight="500" fontSize="15">
                CONTACT DETAIL
              </Th>
              <Th fontWeight="500" fontSize="15">
                STATUS <ArrowUpIcon boxSize="5" mb="1" />
              </Th>
              <Th fontWeight="500" fontSize="15">
                ACTION
              </Th>
            </Tr>
          </Thead>
          <Tbody>
           
            {clients?.map((client) => (
              <Tr key={client.id}>
                <Td w={"50%"}  fontSize="15">
                  {client.name}
                </Td>
                <Td  fontSize="15">
                  {client.contactperson}
                </Td>
                <Td  fontSize="15">
                  {client.email}
                </Td>
                <Td  fontSize="15">
                  Active 
                </Td>
                <Td  fontSize="15">
                 
                  <Menu>
                    {({ isOpen }) => (
                      <>
                        <MenuButton
                          isActive={isOpen}
                          as={Button}
                          rightIcon={<ChevronDownIcon />}
                        >
                          {isOpen ? <SettingsIcon boxSize="5" mb="1" /> : <SettingsIcon boxSize="5" mb="1" />}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => navigate(`/editClient/${client._id}`)}>Edit</MenuItem>
                          <MenuItem >
                            Archive
                          </MenuItem>
                          <MenuItem onClick={()=>handleDelete(client._id)} >Delete</MenuItem>
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
    </Flex>
  );
};

export default ClientDetails;
