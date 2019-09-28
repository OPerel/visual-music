import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

import Button from '../../../Button/Button.component.jsx';
import SectionThreeIcons from './SectionThreeIcons/SectionThreeIcons.component.jsx';
import Contactform from './FormComponents/ContactForm.component.jsx';

const SectionThree = ({ scrollClick }) => (
  <section>
    <ParallaxLayer speed={0.15} offset={2.33} style={{ height: '0' }}>
      <h2 className="content-wrapper heading">Contact</h2>
    </ParallaxLayer>

    <ParallaxLayer speed={0.04} offset={2.45} style={{ height: '0' }}>
      <hr style={{ marginLeft: '8%', width: '30%', border: '2px solid white' }} />
    </ParallaxLayer>

    <ParallaxLayer speed={0.1} offset={2.47} style={{ height: '0' }}>
      <p className="content-wrapper tagline">
        Would you like to write us?
      </p>
    </ParallaxLayer>

    <SectionThreeIcons />

    <ParallaxLayer offset={2.4} speed={0.6} style={{ zIndex: '99', height: '0' }}>
      <Contactform />
    </ParallaxLayer>

    <ParallaxLayer speed={0} offset={2.75}>
      <Button text="Scroll" handleRouteChange={scrollClick} btnClass="scroll" />
    </ParallaxLayer>
  </section>
)

export default SectionThree;