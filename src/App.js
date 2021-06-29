import Visualizer from './components/Visualizer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import { arrayGenerator } from './utils/arrayGenerator'
import {
  bubbleSortAnimation,
  selectionSortAnimation,
  insertionSortAnimation,
  quickSortAnimation,
} from './utils/animations'
const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const handleWindowSizeChange = () => {
    setWindowSize(window.innerWidth)
  }
  window.addEventListener('resize', () => {
    handleWindowSizeChange()
  })
  const isMobile = windowSize <= 500
  const viewPort = isMobile ? 'mobile' : 'laptop'
  const [array, setArray] = useState(arrayGenerator(true, viewPort))
  const [bubbleSortMode, setBubbleSortMode] = useState(0)
  const [selectionSortMode, setSelectionSortMode] = useState(0)
  const [insertionSortMode, setInsertionSortMode] = useState(0)
  const [quickSortMode, setQuickSortMode] = useState(0)
  return (
    <div>
      <Header
        array={array}
        device={viewPort}
        onClick={{
          setArray,
          bubbleSortAnimation,
          selectionSortAnimation,
          insertionSortAnimation,
          quickSortAnimation,
          setBubbleSortMode,
          setInsertionSortMode,
          setSelectionSortMode,
          setQuickSortMode,
        }}
        modes={{
          bubbleSortMode,
          insertionSortMode,
          selectionSortMode,
          quickSortMode,
        }}
      />
      {isMobile ? (
        <Visualizer
          viewPort='mobile'
          array={array}
          modes={{
            bubbleSortMode,
            insertionSortMode,
            selectionSortMode,
            quickSortMode,
          }}
        />
      ) : (
        <Visualizer
          viewPort='laptop'
          array={array}
          onClick={{
            setArray,
            setBubbleSortMode,
            setInsertionSortMode,
            setSelectionSortMode,
            setQuickSortMode,
          }}
          modes={{
            bubbleSortMode,
            insertionSortMode,
            selectionSortMode,
            quickSortMode,
          }}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
