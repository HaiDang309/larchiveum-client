import { Grid, Paper, Stack, Button, TextField } from "@mui/material";

import dynamic from 'next/dynamic'

import { useForm, Controller } from "react-hook-form";

import HomeLayout from "src/layouts/home";

const ProfilePage = () => {
  const { control } = useForm();
  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Paper elevation={4} sx={{ p: 2, minHeight: "512px" }}>
          <Stack direction="column" alignItems="center" sx={{ height: "100%" }}>
            <Button variant="contained">Change</Button>
          </Stack>
        </Paper>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Paper elevation={4} sx={{ p: 2 }}>
          <Stack direction="column" alignItems="center" spacing={2}>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Controller
                  name={"username"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label={"Username"}
                      fullWidth
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Button variant="contained">Save</Button>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

ProfilePage.layout = HomeLayout;

export default dynamic(() => Promise.resolve(ProfilePage), {
  ssr: false,
});
