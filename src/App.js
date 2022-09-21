import './component/custom.component.css'
import './App.css';
import Navbar from "./component/Navbar";
import Router from "./Router";

const App=()=>{
  return <div className="App bg-white">
      <Navbar/>
      <Router/>
    </div>
}

export default App;
