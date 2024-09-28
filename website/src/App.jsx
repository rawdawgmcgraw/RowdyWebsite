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
import ImgCarousel from "./components/ImgCarousel";
import LilExtraSumthin from "./components/LilExtraSumthin";
// import Popup1 from "./components/Popup1";

function App() {
  return (
    <div>
      {/* <Menu /> */}

      <Container>
        <Header />
        <NavBar />
        <div className='h-[85%]'>
          <Route path='/'>
            <Hero />
          </Route>
          <Route path='/bio'>
            <Bio />
            {/* <MobileBioMenu /> */}
          </Route>
          <Route path='/jefebio'>
            <BioPerson name='Jefe' bgImage={"bg-jefeBio"} />
          </Route>
          <Route path='/nickbio'>
            <BioPerson name='Nick' bgImage={"bg-nickBio"} />
          </Route>
          <Route path='/billybio'>
            <BioPerson name='Billy' bgImage={"bg-billyBio"} />
          </Route>
          <Route path='/geronimobio'>
            <BioPerson name='Geronimo' bgImage={"bg-geronimoBio"} />
          </Route>
          <Route path='/treybio'>
            <BioPerson name='Trey' bgImage={"bg-treyBio"} />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/videos'>
            <Videos />
          </Route>
          <Route path='*'>
            <Hero />
          </Route>
          <Route path='/RowdyWebsite/'>
            <Hero />
          </Route>
          <Route path='/merch'>
            <ImgCarousel />
          </Route>
          <Route path='/extra'>
            <LilExtraSumthin />
          </Route>
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
