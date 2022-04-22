import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { logo, logo_webp } from "../../../assets";
import styles from "./Navbar.module.scss";
import { Link } from "react-scroll";

function Component({ isRSVP }) {
  const [isMenu, setIsMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const changeBackground = () => {
    const { scrollY } = window;
    setIsScroll(scrollY > 0 ? true : false);
  };

  const handleResize = () => {
    const { innerWidth } = window;
    setIsTablet(innerWidth < 769 ? true : false);
    setIsMenu(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenu ? "hidden" : "auto";
  }, [isMenu]);

  useEffect(() => {
    handleResize();
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isScroll ? styles["nav--scrolled"] : ""}`}>
      <h2 className="hidden">navbar</h2>
      <Container maxWidth="lg">
        <Box className={styles.nav__container}>
          <Box className={styles.nav__logo__wrapper}>
            <picture>
              <source srcSet={logo_webp} type="image/webp" />
              <img src={logo} alt="DinaIlham" className={styles.nav__logo} />
            </picture>
          </Box>
          <Box className={styles.nav__bar} onClick={() => setIsMenu(!isMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
            <span>Menu</span>
          </Box>
          <Box className={`${styles.nav__menu} ${isMenu ? styles.show : ""}`}>
            <Box className={styles.nav__menu__list}>
              <LinkScroll
                target="Pembuka"
                isTablet={isTablet}
                setIsMenu={setIsMenu}
              />
              <LinkScroll
                target="Mempelai"
                isTablet={isTablet}
                setIsMenu={setIsMenu}
              />
              <LinkScroll
                target="Acara"
                isTablet={isTablet}
                setIsMenu={setIsMenu}
              />
              {isRSVP ? (
                <LinkScroll
                  target="Konfirmasi"
                  isTablet={isTablet}
                  setIsMenu={setIsMenu}
                />
              ) : null}
              <LinkScroll
                target="Galeri"
                isTablet={isTablet}
                setIsMenu={setIsMenu}
              />
              <LinkScroll
                target="Amplop Digital"
                isTablet={isTablet}
                setIsMenu={setIsMenu}
              />
              <LinkScroll
                target="Ucapan"
                isTablet={isTablet}
                setIsMenu={setIsMenu}
              />
            </Box>
            <Box className={styles.nav__close} onClick={() => setIsMenu(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
              </svg>
            </Box>
          </Box>
        </Box>
      </Container>
    </nav>
  );
}

const LinkScroll = ({ target, isTablet, setIsMenu }) => {
  return (
    <Link
      activeClass={styles.active}
      spy={true}
      className={styles.nav__menu__item}
      to={target}
      smooth={true}
      offset={isTablet ? 0 : -80}
      duration={isTablet ? 300 : 1000}
      isDynamic={true}
      onClick={() => setIsMenu(false)}
    >
      {target}
    </Link>
  );
};

export default Component;
