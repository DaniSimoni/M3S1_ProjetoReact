import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './Layout/Layout';
import { HomePage } from './Pages/HomePage/HomePage'
import { LoginPage } from './Pages/LoginPage/LoginPage';



function App() {
 

  return (
    <Router>
      <Routes>

        <Route path='/' element={<Layout/>} >
            
            <Route path='/' element={<HomePage/>}/>


        </Route>
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
     
    </Router>
  )
}

export default App
