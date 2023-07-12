import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
//import TaskListComponent from './components/container/task_list';
// import Acomponent from './components/pure/Acomponent'
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import MiComponenteContexto from './hooks/ejemplo3'
//import Ejemplo4 from './hooks/ejemplo4';
//import Greetingstyles from './components/pure/greetingstyles';
import { ClockFunctionComponent } from './components/clockFunctionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*Componente Greetings
        <Greeting name={"yeraki"}></Greeting>

        <GreetingF name="yeraki"></GreetingF>

        <TaskListComponent></TaskListComponent>*/}

        {/*<Acomponent></Acomponent>

        <Ejemplo1></Ejemplo1>

        <Ejemplo2></Ejemplo2>

        <MiComponenteContexto></MiComponenteContexto>
        
        <Ejemplo4 nombre="Carlos">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>

        <Greetingstyles name='Lucas'></Greetingstyles>*/}

        <ClockFunctionComponent></ClockFunctionComponent>
        
      </header>
    </div>
  );
}

export default App;
