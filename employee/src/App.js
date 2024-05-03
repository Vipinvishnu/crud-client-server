import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import EditPage from './components/EditPage';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
       
        <Route path='/' element={<Homepage />} />
        <Route path='/edit/:id' element={<EditPage />} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
