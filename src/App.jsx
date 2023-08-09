import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage/HomePage'



function App() {
 

  return (
    <Router>
      <Routes>

        <Route path='/' element={<Layout/>} >
            
            <Route path='/' element={<HomePage/>}/>


        </Route>
      </Routes>
     
    </Router>
  )
}

export default App
