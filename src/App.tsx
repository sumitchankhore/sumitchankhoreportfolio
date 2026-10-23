import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImpactMetrics from './components/ImpactMetrics';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Education from './components/Education';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content"><Hero /><About /><ImpactMetrics /><Skills /><Experience /><Projects /><CaseStudies /><Education /><Journey /><Contact /></main><Footer /></>;
}
