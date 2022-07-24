
import React , {useState} from 'react'
import { AiOutlineBarChart } from "react-icons/ai";

import {  BsGrid3X3GapFill,BsStopwatch,BsBriefcase,BsFolder,BsPeople ,BsQuestionCircle,BsPerson,BsPhone,BsBell} from "react-icons/bs";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    background
  } from '@chakra-ui/react'
import styled from './sidebar.module.css'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
   const  Sidebar  = ()=>{
    const[name,setName]=useState("")
 useEffect(()=>{
  getData()
 },[])


   const id = JSON.parse(localStorage.getItem('userid'));
   const getData = async () => {
    const r = await axios.get(`http://localhost:4040/teamMember/user/${id}`);
     console.log(r.data)
     setName(r.data.name)
}
  
    return (
        <>
        <div className= {styled.sidebarmain}>
            <div className={styled.sideberdiv1}></div>
            <div className={styled.sideberdiv2}>
                
                <div className= {styled.icon1}>
                <BsGrid3X3GapFill  style={{width:"20px" , height:"15px", marginTop:"2px" }} />
                <img  src='https://app.myhours.com/assets/myhours_app_logo_icon.svg'/>
                </div>

                <Link to="/track" >   <div className={styled.icon2}>
                    <BsStopwatch style={{width:"15px" , height:"15px", marginTop:"10px" ,marginLeft:"14px"}} />
                    <p>Track</p>
                   
                </div>
                </Link>
                <div className={styled.icon2}>
                    <BsBriefcase style={{width:"15px" , height:"15px", marginTop:"5px", marginTop:"10px" ,marginLeft:"14px" }} />
                    <p>Project</p>
                </div>
                <Accordion>
  <AccordionItem  style={{border:"none"}}>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  border="none">
        <div className={styled.icon3}>
                    < AiOutlineBarChart style={{width:"20px" , height:"20px", marginTop:"10px" ,marginLeft:"16px"}} />
                    <p>Report</p>
                </div>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={5}  style={{backgroundColor :"" , textAlign:"start" ,color:"gray"}}>
    <div  style={{marginLeft:"37px"}}>
    <p style={{cursor: 'pointer'}}>Dashboard</p>
     <p style={{cursor: 'pointer'}}>Activity</p>
     <p style={{cursor: 'pointer'}}>Team pivot</p>
     <p style={{cursor: 'pointer'}}>Economy</p>
     <p style={{cursor: 'pointer'}}>Timesheet</p>
    </div>
    
   
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  <Accordion >
  <AccordionItem  style={{border:"none"}}>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  border="none"  >
        <Link to="/Clients" > 
        <div className={styled.icon3}>
                    < BsFolder style={{width:"18px" , height:"15px", marginTop:"10px" ,marginLeft:"16px"}} />
                  
                    <p>Clients</p>
                   
                    </div>
                    </Link>
        </Box>
                
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={5}  style={{backgroundColor :"" , textAlign:"start" ,color:"gray"}}>
    <div  style={{marginLeft:"37px"}}>
    <p style={{cursor: 'pointer'}}>Clients</p>
     <p style={{cursor: 'pointer'}}>Invoices</p>
     <p style={{cursor: 'pointer'}}>Uninvoiced</p>
   
    </div>
    
   
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  <Accordion  >
  <AccordionItem  style={{border:"none"}}>
    <h2>
      <AccordionButton>
        
        <Box flex='1' textAlign='left'  border="none">
        <Link to="/teams" > 
        <div className={styled.icon3}>
                    < BsPeople style={{width:"20px" , height:"18px", marginTop:"10px" ,marginLeft:"16px"}} />
                    <p>Team</p>
                </div>
                </Link>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={5}  style={{backgroundColor :"" , textAlign:"start" ,color:"gray"}}>
    <div  style={{marginLeft:"37px"}}>
    <p style={{cursor: 'pointer'}}>Team members</p>
     <p style={{cursor: 'pointer'}}>Teams</p>
    
   
    </div>
    
   
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
   <div className={styled.pro}>
     <p> Pro trial expires in 10 days</p>
     <h1>Keep/Leave the Pro</h1>
   </div>
   <div className={styled.icon2}>
                    <BsQuestionCircle style={{width:"15px" , height:"15px", marginTop:"10px" ,marginLeft:"14px"}} />
                    <p>Help</p>
                </div>
                <div className={styled.icon2}>
                    <BsPhone style={{width:"15px" , height:"15px", marginTop:"10px" ,marginLeft:"14px"}} />
                    <p>Apps</p>
                </div>
                <div className={styled.icon2}>
                    <BsBell style={{width:"15px" , height:"15px", marginTop:"10px" ,marginLeft:"14px"}} />
                    <p>What's new</p>
                </div>
                <div className={styled.icon2}>
                    <BsPerson style={{width:"15px" , height:"15px", marginTop:"10px" ,marginLeft:"14px"}} />
                    <p>{name}</p>
                </div>
   
            </div>
        </div>
        </>
    )

   }

   export default Sidebar