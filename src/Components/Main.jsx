import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import MainSection from './MainSection';
import AboutSection from './AboutSection';
import UtilitySection from './UtilitySection';
import SpecsSection from './SpecsSection';
import AscensionSection from './AscensionSection';
import RoadmapSection from './RoadmapSection';
import FractionsSection from './FractionsSection';
import ManifestoSection from './ManifestoSection';
import TeamSection from './TeamSection';
import AdvisorySection from './AdvisorySection';
import SocialsSection from './SocialsSection';
import $ from 'jquery'

function Main() {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    return (
            <main>
                <MainSection />
                <AboutSection />
                <UtilitySection />
                <SpecsSection />
                <FractionsSection />
                <ManifestoSection />
                <AscensionSection />
                <TeamSection />
                <AdvisorySection />
                <RoadmapSection />
                <SocialsSection />
            </main>
    );
}

export default Main;
