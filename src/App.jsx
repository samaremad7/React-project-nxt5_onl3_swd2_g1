import { useEffect, useState } from 'react';

import TheHeader from './components/TheHeader/TheHeader';
import TheFooter from './components/TheFooter/TheFooter';

import './App.css'

const headerlink = [
  { title: "Shop", path: "/shop" },
  { title: "On sale", path: "/On-sale" },
  { title: "New Arrivels", path: "/New-Arrivels" },
  { title: "Brands", path: "/Brands" },
  { title: "White Friday", path: "/White-Friday" }
];



function App() {
  const [counter, setCounter] = useState(0);
 const [showheader , setShowHeader]=useState(true);
  const handelCounterButtons = (type, value) => {
    if (type === "increase") {
      setCounter((prevalue) => prevalue + value);
    }
    else if (type === "decrease") {
      setCounter((prevalue) => prevalue - value);
    }
    else {
      setCounter(0)
    }  
  };

  useEffect(()=>{
console.log("VeryGood samar")
    },[showheader])

  return (
    <div className='app'>
      <button onClick={()=>setShowHeader((prev)=>!prev)}> Toggle Show Header</button>
      {showheader && <TheHeader headerlink={headerlink} />}
      <main>
        <section>
          <h1>About react</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sint ut earum cum vitae voluptate commodi eligendi voluptatibus optio quas neque magni atque, vel non temporibus at tenetur velit cupiditate.</p>
        </section>

        <section>
          <h2>counter</h2>
          <span>{counter}</span>
          <div className='button'>
            <button onClick={() =>handelCounterButtons("increase", 5)}>increase</button>
            <button onClick={() =>handelCounterButtons("decrease", 5)}>decrease</button>
            <button onClick={() =>handelCounterButtons("reset")}>reset</button>

          </div>
        </section>


      </main>
      <TheFooter />

    </div>

  );
}

export default App
