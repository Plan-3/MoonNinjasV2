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
import { Container } from "@mui/system";

// Importing font style
import "./assets/font/blowbrush.ttf";

// Importing test data and images
import data from "./assets/temp/data";
// import logoImage from "./assets/images/logo3.png";

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

const ConnectButton = styled(Button)({
  padding: "10px 50px",
  marginTop: "15px",
  fontSize: "16px",
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
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          {/* This holds the logo at the top left */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "200px",
              }}
            >
              {/* Title text logo */}
              <Typography
                variant="h1"
                align="center"
                sx={{ margin: "10px 10px" }}
              >
                Moon Ninjas
              </Typography>
              {/* This is the image logo */}
              {/* <img className="logo" src={logoImage} /> */}
            </Box>
          </Grid>

          {/* This hold the connect wallet button top right */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: { xs: "50px", md: "200px" },
              }}
            >
              <ConnectButton variant="contained">
                Connect Metamask!
              </ConnectButton>
            </Box>
          </Grid>

          {/* This is the left side box */}
          <Grid item xs={12} md={7} order={{ xs: 3, md: 3 }}>
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
          <Grid item xs={12} md={5} order={{ xs: 4, md: 4 }}>
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
