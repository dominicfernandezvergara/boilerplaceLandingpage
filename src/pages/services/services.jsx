import React from 'react';

import styles from './services.module.css';
import UseScrollToTop from '../../hooks/use-scroll-to-top';
import Footer from '../../components/footer/footer';

function Services() {
  UseScrollToTop();
  return (
    <div className={styles.containerServices}>
      <h1 className={styles.title}>Servicios</h1>
      <div className={styles.containerService}>Todos los servicios</div>
      <Footer />
    </div>
  );
}
export default Services;
