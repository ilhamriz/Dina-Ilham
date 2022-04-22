import css from "./Acara.module.scss";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";
import { Element } from "react-scroll/modules";
import LazyLoad from "react-lazyload";
import { flower_5, flower_5_webp } from "../../../assets";
import { ButtonMain } from "../../Form";
import { LoadingSkeleton } from "../../Layout";

function Component({ isTablet }) {
  const URL_EVENT = process.env.REACT_APP_URL_EVENT;

  return (
    <section>
      <h2 className="hidden">Acara</h2>
      <Element name="Acara" className={css.acara__wrapper}>
        <Container fixed style={{ width: "100%", maxWidth: "1076px" }}>
          <Box className={css.acara__container}>
            <Box className={`text-body section__title`} data-aos="fade-right">
              Acara
            </Box>
            <Box className={css.acara__content}>
              <Box className={css.acara__content__date}>
                <Box
                  className={`${css.acara__content__date__title} header-2`}
                  data-aos={"fade-up"}
                >
                  15 Mei 2022
                </Box>
                <Box className={css.acara__content__date__times}>
                  <Box>
                    <Box
                      mb={2}
                      className="icon__container"
                      data-aos={"fade-up"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M14.121 10.48a1 1 0 0 0-1.414 0l-.707.706a2 2 0 1 1-2.828-2.828l5.63-5.632a6.5 6.5 0 0 1 6.377 10.568l-2.108 2.135-4.95-4.95zM3.161 4.468a6.503 6.503 0 0 1 8.009-.938L7.757 6.944a4 4 0 0 0 5.513 5.794l.144-.137 4.243 4.242-4.243 4.243a2 2 0 0 1-2.828 0L3.16 13.66a6.5 6.5 0 0 1 0-9.192z" />
                      </svg>
                    </Box>
                    <Box
                      className={`${css.acara__content__date__name} header-4`}
                      data-aos={"fade-up"}
                      data-aos-delay={200}
                    >
                      Akad
                    </Box>
                    <Box
                      className={`${css.acara__content__date__time} header-4`}
                      data-aos={"fade-up"}
                      data-aos-delay={400}
                    >
                      09.00 WIB -- selesai
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      mb={2}
                      className="icon__container"
                      data-aos={"fade-up"}
                      data-aos-delay={200}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                      </svg>
                    </Box>
                    <Box
                      className={`${css.acara__content__date__name} header-4`}
                      data-aos={"fade-up"}
                      data-aos-delay={400}
                    >
                      Resepsi
                    </Box>
                    <Box
                      className={`${css.acara__content__date__time} header-4`}
                      data-aos={"fade-up"}
                      data-aos-delay={600}
                    >
                      11.00 WIB -- selesai
                    </Box>
                  </Box>
                </Box>
                <a
                  className={css.acara__content__date__button}
                  alt="Add to Calendar"
                  href={URL_EVENT}
                  data-aos={"fade-up"}
                  data-aos-delay={0}
                >
                  <ButtonMain>Save the Date</ButtonMain>
                </a>
              </Box>
              <Box className={css.acara__content__map}>
                <Box
                  className={`${css.acara__content__map__title} header-2`}
                  data-aos={"fade-up"}
                >
                  Gedung Dharma Wanita
                </Box>
                <Box
                  mb={isTablet ? 3 : 5}
                  className={`${css.acara__content__map__address} header-4`}
                  data-aos={"fade-up"}
                  data-aos-delay={200}
                >
                  Jalan Diponegoro, Pekanbaru
                </Box>
                <LazyLoad
                  height={200}
                  offset={0}
                  placeholder={<LoadingSkeleton />}
                  className={css.acara__content__map__iframe}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.658124164147!2d101.44935821475336!3d0.5134386996254131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b91bce5d830b4e4!2sGedung%20Dharma%20Wanita%20Prov.%20Riau!5e0!3m2!1sen!2sid!4v1648225049636!5m2!1sen!2sid"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Event Map"
                    data-aos={"fade-up"}
                    data-aos-delay={400}
                  />
                </LazyLoad>
              </Box>
            </Box>
          </Box>
        </Container>

        <LazyLoad
          height={200}
          offset={0}
          placeholder={<LoadingSkeleton width={100} height={200} />}
          className={css.acara__bunga}
        >
          <picture>
            <source srcSet={flower_5_webp} type="image/webp" />
            <img
              src={flower_5}
              alt="Bunga"
              data-aos={"zoom-in"}
              data-aos-delay={isTablet ? 400 : 0}
            />
          </picture>
        </LazyLoad>
      </Element>
    </section>
  );
}

Component.propTypes = {
  isTablet: PropTypes.bool,
};

export default Component;
