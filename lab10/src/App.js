import ToDo from "./components/ToDo";
import './App.css';
import img1 from "./components/img/f1.png";
import img2 from "./components/img/f2.png";
import img3 from "./components/img/f3.png";

function App() {
  return (
    <>
      <h1 class="main_title">Что Вам необходимо?</h1>
      <div class="main_block">
        <ToDo title="Первый блок" img={img1} text="Lorem, ipsum dolor sit amet consectetur adipiscing elit" />
        <ToDo title="Второй блок" img={img2} text="Lorem, ipsum dolor sit amet consectetur adipiscing elit" />
        <ToDo title="Третий блок" img={img3} text="Lorem, ipsum dolor sit amet consectetur adipiscing elit" />
      </div >
    </>
  );
}

export default App;
