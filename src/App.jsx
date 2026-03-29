import './App.css'
import { Suspense, useMemo, useState } from 'react'
import Banner from './components/Homepage/Banner/Banner'
import Footer from './components/Homepage/Footer/Footer'
import Players from './components/Homepage/Players/Players';
import Navbar from './components/Navbar/Navbar'

const fetchPlayer = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {

  const playersPromise = useMemo(() => fetchPlayer(), []);
  const [coin, setCoin] = useState(5000);

  return (
    <>
      <Navbar coin={coin}/>
      <main className="mx-auto w-[92%] max-w-315">
        <Banner/>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin} />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
