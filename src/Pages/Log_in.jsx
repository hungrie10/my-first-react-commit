import React from 'react'
import { useState } from 'react'

function Log_in() {
    const [name, setName] = useState('Guest');
    const [save, setSave] =useState(''); 
    // You can change the name to any default name you want
    function handleNameChange() {
        if (save) {
            setName(save);
            alert(`Welcome ${save}!`);
        } else { alert("Please enter a username") }
        
    }


  return (
      <form onSubmit={(e) => e.preventDefault()} className='flex items-center justify-center w-100 h-[100vh]' action="#">
          <div id="innerForm" >
          <h1 id='title' className='text-2xl font-bold mb-4'>Log In</h1>

          <div id="welcome_message" className='flex flex-col justify-start'>
              <h1>Welcome Back, { name }! 👋</h1>
              <p>Login to your account</p>
          </div>

              <div id="my_details">
                  <label >
                      <p>Username</p>
                      <input   type="text" placeholder='Username' onChange={(e) => setSave(e.target.value)} />
                  </label>
                    <br />
                  <label>
                      <p>Password</p>
                      <input type="password" placeholder='Enter password'  />
                  </label>
                  <br />
                  <input onClick={() => handleNameChange()} className='bg-black text-amber-50' type="submit" value="Log in" />
              </div>
       
       </div>
            </form>
  )
}

export default Log_in
