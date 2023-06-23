import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Detail from './Pages/Detail'


function App() {
  // 다크모드
  const [dark, setDark] = useState(false);
  

  const handleDarkMode = () => {
    setDark(!dark);
  }
  
  // API 
  const [data, setData] = useState([]);
  const [searchOption, setSearchOption] = useState('all');
  const handleSearchOption = (name) => {
    setSearchOption(name);
    console.log(name)
  }
  
  useEffect(() => {

    fetch(`https://restcountries.com/v3.1/${searchOption}`)
      .then(res => {
        if(res.ok) {
          return res.json()
        } else {
          alert('찾는 데이터가 없습니다!');
          throw new Error(`${res.status} 에러`);
        }
      })
      .then(data => {setData(data)})
      .catch(err => console.log(err.message))
  }, [searchOption])

  return (
  <div className={dark ? "App dark" : "App"}>
    <Header handleDarkMode={handleDarkMode} />
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={<Home data={data} 
          handleSearchOption={handleSearchOption} 
        />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App

