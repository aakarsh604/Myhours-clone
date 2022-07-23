import React, { useState } from 'react';
import { SettingsIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

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
const Input = styled.input`
  width: 120%;
  height: 2em;
  margin-bottom: 10px;
  margin-top: 5px;
`;
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
const Textarea = styled.textarea`
  width: 81%;
  height: 78px;
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
export const Form = ({ status }) => {
  const Data = JSON.parse(localStorage.getItem('clientData')) || [];
  // console.log('json', Data);
  const [client, setClient] = useState('');
  const [task, setTask] = useState('');
  const [tags, setTags] = useState('');
  const [desc, setDesc] = useState('');
  const [data, setData] = useState(Data);
  // console.log(data);
  const handleSubmit = () => {
    setData([{ client: client, task: task, tags: tags, desc: desc }, ...data]);
    // console.log(data);
    localStorage.setItem('clientData', JSON.stringify([...data]));
  };
  const handleStart = () => {
    status(false);
  };
  const handleClose = () => {
    status(false);
  };
  return (
    <div>
      <Heading style={{ marginLeft: '20px' }}>
        Add a time log <SettingsIcon style={{ fontSize: '15px' }} />
      </Heading>
      <MainDiv style={{ display: 'flex' }}>
        <Div1>
          <Label>CLIENT & PROJECT</Label>
          <br />
          <ClientInput
            type='text'
            placeholder='Select or create a project'
            onChange={(e) => setClient(e.target.value)}
            value={client}
          />
          <br />
          <div style={{ display: 'flex', gap: '55px' }}>
            <div>
              <Label>TASK</Label>
              <br />
              <Input
                type='text'
                placeholder='Select or create a task...'
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div>
              <Label>TAGS</Label>
              <br />
              <Input
                type='text'
                placeholder='Add a tag...'
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
          </div>
          <Textarea
            type='textArea'
            placeholder='Enter log description or drop files here to attach'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Div1>
        <Div2>
          <Label>TIME & DATE</Label>
          <br />
          <Input type='number' placeholder='Duration' />
          <div style={{ display: 'flex', gap: '10px', marginRight: '-3.7em' }}>
            <Input type='number' placeholder='Start time' />
            <Input type='number' placeholder='End time' />
          </div>
          <Input type='date' />
          <br />
          <Label>EXPENSES</Label>
          <br />
          <Input type='number' placeholder='Enter expense amount' />
          <br />
        </Div2>
      </MainDiv>
      <Btn onClick={handleSubmit}>Start Timer</Btn>
      <Btn onClick={handleStart}>Start & close</Btn>
      <Btn onClick={handleClose}>Cancel</Btn>
    </div>
  );
};
