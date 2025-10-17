
import './App.css'
import TheHeader from './components/TheHeader/TheHeader';
import TheFooter from './components/TheFooter/TheFooter';

function App() {
  return (
<div className='app'> 
<TheHeader />
  <main>
    <section>
      <h1>About react</h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sint ut earum cum vitae voluptate commodi eligendi voluptatibus optio quas neque magni atque, vel non temporibus at tenetur velit cupiditate.</p>
    </section>
  </main>
  <TheFooter />
  
</div>
        
  );
}

export default App
