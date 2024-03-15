import Container from "@mui/material/Container";
import Footer from "../components/ForCvTemplate/Footer";
import Skills from "../components/ForCvTemplate/Skills";
import Navbar from "../components/ForCvTemplate/Navbar";
import AboutMe from "../components/ForCvTemplate/AboutMe";
import BioSection from "../components/ForCvTemplate/BioSection";
import Certificate from "../components/ForCvTemplate/Certificate";
import WorkSamples from "../components/ForCvTemplate/WorkSamples";
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
