import React from 'react';
import Header from '../../components/Hedear/Header';
import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  Box,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react';
import { CheckIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  Track,
  FreeList,
  ProList,
  Biling,
  Frequently_asked_questions,
  Integration_and_Apps,
  Organize,
  Report,
  Team,
} from './TableData';
import {
  Buttons,
  ProButton,
  ButtonDiv,
  Div2,
  Div3,
  Dollar,
  Dollar$,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  List,
  FAQdiv,
  FeatureDiv,
  FAQtitle,
  Question,
  Answer,
  TrHead,
  Td,
  Th,
  Review,
  ReviewDiv,
  MemberName,
  Value,
  H5,
} from './Style';
import Footer from '../../components/Footer/Footer';
const panel = {
  width: '93%',
  margin: 'auto',
};

export const PricingPage = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          fontFamily: 'Avernirnextitpro, sans-serif',
          textAlign: 'left',
        }}>
        <Heading1>Pick your plan</Heading1>
        <Heading2>Track time on projects with your team.</Heading2>
        <Div2>
          <div>
            <Heading3>Free</Heading3>
            <Heading4>
              For indivisuals or teams just getting started with time tracking.
            </Heading4>
            <br />
            <Dollar>$</Dollar>
            <Dollar$>0</Dollar$>
            <br />
            <br />
            <br />
            <ul>
              {FreeList.map((e, i) => (
                <List key={i}>{e}</List>
              ))}
            </ul>
          </div>
          <div>
            <Heading3>Pro</Heading3>
            <Heading4>
              For freelancers and teams activity managing their time.
            </Heading4>
            <br />
            <Div3>
              <div style={{ marginRight: '2rem' }}>
                <Dollar>$</Dollar>
                <Dollar$>6</Dollar$>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <p>-per active team member, per month billed annually</p>
                <p>-$7 billed monthly</p>
              </div>
            </Div3>
            <br />
            <ul>
              {ProList.map((e, i) => (
                <List key={i}>{e}</List>
              ))}
            </ul>
          </div>
        </Div2>
        <ButtonDiv>
          <Buttons>Select</Buttons>
          <ProButton>14 day free trial</ProButton>
        </ButtonDiv>
        <FeatureDiv>
          <table>
            <thead>
              <tr>
                <Th style={{ paddingRight: '700px' }}>Feature</Th>
                <Th style={{ paddingRight: '100px' }}>Free</Th>
                <Th>Pro</Th>
              </tr>
            </thead>
            <tbody>
              <TrHead>
                <td>Track</td>
                <td></td>
                <td></td>
              </TrHead>
              {Track.map((e, i) => {
                return (
                  <tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </tr>
                );
              })}
              <TrHead>
                <td>Organize</td>
                <td></td>
                <td></td>
              </TrHead>
              {Organize.map((e, i) => {
                return (
                  <tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </tr>
                );
              })}
              <TrHead>
                <td>Billing</td>
                <td></td>
                <td></td>
              </TrHead>
              {Biling.map((e, i) => {
                return (
                  <tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </tr>
                );
              })}
              <TrHead>
                <td>Report</td>
                <td></td>
                <td></td>
              </TrHead>
              {Report.map((e, i) => {
                return (
                  <tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </tr>
                );
              })}
              <TrHead>
                <td>Team</td>
                <td></td>
                <td></td>
              </TrHead>
              {Team.map((e, i) => {
                return (
                  <tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </tr>
                );
              })}
              <TrHead>
                <td>Integration and Apps</td>
                <td></td>
                <td></td>
              </TrHead>
              {Integration_and_Apps.map((e, i) => {
                return (
                  <tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </FeatureDiv>
        <FAQdiv>
          <FAQtitle>Frequently Asked Questions</FAQtitle>
          <Accordion allowToggle>
            {Frequently_asked_questions.map((e, i) => {
              return (
                <AccordionItem key={i} style={{ margin: '1em 0' }}>
                  <AccordionButton
                    style={{
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                    <Question flex='1' textalign='left'>
                      {e.question}
                    </Question>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel style={panel}>
                    <Answer>{e.answer}</Answer>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </FAQdiv>
        <ReviewDiv>
          <Review>
            <b>“</b> I have tested similar time tracking apps but they all have
            limits. My Hours is without a doubt the most important tool I use in
            my business. <b>”</b>
          </Review>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <MemberName>- Kevin from St. Petersburg, FL, USA</MemberName>
            <a href='#'>
              Read more reviews <ArrowRightIcon />
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div>
              <H5>MEMBERS</H5>
              <Value>250k</Value>
            </div>
            <div>
              <H5>LOGED HOURS</H5>
              <Value>1.6b</Value>
            </div>
            <div>
              <H5>AVERAGE RATING</H5>
              <Value>4.7/5</Value>
            </div>
          </div>
        </ReviewDiv>
        <Box w='65%' m='auto' mt='3rem' marginBottom='50px'>
          <Text align='center' fontSize={'3xl'} color='blue.700'>
            Have questions? We're here
          </Text>
          <Text align='center'>
            It's always nice to have someone to talk to when facing new
            software. Get in touch and
          </Text>
          <Text align='center'>we'll try our best to help you out.</Text>
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
        <Footer />
      </div>
    </div>
  );
};
