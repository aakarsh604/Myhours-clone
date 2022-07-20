import React from 'react';
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
  Button,
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
} from './Styled-Components';

export const PricingPage = () => {
  return (
    <div>
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
            <div>
              <Dollar>$</Dollar>
              <Dollar$>6</Dollar$>
            </div>
            <div>
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
        <Button>Select</Button>
        <Button>14 day free trial</Button>
      </ButtonDiv>
      <div>
        <table style={{ margin: '50px 150px' }}>
          <thead>
            <tr>
              <th style={{ paddingRight: '750px' }}>Feature</th>
              <th style={{ paddingRight: '100px' }}>Free</th>
              <th>Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Track</td>
            </tr>
            {Track.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.title}</td>
                  <td>{e.free ? 'Yes' : 'No'}</td>
                  <td>{e.pro ? 'Yes' : 'No'}</td>
                </tr>
              );
            })}
            <tr>
              <td>Organize</td>
            </tr>
            {Organize.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.title}</td>
                  <td>{e.free ? 'Yes' : 'No'}</td>
                  <td>{e.pro ? 'Yes' : 'No'}</td>
                </tr>
              );
            })}
            <tr>
              <td>Billing</td>
            </tr>
            {Biling.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.title}</td>
                  <td>{e.free ? 'Yes' : 'No'}</td>
                  <td>{e.pro ? 'Yes' : 'No'}</td>
                </tr>
              );
            })}
            <tr>
              <td>Report</td>
            </tr>
            {Report.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.title}</td>
                  <td>{e.free ? 'Yes' : 'No'}</td>
                  <td>{e.pro ? 'Yes' : 'No'}</td>
                </tr>
              );
            })}
            <tr>
              <td>Team</td>
            </tr>
            {Team.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.title}</td>
                  <td>{e.free ? 'Yes' : 'No'}</td>
                  <td>{e.pro ? 'Yes' : 'No'}</td>
                </tr>
              );
            })}
            <tr>
              <td>Integration and Apps</td>
            </tr>
            {Integration_and_Apps.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.title}</td>
                  <td>{e.free ? 'Yes' : 'No'}</td>
                  <td>{e.pro ? 'Yes' : 'No'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
