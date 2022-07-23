import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Textarea,
  Stack,
  Radio,
  Flex,
  RadioGroup,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  InputGroup,
  InputLeftAddon,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import styles from "./Team.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTeam = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === checked) {
      setForm({
        ...form,
        [name]: checked,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    console.log(form);
    await axios.post("http://localhost:8080/teams", form);
    navigate("/teams");
  };

  return (
    <Box w="85%" mb="50">
      <Box w="55%" m="auto">
        <Heading fontWeight="500" mt="30">
          Add Team member
        </Heading>

        <FormControl>
          <FormLabel color="gray" mt="19" fontSize="13">
            NAME
          </FormLabel>
          <Input type="text" name="name" onChange={handleChange} />
          <FormLabel color="gray" mt="19" fontSize="13">
            Email
          </FormLabel>
          <Input type="email" name="email" onChange={handleChange} />
          <FormLabel color="gray" mt="19" fontSize="13">
            NOTES (PRIVATE TO ADMINS)
          </FormLabel>
          <Textarea
            placeholder="Add notes..."
            name="note"
            onChange={handleChange}
          />

          <hr className={styles.horizonatalLine} />

          <FormLabel color="gray" mt="19" fontSize="13">
            ROLE
          </FormLabel>
          <RadioGroup>
            <Stack>
              <Stack
                direction="row"
                gap={10}
                h="70"
                border="1px solid lightGray"
                rounded="5"
              >
                <Radio
                  value="Admin"
                  pl="10"
                  size="md"
                  name="role"
                  onChange={handleChange}
                >
                  <Flex direction="column">
                    <Box pl="10" fontWeight="500" color="gray.600">
                      Admin
                    </Box>
                    <Box pl="10" color="gray">
                      Can view and edit anything in group or workspace.
                    </Box>
                  </Flex>
                </Radio>
              </Stack>

              <Stack
                direction="row"
                gap={10}
                h="70"
                border="1px solid lightGray"
                rounded="5"
              >
                <Radio
                  value="Manager"
                  pl="10"
                  size="md"
                  name="role"
                  onChange={handleChange}
                >
                  <Flex direction="column">
                    <Box pl="10" fontWeight="500" color="gray.600">
                      Manager
                    </Box>
                    <Box pl="10" color="gray">
                      Can view and manage assigned projects. Cannot view other
                      projects.
                    </Box>
                  </Flex>
                </Radio>
              </Stack>

              <Stack
                direction="row"
                gap={10}
                h="70"
                border="1px solid lightGray"
                rounded="5"
              >
                <Radio
                  value="Normal"
                  pl="10"
                  size="md"
                  name="role"
                  onChange={handleChange}
                >
                  <Flex direction="column">
                    <Box pl="10" fontWeight="500" color="gray.600">
                      Normal
                    </Box>
                    <Box pl="10" color="gray">
                      Can only track time on assigned projects/tasks.
                    </Box>
                  </Flex>
                </Radio>
              </Stack>
            </Stack>
          </RadioGroup>

          <Accordion allowMultiple mt="30">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="500"
                    color="gray.500"
                    fontSize="xl"
                  >
                    Labour Rate
                    <AccordionIcon />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Enter default hourly rate for the team member to calculate Labor
                cost. This rate can be further specified on individual projects.
                <InputGroup mt="5">
                  <InputLeftAddon h="8" children="INR" />
                  <Input
                    size="sm"
                    type="tel"
                    placeholder="0"
                    name="laborRate"
                    onChange={handleChange}
                  />
                </InputGroup>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="500"
                    color="gray.500"
                    fontSize="xl"
                  >
                    Billable Rate
                    <AccordionIcon />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Enter default billable rate for the team member to calculate
                Billable cost. This rate can be further specified on individual
                projects.
                <InputGroup mt="5">
                  <InputLeftAddon h="8" children="INR" />
                  <Input
                    size="sm"
                    type="tel"
                    placeholder="0"
                    name="billableRate"
                    onChange={handleChange}
                  />
                </InputGroup>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Checkbox mt="25">
            Automatically add this team member to all new projects
          </Checkbox>

          <Box mt="25">
            <Button colorScheme="blue" onClick={handleSubmit}>
              Add Member
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default AddTeam;
