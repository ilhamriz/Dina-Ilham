import { Box, Container } from "@mui/material";
import css from "./Footer.module.scss";
import LazyLoad from "react-lazyload";
import { LoadingSkeleton } from "../../Layout";
import { hello_hand, hello_hand_webp } from "../../../assets";

function Component() {
  const URL_WEB = process.env.REACT_APP_URL_WEB;
  return (
    <footer className={css.footer__wrapper}>
      <Container fixed style={{ width: "100%", maxWidth: "1076px" }}>
        <Box className={css.footer__inner}>
          <Box className={css.footer__thanks}>
            <Box
              className={css.footer__thanks__title}
              data-aos={"fade-up"}
              data-aos-delay={0}
            >
              Thank you.
            </Box>
            <LazyLoad
              height={200}
              offset={0}
              placeholder={<LoadingSkeleton width={100} height={200} />}
              className={css.footer__thanks__hand}
            >
              <picture>
                <source srcSet={hello_hand_webp} type="image/webp" />
                <img
                  src={hello_hand}
                  alt="Bunga"
                  data-aos={"fade-up"}
                  data-aos-delay={200}
                />
              </picture>
            </LazyLoad>
          </Box>
          <Box className={css.footer__main}>
            <Box
              className={css.footer__song}
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
                <path d="M20 3v14a4 4 0 1 1-2-3.465V6H9v11a4 4 0 1 1-2-3.465V3h13z" />
              </svg>
              <Box>You're Gonna Live Forever in Me - John Mayer</Box>
            </Box>
            <Box
              className={css.footer__credit}
              data-aos={"fade-up"}
              data-aos-delay={200}
            >
              Created by{" "}
              <a
                href={URL_WEB}
                className={css.footer__credit_link}
              >
                bersamaamerta.id
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

export default Component;
