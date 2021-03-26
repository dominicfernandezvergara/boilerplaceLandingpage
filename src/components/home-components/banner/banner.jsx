import React from 'react';
import styles from './banner.module.css';

function Banner() {
  return (
    <div className={styles.containerFirstSection}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>Nombre de la empresa</h1>
        <p className={styles.text}>Eslogan de la empresa</p>
      </div>
    </div>
  );
}
export default Banner;
