import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { onPositionsGet } from "../../../api/user";

const AppFormRadioGroup = () => {
  const [positions, setPositions] = useState([]);
  const { values, handleChange } = useFormikContext();

  useEffect(() => {
    const fetchPositions = async () => {
      const positionsData = await onPositionsGet();

      return positionsData;
    };

    fetchPositions().then((data) => {
      if (data.success) {
        setPositions(data.positions);
      }
    });
  }, []);
  return (
    <div>
      <p className="mb-0">Select your position</p>
      <RadioGroup
        name="position"
        value={values.position}
        onChange={handleChange}
      >
        {positions.map((p) => {
          return (
            <FormControlLabel
              key={p.id}
              value={p.id}
              control={<Radio />}
              label={p.name}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default AppFormRadioGroup;
