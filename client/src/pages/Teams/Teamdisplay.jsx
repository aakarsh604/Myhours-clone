import React, { useEffect, useState } from "react";
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
import {Link} from "react-router-dom";
import axios from "axios";

const Teamdisplay = () => {
  const [data, setData] = useState([]);

useEffect(() => {
    getData();
},[]);

const getData = async () => {
    const r = await axios("http://localhost:8080/teams");
    setData(r.data);
}

  return (
    <Box width="85%" p="5">
      <Flex>
        <Heading size="xl" fontWeight="500">
          Team members
        </Heading>
        <Spacer />
        <Button colorScheme="blue" leftIcon={<AddIcon />}>
          <Link to="/add">New Team Member</Link>
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
            {data && data.map((el, ind) => (
              <Tr key={ind}>
              <Td fontSize="14">{el.name}</Td>
              <Td fontSize="14" cursor="pointer" color="blue" _hover={{color : "darkBlue"}}>View Activity <ExternalLinkIcon mb="1"/> </Td>
              <Td fontSize="14">{el.email}</Td>
              <Td fontSize="14" isNumeric>{`₹ ${el.laborRate}.00`}</Td>
              <Td fontSize="14" isNumeric>{`₹ ${el.billableRate}.00`}</Td>
              <Td fontSize="14">{el.role}</Td>
              <Td fontSize="14">Active</Td>
              <Td fontSize="14" cursor="pointer" _hover={{fontWeight : 500}}><Link to={`/edit/${el.id}`}>Edit </Link><EditIcon mb="1"/></Td>
            </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Teamdisplay;
