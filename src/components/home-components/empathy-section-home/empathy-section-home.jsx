import React from 'react';
import ButtonApp from '../../button';

import styles from './empathy-section-home.module.css';

function EmpathySectionHome() {
  const path = './contact';
  return (
    <div className={styles.containerSecondSection}>
      <h1 className={styles.title}>Mensaje Empatico </h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua
      </p>
      <ButtonApp text="Contactanos" path={path} color="primary" />
    </div>
  );
}

export default EmpathySectionHome;
