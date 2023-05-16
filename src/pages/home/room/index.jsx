import React from "react";
import Link from "next/link";

import { Stack, Button } from "@mui/material";

import Iconify from "src/components/iconify";

import HomeLayout from "src/layouts/home";

import { Rooms } from "src/sections/@home/room";

import rooms from "src/_mock/room";

const RoomPage = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Link href={`/home/room/form`}>
        <Button
          variant="contained"
          startIcon={<Iconify icon="eva:plus-fill" />}
          sx={{
            alignSelf: "flex-end",
          }}
        >
          New Room
        </Button>
      </Link>

      <Rooms rooms={rooms} />
    </Stack>
  );
};

RoomPage.layout = HomeLayout;

export default RoomPage;
