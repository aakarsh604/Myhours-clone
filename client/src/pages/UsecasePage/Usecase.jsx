import React from "react";
import { Box, Heading, Text, Button, Grid, Image } from "@chakra-ui/react";
import data from "./data.json";
import Reviews from "../../components/Reviews/Reviews";

function Usecase() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      w="80%"
      m="auto"
      border="black"
      justifyContent="center"
    >
      <Heading letterSpacing="3px" fontWeight="300" size="3xl" pt="200px">
        Use cases
      </Heading>
      <Heading
        color="#375d75"
        fontWeight="500"
        letterSpacing="1px"
        size="xl"
        mt="30px"
      >
        & how My Hours solves problems
      </Heading>
      <Text
        color="#375d75"
        w="80%"
        m="auto"
        fontSize="2xl"
        letterSpacing="1px"
        mt="50px"
      >
        From tracking time, to reporting and invoicing your clients, My Hours is
        there for you the whole time.
      </Text>
      <Button
        colorScheme="blue"
        w="300px"
        h="60px"
        m="auto"
        mt="70px"
        fontSize="2xl"
      >
        Get started - It's Free{" "}
      </Button>

      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={6}
        mt="200px"
      >
        {data.map((el, ind) => (
          <Box key={ind} boxShadow="2xl" rounded="20" p="5" h="420" border="1px solid lightBlue">
            <Image m="auto" src={el.imgurl} h="200"/>
            <Heading fontWeight="500" size="lg" textAlign="start">
              {el.title}
            </Heading>
            <Text mt="3" textAlign="left">{el.description}</Text>
          </Box>
        ))}
      </Grid>

      <Reviews/>
    </Box>
  );
}

export default Usecase;
