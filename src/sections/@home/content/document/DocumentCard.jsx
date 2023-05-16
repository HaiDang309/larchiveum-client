import {
  Grid,
  Stack,
  Typography,
  ButtonGroup,
  Button,
  Paper,
} from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const QuizCard = () => {
  const buttons = [
    <Button key="one" icon={<VisibilityRoundedIcon />}>
      Preview
    </Button>,
    <Button key="two" icon={<EditRoundedIcon />}>
      Edit
    </Button>,
    <Button key="three" icon={<DeleteForeverRoundedIcon />}>
      Delete
    </Button>,
  ];
  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <Grid container>
        <Grid item lg={8}>
          <Stack direction="column">
            <Typography variant="h3">Title</Typography>
            <Typography variant="subtitle1">Description</Typography>
          </Stack>
        </Grid>

        <Grid
          item
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <ButtonGroup>{buttons}</ButtonGroup>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default QuizCard;
