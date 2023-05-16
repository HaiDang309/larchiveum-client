import React from "react";
import Link from "next/link";

import { Stack, Button } from "@mui/material";

import Iconify from "src/components/iconify";

import Documents from "./Documents";

const Management = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Link href={`/home/content/document/form`}>
        <Button
          variant="contained"
          startIcon={<Iconify icon="eva:plus-fill" />}
          sx={{
            alignSelf: "flex-end",
          }}
        >
          New Document
        </Button>
      </Link>

        <Documents />
    </Stack>
  );
};

export default Management;
