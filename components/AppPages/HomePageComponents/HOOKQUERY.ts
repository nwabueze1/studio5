import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export function IsMobile(): boolean {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"));
}

export function UseTheme() {
  return useTheme();
}
