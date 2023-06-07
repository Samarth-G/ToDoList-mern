import "./App.scss"
import { BrowserRouter, Route , Routes} from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ShowTodoList/>} />
            <Route path="/create-todo" element={<CreateTodo/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;