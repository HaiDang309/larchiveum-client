import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Controller } from "react-hook-form";

const options = [
  {
    label: "opt1",
    id: "",
  },
  {
    label: "opt2",
    id: "",
  },
];

const RoomForm = ({ control, register }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Controller
          name={"name"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={onChange}
              value={value}
              label={"Name"}
              fullWidth
            />
          )}
        />
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Controller
          name="startDate"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <DatePicker label="Start Date" {...rest} />
          )}
        />{" "}
      </Grid>{" "}
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Controller
          name="endDate"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <DatePicker label="End Date" {...rest} />
          )}
        />{" "}
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Controller
          name={"maxSize"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={onChange}
              value={value}
              label={"Max Size"}
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          )}
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Controller
          name={"desc"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              onChange={onChange}
              value={value}
              label={"Description"}
              multiline
              rows={4}
              maxRows={8}
            />
          )}
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Controller
          render={({ field }) => (
            <Select {...field} fullWidth>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          )}
          name="sceneId"
          control={control}
        />{" "}
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControlLabel
              control={
                <Controller
                  name="isPublic"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={field.value}
                    />
                  )}
                />
              }
              label="Public"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControlLabel
              control={
                <Controller
                  name="isEnableSpawnCamera"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={field.value}
                    />
                  )}
                />
              }
              label="Create Cameras"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControlLabel
              control={
                <Controller
                  name="isEnablePinObjects"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={field.value}
                    />
                  )}
                />
              }
              label="Pin Objects"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControlLabel
              control={
                <Controller
                  name="isEnableSpawnDrawing"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={field.value}
                    />
                  )}
                />
              }
              label="Create Drawings"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControlLabel
              control={
                <Controller
                  name="isEnableSpawnEmoji"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={field.value}
                    />
                  )}
                />
              }
              label="Create Emoji"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControlLabel
              control={
                <Controller
                  name="isEnableFly"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={field.value}
                    />
                  )}
                />
              }
              label="Allow Flying"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RoomForm;
