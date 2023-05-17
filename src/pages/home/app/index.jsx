// @mui
import { useTheme } from "@mui/material/styles";
import { Grid, Stack,  } from "@mui/material";
// components
import posts from "src/_mock/room";
import { RoomSearch, RoomCard, RoomSort } from "src/sections/@home/app";
import HomeLayout from "src/layouts/home";
// sections

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
];

const DashboardAppPage = () => {
  const theme = useTheme();

  return (
    <>
      <Stack
        mb={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <RoomSearch posts={posts} />
        <RoomSort options={SORT_OPTIONS} />
      </Stack>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <RoomCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </>
  );
};

DashboardAppPage.layout = HomeLayout;

export default DashboardAppPage;
