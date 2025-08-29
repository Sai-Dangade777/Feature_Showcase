import './App.css'
import { FeatureShowcase } from './components/FeatureShowcase/FeatureShowcase'

export default function App() {
  return (
    <div className="app-shell">
      <div className="spacer" aria-hidden="true">Scroll down</div>
      <FeatureShowcase />
      <div className="after-section">
        <h2>End of Feature Showcase</h2>
        <p>Normal page scroll resumes here.</p>
      </div>
    </div>
  )
}
