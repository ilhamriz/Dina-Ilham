import css from "./CountdownRender.module.scss";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

function Component({ times }) {
  return (
    <Box className={css.countdown}>
      {times.days !== "00" ? (
        <>
        <Box className={css.countdown__container}>
          <Box className={`${css.countdown__time} header-2`}>{times.days}</Box>
          <Box className={css.countdown__name}>Hari</Box>
        </Box>
        <Box className={css.countdown__divider} />
        </>
      ) : null}

      <Box className={css.countdown__container}>
        <Box className={`${css.countdown__time} header-2`}>{times.hours}</Box>
        <Box className={css.countdown__name}>Jam</Box>
      </Box>

      <Box className={css.countdown__divider} />

      <Box className={css.countdown__container}>
        <Box className={`${css.countdown__time} header-2`}>{times.minutes}</Box>
        <Box className={css.countdown__name}>Menit</Box>
      </Box>

      <Box className={css.countdown__divider} />

      <Box className={css.countdown__container}>
        <Box className={`${css.countdown__time} header-2`}>{times.seconds}</Box>
        <Box className={css.countdown__name}>Detik</Box>
      </Box>
    </Box>
  );
}

Component.propTypes = {
  times: PropTypes.object,
};

export default Component;
