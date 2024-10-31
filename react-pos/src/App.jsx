import { Navber } from "./components/Navber";
import { HomePage } from "./components/Homepage";
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navber />
       <HomePage />
      </BrowserRouter>
    </>
  );
}

export default App;
