import { useState, useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  // useref hook 
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}[]~'"

    for(let i = 1; i<= length; i++){
      // yah random password generate karane ka code hai
      let char = Math.floor(Math.random()*str.length+1)
      
      // charAt zero index character deta hai and pass mai append karata hai password character ko
      pass += str.charAt(char)
    }
    setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])

  // password copy ke liye code 
  //passwordref optimization ke liye hai jo current location or select kitana karan hai yah btata hai
  const copytopasswordclipboard = useCallback(()=>{
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])


  // call password generator using useEffect hook function 
  useEffect(()=>{
    passwordgenerator()
  },[length,numberAllowed,charAllowed,passwordgenerator])



  return (
    <> 
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500' >
      <h1 className='text-white text-center my-3' > Password Generator</h1>
      <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
               value={password}
               className='outline-none w-full py-1 px-3 bg-white'
               placeholder='pass'
               readOnly 
               ref={passwordref}  

        />
        <button onClick={copytopasswordclipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900'>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer' 
        onChange={(e)=>{
          setlength(e.target.value)
        }}
        />
        <label> Length:{length}</label>
      </div>
         
      
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}
        />
        <label htmlFor='numberInput'>Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='characterInput'
        onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }}
        />
        <label htmlFor='characterInput'>Numbers</label>
      </div>



      </div>
      
     </div>

    </>
  )
}

export default App
