// Register user

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sweetalertStandard } from "../../utils/sweetAlert";

export const createUser = createAsyncThunk("auth/createUser", async data => {
  const response = await axios.post(
    "http://localhost:5050/api/v1/auth/register",
    data
  );

  if (response.status === 200) {
    sweetalertStandard(
      {
        title: "Congratulation",
        msg: "Your data submitted successfully"
      },
      "success"
    );
  }

  console.log(response.status);
});
