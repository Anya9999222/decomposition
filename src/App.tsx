import './App.css'

import SearchBlock from './components/SearchBlock/SearchBlock'
import NewsBlock from './components/NewsBlock/NewsBlock'
import FooterBlock from './components/FooterBlock/FooterBlock'

function App() {
  return (
    <div className='container'>
      <NewsBlock/>
      <SearchBlock/>
      <FooterBlock/>
    </div>
  )
}

export default App
