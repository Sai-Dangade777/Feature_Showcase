import FeatureShowcase from './components/FeatureShowcase/FeatureShowcase'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="content-before" aria-hidden="true">
        Scroll down for features
      </div>
      
      <FeatureShowcase />
      
      <div className="content-after">
        <h2>More Features</h2>
        <p>Continue scrolling to explore more amazing features...</p>
      </div>
    </div>
  )
}

export default App
