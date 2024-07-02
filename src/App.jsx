import Day from "./components/Day";
import DayList from "./components/DayList";
import Header from "./components/Header";
import EmptyPage from "./components/EmptyPage";
import CreateWord from "./components/CreateWord";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateDay from "./components/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="*" element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
