import css from './App.module.css';
// import NavBarSimple from './components/NavBarSimple.js';
import Sidebar from './components/Sidebar.js';
import NavBarForm from "./components/NavBarForm.js";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
    </div>
  );
}

export default App;