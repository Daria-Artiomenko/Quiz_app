import { QuizConfigPage } from "./pages/quizConfigPage/QuizConfigPage";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import LoadingAnimation from "./components/loadingAnimation/LoadingAnimation";
const QuizQuestionPage = lazy(() =>
    import("./pages/quizQuestionPage/QuizQuestionPage").then((module) => ({
        default: module.QuizQuestionPage,
    }))
);
const QuizResultsPage = lazy(() =>
    import("./pages/quizResultsPage/QuizResultsPage").then((module) => ({
        default: module.QuizResultsPage,
    }))
);
const StatisticPage = lazy(() =>
    import("./pages/statisticPage/StatisticPage").then((module) => ({
        default: module.StatisticPage,
    }))
);
export const paths = {
    quizConfig: "/",
    statistic: "/statistic",
    results: "/results",
    quiz: "/quiz",
};
function App() {
    return (
        <Suspense fallback={<LoadingAnimation />}>
            <Routes>
                <Route path={paths.statistic} element={<StatisticPage />} />
                <Route path={paths.results} element={<QuizResultsPage />} />
                <Route path={paths.quiz} element={<QuizQuestionPage />} />
                <Route path={paths.quizConfig} element={<QuizConfigPage />} />
            </Routes>
        </Suspense>
    );
}

export default App;
