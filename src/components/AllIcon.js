import { Switch } from "@mui/material";
import React from "react";
import { CustomIndicator } from "./CustomIndicator";

export const AllIcon = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <span class="material-icons" style={styles.icon}>
          add
        </span>
      </div>
      <div style={styles.dotsWrapper}>
        <CustomIndicator />
      </div>
      <Switch size="small"/>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "11%",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "",
    justifyContent: "space-between",
    marginTop: "2%",
  },
  box: {
    display: "flex",
    backgroundColor: "white",
    padding: "4px",
    borderRadius: "6px",
    width: "5%",
    height: "13%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "2%",
  },
  icon: { color: "#63A0E6", fontSize: "12px" },
  dotsWrapper: {
    height: "35%",
    width: "18%",
    alignSelf: "center",
    display: "flex",
    marginTop:"11%",
    marginLeft: "15%",
  },
};
