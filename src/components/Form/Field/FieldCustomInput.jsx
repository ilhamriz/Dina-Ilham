import React from "react";
import PropTypes from "prop-types";
import { Box, FormHelperText } from "@mui/material";
import { Field } from "formik";
import CustomInput from './CustomInput';

function Component({ name, placeholder, type = "text", darkmode="false", defaultFormik, ...props }) {
  return (
    <Field name={name}>
      {({
        meta,
        field: { onChange, value: fieldValue, ...restField },
        form: { setFieldValue },
      }) => (
        <Box>
          {defaultFormik ? (
            <CustomInput
              {...restField}
              aria-label={placeholder}
              placeholder={placeholder}
              value={fieldValue}
              onChange={onChange}
              type={type}
              darkmode={darkmode}
              {...props}
            />
          ) : (
            <CustomInput
              {...restField}
              aria-label={placeholder}
              placeholder={placeholder}
              defaultValue={fieldValue}
              onChange={({ target: { value } }) => {
                const rawValue = type === "number" ? parseFloat(value) : value;
                setFieldValue(name, rawValue)
              }}
              type={type}
              darkmode={darkmode}
              {...props}
            />
          )}
          {meta.touched && meta.error ? (
            <FormHelperText error={true}>{meta.error}</FormHelperText>
          ) : null}
        </Box>
      )}
    </Field>
  );
}

Component.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  darkmode: PropTypes.string
};

export default Component;
