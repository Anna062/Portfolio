
import '../styles/Home.css';
import Bienvenue from "./Bienvenue";
import Competences from './Competences';
import Header from './Header';
import Personalite from './Personalite';

function Home() {

    return <main>
        <Header />
        <Bienvenue />
        <Personalite />
        <Competences/>
    </main>
}

export default Home;