import React from "react";

import {
  Box,
  Center,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const Logo = (props) => {
  return (
   
    <img
      height={32}
      width="73px"
      src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9236f9ab08c7bdf83fe75_Logo-300px.png"
    />
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"1000"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"#375d75"} color={"cornsilk"}>
      <Container as={Stack} maxW={"6xl"} py={6} spacing="4">
        <SimpleGrid
          templateColumns={{ sm: "1fr ", md: "1fr 1fr 1fr 1fr 1fr 1fr" }}
          textAlign={"left"}
          fontSize={"xl"}
          ml={'2rem'}
        >
          <Stack spacing={3}>
            <Box ml="2rem">
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>

            <VStack>
              <Text fontSize={"sm"}>© 2022 My Hours.</Text>
              <Text fontSize={"sm"}>All rights reserved.</Text>
            </VStack>
          </Stack>
          <Stack align={"flex-start"} spacing="3">
            <ListHeader>Product</ListHeader>
            <Link href={"#"}>How it works</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Mobile app</Link>
            <Link href={"#"}>Use case collection</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Guides</Link>
            <Link href={"#"}>Customer Reviews</Link>
            <Link href={"#"}>Start Free</Link>
          </Stack>
          <Stack align={"flex-start"} spacing="3">
            <ListHeader>Resources</ListHeader>
            <Link href={"#"}>Time Tracking Library</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Terms of Use</Link>
            <Link href={"#"}>Sitemap</Link>
            <Link href={"#"}>Project Management Software</Link>
            <Link href={"#"}>Time Management Apps</Link>
            <Link href={"#"}>Best Time Tracking Apps of 2022</Link>
            <Link href={"#"}>Free Time Card Calculator</Link>
          </Stack>
          <Stack align={"flex-start"} spacing="3">
            <ListHeader>Use Cases</ListHeader>
            <Link href={"#"}>Project Billing</Link>
            <Link href={"#"}>Time reports and Project analytics</Link>
            <Link href={"#"}>Attendance and Abscence tracking</Link>
            <Link href={"#"}>Expense Tracking</Link>
            <Link href={"#"}>Calculating project profitablity</Link>
            <Link href={"#"}>Timesheet time Tracking</Link>
          </Stack>
          <Stack align={"flex-start"} spacing="3">
            <ListHeader>Integrations</ListHeader>
            <Link href={"#"}>QuickBooks</Link>
            <Link href={"#"}>Zapier</Link>
          </Stack>
          <Stack align={"flex-start"} spacing="3">
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
          </Stack>
        </SimpleGrid>
        <Center>
          <Text fontSize={"2xl"}>
            Looking for employee attendance and absence tracking? Visit
            <span>
              <Link fontWeight={"1000"} href={"#"}>
                {" "}
                All Hours.
              </Link>
            </span>
          </Text>
        </Center>
      </Container>
    </Box>
  );
}
