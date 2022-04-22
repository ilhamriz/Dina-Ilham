import React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from "@mui/system";

const colors = {
  text: "#4e4b66",
  placeholder: "#A0A3BD",
  background: "#FFFFFF",
  border: "#4e4b66",
  border_focus: "#1976d2",
  background_hover: "#F7F7FC",
  outline: "#DAECFF",
};

const colorsDark = {
  text: "#FFFFFF",
  placeholder: "#FFFFFF80",
  background: "#233C6B",
  background_hover: "#1A315E",
  outline: "#546D9E",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 100%;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors["text"]};
  background: ${colors["background"]};
  border: 1px solid ${colors["border"]};
  border-radius: 8px;
  padding: 12px 16px;

  &::placeholder {
    color: ${colors["placeholder"]};
  }

  &:hover {
    background: ${colors["background_hover"]};
  }

  &:focus {
    outline: 1px solid ${colors["border_focus"]};
  }
`
);

const StyledInputElementDark = styled("input")(
  () => `
  width: 100%;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${colorsDark["text"]};
  background: ${colorsDark["background"]};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  letter-spacing: 0.01em;

  &::placeholder {
    color: ${colorsDark["placeholder"]};
  }

  &:hover {
    background: ${colorsDark["background_hover"]};
  }

  &:focus {
    outline: 3px solid ${colorsDark["outline"]};
  }
`
);

const StyledTextareaElement = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 100%;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${colorsDark["text"]};
  background: ${colorsDark["background"]};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  letter-spacing: 0.01em;

  &::placeholder {
    color: ${colorsDark["placeholder"]};
  }

  &:hover {
    background: ${colorsDark["background_hover"]};
  }

  &:focus {
    outline: 3px solid ${colorsDark["outline"]};
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      ref={ref}
      components={{
        Input:
          props.darkmode === "true"
            ? StyledInputElementDark
            : StyledInputElement,
        Textarea: props.multiline ? StyledTextareaElement : null,
      }}
      componentsProps={{ input: { onChange: props.onChange } }}
      {...props}
    />
  );
});

function Component({ ...props }) {
  return <CustomInput {...props} />;
}

Component.propTypes = {};

export default Component;
