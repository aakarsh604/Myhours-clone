
import React from 'react'
import {  BsGrid3X3GapFill,BsStopwatch,BsBriefcase } from "react-icons/bs";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
import styled from './sidebar.module.css'
   const  Sidebar  = ()=>{

    return (
        <>
        <div className= {styled.sidebarmain}>
            <div className={styled.sideberdiv1}></div>
            <div className={styled.sideberdiv2}>
                
                <div className= {styled.icon1}>
                <BsGrid3X3GapFill  style={{width:"20px" , height:"15px", marginTop:"2px" }} />
                <img  src='https://app.myhours.com/assets/myhours_app_logo_icon.svg'/>
                </div>

                <div className={styled.icon2}>
                    <BsStopwatch style={{width:"15px" , height:"15px", marginTop:"10px" ,marginLeft:"14px"}} />
                    <p>Track</p>
                </div>
                <div className={styled.icon2}>
                    <BsBriefcase style={{width:"15px" , height:"15px", marginTop:"5px", marginTop:"10px" ,marginLeft:"14px" }} />
                    <p>Project</p>
                </div>
                <Accordion>
  <AccordionItem  style={{border:"none"}}>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  border="none">
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  </Accordion>

            </div>
        </div>
        </>
    )

   }

   export default Sidebar