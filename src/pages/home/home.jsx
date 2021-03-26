import React from 'react';

import styles from './home.module.css';
import Banner from '../../components/home-components/banner';
import ProblemSectionHome from '../../components/home-components/problem-section-home';
import EmpathySectionHome from '../../components/home-components/empathy-section-home';
import FourthSectionHome from '../../components/home-components/services-section-home';
import Footer from '../../components/footer';
import UseScrollToTop from '../../hooks/use-scroll-to-top';
import HowItWork from '../../components/home-components/how-it-work';

function Home() {
  UseScrollToTop();
  return (
    <div className={styles.containerHome}>
      <Banner />
      <ProblemSectionHome />
      <EmpathySectionHome />
      <FourthSectionHome />
      <HowItWork />
      <Footer />
    </div>
  );
}

export default Home;
