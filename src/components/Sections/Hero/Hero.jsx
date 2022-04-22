import styles from "./Hero.module.scss";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";
import { Element, Link } from "react-scroll";
import {
  flower_1,
  flower_1_webp,
  flower_2,
  flower_2_webp,
  flower_8,
  flower_8_webp,
  flower_9,
  flower_9_webp,
  pembuka,
  pembuka_webp,
} from "../../../assets";
import LazyLoad from "react-lazyload";
import { CountdownComplete, CountdownOver, CountdownRender, LoadingSkeleton } from "../../Layout";
import Countdown, { zeroPad } from "react-countdown";

function Component({ isTablet }) {
  const targetDate = new Date("2022-05-15");
  targetDate.setHours(0,0,0,0);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const times = {
      days: zeroPad(days),
      hours: zeroPad(hours),
      minutes: zeroPad(minutes),
      seconds: zeroPad(seconds)
    };

    if (completed) {
      const today = new Date();
      today.setHours(0,0,0,0);

      return today > targetDate ? <CountdownOver /> : <CountdownComplete />;
    } else {
      return <CountdownRender times={times} />;
    }
  };

  return (
    <section>
      <h2 className="hidden">Pembuka</h2>
      <Element name="Pembuka" className={styles.pembuka__wrapper}>
        <Container fixed style={{ width: "100%", maxWidth: "1076px" }}>
          <Box className={styles.pembuka}>
            <Box className={styles.pembuka__title__wrapper}>
              <Box className={styles.pembuka__title}>
                <Box data-aos="fade-up">Ketika</Box>
                <Box data-aos="fade-up" data-aos-delay="200">
                  aku dan kamu
                </Box>
                <Box data-aos="fade-up" data-aos-delay="400">
                  menjadi Kita.
                </Box>
              </Box>
              <Link
                to="foto_mempelai"
                offset={-100}
                smooth={"easeInOutQuad"}
                duration={isTablet ? 300 : 1000}
                isDynamic={true}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className={styles.pembuka__title__arrow}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z" />
                </svg>
              </Link>
            </Box>

            <Element
              name="foto_mempelai"
              className={styles.pembuka__image__wrapper}
            >
              <LazyLoad
                height={200}
                offset={0}
                placeholder={<LoadingSkeleton />}
                className={styles.pembuka__image}
              >
                <picture>
                  <source srcSet={pembuka_webp} type="image/webp" />
                  <img
                    src={pembuka}
                    alt="Dina dan Ilham"
                    data-aos="fade-right"
                    data-aos-delay={0}
                  />
                </picture>
              </LazyLoad>
              <Box>
                <Box
                  className={`${styles.pembuka__image__title} text-body`}
                  data-aos={isTablet ? "fade-right" : "fade-up"}
                  data-aos-delay={isTablet ? 0 : 200}
                >
                  Pernikahan
                </Box>
                <Box
                  mb={1}
                  className={styles.pembuka__image__name}
                  data-aos={isTablet ? "fade-right" : "fade-up"}
                  data-aos-delay={isTablet ? 200 : 0}
                >
                  Dina Mulyana
                </Box>
                <Box
                  mb={1}
                  className={styles.pembuka__image__name}
                  data-aos={isTablet ? "fade-right" : "fade-up"}
                  data-aos-delay={isTablet ? 400 : 200}
                >
                  M. Ilham Rizky
                </Box>
                <Box
                  className={`text-body`}
                  data-aos={isTablet ? "fade-right" : "fade-up"}
                  data-aos-delay={isTablet ? 0 : 200}
                >
                  15 Mei 2022
                </Box>
              </Box>
              <LazyLoad
                height={200}
                offset={0}
                placeholder={<LoadingSkeleton width={100} height={200} />}
                className={styles.pembuka__image__bunga}
              >
                <picture>
                  <source srcSet={flower_1_webp} type="image/webp" />
                  <img
                    src={flower_1}
                    alt="Bunga"
                    data-aos={"zoom-in"}
                    data-aos-delay={isTablet ? 600 : 0}
                  />
                </picture>
              </LazyLoad>
            </Element>

            <Box className={styles.pembuka__countdown}>
              <Box className={styles.pembuka__countdown__inner}>
                <picture className={styles.pembuka__countdown__bunga}>
                  <source srcSet={flower_8_webp} type="image/webp" />
                  <img
                    src={flower_8}
                    alt="Bunga"
                    data-aos={"zoom-in-left"}
                    data-aos-delay={400}
                  />
                </picture>

                <Countdown date={targetDate} renderer={renderer} />

                <picture className={styles.pembuka__countdown__bunga}>
                  <source srcSet={flower_9_webp} type="image/webp" />
                  <img
                    src={flower_9}
                    alt="Bunga"
                    data-aos={"zoom-in-right"}
                    data-aos-delay={400}
                  />
                </picture>
              </Box>
            </Box>
          </Box>
        </Container>

        <Box className={styles.pembuka__ayat__wrapper}>
          <Container fixed style={{ width: "100%", maxWidth: "1076px" }}>
            <Box className={styles.pembuka__ayat}>
              <Box className="section__title text-body" data-aos="fade-up">
                QS. Ar-Rum: 21
              </Box>
              <Box
                className={`${styles.pembuka__ayat__body} header-2`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang.
              </Box>
            </Box>
          </Container>
          <LazyLoad
            height={200}
            offset={0}
            placeholder={<LoadingSkeleton width={100} height={200} />}
            className={styles.pembuka__ayat__bunga}
          >
            <picture>
              <source srcSet={flower_2_webp} type="image/webp" />
              <img
                src={flower_2}
                alt="Bunga"
                data-aos={"zoom-in"}
                data-aos-delay={isTablet ? 400 : 0}
              />
            </picture>
          </LazyLoad>
        </Box>
      </Element>
    </section>
  );
}

Component.propTypes = {
  isTablet: PropTypes.bool,
};

export default Component;
