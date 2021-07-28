import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I am Jayanaka Wijethunga <br />
        Welcome To My Personal Portfolio
      </SectionTitle>
      <SectionText>
      A Junior Software Engineer & DotNet Developer
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
</>
);

export default Hero;