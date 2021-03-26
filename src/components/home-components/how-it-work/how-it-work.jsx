import React from 'react';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EmailIcon from '@material-ui/icons/Email';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import styles from './how-it-work.module.css';

function HowItWork() {
  return (
    <div className={styles.containerHowItWork}>
      <h1 className={styles.title}>¿Cómo funciona?</h1>
      <h4 className={styles.subtitle}>3 simples pasos para comenzar</h4>
      <div className={styles.containerIconsSection}>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <EmailIcon />
          </div>
          <div className={styles.textIcon}>
            <h3 className={styles.step}>Primer Paso</h3>
            <div className={styles.descriptionStep}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <EventAvailableIcon />
          </div>
          <div className={styles.textIcon}>
            <h3 className={styles.step}>Segundo Paso</h3>
            <div className={styles.descriptionStep}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <SentimentVerySatisfiedIcon />
          </div>
          <div className={styles.textIcon}>
            <h3 className={styles.step}>Tercer Paso</h3>
            <div className={styles.descriptionStep}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
