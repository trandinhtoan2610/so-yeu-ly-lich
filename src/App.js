import "./App.css";
import Avatar from "./Avatar"; 
import Header from "./Header";
import Body from "./Body";
import Person from './Person'
function App() {
  return (
    <div className="App">
      <div className="Headers">
        
        <Header></Header>
      </div>
      <div className="content">
        {/* <Body></Body> */}
        <Person/>
      </div>
    </div>
  );
}

export default App;
