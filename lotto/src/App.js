import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [lotto,setLotto] = useState([])
  function makeLotto(){
    let i = 0
    let rnumber = 0
    let lnumber = []

    let a = 0
    let lottos = []
    for(i=1; i<45; i++){
      lottos.push(i)
    }
    // console.log(lottos.toLocaleString())
    for(i=0; i<44; i++){
      rnumber = Math.floor(Math.random()*44)
      a = lottos[i] +1
      lottos[i] = lottos[rnumber]
      lottos[rnumber] = a
    }
    console.log(lottos)
    for(i=0; i<6; i++){
      lnumber.push(lottos[i])
    }

    // for(i<0; i<6; i++){
    //   rnumber = Math.floor(Math.random()*45+1)
    //   lnumber.push(rnumber)
    //   console.log(lnumber)
    // }
    setLotto(lnumber)
  }

  return (
    <div className="App">
      <h1>로또앱</h1>
      <button onClick={makeLotto} className='btn_lotto'>로또번호 생성</button>
      <h2>{lotto.toLocaleString()}</h2>
    </div>
  );
}

export default App;