import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
//import TaskListComponent from './components/container/task_list';
import Acomponent from './components/pure/Acomponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*Componente Greetings
        <Greeting name={"yeraki"}></Greeting>

        <GreetingF name="yeraki"></GreetingF>

        <TaskListComponent></TaskListComponent>*/}

        <Acomponent></Acomponent>
        
      </header>
    </div>
  );
}

export default App;
