import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';

import styles from './header.module.css';
import Logo from '../logo';
import Drawer from './drawer';
import Button from '../button';

// Github : https://github.com/akiran/react-slick
// Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

export const dataButtonsList = [
  {
    name: 'INICIO',
    path: '/inicio',
    active: true,
    id: 1,
  },
  {
    name: 'QUIEN SOY',
    path: '/quien-soy',
    active: false,
    id: 2,
  },
  {
    name: 'SERVICIOS',
    path: '/servicios',
    active: false,
    id: 3,
  },
  {
    name: 'CONTACTO',
    path: '/contacto',
    active: false,
    id: 4,
  },
];

function Header() {
  const history = useHistory();
  const location = useLocation();
  const { pathname: currentPathname } = location;
  const [buttonHeaderData, setButtonHeaderData] = useState(dataButtonsList);
  const onClickHeaderButton = itemSelected => {
    const newHeaderData = buttonHeaderData.map(item => ({
      ...item,
      active: item.id === itemSelected.id,
    }));

    setButtonHeaderData(newHeaderData);
    history.push(itemSelected.path);
  };

  useEffect(() => {
    const newHeaderData = buttonHeaderData.map(item => ({
      ...item,
      active: item.path === currentPathname,
    }));
    setButtonHeaderData(newHeaderData);
  }, []);

  const [startScrolling, setStartScrolling] = useState(false);

  useLayoutEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setStartScrolling(false);
      } else {
        setStartScrolling(true);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, [startScrolling]);
  return (
    <Fragment>
      <header
        className={cn(styles.headerResponsiveSmall, {
          [styles.headerWhite]: startScrolling,
        })}
      >
        <div className={styles.containerLogo}>
          <Logo width={100} height={100} />
        </div>
        <Button text="Cotiza Aqu??" path="/contacto" color="primary" />
        <div className={styles.containerButton}>
          <Drawer />
        </div>
      </header>

      <header
        className={cn(styles.headerResponsiveLarge, {
          [styles.headerWhite]: startScrolling,
        })}
      >
        <div className={styles.containerLogo}>
          {startScrolling ? <Logo width={80} height={80} /> : <Logo width={60} height={60} />}
        </div>
        <div className={styles.containerHeaderButton}>
          {buttonHeaderData.map((item, index) => {
            return (
              <div key={index} className={cn(styles.headerButton)}>
                <button
                  className={cn(styles.headerButton, item.active === true ? styles.active : null)}
                  type="button"
                  key={item.id}
                  onClick={() => onClickHeaderButton(item)}
                >
                  {item.name}
                </button>
              </div>
            );
          })}
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
