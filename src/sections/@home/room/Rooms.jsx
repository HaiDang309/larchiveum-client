import PropTypes from "prop-types";
// @mui
import { Grid } from "@mui/material";
import RoomCard from "./RoomCard";

// ----------------------------------------------------------------------

const Rooms = ({  rooms, ...other }) => {
  return (
    <Grid container spacing={3} {...other}>
      {rooms &&
        rooms.map((room) => (
          <Grid key={room.id} item xs={12} sm={6} md={3}>
            <RoomCard room={room} />
          </Grid>
        ))}
    </Grid>
  );
};

Rooms.propTypes = {
  rooms: PropTypes.array.isRequired,
};

export default Rooms;
