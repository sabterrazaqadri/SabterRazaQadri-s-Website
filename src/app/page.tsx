import Biography from "./components/Biography";
import Media from './components/Media';
import Herosection from './components/Herosection';


export default function Home() {
  return (
    <div>
      <Herosection/>
      <Biography />
      <Media/>
    </div>
  );
}