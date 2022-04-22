import css from "./CountdownComplete.module.scss";
import { Box } from "@mui/material";

function Component() {
  return (
    <Box className={css.countdown}>
      <Box className={css.countdown__subtitle}>Today is</Box>
      <Box className={`${css.countdown__title} header-1`}>Our Special Day</Box>
    </Box>
  );
}

export default Component;
