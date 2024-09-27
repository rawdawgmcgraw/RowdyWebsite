<<<<<<< HEAD
import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Route from "./components/Route";
import BioPerson from "./components/BioPerson";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Videos from "./components/Videos";
import LilExtraSumthin from "./components/LilExtraSumthin";
import MobileBioMenu from "./components/MobileBioMenu";
=======
import Bio from './components/Bio'
import Hero from './components/Hero'
import Header from './components/Header'
import Route from './components/Route'
import BioPerson from './components/BioPerson'
import Container from './components/Container'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Videos from './components/Videos'
import ImgCarousel from './components/ImgCarousel'
import LilExtraSumthin from './components/LilExtraSumthin'
import Popup1 from './components/Popup1'
>>>>>>> f0a7facadda84a240b863ebf7fe5ce15ac0ddc11

function App() {
  return (
    <div>
<<<<<<< HEAD
=======
      {/* <Menu /> */}
      <Popup1 />
>>>>>>> f0a7facadda84a240b863ebf7fe5ce15ac0ddc11
      <Container>
        <Header />
        <NavBar />
        <Route path="/">
          <Hero />
        </Route>
        <Route path="/bio">
          <Bio />
          <MobileBioMenu />
        </Route>
        <Route path="/jefebio">
          <BioPerson name="Jefe" bgImage={'bg-jefeBio'} />
        </Route>
        <Route path="/nickbio">
          <BioPerson name="Nick" bgImage={'bg-nickBio'} />
        </Route>
        <Route path="/billybio">
          <BioPerson name="Billy" bgImage={'bg-billyBio'} />
        </Route>
        <Route path="/geronimobio">
          <BioPerson name="Geronimo" bgImage={'bg-geronimoBio'} />
        </Route>
        <Route path="/treybio">
          <BioPerson name="Trey" bgImage={'bg-treyBio'} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="*">
          <Hero />
        </Route>
        <Route path="/RowdyWebsite/">
          <Hero />
        </Route>
<<<<<<< HEAD

        <Route path='/extra'>
=======
        <Route path="/merch">
          <ImgCarousel />
        </Route>
        <Route path="/extra">
>>>>>>> f0a7facadda84a240b863ebf7fe5ce15ac0ddc11
          <LilExtraSumthin />
        </Route>
        <Footer />
      </Container>
    </div>
  )
}

export default App
