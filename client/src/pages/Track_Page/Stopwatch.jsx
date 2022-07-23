import React, { useState } from 'react';
import { useStopwatch } from './useStopwatch';
import { TimeIcon, NotAllowedIcon } from '@chakra-ui/icons';
import styled from 'styled-components';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const Stop = styled.button`
  color: #cc5252;
  border-radius: 5px;
  border: none;
  margin: 30px 10px;
  padding: 0 20px;
  &:hover {
    cursor: pointer;
    background-color: #cc0000;
    color: white;
  }
`;
const Start = styled.button`
  background-color: #29aa60;
  color: white;
  border-radius: 5px;
  border: none;
  margin: 30px 10px;
  padding: 0 10px;
  &:hover {
    cursor: pointer;
    background-color: #007500;
  }
`;
const Timer = styled.p`
  font-size: 1.8em;
  margin: 0.8em 10px;
`;
export const Stopwatch = () => {
  const { setStartTimer, setTime, time } = useStopwatch(0);
  const [start, setStart] = useState(false);
  return (
    <Box>
      <Flex gap='4'>
        {start ? (
          <Button color='#cc5252' _hover={{bg:'#cc0000',color:'white'}}
            onClick={() => {
              setStartTimer(false);
              setStart(false);
            }}>
            <NotAllowedIcon margin={'0.5em'} />
            Stop
          </Button>
        ) : (
          ''
        )}
        <Button bg='#29aa60' color='white' _hover={{bg:'#007500'}}
          onClick={() => {
            setStartTimer(true);
            setStart(true);
          }}>
          <TimeIcon margin={'0.5em'} />
          {start ? 'Start New' : 'Start'}
        </Button>
        <Text>
          <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </Text>
      </Flex>
      {/*<button
        onClick={() => {
          setTime(0);
          setStartTimer(false);
        }}>
        Reset
      </button>*/}
    </Box>
  );
};
