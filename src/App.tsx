import { QuizConfigPage } from "./pages/quizConfigPage/QuizConfigPage";
import { QuizQuestionPage } from "./pages/quizQuestionPage/QuizQuestionPage";
import { QuizResultsPage } from "./pages/quizResultsPage/QuizResultsPage";
import { StatisticPage } from "./pages/statisticPage/StatisticPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

export const paths = {
    quizConfig: "/",
    statistic: "/statistic",
    results: "/results",
    quiz: "/quiz",
};
function App() {
    return (
        <>
            <Routes>
                <Route path={paths.statistic} element={<StatisticPage />} />
                <Route path={paths.results} element={<QuizResultsPage />} />
                <Route path={paths.quiz} element={<QuizQuestionPage />} />
                <Route path={paths.quizConfig} element={<QuizConfigPage />} />
            </Routes>
        </>
    );
}

export default App;
