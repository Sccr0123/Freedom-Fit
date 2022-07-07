import "bootstrap";
import "react-bootstrap";
import "./App.css";

//Pages
import Nav from "./components/Nav";
import CourseOverview from "./components/CourseOverview";
import CourseSingleView from "./components/CourseSingleView";
import Home from "./pages/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
