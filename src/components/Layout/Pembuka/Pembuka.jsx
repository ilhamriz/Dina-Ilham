import React from "react";
import PropTypes from "prop-types";
import styles from "./Pembuka.module.scss";
import { Box, Container } from "@mui/material";
import { flower_left, flower_left_webp, flower_right, flower_right_webp } from "../../../assets";
import { useTransition, animated } from "react-spring";

function Component({ openRSVPstate, isTablet, params, device }) {
  const { openRSVP, handleRSVP } = openRSVPstate;

  const transition = useTransition(openRSVP, {
    from: { y: -1000 },
    enter: { y: 0 },
    leave: { y: -1000 },
    config: {
      duration: 500,
    },
  });

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className={styles.pembuka__wrapper}>
            <Container maxWidth="lg" style={{ height: "100%" }}>
              <Box className={params ? styles.pembuka__container : styles.pembuka__container__nonrsvp}>
                <Box className={styles.pembuka__title}>
                  <Box className={styles.pembuka__title__content}>
                    <span
                      className={`${styles.title__body} text-body`}
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      Pernikahan
                    </span>
                    <span
                      className={`${styles.pembuka__title__name} header-2 mb-8`}
                      data-aos="fade-up"
                      data-aos-delay="700"
                    >
                      Dina & Ilham
                    </span>
                    <span
                      className={`${styles.pembuka__title__date} text-body-2-bold`}
                      data-aos="fade-up"
                      data-aos-delay="900"
                    >
                      15 Mei 2022
                    </span>
                  </Box>
                </Box>

                {params ? (
                  <Box>
                    <Box
                      className="text-body"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      Hello,
                    </Box>
                    <Box className={styles.pembuka__invited__content}>
                      <Box
                        className={styles.pembuka__invited__name}
                        data-aos="fade-up"
                        data-aos-delay="800"
                      >
                        {params}
                      </Box>
                    </Box>
                    <Box
                      className="text-body"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-delay="1000"
                    >
                      Kami mengundang Anda untuk merayakan pernikahan kami.
                    </Box>
                  </Box>
                ) : null}

                <Box>
                  <Box
                    className={styles.pembuka__cta}
                    onClick={handleRSVP}
                    data-aos="fade-up"
                    data-aos-offset={
                      device.isSmallHeight ? device.deviceHeight - 651 : 0
                    }
                    data-aos-delay="1200"
                  >
                    <Box className={styles.pembuka__cta__arrow}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z" />
                      </svg>
                    </Box>
                    <Box className="text-body">Buka Undangan</Box>
                  </Box>
                </Box>
              </Box>
            </Container>

            <picture className={styles.pembuka__bunga__kiri}>
              <source srcSet={flower_left_webp} type="image/webp" />
              <img
                src={flower_left}
                alt="Bunga"
                data-aos={"zoom-in"}
                data-aos-delay={900}
                data-aos-offset={-200}
              />
            </picture>
            
            <picture className={styles.pembuka__bunga__kanan}>
              <source srcSet={flower_right_webp} type="image/webp" />
              <img
                src={flower_right}
                alt="Bunga"
                data-aos={"zoom-in"}
                data-aos-delay={900}
                data-aos-offset={-200}
              />
            </picture>
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
}

Component.propTypes = {
  isTablet: PropTypes.bool,
  params: PropTypes.string,
  device: PropTypes.object,
};

export default Component;
