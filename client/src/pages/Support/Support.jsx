import React from "react"
import "./Support.css"
const Support = ()=>{
   
    return (
        <>
        <div  className= "supportmaindiv">
            <p className="support_here">We're here</p>
            <p  className="support_hours">We typically respond in less than 24 hours on business days. Contact us via email, live chat or the form below.</p>
            <p className="support_read"><samp  style={{color:"#53bff2 ",textDecoration: "underline", fontWeight: "bold" }}>Read our help guides</samp> or send us a message to get detailed help.</p>
            <div style={{marginLeft:"150PX",justifyContent:"center",marginTop:"50px",marginBottom:"100PX"}}><iframe width="800" height="400" box-Shadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px"  src="https://www.youtube.com/embed/VpMysclixyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <br/>
            <hr></hr>
            <p className="support_hours" style={{marginTop:"40px",marginBottom:"20px"}}>What do you need help with?</p>

            <select>
                <option>I have a question before signing up...</option>
                <option>I can't access my account...</option>
                <option>Something might be broken...</option>
                <option>I'd like to request a feature...</option>
                <option>I have billing question...</option>
                <option>Other</option>
            </select>
            <h1>Message</h1>
            <textarea  placeholder="What's your issue or question?"></textarea>
            <h1>Name</h1>
            <input tyoe="text" placeholder="Enter your name" />
            <h1>Email Address</h1>
            <input tyoe="text" placeholder="Enter your email address" />
            <button className="button1" style={{color:"white",backgroundColor:" #3b8fc2",padding:"8px" ,width:"100px", fontSize:"large",borderRadius:"25px" , marginTop:"40px" ,fontWeight:"bold" ,marginBottom:"80px"}}>Send</button>
        </div>
        </>
    )
}

export default Support