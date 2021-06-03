import AboutMe from "../AboutMe/AboutMe"
import Contact from "../ContactMe/ContactMe"
import Work from "../Work/Work"

function Home() {
  return (
    <div className="Home">
      <AboutMe />
      <Work/>
      <Contact/>
    </div>
  );
}

export default Home;
