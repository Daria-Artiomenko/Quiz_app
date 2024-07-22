import { QuizConfigPage } from "./pages/quizConfigPage/QuizConfigPage";
import { QuizQuestionPage } from "./pages/quizQuestionPage/QuizQuestionPage";
import { QuizResultsPage } from "./pages/quizResultsPage/QuizResultsPage";
import { StatisticPage } from "./pages/statisticPage/StatisticPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path='/statistic' element={<StatisticPage />} />
                <Route path='/results' element={<QuizResultsPage />} />
                <Route path='/quiz' element={<QuizQuestionPage />} />
                <Route path='/' element={<QuizConfigPage />} />
            </Routes>
        </>
    );
}

export default App;
