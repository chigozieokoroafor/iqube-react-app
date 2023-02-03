//import logo from './logo.svg';
//import './App.css';
import {useState} from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id:1,
        text: "start",
        day: "23",
        reminder: true
      },
      {
        id:2,
        text: "stop",
        day: "23",
        reminder: true
      },
      {
        id:3,
        text: "finsih",
        day: "23",
        reminder: true
      },
      {
        id:"continue",
        text: "start",
        day: "23",
        reminder: true
      }
    ]
  )

  return (
    <div className="container">
      <Header  />
      <Tasks tasks={tasks}/>
      
      
    </div>
  );
}

export default App;
