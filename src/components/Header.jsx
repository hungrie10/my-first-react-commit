import React from 'react'

function Header() {
  return (
    <header>
          <nav>
              <ul className='flex h-[10vh]  bg-gray-800 text-white p-4 text-lg justify-center gap-[3vw] items-center'> 
                
                  <li className='hover:bg-black hover:text-amber-50 hover:p-3 w-[10vw] text-center'><a href="#">Login</a></li>
                
                
                  <li className='hover:bg-black hover:text-amber-50 hover:p-3 w-[10vw] text-center'><a href="#">Sign Up</a></li>
                
              </ul>
          </nav>
    </header>
  )
}

export default Header
