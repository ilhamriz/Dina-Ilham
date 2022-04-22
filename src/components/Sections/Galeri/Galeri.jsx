import css from "./Galeri.module.scss";
import PropTypes from "prop-types";
import { Element } from "react-scroll/modules";
import { Box, Container } from "@mui/material";
import LazyLoad from "react-lazyload";
import {
  galeri_1,
  galeri_2,
  galeri_3,
  galeri_4,
  galeri_5,
  galeri_6,
  galeri_7,
  galeri_8,
  galeri_1_webp,
  galeri_2_webp,
  galeri_3_webp,
  galeri_4_webp,
  galeri_5_webp,
  galeri_6_webp,
  galeri_7_webp,
  galeri_8_webp,
} from "../../../assets";

import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { LoadingSkeleton } from "../../Layout";

function Component({ isTablet }) {
  const images = [
    {
      img: galeri_1,
      img_webp: galeri_1_webp,
      css: css.galeri__container,
      width: "1865",
      height: "2383",
    },
    {
      img: galeri_2,
      img_webp: galeri_2_webp,
      css: css.galeri__container,
      width: "2008",
      height: "2545",
    },
    {
      img: galeri_3,
      img_webp: galeri_3_webp,
      css: css.galeri__container,
      width: "2008",
      height: "2540",
    },
    {
      img: galeri_4,
      img_webp: galeri_4_webp,
      css: css.galeri__container__landscape,
      width: "2839",
      height: "1809",
    },
    {
      img: galeri_5,
      img_webp: galeri_5_webp,
      css: css.galeri__container,
      width: "2008",
      height: "2530",
    },
    {
      img: galeri_6,
      img_webp: galeri_6_webp,
      css: css.galeri__container,
      width: "1780",
      height: "2271",
    },
    {
      img: galeri_7,
      img_webp: galeri_7_webp,
      css: css.galeri__container,
      width: "2008",
      height: "2517",
    },
    {
      img: galeri_8,
      img_webp: galeri_8_webp,
      css: css.galeri__container,
      width: "1624",
      height: "2050",
    },
  ];

  return (
    <section>
      <h2 className="hidden">Galeri</h2>
      <Element name="Galeri" className={css.galeri__wrapper}>
        <Container fixed style={{ width: "100%", maxWidth: "1076px" }}>
          <Box className={css.galeri__inner}>
            <Gallery>
              {images.map((image, idx) => (
                <Item
                  key={idx}
                  original={image.img}
                  width={image.width}
                  height={image.height}
                >
                  {({ ref, open }) => (
                    <Box className={image.css} ref={ref} onClick={open}>
                      <LazyLoad
                        height={200}
                        offset={0}
                        placeholder={<LoadingSkeleton />}
                        className={css.galeri__image}
                      >
                        <picture>
                          <source srcSet={image.img_webp} type="image/webp" />
                          <img src={image.img} alt={`Galeri ${idx}`} />
                        </picture>
                      </LazyLoad>
                    </Box>
                  )}
                </Item>
              ))}
            </Gallery>
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
