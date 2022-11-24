import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Booklist from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyForm from "./components/MyForm";
import MyNav from "./components/MyNav";
import WarningSign from "./components/WarningSign";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <MyForm></MyForm>
      <Booklist></Booklist>
      <WarningSign string="an alert!!!"></WarningSign>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
