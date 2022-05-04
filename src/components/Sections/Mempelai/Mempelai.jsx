import css from "./Mempelai.module.scss";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";
import { Element } from "react-scroll";
import {
  flower_3,
  flower_3_webp,
  flower_4,
  flower_4_webp,
  mempelai_pria,
  mempelai_pria_webp,
  mempelai_wanita,
  mempelai_wanita_webp,
} from "../../../assets";
import LazyLoad from "react-lazyload";
import { LoadingSkeleton } from "../../Layout";

function Component({ isTablet }) {
  return (
    <section>
      <h2 className="hidden">Mempelai</h2>
      <Element name="Mempelai" className={css.mempelai__wrapper}>
        <Container fixed style={{ width: "100%", maxWidth: "1076px" }}>
          <Box name="Mempelai" className={css.mempelai__inner}>
            {/* WANITA */}
            <Box className={css.mempelai__container}>
              <Box className={css.mempelai__wanita__content}>
                <Box className={css.mempelai__title}>
                  <Box
                    className="icon__container icon__container--light"
                    data-aos={"fade-up"}
                    data-aos-delay={0}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
                    </svg>
                  </Box>
                  <Box data-aos={"fade-up"} data-aos-delay={200}>
                    Mempelai Wanita
                  </Box>
                </Box>
                <Box
                  className={`header-2 ${css.mempelai__wanita__name}`}
                  data-aos={"fade-up"}
                  data-aos-delay={0}
                >
                  Dina Mulyana
                </Box>
                <Box className={css.mempelai__body}>
                  <p data-aos={"fade-up"} data-aos-delay={0}>
                    Anak pertama dari Bapak Molkandiar dan Ibu Amiaty. Lahir di
                    Dumai, pada tanggal 22 September 1997. Biasa dipanggil
                    dengan Dina.
                  </p>
                  <p data-aos={"fade-up"} data-aos-delay={200}>
                    Seorang wanita yang cantik, baik hati, dan sangat pintar
                    memasak.
                  </p>
                </Box>
                <Box data-aos={"fade-up"} data-aos-delay={200}>
                  <Box className={css._sosmed__warning}>
                    <svg
                      width="34"
                      height="18"
                      viewBox="0 0 34 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M32.9607 1.49851C33.2359 1.52024 33.4767 1.3147 33.4984 1.03941C33.5202 0.764126 33.3146 0.523346 33.0393 0.501614L32.9607 1.49851ZM2.53438 17.6823C2.63501 17.9394 2.92505 18.0663 3.1822 17.9657L7.37279 16.3259C7.62994 16.2252 7.75684 15.9352 7.65621 15.678C7.55558 15.4209 7.26554 15.294 7.00839 15.3946L3.28342 16.8522L1.82581 13.1273C1.72519 12.8701 1.43515 12.7432 1.17799 12.8438C0.920837 12.9445 0.793945 13.2345 0.894572 13.4917L2.53438 17.6823ZM33.0393 0.501614C23.441 -0.256088 16.6957 1.88954 11.8989 5.27925C7.1103 8.6632 4.31258 13.2524 2.54192 17.2996L3.45808 17.7005C5.18742 13.7477 7.8897 9.33692 12.4761 6.09592C17.0543 2.86068 23.559 0.756334 32.9607 1.49851L33.0393 0.501614Z" />
                    </svg>
                    kaum pria gak boleh buka
                  </Box>
                  <a
                    className={css._sosmed__link}
                    href="https://www.instagram.com/dinamulyanaa/"
                  >
                    INSTAGRAM
                  </a>
                </Box>
              </Box>
              <Box className={css.mempelai__images}>
                <Box
                  data-aos={isTablet ? "fade-right" : "fade-up"}
                  data-aos-delay={0}
                >
                  Bismillahirrahmanirrahim
                </Box>
                <LazyLoad
                  height={200}
                  offset={0}
                  placeholder={<LoadingSkeleton height={500} />}
                  className={css.mempelai__img}
                >
                  <picture>
                    <source srcSet={mempelai_wanita_webp} type="image/webp" />
                    <img
                      src={mempelai_wanita}
                      alt="Dina"
                      data-aos={"fade-up"}
                      data-aos-delay={200}
                    />
                  </picture>
                </LazyLoad>
                <LazyLoad
                  height={200}
                  offset={0}
                  placeholder={<LoadingSkeleton width={100} height={200} />}
                  className={css.mempelai__wanita__bunga}
                >
                  <picture>
                    <source srcSet={flower_3_webp} type="image/webp" />
                    <img
                      src={flower_3}
                      alt="Bunga"
                      data-aos={"zoom-in"}
                      data-aos-delay={isTablet ? 400 : 0}
                    />
                  </picture>
                </LazyLoad>
              </Box>
            </Box>

            {/* PRIA */}
            <Box className={css.mempelai__container}>
              <Box className={css.mempelai__images}>
                <LazyLoad
                  height={200}
                  offset={0}
                  placeholder={<LoadingSkeleton height={500} />}
                  className={css.mempelai__img}
                >
                  <picture>
                    <source srcSet={mempelai_pria_webp} type="image/webp" />
                    <img
                      src={mempelai_pria}
                      alt="Ilham"
                      data-aos={"fade-right"}
                      data-aos-delay={0}
                    />
                  </picture>
                </LazyLoad>
                <LazyLoad
                  height={200}
                  offset={0}
                  placeholder={<LoadingSkeleton width={100} height={200} />}
                  className={css.mempelai__pria__bunga}
                >
                  <picture>
                    <source srcSet={flower_4_webp} type="image/webp" />
                    <img
                      src={flower_4}
                      alt="Bunga"
                      data-aos={"zoom-in"}
                      data-aos-delay={isTablet ? 200 : 0}
                    />
                  </picture>
                </LazyLoad>
              </Box>
              <Box className={css.mempelai__pria__content}>
                <Box className={css.mempelai__title}>
                  <Box
                    className="icon__container icon__container--light"
                    data-aos={"fade-up"}
                    data-aos-delay={isTablet ? 0 : 200}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                    </svg>
                  </Box>
                  <Box
                    data-aos={"fade-up"}
                    data-aos-delay={isTablet ? 200 : 400}
                  >
                    Mempelai Pria
                  </Box>
                </Box>
                <Box
                  className={`header-2 ${css.mempelai__pria__name}`}
                  data-aos={"fade-up"}
                  data-aos-delay={0}
                >
                  M. Ilham Rizky
                </Box>
                <Box className={css.mempelai__body}>
                  <p data-aos={"fade-up"} data-aos-delay={0}>
                    Anak pertama dari Bapak Khairuddin dan Ibu Jumaiah. Lahir di
                    Pekanbaru, pada tanggal 07 November 1997. Biasa dipanggil
                    dengan Ilham.
                  </p>
                  <p data-aos={"fade-up"} data-aos-delay={200}>
                    Seorang pria yang beruntung karena dapat menaklukkan hati
                    Dina.
                  </p>
                </Box>
                <Box
                  className={css._sosmed_pria__wrapper}
                  data-aos={"fade-up"}
                  data-aos-delay={200}
                >
                  <a
                    className={css._sosmed__link}
                    href="https://www.instagram.com/ilhamriz7/"
                  >
                    INSTAGRAM
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Element>
    </section>
  );
}

Component.propTypes = {
  isTablet: PropTypes.bool,
};

export default Component;
