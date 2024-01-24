import React from "react";
import {  Link} from "react-router-dom";

import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";
// const App = () => {
// const [data, setData] = useState(null);
// const [toggle, setToggle] = useState(false);
// const [value, setValue] = useState('');
// const onClick = () => setToggle(prev => !prev);
// useEffect(() => {
//     const timer = setTimeout(() => {
//         setData({});
//       }, 100);

//       return () => clearTimeout(timer);
//         }, [])
//     return (
//         <div>
//             <h1 data-testid="value-elem">{value}</h1>
//              {toggle === true && <div data-testid="toggle-elem">toggle</div>}
//              {data && <div style={{color: 'red'}}>data</div>}
//           <h1>Hello world</h1>
//           <button data-testid="toogle-btn" onClick={onClick}>click me</button>
//           <input onChange={e => setValue(e.target.value)} type="text" placeholder="input_value"/>
//         </div>
//     );
// };

// export default App;

const App = () => {
  return (
     <div>
    <Navbar/>
    <AppRouter/>


    
    </div>
  );
};

export default App;
