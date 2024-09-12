import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes> {/* Switch 대신 Routes 사용 */}
          <Route path="/" element={ <DayList />} /> {/* exact 필요 없음 */}
          <Route path="/day" element={<Day />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;