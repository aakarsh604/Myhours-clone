// import { Flex, Heading, Input } from '@chakra-ui/react';
import { Button, FormDiv, ImageDiv, MainDiv } from '../../components/Singin/Signin.styled';
import "./Sign.css"
export const Signin = ()=>{

    return (
     <div>
        <MainDiv>
            <ImageDiv>
                <img style={{margin : "10px 75px "}} src="https://app.myhours.com/assets/myhours_app_logo_icon.svg" alt="Myhours" />
            </ImageDiv>
            <FormDiv>
                <form id='form'>
               <h2 id='signin'>Sign in</h2>
               <p id='emailPara'>EMAIL</p>
               <input id='email' type="email" placeholder='Email' required="true"/>
               <p id='emailPara' style={{marginTop:"20px"}}>PASSWORD</p>
               <input id='email'  type="email" placeholder='Password' required="true"/>
               <input id='submit' type="submit" value="Sign in"/>
               <a id='pass' href="#">Reset Password</a>
                </form>
                <hr id='line' />
                <a id='newuser' href="#">New to My Hours? Sign up</a>
           </FormDiv>
        </MainDiv>
           
        
    </div>
    )
    
}