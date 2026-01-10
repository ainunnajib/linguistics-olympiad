import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lessons from './pages/Lessons'
import LessonDetail from './pages/LessonDetail'
import Problems from './pages/Problems'
import ProblemDetail from './pages/ProblemDetail'
import QuizPage from './pages/QuizPage'
import Strategy from './pages/Strategy'
import QuickRef from './pages/QuickRef'
import CrashCourse from './pages/CrashCourse'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/:id" element={<LessonDetail />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:id" element={<ProblemDetail />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/quickref" element={<QuickRef />} />
        <Route path="/crash-course" element={<CrashCourse />} />
      </Routes>
    </Layout>
  )
}

export default App
