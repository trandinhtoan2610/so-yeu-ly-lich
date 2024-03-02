import "./App.css";
import Avatar from "./Avatar"; 
import Header from "./Header";
import Body from "./Body";
function App() {
  return (
    <div className="App">
      <div className="Headers">
        
        <Header></Header>
      </div>
      <div className="content">
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
