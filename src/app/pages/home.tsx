import { Banner } from "../sections/banner";
import { Contact } from "../sections/contact";
import { Nav } from "../sections/nav";
import { Projects } from "../sections/projects";
import { Tools } from "../sections/tools";
import { Work } from "../sections/work";


const Home = () => {
  return (
    <div className="flex flex-col gap-24 px-16">
      <Nav />
      <Banner />
      <Work />
      <Projects />
      <Tools />
      <Contact />
    </div>
  )
};

export default Home;