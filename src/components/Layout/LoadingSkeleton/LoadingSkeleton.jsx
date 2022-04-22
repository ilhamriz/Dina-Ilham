import { Skeleton } from "@mui/material";

function Component({ width = "100%", height = 350, ...props }) {
  return <Skeleton width={width} height={height} />;
}

export default Component;