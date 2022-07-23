import React, { useState } from 'react';
import { SettingsIcon } from '@chakra-ui/icons';
import styled from 'styled-components';
import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react';

const Label = styled.label`
  font-size: 11px;
  color: grey;
`;

export const Form = ({ setOpen, status, setStatus }) => {
  const Data = JSON.parse(localStorage.getItem('clientData')) || [];
  const [client, setClient] = useState('');
  const [task, setTask] = useState('');
  const [tags, setTags] = useState('');
  const [desc, setDesc] = useState('');
  const handleSubmit = () => {
    localStorage.setItem(
      'clientData',
      JSON.stringify([
        { client: client, task: task, tags: tags, desc: desc },
        ...Data,
      ]),
    );
  };
  return (
    <Box textAlign='left'>
      <Text color={'#375d75'} fontSize={'23'} ml={'5'}>
        Add a time log <SettingsIcon style={{ fontSize: '15px' }} />
      </Text>
      <Flex w={'90%'} m={'auto'} mb={'5'}>
        <Box w={'65%'}>
          <Label>CLIENT & PROJECT</Label>
          <Input
            w={'85%'}
            m={'3px 0'}
            type='text'
            placeholder='Select or create a project'
            onChange={(e) => setClient(e.target.value)}
            value={client}
          />
          <br />
          <Flex gap={'35px'}>
            <Box>
              <Label>TASK</Label>
              <br />
              <Input
                m={'3px 0'}
                w={'110%'}
                type='text'
                placeholder='Select or create a task...'
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Box>
            <Box>
              <Label>TAGS</Label>
              <br />
              <Input
                m={'3px 0'}
                w={'110%'}
                type='text'
                placeholder='Add a tag...'
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </Box>
          </Flex>
          <Textarea
            w={'85%'}
            mt={'2'}
            type='textArea'
            placeholder='Enter log description or drop files here to attach'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Box>
        <Box w={'30%'} ml='-4em' mr={'1em'}>
          <Label>TIME & DATE</Label>
          <br />
          <Input type='number' placeholder='Duration' w={'120%'} m={'5px 0'} />
          <Box style={{ display: 'flex', gap: '10px', marginRight: '-3.7em' }}>
            <Input type='number' placeholder='Start time' m={'5px 0'} />
            <Input type='number' placeholder='End time' m={'5px 0'} />
          </Box>
          <Input type='date' />
          <br />
          <Label>EXPENSES</Label>
          <br />
          <Input type='number' placeholder='Enter expense amount' />
          <br />
        </Box>
      </Flex>
      <Flex ml={'5'} mb={'5'} gap={'5'}>
        <Button
          bg={'#29aa60'}
          _hover={{ bg: '#007500' }}
          color='white'
          onClick={() => {
            handleSubmit();
            {
              status ? setStatus(false) : setStatus(true);
            }
          }}>
          Start Timer
        </Button>
        <Button
          color={'#007500'}
          onClick={() => {
            handleSubmit();
            setOpen(false);
          }}>
          Start & close
        </Button>
        <Button color={'#3b8fc2'} onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Flex>
    </Box>
  );
};
