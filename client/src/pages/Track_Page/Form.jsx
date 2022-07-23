import React, { useState } from 'react';
import { SettingsIcon } from '@chakra-ui/icons';
import styled from 'styled-components';
import { Box, Flex, Input, Text,Textarea } from '@chakra-ui/react';

const MainDiv = styled.div`
  width: 95%;
  display: flex;
  margin: auto;
`;
const ClientInput = styled.input`
  width: 81%;
  height: 2em;
  margin: 5px 0 10px;
`;
// const Input = styled.input`
//   width: 120%;
//   height: 2em;
//   margin-bottom: 10px;
//   margin-top: 5px;
// `;
const Label = styled.label`
  font-size: 11px;
  color: grey;
`;
const Div1 = styled.div`
  width: 65%;
`;
const Div2 = styled.div`
  width: 30%;
  margin-right: 1em;
  margin-left: -4em;
`;
const Textare = styled.textarea`
  width: 85%;
  height: 78px;
  border:1px solid grey;
`;
const Heading = styled.p`
  font-size: 23px;
  color: #375d75;
`;
const Btn = styled.button`
  background-color: #29aa60;
  color: white;
  border-radius: 5px;
  border: none;
  margin: 30px 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: #007500;
  }
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
      <Flex w={'90%'} m={'auto'} >
        <Box w={'65%'}>
          <Label>CLIENT & PROJECT</Label>
          <br />
          <Input w={'85%'} m={'3px 0'}
            type='text'
            placeholder='Select or create a project'
            onChange={(e) => setClient(e.target.value)}
            value={client}
          />
          <br />
          <Flex gap={'35px'}>
            <div>
              <Label >TASK</Label>
              <br />
              <Input m={'3px 0'} w={'110%'}
                type='text'
                placeholder='Select or create a task...'
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div>
              <Label>TAGS</Label>
              <br />
              <Input m={'3px 0'} w={'110%'}
                type='text'
                placeholder='Add a tag...'
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
          </Flex>
          <Textarea w={'85%'} mt={'2'}
            type='textArea'
            placeholder='Enter log description or drop files here to attach'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Box>
        <Div2>
          <Label>TIME & DATE</Label>
          <br />
          <Input type='number' placeholder='Duration' w={'120%'} m={'5px 0'}/>
          <div style={{ display: 'flex', gap: '10px', marginRight: '-3.7em' }}>
            <Input type='number' placeholder='Start time' m={'5px 0'}/>
            <Input type='number' placeholder='End time' m={'5px 0'}/>
          </div>
          <Input type='date' />
          <br />
          <Label>EXPENSES</Label>
          <br />
          <Input type='number' placeholder='Enter expense amount' />
          <br />
        </Div2>
      </Flex>
      <Btn
        onClick={() => {
          handleSubmit();
          {
            status ? setStatus(false) : setStatus(true);
          }
        }}>
        Start Timer
      </Btn>
      <Btn
        onClick={() => {
          handleSubmit();
          setOpen(false);
        }}>
        Start & close
      </Btn>
      <Btn onClick={() => setOpen(false)}>Cancel</Btn>
    </Box>
  );
};
