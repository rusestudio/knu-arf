import HomePage from './pages/HomePage'
import MapPage from './pages/MapPage'
import ARPage from './pages/ARPage'
import StampPage from './pages/StampPage'
import MyPage from './pages/MyPage'
import MobileLayout from './layouts/MobileLayout'
import BottomNavigation from './components/BottomNavigation'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/ar" element={<ARPage />} />
          <Route path="/stamp" element={<StampPage />} />
          <Route path="/my" element={<MyPage />} />
        </Routes>

        <BottomNavigation />
      </MobileLayout>
    </BrowserRouter>
  )
}

export default App