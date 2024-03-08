import Container from "@mui/material/Container";
import WorkSamples from "../components/WorkSamples";
import Footer from "../components/ForCvTemplate/Footer";
import Skills from "../components/ForCvTemplate/Skills";
import Navbar from "../components/ForCvTemplate/Navbar";
import AboutMe from "../components/ForCvTemplate/AboutMe";
import BioSection from "../components/ForCvTemplate/BioSection";
import Certificate from "../components/ForCvTemplate/Certificate";
const CvTemplate = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <BioSection />
      <Certificate />
      <Skills />
      <WorkSamples />
      <AboutMe />
      <Footer />
    </Container>
  );
};

export default CvTemplate;
