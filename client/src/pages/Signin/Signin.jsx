import React, { useState } from "react";
import {
  Box,
  Image,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../../components/Hedear/Header";
import Footer from "../../components/Footer/Footer";

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
    let payload = JSON.stringify(form)
    fetch("http://localhost:4040/signin", {
        headers : {
            "Content-Type" : "application/json"
        },
        method : 'POST',
        body : payload
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res._id)
        if(res.token){
            localStorage.setItem("userid", JSON.stringify(res._id))
            // navigate("/all")

            // console.log(res.token)
        }
        else{
            console.log(res.message)
            alert(res.message)
        }
    })
    .catch((err) => console.log(err))
}

  return (
    <Box>
      <Header />
    <Box pt="150" mb="50">
      <Box boxShadow="2xl" h="450" w="32%" m="auto" pt="70" p="35">
        <Image
          h="39"
          m="auto"
          src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
        />
        <Heading fontSize="26" fontWeight="500" mt="30" textAlign="left">
          Sign In
        </Heading>

        <FormControl>
          <FormLabel mt="25" fontSize="sm">
            EMAIL
          </FormLabel>
          <Input
            id="b"
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="Email"
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

          <Flex alignItems="end" justify="space-between" mb="5">
            <Button
              size="sm"
              w="70px"
              ml="0"
              mt="5"
              colorScheme="blue"
              onClick={handleSubmit}
            >
              Sign In
            </Button>

            <Text color="blue">Reset Password?</Text>
          </Flex>

          <hr/>

          <FormHelperText color="blue" fontSize="md">
            <Link to="/signup">New to My Hours? Sign up</Link>
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>
        <Footer/>
        </Box>
  );
};

export default Signup;
