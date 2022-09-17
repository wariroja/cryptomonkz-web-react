import React, { useEffect } from 'react';
import 'swiper/css';
import WOW from 'wowjs';
import 'swiper/css';
import MainSection from './MainSection';
import AboutSection from './AboutSection';
import UtilitySection from './UtilitySection';
import SpecsSection from './SpecsSection';
import AscensionSection from './AscensionSection';
import RoadmapSection from './RoadmapSection';
import FractionsSection from './FractionsSection';
import ManifactoSection from './ManifactoSection';
import TeamSection from './TeamSection';
import AdvisorySection from './AdvisorySection';
import SocialsSection from './SocialsSection';

function Main() {
    useEffect(() => {
        new WOW.WOW({ live: false}).init();
    }, []);  
  return (
		<main>
            <MainSection/>
            <AboutSection />
            <UtilitySection />
            <SpecsSection />
            <FractionsSection />
            <ManifactoSection />
            <AscensionSection />
            <TeamSection />
            <AdvisorySection />
            <RoadmapSection />
            <SocialsSection />
		</main>
  );
}

export default Main;
