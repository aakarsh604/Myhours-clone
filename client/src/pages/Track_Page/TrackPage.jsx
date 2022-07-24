import React, { useState } from 'react';
import { Button, Flex, Text, Input, Box } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Stopwatch } from './Stopwatch';
import { Form } from './Form';
import {
  AiOutlineHome,
  AiOutlinePlus,
  AiOutlineSmallDash,
  AiOutlineMenu,
  AiOutlineStar,
  AiOutlineCheck,
  AiFillEdit,
  AiFillFolderOpen,
} from 'react-icons/ai';
import Sidebar from '../sidebar/Sidebar';

export const TrackPage = () => {
  const [status, setStatus] = useState(false);
  const Data = JSON.parse(localStorage.getItem('clientData')) || [];
  // console.log(Data);
  const [open, setOpen] = useState(false);
  const now = new Date();
  const nows = now.toString().split(' ');
  const [date, setDate] = useState(now.getDate());
  return (
    <Flex justify={'space-between'}>
      <Box>
        <Sidebar />
      </Box>
      <Box w='80%' p='20px 50px' mr={'10'}>
        {/* Navbar1 */}
        <Flex justify='space-between' fontSize='25' pb={'7'}>
          <Flex gap='5'>
            <Text>
              Today, {date} {nows[1]}
            </Text>
            <Input type='date' w='50px' />
            <ArrowBackIcon mt={'1'} />
            <ArrowForwardIcon mt={'1'} />
            <AiOutlineHome mt={'1'} />
          </Flex>
          <Stopwatch />
        </Flex>
        {/* Navbar2 */}
        <Flex justify='space-between' pb={'7'}>
          <Box>
            <Button
              gap='2'
              color='#3b8fc2'
              onClick={() => {
                open ? setOpen(false) : setOpen(true);
              }}>
              <AiOutlinePlus /> Add time log
            </Button>
          </Box>
          <Flex gap='5'>
            <Button>
              <AiOutlineSmallDash />
            </Button>
            <Button gap='2'>
              <AiOutlineMenu /> Timeline
            </Button>
            <Button gap='2'>
              <AiOutlineStar /> Favourite logs
            </Button>
          </Flex>
        </Flex>
        {/* Form */}
        {open ? (
          <Form setOpen={setOpen} status={status} setStatus={setStatus} />
        ) : (
          ''
        )}
        {/* Client data */}
        {Data.map((e, i) => {
          return (
            <Box key={i}>
              <Flex justify={'space-between'} p={'5'}>
                <Box>
                  <Flex gap={'2'} color='#375D75'>
                    {!e.client ? (
                      <AiFillEdit style={{ marginTop: '4px' }} />
                    ) : (
                      <AiFillFolderOpen style={{ marginTop: '4px' }} />
                    )}
                    <Text style={!e.client ? { color: 'grey' } : {}}>
                      {!e.client ? 'Add a Project, task or tag' : e.client}
                    </Text>
                    <Text>
                      {e.task ? (
                        <AiOutlineCheck
                          color='black'
                          style={{ marginTop: '4px' }}
                        />
                      ) : (
                        ''
                      )}
                    </Text>
                    <Text>{e.task ? e.task : ''}</Text>
                    <Text
                      bg={'#CCE5FF'}
                      color={'#0062CC'}
                      fontSize={'12px'}
                      p={'2px 5px'}>
                      {e.tags ? e.tags : ''}
                    </Text>
                    <Text
                      color={'red'}
                      fontSize='12'
                      cursor={'pointer'}
                      onClick={() => {
                        Data.splice(i, 1);
                        localStorage.setItem(
                          'clientData',
                          JSON.stringify(Data),
                        );
                        {
                          status ? setStatus(false) : setStatus(true);
                        }
                      }}>
                      remove
                    </Text>
                  </Flex>
                  <Text
                    color={'#687481'}
                    textAlign={'left'}
                    style={!e.desc ? { color: 'grey' } : {}}>
                    {!e.desc ? 'Empty Description' : e.desc}
                  </Text>
                </Box>
                <Stopwatch />
              </Flex>
              <hr />
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
};
