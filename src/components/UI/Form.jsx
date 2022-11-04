import React, { useEffect, useState } from "react";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { onPositionsGet } from "../../api/user";

const Form = () => {
  const [positions, setPositions] = useState([]);
  const [positionValue, setPositionValue] = useState(null);

  useEffect(() => {
    const fetchPositions = async () => {
      const positionsData = await onPositionsGet();

      return positionsData;
    };

    fetchPositions().then((data) => {
      if (data.success) {
        setPositions(data.positions);
        setPositionValue(data.positions[0].name);
      }
    });
  }, []);

  const handlePositionChange = (e) => {
    setPositionValue(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="d-flex justify-content-center flex-column">
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
                  value={p.name}
                  control={<Radio defaultChecked={p.id === 1} />}
                  label={p.name}
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
            startAdornment: <button className="upload-file-btn">Upload</button>,
          }}
        />

        <div className="d-flex justify-content-center">
          <button disabled>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
