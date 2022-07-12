// Importing react
import { useState, useEffect } from "react";

// Importing MUI
import {
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Importing font style
import "./assets/font/blowbrush.ttf";
import { Container } from "@mui/system";

// Importing test data
import data from "./assets/temp/data";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ffd400",
    },
    secondary: {
      main: "#40798c",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "BlowBrush",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "BlowBrush",
      },
    },
  },
});

const MintButton = styled(Button)({
  padding: "20px 70px",
  fontSize: "30px",
  "&:hover": {
    backgroundColor: "#847E89",
    color: "#FFFFFF",
  },
});

function App() {
  const [currentImage, setCurrrentImage] = useState(4);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* This holds the logo at the top */}
          <Grid item xs={12}>
            <Typography variant="h1" sx={{ margin: "10px 10px" }}>
              Moon Ninjas
            </Typography>
          </Grid>

          {/* This is the left side box */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img className="mainImage" src={data[currentImage].image} />
            </Box>
          </Grid>

          {/* This is the right side box */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{
                  marginBottom: "20px",
                }}
              >
                Use the button below to start making your own ninjas!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "auto",
                  marginBottom: "50px",
                }}
              >
                <MintButton variant="contained">Mint!</MintButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
