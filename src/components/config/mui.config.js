import { createTheme } from "@mui/material";

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
  },
});

export default theme;
