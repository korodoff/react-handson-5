import './App.css';
import HighOrderComponent from './component/highOrderFunction';
import PureFunction from './component/pureFunction';
import "./component/style.css"

function App() {
  return (
    <div className="App">
      
      <HighOrderComponent/>
      <PureFunction/>
    </div>
  );
}

export default App;
