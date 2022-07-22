import React from "react";
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import styles from "./Review.module.css";

const Reviews = () => {
  return (
    <Box mb="50px">
      <Heading
        color="#375d75"
        fontWeight="500"
        letterSpacing="1px"
        size="xl"
        mt="150px"
      >
        My Hours has changed the way our customers work
      </Heading>

      <Text letterSpacing="1px" mt="10" fontSize="lg">
        We’ve helped <u>100.000+ people</u> track their work <u>since 2002.</u> Our software 
        <u> does not include employee monitoring</u> and never will.
      </Text>

      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="atuo"
        gap={3}
        mt="30px"
      >
        <GridItem rounded="20" p="5">
          <Text
            letterSpacing="0.5px"
            fontWeight="350"
            fontSize="lg"
            textAlign="start"
          >
            "Easy tracking of billable hours across various projects.
            <span className={styles.highlighter}>
              {" "}
              Makes time tracking for different tasks simple."
            </span>
          </Text>
          <Heading
            fontWeight="700"
            fontStyle="italic"
            size="md"
            mt="3"
            textAlign="left"
          >
            - Paul H., Business Owner
          </Heading>
        </GridItem>
        <GridItem rounded="20" p="5">
          <Text
            letterSpacing="0.5px"
            fontWeight="350"
            fontSize="lg"
            textAlign="start"
          >
            "My Hours is great for keeping track of time spent on different
            projects. It makes completing my mandatory timesheets at the end of
            the week <span className={styles.highlighter}>WAY FASTER."</span>
          </Text>
          <Heading
            fontWeight="700"
            fontStyle="italic"
            size="md"
            mt="3"
            textAlign="left"
          >
            ‍- Michael B., Manager
          </Heading>
        </GridItem>
        <GridItem rounded="20" p="5">
          <Text
            letterSpacing="0.5px"
            fontWeight="350"
            fontSize="lg"
            textAlign="start"
          >
            "I've enjoyed using My Hours, and I use it every day.{" "}
            <span className={styles.highlighter}>
              Great tool for tracking my time!"
            </span>
          </Text>
          <Heading
            fontWeight="700"
            fontStyle="italic"
            size="md"
            mt="3"
            textAlign="left"
          >
            - Cody H., Engineer
          </Heading>
        </GridItem>
        <GridItem rounded="20" p="5">
          <Text
            letterSpacing="0.5px"
            fontWeight="350"
            fontSize="lg"
            textAlign="start"
          >
            "Ease of use, simplicity, streamlined,
            <span className={styles.highlighter}>
              {" "}
              it really helped me get my hour tracking in order.
            </span>{" "}
            No negatives for the purpose and scope for which I am using the
            software."
          </Text>
          <Heading
            fontWeight="700"
            fontStyle="italic"
            size="md"
            mt="3"
            textAlign="left"
          >
            ‍- Arieh F., CFO
          </Heading>
        </GridItem>
        <GridItem rounded="20" p="5">
          <Text
            letterSpacing="0.5px"
            fontWeight="350"
            fontSize="lg"
            textAlign="start"
          >
            "The software is very easy to set up, and you can start using it
            right away to track your time,
            <span className={styles.highlighter}>
              {" "}
              assigning different hourly rates for different types of work."
            </span>
          </Text>
          <Heading
            fontWeight="700"
            fontStyle="italic"
            size="md"
            mt="3"
            textAlign="left"
          >
            - Naomi S., Marketing Manager
          </Heading>
        </GridItem>
        <GridItem rounded="20" p="5">
          <Text
            letterSpacing="0.5px"
            fontWeight="350"
            fontSize="lg"
            textAlign="start"
          >
            "This is the{" "}
            <span className={styles.highlighter}>easiest-to-use software</span>{" "}
            that I've found in terms of tracking hours and minutes for multiple
            projects."
          </Text>
          <Heading
            fontWeight="700"
            fontStyle="italic"
            size="md"
            mt="3"
            textAlign="left"
          >
            ‍- Michelle W., Virtual Assistant
          </Heading>
        </GridItem>
        <GridItem rounded="20" p="5">
          <Text
            letterSpacing="0.5px"
            fontWeight="350"
            fontSize="lg"
            textAlign="start"
          >
            <span className={styles.highlighter}>
              "Easy to use for my team members who are remote but hourly.
            </span>{" "}
            My House provides a simple and easy way to record, track and manage
            activity."
          </Text>
          <Heading
            fontWeight="700"
            fontStyle="italic"
            size="md"
            mt="3"
            textAlign="left"
          >
            ‍‍- Thomas S., Head of Customer Success
          </Heading>
        </GridItem>
        <GridItem rounded="20" p="5">
          <Text
            letterSpacing="0.5px"
            fontWeight="350"
            fontSize="lg"
            textAlign="start"
          >
            "I really love this software.{" "}
            <span className={styles.highlighter}>
              It keeps track of all my hours and is really easy to use. I would
              definitely recommend this software.
            </span>{" "}
            There is nothing that I don't like about this software."
          </Text>
          <Heading
            fontWeight="700"
            fontStyle="italic"
            size="md"
            mt="3"
            textAlign="left"
          >
            - Christina C., Paralegal
          </Heading>
        </GridItem>
        <GridItem rounded="20" p="5">
          <Text
            letterSpacing="0.5px"
            fontWeight="350"
            fontSize="lg"
            textAlign="start"
          >
            "I love that I can track my hours and use it to{" "}
            <span className={styles.highlighter}>
              {" "}
              generate meaningful reports to measure time spent.
            </span>{" "}
            It's intuitive, easy-to-use, and highly customizable."
          </Text>
          <Heading
            fontWeight="700"
            fontStyle="italic"
            size="md"
            mt="3"
            textAlign="left"
          >
            ‍‍- Kristen B., Bussines Owner
          </Heading>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Reviews;
