import { Separator } from '@radix-ui/react-separator';
import './App.css'
import TopHeader from "./components/compound/top-header";
import Projects from './components/compound/projects';

function App() {

  return (
    <div className='h-auto w-full'>
    <TopHeader/>
    <h2 className='text-2xl font-bold text-left my-8'>My Projects</h2>
    <Projects />
    </div>
  )
}

export default App
