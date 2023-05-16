import React from "react";

import { Stack, TextField, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

import HomeLayout from "src/layouts/home";
import Link from "next/link";

const QuizForm = () => {
  const router = useRouter();
  const quizId = router.query?.id ? router.query.id[0] : null;
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link href="/home/content">
          <Button variant="contained">Back</Button>
        </Link>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {quizId ? "Edit" : "Create"} Quiz
        </Typography>

        <Button variant="contained">Create</Button>
      </Stack>

      <TextField label="Title" />

      <TextField label="Description" />
    </Stack>
  );
};

QuizForm.layout = HomeLayout;

export default QuizForm;
