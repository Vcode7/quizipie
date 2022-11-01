import { Grid } from "@mui/material";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";

const Tables = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            pending..
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Tables;
