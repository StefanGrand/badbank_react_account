import React, { useState } from 'react';
import Card from './cards';
import { UserContext} from './context'

function Login(){
        const [show, setShow]         = React.useState(true);
        const [status, setStatus]     = React.useState('');
        const [email, setEmail]       = React.useState('');
        const [password, setPassword] = React.useState('');
        const ctx = React.useContext(UserContext);  

        const validate = (field, label) => {
          if (!email) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
          } 
          // if (password != password) {
          //   setStatus('Error: ' + label);
          //   setTimeout(() => setStatus(''),3000);
          //   return false;
          // }
          return true;
      }
    
      const handleCreate = () => {
        console.log(email,password);
        if (!validate(email,    'email'))    return;
        if (!validate(password, 'password')) return;
        ctx.users.push({email,password,balance:0});
        setShow(false);
      }    
    
      const clearForm = () => {
        
        setShow(true);
      }

        return (
          <Card
            bgcolor="secondary"
            header="Login"
            status={status}
            body={show ? (  
                    <>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-dark" onClick={handleCreate}>Login</button>
                    </>
                  ):(
                    <>
                    <h5>Successful Login: Please choose your options</h5>
                    <a href="#/deposit" className="btn btn-dark" onClick={clearForm} >Deposit money</a>
                    <h1></h1>
                    <a href="#/withdraw" className="btn btn-dark">Withdraw money</a>
                    <h1></h1>
                    </>
                  )}
          />
        )      
}
export default Login;