import React, { useState } from "react";

export const CustomIndicator = () => {
  const data = [1, 2, 3];
  const [active, setActive] = useState(1);
  const Circle = (props) => {
    return (
      <div
        style={{
          ...styles.box,
          width: props.active === props.index ? "40%" : "15%",
          borderRadius: props.active === props.index ? "5rem" : "50%",
          cursor: "pointer",
          backgroundColor:  props.active === props.index?"white":"#9DC3EF",
        }}
        key={props.index}
        onClick={() => setActive(props.index)}
      ></div>
    );
  };
  return (
    <div style={styles.container}>
      {data.map((item) => {
        return <Circle index={item} active={active} />;
      })}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "20%",
    width: "90%",
    backgroundColor: "",
    justifyContent: "space-between",
  },
  box: {
    height: "100%",
  },
};
