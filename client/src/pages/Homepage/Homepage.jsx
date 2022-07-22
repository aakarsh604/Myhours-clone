
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
  Highlight,
} from '@chakra-ui/react';
import React from 'react';
import { ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';

function Homepage() {
  return (
    <Box fontFamily={'sans-serif'} letterSpacing={2} pt={'10rem'}>
      {/* 1st part */}
      <Box w={'80%'} m={'auto'}>
        <p style={{ fontSize: '80px', fontWeight: '100' }}>
          <b>Organize</b> <span>projects</span>, <b>Track</b> time and{' '}
          <b>Report</b> your work
        </p>
        <Text mt={{ md: '2rem' }} fontSize={'3xl'} color='blue.700'>
          Coordinate projects and tasks. Track your work hours and create
          awesome-looking reports for clients.
          <b> All-in-one free time tracking software.</b>
        </Text>
      </Box>
      {/* button */}
      <Box w={'50%'} m={'auto'} mt={'35px'}>
        <Button
          p={'2rem'}
          fontSize={'3xl'}
          fontWeight={400}
          href={'#'}
          _hover={{
            bg: 'blue.800',
          }}
          bg={'blue.400'}
          color={'white'}
          align='center'
          mb={'3px'}>
          Get Started - it's Free
        </Button>
      </Box>
      {/* image */}
      <Box w={'80%'} m={'auto'} mt={'20px'}>
        <img src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1)-p-1080.png' />
      </Box>
      <Box w={'60%'} m={'auto'} mt={'4rem'}>
        <p style={{ fontSize: '40px', fontWeight: '100' }}>
          Trusted by more than <b>100.000 businesses</b> worldwide
        </p>
        <HStack mt={'1rem'} justify='center' align='center' spacing={2}>
          <img
            src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9399ba39d2583a755_Capterra-4-7.png'
            alt=''
          />
          <img
            src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9b4eb5ca178cc55df_g2-4-7.png'
            alt=''
          />
          <img
            src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9487a040f81a5d142_MS-Gold.png'
            alt=''
          />
        </HStack>
      </Box>
      <HStack w={'85%'} m={'auto'} mt={'1rem'} spacing={20}>
        <Image
          boxSize='120px'
          objectFit='contain'
          src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079c0b6e21682628f281_typefox%201.png'
          alt=''
        />
        <Image
          boxSize='120px'
          objectFit='contain'
          src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079cd7ceecebfc3f5519_kpmg_logo%201.png'
          alt=''
        />
        <Image
          boxSize='120px'
          objectFit='contain'
          src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079dfd768757fcf2ea64_logo-Impartner-1.png'
          alt=''
        />
        <Image
          boxSize='120px'
          objectFit='contain'
          src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d3f7265588b6d1dbe_semaphore-logo.png'
          alt=''
        />
        <Image
          boxSize='120px'
          objectFit='contain'
          src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d09b818dd84138753_aurora-logo-horiz-white%201.png'
          alt=''
        />
        <Image
          boxSize='120px'
          objectFit='contain'
          src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d14844ef7226bb10a_logo_heading.png'
          alt=''
        />
      </HStack>
      <Flex letterSpacing={'0'} w={'85%'} m={'auto'} spacing={3} mt={'40px'}>
        <Box w={'40%'} align='left'>
          <Text fontSize={'3xl'} color='blue.700'>
            <b>Coordinate your team, projects and tasks</b>
          </Text>
          <br />
          <Text fontSize={'18px'}>
            Get out of your inbox mess: create projects, assign tasks and
            write-down or attach details. Track project profitability with
            hourly rates. Set up budgets and get reminded when you’re close.
          </Text>
          <br />
          <Text fontStyle={'italic'} fontSize={'xl'} color='blue.700'>
            “Excellent time tracker to manage your tasks! It changed the way I
            organize myself, I'm more productive since I used it!” - Guadalupe
            G., Art Director
          </Text>
        </Box>
        <Image
          ml={'15%'}
          boxSize={'50%'}
          src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7199052d14ec5e2a6c813_HP-1.png'
        />
      </Flex>
      <Flex letterSpacing={'0'} w={'85%'} m={'auto'} spacing={3} mt={'40px'}>
        <Image
          mr={'15%'}
          boxSize={'50%'}
          src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991bd83c222217cac17_HP-2.png'
        />
        <Box w={'50%'} align='left'>
          <Text fontSize={'3xl'} color='blue.700'>
            <b>Track your work hours, expenses and more</b>
          </Text>
          <br />
          <Text fontSize={'18px'}>
            With My Hours you can track all your work. Add a detailed
            description to your time logs and expenses. We know time tracking is
            a hassle, so we’ve designed it to be super fast.
          </Text>
          <br />
          <Text fontStyle={'italic'} fontSize={'xl'} color='blue.700'>
            “A wonderful product. We no longer have to use multiple programs to
            track time, projects, PTO, etc.” - Katie L., Office Coordinator
          </Text>
        </Box>
      </Flex>
      <Flex letterSpacing={'0'} w={'85%'} m={'auto'} spacing={3} mt={'40px'}>
        <Box w={'40%'} align='left'>
          <Text fontSize={'3xl'} color='blue.700'>
            <b>Create great-looking reports</b>
          </Text>
          <br />
          <Text fontSize={'18px'}>
            Turn your work into dazzling reports with confidence. From Dashboard
            to more advanced time analytics. No need for extra spreadsheet work,
            even though you can export your data.
          </Text>
          <br />
          <Text fontStyle={'italic'} fontSize={'xl'} color='blue.700'>
            “My Hours is a super easy to use time tracker and great for sending
            hourly reports to clients for billable work” - Erin A. Business
            owner
          </Text>
        </Box>
        <Image
          boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}
          borderRadius={'1rem'}
          p={'5px'}
          ml={'15%'}
          boxSize={'50%'}
          src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991a6df42a49f7e6d5c_HP-3.png'
        />
      </Flex>
      <Box>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme='blue'
          variant='link'
          textDecoration='underline'
          _hover={{ textDecoration: 'none' }}
          fontSize='2xl'
          mt={'7rem'}
          mb={'7rem'}>
          See how My Hours works in detail
        </Button>
      </Box>
      <Box w={'85%'} m={'auto'}>
        <Text
          fontStyle={'sans-serif'}
          align={'center'}
          fontSize={'3xl'}
          color='blue.700'
          fontWeight={'bold'}>
          A flexible tool for all types of organizations
        </Text>
        <br />
        <SimpleGrid
          color='gray'
          mt={'2rem'}
          spacing={2}
          columns={{ sm: 1, md: 3 }}
          spacingX='40px'
          spacingY='20px'
          letterSpacing={0}
          py='2rem'
          px='2rem'>
          <Box
            bgImage="url('https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91878f08abb5f52fdfe77_Polygon%201.png')"
            bgRepeat='no-repeat'
            bgSize={'contain'}
            bgPosition={'center'}>
            <Text fontSize={'2xl'} fontWeight='bold'>
              Billing
            </Text>
            <br />
            <Text fontSize={'xl'} w={'80%'} align='center' m={'auto'}>
              We need to bill our clients with flexible hourly rates.
            </Text>
            <br />
            <Button
              colorScheme='blue'
              variant='link'
              textDecoration='underline'
              _hover={{ textDecoration: 'none' }}
              fontSize='20px'
              fontWeight={'hairline'}>
              Here's how
            </Button>
          </Box>
          <Box
            bgImage="url('https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9199aba16f3d43d7e7547_Polygon%202.png')"
            bgRepeat='no-repeat'
            bgSize={'contain'}
            bgPosition={'center'}>
            <Text fontSize={'2xl'} fontWeight='bold'>
              Profitability
            </Text>
            <br />
            <Text fontSize={'xl'} w={'80%'} align='center' m={'auto'}>
              We would like to calculate the profitability of our projects.
            </Text>
            <br />
            <Button
              colorScheme='blue'
              variant='link'
              textDecoration='underline'
              _hover={{ textDecoration: 'none' }}
              fontSize='xl'>
              Here's how
            </Button>
          </Box>
          <Box
            bgImage="url(https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc919d312c3ba440fb9c340_Polygon%201(1).png')"
            bgRepeat='no-repeat'
            bgSize={'contain'}
            bgPosition={'center'}>
            <Text fontSize={'2xl'} fontWeight='bold'>
              Time tracking
            </Text>
            <br />
            <Text fontSize={'xl'} w={'80%'} align='center' m={'auto'}>
              We want to track time on projects and tasks.
            </Text>
            <br />
            <Button
              colorScheme='blue'
              variant='link'
              textDecoration='underline'
              _hover={{ textDecoration: 'none' }}
              fontSize='xl'>
              Here's how
            </Button>
          </Box>
          <Box
            bgImage="url('https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9199aba16f3d43d7e7547_Polygon%202.png')"
            bgRepeat='no-repeat'
            bgSize={'contain'}
            bgPosition={'center'}>
            <Text fontSize={'2xl'} fontWeight='bold'>
              Attendance
            </Text>
            <br />
            <Text fontSize={'xl'} w={'80%'} align='center' m={'auto'}>
              We need to track employee attendance/absence and tasks.
            </Text>
            <br />
            <Button
              colorScheme='blue'
              variant='link'
              textDecoration='underline'
              _hover={{ textDecoration: 'none' }}
              fontSize='xl'>
              Here's how
            </Button>
          </Box>
          <Box
            bgImage="url('https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91878f08abb5f52fdfe77_Polygon%201.png')"
            bgRepeat='no-repeat'
            bgPosition={'center'}
            bgSize={'contain'}>
            <Text fontSize={'2xl'} fontWeight='bold'>
              Client reporting
            </Text>
            <br />
            <Text fontSize={'xl'} w={'80%'} align='center' m={'auto'}>
              I need to report the time spent to clients or invoice them.
            </Text>
            <br />
            <Button
              colorScheme='blue'
              variant='link'
              textDecoration='underline'
              _hover={{ textDecoration: 'none' }}
              fontSize='xl'>
              Here's how
            </Button>
          </Box>
          <Box
            bgImage="url('https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9199aba16f3d43d7e7547_Polygon%202.png')"
            bgRepeat='no-repeat'
            bgSize={'contain'}
            bgPosition={'center'}>
            <Button
              colorScheme='blue'
              variant='link'
              textDecoration='underline'
              _hover={{ textDecoration: 'none' }}
              align='center'
              pt='3rem'
              rightIcon={<ArrowForwardIcon />}
              fontSize='2xl'>
              Find More Use Case's
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
      <Box w={'85%'} m={'auto'} mt={'2rem'} letterSpacing={0}>
        <Text m={'auto'} fontSize={'3xl'} color='blue.700'>
          My Hours has changed the way our customers work
        </Text>
        <br />
        <Text>
          We’ve helped <u>250.000+ people</u> track their work <u>since 2002</u>
          .
        </Text>
        <Text>
          Our software <u>does not include employee monitoring</u> and never
          will.
        </Text>
        <SimpleGrid mt={'3rem'} spacing={2} columns={{ sm: 1, md: 3 }}>
          <Box align='left'>
            <Highlight
              query={[' Makes time tracking for different tasks ', 'simple.']}
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.300' }}
              align='left'
              letterSpacing={0}>
              "Easy tracking of billable hours across various projects. Makes
              time tracking for different tasks simple."
            </Highlight>
            <Text
              fontStyle='italic'
              fontSize={'2xl'}
              mt={'1rem'}
              fontWeight={'bold'}>
              - Paul H., Business Owner
            </Text>
          </Box>
          <Box align='left'>
            <Highlight
              query={['WAY FASTER.']}
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.300' }}
              align='left'
              letterSpacing={0}>
              "My Hours is great for keeping track of time spent on different
              projects. It makes completing my mandatory timesheets at the end
              of the week WAY FASTER."
            </Highlight>
            <Text
              fontStyle='italic'
              fontSize={'2xl'}
              mt={'1rem'}
              fontWeight={'bold'}>
              ‍- Michael B., Manager
            </Text>
          </Box>
          <Box align='left'>
            <Highlight
              query={[' Great tool for tracking my time']}
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.300' }}
              align='left'
              letterSpacing={0}>
              "I've enjoyed using My Hours, and I use it every day. Great tool
              for tracking my time!"
            </Highlight>
            <Text
              fontStyle='italic'
              fontSize={'2xl'}
              mt={'1rem'}
              fontWeight={'bold'}>
              - Leah., Engineer
            </Text>
          </Box>
          <Box align='left'>
            <Highlight
              query={[
                ' it really ',
                'helped me get my hour tracking in order.',
              ]}
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.300' }}
              align='left'
              letterSpacing={0}>
              "Ease of use, simplicity, streamlined, it really helped me get my
              hour tracking in order. No negatives for the purpose and scope for
              which I am using the software."
            </Highlight>
            <Text
              fontStyle='italic'
              fontSize={'2xl'}
              mt={'1rem'}
              fontWeight={'bold'}>
              - Arieh F., CFO
            </Text>
          </Box>
          <Box align='left'>
            <Highlight
              query={[
                ' assigning ',
                'different hourly rates for different types of work.',
              ]}
              styles={{ rounded: 'full', bg: 'green.300' }}
              align='left'
              letterSpacing={0}>
              "The software is very easy to set up, and you can start using it
              right away to track your time, assigning different hourly rates
              for different types of work."
            </Highlight>
            <Text
              fontStyle='italic'
              fontSize={'2xl'}
              mt={'1rem'}
              fontWeight={'bold'}>
              - Naomi S., Marketing Manager
            </Text>
          </Box>
          <Box align='left'>
            <Highlight
              query={[' easiest-to-use software']}
              styles={{ rounded: 'full', bg: 'green.300' }}
              align='left'
              letterSpacing={0}>
              "This is the easiest-to-use software that I've found in terms of
              tracking hours and minutes for multiple projects."
            </Highlight>
            <Text
              fontStyle='italic'
              fontSize={'2xl'}
              mt={'1rem'}
              fontWeight={'bold'}>
              - Michelle W., Virtual Assistant
            </Text>
          </Box>
          <Box align='left'>
            <Highlight
              query={[
                ' Easy to use for my team members who are remote ',
                'but hourly.',
              ]}
              styles={{ rounded: 'full', bg: 'green.300' }}
              align='left'
              letterSpacing={0}>
              "Easy to use for my team members who are remote but hourly. My
              House provides a simple and easy way to record, track and manage
              activity."
            </Highlight>
            <Text
              fontStyle='italic'
              fontSize={'2xl'}
              mt={'1rem'}
              fontWeight={'bold'}>
              Thomas S., Head of Customer Success
            </Text>
          </Box>
          <Box align='left'>
            <Highlight
              query={[
                ' It keeps',
                'track of all my hours and is really easy to use.',
              ]}
              styles={{ rounded: 'full', bg: 'green.300' }}
              align='left'
              letterSpacing={0}>
              "I really love this time tracking software. It keeps track of all
              my hours and is really easy to use. I would definitely recommend
              this software. There is nothing that I don't like about this
              software."
            </Highlight>
            <Text
              fontStyle='italic'
              fontSize={'2xl'}
              mt={'1rem'}
              fontWeight={'bold'}>
              ‍- Christina C., Paralegal
            </Text>
          </Box>
          <Box align='left'>
            <Highlight
              query={[' generate meaningful reports']}
              styles={{ rounded: 'full', bg: 'green.300' }}
              align='left'
              letterSpacing={0}>
              "I love that I can track my hours and use it to generate
              meaningful reports to measure time spent. It's intuitive,
              easy-to-use, and highly customizable."
            </Highlight>
            <Text
              fontStyle='italic'
              fontSize={'2xl'}
              mt={'1rem'}
              fontWeight={'bold'}>
              ‍- Kristen B., Bussines Owner
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box w='35%' m='auto' mt='3rem'>
        <Button
          colorScheme='blue'
          variant='link'
          textDecoration='underline'
          _hover={{ textDecoration: 'none' }}
          align='center'
          pt='3rem'
          rightIcon={<ArrowForwardIcon />}
          fontSize='2xl'>
          Read More Reviews
        </Button>
      </Box>
      <Box w='65%' m='auto' mt='3rem'>
        <Text align='center' fontSize={'3xl'} color='blue.700'>
          Have questions? We're here
        </Text>
        <Text align='center'>
          It's always nice to have someone to talk to when facing new software.
          Get in touch and
        </Text>
        <Text>we'll try our best to help you out.</Text>
        <HStack w='70%' m='auto'>
          <Button
            colorScheme='blue'
            variant='link'
            textDecoration='underline'
            _hover={{ textDecoration: 'none' }}
            align='center'
            pt='3rem'
            leftIcon={<CheckIcon />}
            fontSize='md'>
            EMAIL & LIVE CHAT
          </Button>
          <Button
            colorScheme='blue'
            variant='link'
            textDecoration='underline'
            _hover={{ textDecoration: 'none' }}
            align='center'
            pt='3rem'
            leftIcon={<CheckIcon />}
            fontSize='md'>
            TRAINING FOR TEAMS
          </Button>
          <Button
            colorScheme='blue'
            variant='link'
            textDecoration='underline'
            _hover={{ textDecoration: 'none' }}
            align='center'
            pt='3rem'
            leftIcon={<CheckIcon />}
            fontSize='md'>
            KNOWLEDGE BASE
          </Button>
        </HStack>
      </Box>
      <HStack
        letterSpacing={0}
        w={'85%'}
        m={'auto'}
        mt={'3rem'}
        mb={'3rem'}
        spacing={4}>
        <Box p='3rem' bg='blue.50'>
          <Text align='center' fontSize='3xl' color='blue.700'>
            Waste no more time,
          </Text>
          <Text align='center' fontSize='3xl' color='blue.700'>
            jump right in!
          </Text>
          <Button
            mt='1rem'
            p={'1rem'}
            fontSize={'2xl'}
            fontWeight={400}
            href={'#'}
            _hover={{
              bg: 'blue.800',
            }}
            bg={'blue.400'}
            color={'white'}
            align='center'
            mb={'1rem'}>
            Get Started - it's Free
          </Button>
          <Text align='left'>
            My Hours is Free to use for teams of any size. Pro paid plan comes
            with additional features like invoicing, admin controls and priority
            support.
          </Text>
        </Box>
        <Box p='3rem' bg='pink.50'>
          <Text align='center' fontSize='3xl' color='blue.700'>
            Waste no more time,
          </Text>
          <Text align='center' fontSize='3xl' color='blue.700'>
            jump right in!
          </Text>
          <Button
            p={'1rem'}
            fontSize={'2xl'}
            fontWeight={400}
            href={'#'}
            _hover={{
              bg: 'blue.400',
              color: 'pink.50',
            }}
            bg={'pink.50'}
            color={'blue.800'}
            align='center'
            border={'1px solid gray'}
            mt='1rem'
            mb='1rem'>
            Talk to our team
          </Button>
          <Text align='left'>
            Teams of 6+ are welcome to book a personalized demo to see how My
            Hours works in detail.
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

export default Homepage;
