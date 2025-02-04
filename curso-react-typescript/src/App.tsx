import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import TextField from './components/TextField';

interface Task{
  id: string;
  isCompleted: boolean;
}

function App() {

  const [count,setCount]=useState<number>(10)
  const [tasks, setTasks]=useState<Task[]>([])

  useEffect(() => {
    setTasks([
      { id: "1", isCompleted: false },
      { id: "2", isCompleted: false },
    ]);
    setCount(20);
  }, []);

  return (
    <>
      <TextField onChange={(e)=> console.log(e.target.value)}/>
      <Button theme='Dark'/>
      <p>{count}</p>
      <p>{tasks.map((tasks)=>(
        <div key={tasks.id}>
          <p>{tasks.id}</p>
          <p>{tasks.isCompleted}</p>
        </div>)
    
      )}</p>
    </>
  )
}

export default App
