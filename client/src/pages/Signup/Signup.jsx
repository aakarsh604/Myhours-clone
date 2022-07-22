import React, { useState } from "react";
import { Box, Image, Heading, Input, Text, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import styles from "./Signup.module.css";

const Signup = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Box pt="150" mb="50">
      <Box boxShadow="2xl" h="600" w="35%" m="auto" pt="70" p="35">
        <Image
          h="35"
          src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
        />
        <Heading fontSize="26" fontWeight="700" mt="30">
          Welcome to My Hours
        </Heading>

        <FormControl>
          <FormLabel mt="25" fontSize="sm">
            FULL NAME
          </FormLabel>
          <FormHelperText>
            So we know what to call you in the app
          </FormHelperText>
          <Input
            id="a"
            type="text"
            mt="15"
            name="name"
            onChange={(e) => handleChange(e)}
          />

          <FormLabel mt="25" fontSize="sm">
            EMAIL
          </FormLabel>
          <FormHelperText>You will use this email to login</FormHelperText>
          <Input
            id="b"
            type="email"
            mt="15"
            name="email"
            onChange={(e) => handleChange(e)}
          />

          <FormLabel mt="25" fontSize="sm">
            PASSWORD
          </FormLabel>
          <Input
            id="c"
            type="password"
            placeholder="Set password"
            name="password"
            onChange={(e) => handleChange(e)}
          />

          <Text fontSize="sm" mt="15">
            By signing up you agree to the{" "}
            <span className={styles.terms}>Terms of Use </span>
          </Text>

          <Button w="100px" mt="5" colorScheme="blue" onClick={handleSubmit}>
            Register
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Signup;
