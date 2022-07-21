import { Box, Button, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai'

function Homepage() {
  return (
    <Box fontFamily={"Avenirnextltpro"} letterSpacing={2} mt={{ md: "10rem" }}>
      {/* 1st part */}
      <Box w={"80%"} m={"auto"}>
        <p style={{ fontSize: "80px", fontWeight: "100" }}>
          <b>Organize</b> <span>projects</span>, <b>Track</b> time and{" "}
          <b>Report</b> your work
        </p>
        <Text mt={{ md: "2rem" }} fontSize={"3xl"} color="blue.700">
          Coordinate projects and tasks. Track your work hours and create
          awesome-looking reports for clients.
          <b> All-in-one free time tracking software.</b>
        </Text>
      </Box>
      {/* button */}
      <Box w={"50%"} m={"auto"} mt={"35px"}>
        <Button
          p={"2rem"}
          fontSize={"3xl"}
          fontWeight={400}
          href={"#"}
          _hover={{
            bg: "blue.800",
          }}
          bg={"blue.400"}
          color={"white"}
          align="center"
          mb={"3px"}
        >
          Get Started - it's Free
        </Button>
      </Box>
      {/* image */}
      <Box w={"80%"} m={"auto"} mt={"20px"}>
        <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1)-p-1080.png" />
      </Box>
      <Box w={"60%"} m={"auto"} mt={"4rem"}>
        <p style={{ fontSize: "40px", fontWeight: "100" }}>
          Trusted by more than <b>100.000 businesses</b> worldwide
        </p>
        <HStack mt={"1rem"} justify="center" align="center" spacing={2}>
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9399ba39d2583a755_Capterra-4-7.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9b4eb5ca178cc55df_g2-4-7.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9487a040f81a5d142_MS-Gold.png"
            alt=""
          />
        </HStack>
      </Box>
      <HStack w={"85%"} m={"auto"} mt={"1rem"} spacing={20}>
        <Image boxSize='120px' objectFit='contain' src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079c0b6e21682628f281_typefox%201.png" alt="" />
        <Image boxSize='120px' objectFit='contain' src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079cd7ceecebfc3f5519_kpmg_logo%201.png" alt="" />
        <Image boxSize='120px' objectFit='contain' src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079dfd768757fcf2ea64_logo-Impartner-1.png" alt="" />
        <Image boxSize='120px' objectFit='contain' src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d3f7265588b6d1dbe_semaphore-logo.png" alt="" />
        <Image boxSize='120px' objectFit='contain' src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d09b818dd84138753_aurora-logo-horiz-white%201.png" alt="" />
        <Image boxSize='120px' objectFit='contain' src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d14844ef7226bb10a_logo_heading.png" alt="" />
      </HStack>
      <Flex letterSpacing={'0'} w={'85%'} m={'auto'} spacing={3} mt = {'40px'}>
         <Box w={'40%'} align="left">
            <Text fontSize={"3xl"} color='blue.700'>
              <b>Coordinate your team, projects and tasks</b>
            </Text>
            <br/>
            <Text fontSize={"18px"}>
            Get out of your inbox mess: create projects, assign tasks and write-down or attach details. Track project profitability with hourly rates. Set up budgets and get reminded when you’re close.
            </Text>
            <br/>
            <Text fontStyle={'italic'} fontSize={"xl"} color='blue.700'>
            “Excellent time tracker to manage your tasks! It changed the way I organize myself, I'm more productive since I used it!” - Guadalupe G., Art Director
            </Text>
         </Box>
         <Image ml={'15%'} boxSize={'50%'} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7199052d14ec5e2a6c813_HP-1.png"/>
      </Flex>
      <Flex letterSpacing={'0'} w={'85%'} m={'auto'} spacing={3} mt = {'40px'}>
         
         <Image mr={'15%'} boxSize={'50%'} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991bd83c222217cac17_HP-2.png"/>
         <Box w={'50%'}  align="left">
            <Text fontSize={"3xl"} color='blue.700'>
              <b>Track your work hours, expenses and more</b>
            </Text>
            <br/>
            <Text fontSize={"18px"}>
            With My Hours you can track all your work. Add a detailed description to your time logs and expenses. We know time tracking is a hassle, so we’ve designed it to be super fast.
            </Text>
            <br/>
            <Text fontStyle={'italic'} fontSize={"xl"} color='blue.700'>
            “A wonderful product. We no longer have to use multiple programs to track time, projects, PTO, etc.” - Katie L., Office Coordinator
            </Text>
         </Box>
      </Flex>
      <Flex letterSpacing={'0'} w={'85%'} m={'auto'} spacing={3} mt = {'40px'}>
         <Box w={'40%'} align="left">
            <Text fontSize={"3xl"} color='blue.700'>
              <b>Create great-looking reports</b>
            </Text>
            <br/>
            <Text fontSize={"18px"}>
            Turn your work into dazzling reports with confidence. From Dashboard to more advanced time analytics. No need for extra spreadsheet work, even though you can export your data.
            </Text>
            <br/>
            <Text fontStyle={'italic'} fontSize={"xl"} color='blue.700'>
            “My Hours is a super easy to use time tracker and great for sending hourly reports to clients for billable work” - Erin A. Business owner
            </Text>
         </Box>
         <Image boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} borderRadius={'1rem'} p={'5px'} ml={'15%'} boxSize={'50%'} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991a6df42a49f7e6d5c_HP-3.png"/>
      </Flex>
      <Box>
        <Link href={"#"}>See how My Hours works in detail <span>
        <AiOutlineArrowRight color='blue.600'/>
        </span>
</Link>
      </Box>
    </Box>
    
  );
}

export default Homepage;
