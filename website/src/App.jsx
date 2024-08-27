import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Route from "./components/Route";
import BioPerson from "./components/BioPerson";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Menu />
      <Container>
        <Header />
        <NavBar />
        <Route path='/'>
          <Hero />
        </Route>
        <Route path='/bio'>
          <Bio />
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
        <Route path='*'>
          <Hero />
        </Route>
        <Route path='/RowdyWebsite/'>
          <Hero />
        </Route>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
