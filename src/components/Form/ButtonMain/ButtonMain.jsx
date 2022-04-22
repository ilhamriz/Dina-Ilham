import classes from "./ButtonMain.module.scss";
import PropTypes from "prop-types";

function Component({ styles, type, children, ...props }) {
  styles = styles ? styles : "primary"; // primary, secondary, secondary-outline, outline
  type = type ? type : "button";

  return (
    <button type={type} className={`${classes.btn} ${classes[`btn--${styles}`]}`} {...props}>
      {children}
    </button>
  );
}

Component.propTypes = {
  styles: PropTypes.string,
  type: PropTypes.string,
};

export default Component;
