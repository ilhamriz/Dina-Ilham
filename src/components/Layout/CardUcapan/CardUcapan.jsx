import css from "./CardUcapan.module.scss";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

function Component({ name, children }) {
  return (
    <Box className={css._wrapper}>
      <Box className={`${css._name} text-body-2-bold`}>{name}</Box>
      <p className={css._body}>{children}</p>
    </Box>
  );
}

Component.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
};

export default Component;
