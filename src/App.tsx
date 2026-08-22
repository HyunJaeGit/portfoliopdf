import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Aura3D from './pages/Aura3D'
import Home from './pages/Home'
import MZ from './pages/MZ'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'
import Print from './pages/Print'
import Resume from './pages/Resume'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Navigate to="/portfolio" replace />} />
        <Route path="projects/aura3d" element={<Navigate to="/portfolio/aura3d" replace />} />
        <Route path="projects/mz" element={<Navigate to="/portfolio/mz" replace />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/aura3d" element={<Aura3D />} />
        <Route path="portfolio/mz" element={<MZ />} />
        <Route path="print" element={<Print />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
