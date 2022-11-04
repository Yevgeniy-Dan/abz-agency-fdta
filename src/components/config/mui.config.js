import { createTheme } from "@mui/material";
import variables from "../../sass/_variables.scss";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: "16px",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "20px",
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: variables.secondary,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: "70px",
          height: "70px",
        },
      },
    },
  },
});

export default theme;
