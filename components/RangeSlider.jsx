import React, { useState } from "react";
import { Range } from "rc-slider";

import styles from "./RangeSlider.module.scss";

const Sidebar = ({ marks, max, min, value, onChange, ...props }) => {
  const marksKeys = Object.keys(marks);
  const visibleValue = value;

  const marksArray = marksKeys.map((key, i) => {
    if (Number(key) === value[0]) {
      visibleValue[0] = i;
    }
    if (Number(key) === value[1]) {
      visibleValue[1] = i;
    }
    return [i, { ...marks[key], value: Number(key) }];
  });

  const visibleMarks = Object.fromEntries(marksArray);

  const handleChange = values => {
    onChange([marksArray[values[0]][1].value, marksArray[values[1]][1].value]);
  };

  return (
    <Range
      {...props}
      className={styles.RangeSlider}
      allowCross={false}
      step={null}
      onChange={handleChange}
      value={visibleValue}
      min={0}
      max={marksArray.length - 1}
      marks={visibleMarks}
      trackStyle={[
        {
          border: "1px solid #2da4fa",
          background: "#2da4fa"
        }
      ]}
      handleStyle={[
        {
          borderRadius: "0",
          width: "10px",
          height: "15px",
          border: "2px solid #2da4fa",
          background: "#fff"
        },
        {
          borderRadius: "0",
          width: "10px",
          height: "15px",
          border: "2px solid #2da4fa",
          background: "#fff"
        }
      ]}
      dotStyle={{
        borderRadius: "0",
        width: "2px",
        height: "7px",
        top: "0px"
      }}
      activeDotStyle={{
        border: "2px solid #2da4fa",
        background: "#2da4fa"
      }}
    />
  );
};

export default Sidebar;
