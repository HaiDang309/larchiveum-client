import React from "react";
import Link from "next/link";

import { Stack, Button } from "@mui/material";


import Iconify from "src/components/iconify";
import Quizzes from "./Quizzes";

const Management = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Link href={`/home/content/quiz/form`}>
        <Button
          variant="contained"
          startIcon={<Iconify icon="eva:plus-fill" />}
          sx={{
            alignSelf: "flex-end",
          }}
        >
          New Quiz
        </Button>
      </Link>

      <Quizzes />
    </Stack>
  );
};

export default Management;
