import { faker } from "@faker-js/faker";
// @mui
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography, Stack,Button } from "@mui/material";
// components
import Iconify from "src/components/iconify";
import posts from "src/_mock/blog";
import { RoomSearch,RoomCard, RoomSort } from "src/sections/@home/app";
// sections

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
];

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <RoomSearch posts={posts} />
          <RoomSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {posts.map((post, index) => (
            <RoomCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
