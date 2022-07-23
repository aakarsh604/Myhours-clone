import React, { useState } from 'react';
import {
  CalendarIcon,
  ArrowForwardIcon,
  ArrowBackIcon,
} from '@chakra-ui/icons';
import { Stopwatch } from './Stopwatch';
import styled from 'styled-components';
import { Form } from './Form';
import {
  AiOutlineHome,
  AiOutlinePlus,
  AiOutlineSmallDash,
  AiOutlineMenu,
  AiOutlineStar,
} from 'react-icons/ai';

const Container = styled.div`
  width: 66%;
  padding: 20px 100px;
  text-align:left;
`;
const Navbar = styled.div`
  color: #375d75;
  display: flex;
  justify-content: space-between;
`;
const CurrentDay = styled.p`
  font-size: 1.6em;
  color: #375d75;
`;
const InputDate = styled.input`
  border: none;
  font-size: 1.3em;
`;
const Navbar2 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 10px;
`;
const AddBtn = styled.button`
  border: none;
  font-size: 15px;
  color: #3b8fc2;
  cursor: pointer;
`;
const Nav2Btn = styled.button`
  border: none;
  font-size: 15px;
  color: #375d75;
  background: white;
  cursor: pointer;
`;

// const days = ['Sun', 'Mon', 'Tue', 'Thu', 'Fri', 'Sat'];
export const TrackPage = () => {
  const [open, setOpen] = useState(false);
  const now = new Date();
  const nows = now.toString().split(' ');
  // console.log(nows);
  const [date, setDate] = useState(now.getDate());
  const [month, setMonth] = useState();
  // console.log(nows);
  return (
    <Container>
      <Navbar>
        <div style={{ display: 'flex', gap: '15px' }}>
          <CurrentDay>
            Today, {date} {nows[1]}
          </CurrentDay>
          <InputDate
            type='date'
            style={{ border: 'none', outline: 'none', color: '#375D75' }}
          />
          <ArrowBackIcon style={{ marginTop: '1.7em', fontSize: '1.3em' }} />
          <ArrowForwardIcon style={{ marginTop: '1.7em', fontSize: '1.3em' }} />
          <AiOutlineHome style={{ marginTop: '1.7em', fontSize: '1.3em' }} />
        </div>
        <Stopwatch />
      </Navbar>
      <Navbar2>
        <div>
          <AddBtn onClick={() => setOpen(true)}>
            <AiOutlinePlus /> Add time log
          </AddBtn>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Nav2Btn>
            <AiOutlineSmallDash style={{ fontSize: '22px' }} />
          </Nav2Btn>
          <Nav2Btn>
            <AiOutlineMenu style={{ paddingTop: '' }} /> Timeline
          </Nav2Btn>
          <Nav2Btn>
            <AiOutlineStar /> Favourite logs
          </Nav2Btn>
        </div>
      </Navbar2>
      {open ? <Form status={setOpen} /> : ''}
    </Container>
  );
};
