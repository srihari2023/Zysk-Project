import './App.css';
import FAQ from './Component/FAsection/FAQ';
import Features from './Component/Features-section/features';
import HeaderSection from './Component/Header-section/First-head';
import BasicExample from './Component/Navbar';
import SectionDivider from './Component/Section-divider';
import Blog from './Component/blogsection/blog';
import Aanalytics from './Component/featuressection2/analytics';
import Footer from './Component/footer/footer';
import Testimonial from './Testimonial-Section/Testimonial';


function App() {
  return (
    <div>
     <BasicExample/>
      <HeaderSection/>
      <SectionDivider/>
      <Features/>
     <Testimonial/>
     <Aanalytics></Aanalytics>
     <FAQ></FAQ>
     <Blog/>
     <Footer></Footer>
    </div>
  );
}

export default App;
