import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path={"*"} element={<EmptyPage />} />
        </Routes>

      </div>
    </BrowserRouter >
  );
}

export default App;
