import React from "react";
import { Box, Heading, Input, Textarea, Text } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

const AddTeam = () => {
  return (
    <Box w="85%" border="1px solid">
      <Box w="48%" m="auto">
        <Heading fontWeight="500" mt="30">
          Add Team member
        </Heading>

        <FormControl>
          <FormLabel color="gray" mt="19" fontSize="13">NAME</FormLabel>
          <Input type="text" />
          <FormLabel color="gray" mt="19" fontSize="13">Email</FormLabel>
          <Input type="email" />
          <FormLabel color="gray" mt="19" fontSize="13">NOTES (PRIVATE TO ADMINS)</FormLabel>
          <Textarea placeholder="Add notes..."/>

          <hr/>

          <Text></Text>
        </FormControl>
      </Box>
    </Box>
  );
};

export default AddTeam;
