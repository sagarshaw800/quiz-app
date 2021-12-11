import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import QuizPage from './Pages/QuizPage/QuizPage';
import DataContext from './Context/DataContext';
import SubjectContext from './Context/SubjectContext';
import ChapterContext from "./Context/ChapterContext ";
import QuesNumberContext from './Context/QuesNumberContext';

function App() {
  return (
    <SubjectContext>
      <ChapterContext>
        <QuesNumberContext>
          <DataContext>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz/:subject/:id" element={<QuizPage />} ></Route>
              </Routes>
            </BrowserRouter>
          </DataContext>
        </QuesNumberContext>
      </ChapterContext>
    </SubjectContext>
  );
}

export default App;
