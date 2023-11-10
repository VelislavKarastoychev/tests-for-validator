"use strict";
import {exec} from "child_process";

exec("npm start", (error, stout, stderr) => {
  if (error) {
    console.log(error);
    return;
  } else console.log(stout);
  if (stderr) console.log(stderr);
});
