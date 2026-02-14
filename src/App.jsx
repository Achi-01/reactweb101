import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div>
        <div className='sticky top-0 grid grid-rows-[35%_45%_20%]'>
        <div>
        <div>Name</div>
        <div>Title</div>
        <div>Caption</div>
        <div>View Resume</div>
        </div>
        <div>Nav</div>
        <div className='fliex items-end'>Link</div>
      </div>
      </div>
       <div>
        <div>About</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
      </div>
    
    </div>
  )
}
export default App
