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
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  AddIcon,
  ChevronDownIcon,
  ArrowUpIcon,
  ExternalLinkIcon,
  EditIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

const ClientDetails = () => {
  const [clients, setClients] = useState([]);
  const clientsData = async () => {
    try {
      let data = await fetch(`http://localhost:8080/client`);
      data = await data.json();
      setClients(data);
      console.log(clients);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    clientsData();
  }, []);

  return (
    <Box width="85%" p="5">
      <Flex>
        <Heading size="xl" fontWeight="500">
          Clients
        </Heading>
        <Spacer />
        <Button colorScheme="blue" leftIcon={<AddIcon />}>
          New Client
        </Button>
      </Flex>
      <Box mt="4">
        <Input w="270px" placeholder="Search by Team member name" />
      </Box>

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
            {/* <Tr>
              <Td fontSize="14">Aakarsh</Td>
              <Td fontSize="14" cursor="pointer" color="blue" _hover={{color : "darkBlue"}}>View Activity <ExternalLinkIcon mb="1"/> </Td>
              <Td fontSize="14">aakarsh604@gmail.com</Td>
              <Td fontSize="14" isNumeric>{`₹ 50.00`}</Td>
              <Td fontSize="14" isNumeric>{`₹ 50.00`}</Td>
              <Td fontSize="14">Admin</Td>
              <Td fontSize="14">Active</Td>
              <Td fontSize="14" cursor="pointer" _hover={{fontWeight : 500}}>Edit <EditIcon mb="1"/></Td>
            </Tr> */}
            {clients?.map((client, index) => (
              <Tr key={index}>
                <Td w={"50%"} fontWeight="500" fontSize="15">
                  {client.name}
                </Td>
                <Td fontWeight="500" fontSize="15">
                  {client.contactPerson}
                </Td>
                <Td fontWeight="500" fontSize="15">
                  {client.email}
                </Td>
                <Td fontWeight="500" fontSize="15">
                  STATUS <ArrowUpIcon boxSize="5" mb="1" />
                </Td>
                <Td fontWeight="500" fontSize="15">
                 
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
                          <MenuItem>Edit</MenuItem>
                          <MenuItem >
                            Archive
                          </MenuItem>
                          <MenuItem>Delete</MenuItem>
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
  );
};

export default ClientDetails;
