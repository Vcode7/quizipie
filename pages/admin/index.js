import { Grid } from "@mui/material";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
        <FullLayout>
    <Grid container spacing={0}>
      
      {/* ------------------------- row 1 ------------------------- */}
      

    </Grid>
        </FullLayout>
      </ThemeProvider>
  );
}
