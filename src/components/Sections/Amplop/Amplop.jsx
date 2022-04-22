import css from './Amplop.module.scss';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll/modules';
import { Box, Container } from '@mui/material';
import LazyLoad from "react-lazyload";
import { flower_6, flower_6_webp } from '../../../assets';
import { AmplopDigital, LoadingSkeleton } from '../../Layout';

function Component({ isTablet }) {
  return (
    <section>
      <h2 className="hidden">Amplop Digital</h2>
      <Element name="Amplop Digital" className={css.amplop__wrapper}>
        <Container fixed style={{ width: "100%", maxWidth: "1076px" }}>
          <Box className={css.amplop__inner}>
            <Box
              className={`text-body section__title`}
              data-aos="fade-right"
            >
              <span>Amplop </span>
              <span>Digital</span>
            </Box>
            <AmplopDigital />
          </Box>
        </Container>

        <LazyLoad
          height={200}
          offset={0}
          placeholder={<LoadingSkeleton width={100} height={200} />}
          className={css.amplop__bunga}
        >
          <picture>
            <source srcSet={flower_6_webp} type="image/webp" />
            <img
              src={flower_6}
              alt="Bunga"
              data-aos={"zoom-in"}
              data-aos-delay={isTablet ? 400 : 0}
            />
          </picture>
        </LazyLoad>
      </Element>
    </section>
  )
}

Component.propTypes = {
  isTablet: PropTypes.bool,
}

export default Component