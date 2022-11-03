import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../config/mui.config";
import { positions } from "../config/positions";

const PostRequest = () => {
  const [positionValue, setPositionValue] = useState("frontend");

  const handlePositionChange = (e) => {
    setPositionValue(e.target.value);
  };

  return (
    <div className="my-6">
      <h1 className="text-center m-3">Working with POST request</h1>
      <div className="d-flex justify-content-center">
        <form className="d-flex justify-content-center flex-column">
          <ThemeProvider theme={theme}>
            <TextField id="outlined-helperText" label="Your Name" />
            <TextField id="outlined-helperText" label="Email" />
            <TextField
              id="outlined-helperText"
              label="Phone"
              helperText="+38 (XXX) XXX-XX-XX"
            />

            <div>
              <p className="mb-0">Select your position</p>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={positionValue}
                onChange={handlePositionChange}
              >
                {positions.map((p) => {
                  return (
                    <FormControlLabel
                      key={p.id}
                      value={p.value}
                      control={<Radio defaultChecked={p.id === 1} />}
                      label={p.label}
                    />
                  );
                })}
              </RadioGroup>
            </div>
            <TextField
              id="standard-name"
              disabled
              placeholder="Upload your photo"
              InputProps={{
                startAdornment: (
                  <button className="upload-file-btn">Upload</button>
                ),
              }}
            />

            <div className="d-flex justify-content-center">
              <button disabled>Sign Up</button>
            </div>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
};

export default PostRequest;
