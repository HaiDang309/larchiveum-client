import { Stack, TextField, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

import HomeLayout from "src/layouts/home";
import { RoomForm } from "src/sections/@home/room";

import Link from "next/link";
import { useForm } from "react-hook-form";

const RoomFormPage = () => {
  const router = useRouter();
  const roomId = router.query?.id ? router.query.id[0] : null;

  const { handleSubmit, register, control } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log({ data });
  });

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link href="/home/room">
          <Button variant="contained">Back</Button>
        </Link>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {roomId ? "Edit" : "Create"} Room
        </Typography>

        <Button variant="contained" onClick={onSubmit}>
          {roomId ? "Edit" : "Create"}
        </Button>
      </Stack>

      <RoomForm register={register} control={control} />
    </Stack>
  );
};

RoomFormPage.layout = HomeLayout;

export default RoomFormPage;
