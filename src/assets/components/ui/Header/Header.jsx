import { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
function Header() {
    const header = useRef();
    useEffect(() => {
        const scrollHandler = () => {
            if(window.scrollY>100){
                header.current.classList.add(styles.scroll);
            }
            else{
                header.current.classList.remove(styles.scroll);
            }
        }
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll',scrollHandler)
    },[])
  return (
    <header className={styles.header} ref={header}>
      <div className="content-wrapper">
        <div className={styles.inner}>
          <a href="/" className={styles.logo}>
            <img className={styles.logoImg} src="/logo.svg" alt="" />
          </a>
          <div className={styles.menu}>
            <Link to={'/menu'}>Меню</Link>
            <Link to={'/search'}><FontAwesomeIcon icon={"fa-solid fa-magnifying-glass"}/></Link>
            <Link to={'/new'}><FontAwesomeIcon icon={"fa-regular fa-square-plus"}/></Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
