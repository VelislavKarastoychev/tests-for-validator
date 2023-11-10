#!/usr/bin/env node
"use strict";
import {exec} from "child_process";

exec("validator Tests", (error, stout, stderr) => {
  if (error) {
    console.log(error);
    return;
  } else console.log(stout);
  if (stderr) console.log(stderr);
});
