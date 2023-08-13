import { LinearProgress, linearProgressClasses, styled } from "@mui/material";
import React from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#DCDCDC",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#5C9CE5",
  },
}));

export const FeelCard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.body}>
        <div style={styles.top}>
          <text style={styles.text}>Feels like</text>
          <div style={styles.iconContainer}>
            <span class="material-icons" style={styles.icon}>
              device_thermostat
            </span>
          </div>
        </div>
        <div style={styles.middle}>
          <text style={styles.bigText}>30&deg;</text>
        </div>
        <div style={styles.textWrapper}>
          <div style={styles.smallTextWrapper}>
            <div style={styles.smallWrapper}>
            <text style={styles.smallText}>0&deg;</text>
            <text style={styles.smallText}>25&deg;</text>
            <text style={styles.smallText}>50&deg;</text>
            </div>
            <BorderLinearProgress variant="determinate" value={75} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "42%",
    width: "30%",
    backgroundColor: "white",
    borderRadius: "1.5rem",
    marginBottom: "5%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "",
    width: "75%",
    height: "75%",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  top: {
    display: "flex",
    width: "100%",
    backgroundColor: "",
    flexDirection: "row",
    height: "24%",
    justifyContent: "space-between",
    alignItems:'center'
  },
  middle: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  icon: {
    color: "white",
    fontSize: "13px",
    paddingTop: '1%',
  },
  iconContainer: {
    display: "flex",
    height: "100%",
    width: "14%",
    backgroundColor: "#5C9CE5",
    borderRadius: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallTextWrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "",
    width: "100%",
  },
  smallWrapper:{
    display:'flex',
    width:'100%',
    justifyContent:'space-between'
  },
  text: {
    color: "black",
    fontSize: "9px",
    fontWeight: "bold",
  },
  smallText: {
    color: "grey",
    fontSize: "8px",
  },
  bigText: {
    fontSize: "14px",
    fontWeight: "800",
    marginRight: "3%",
  },
  mediumText: {
    fontSize: "9px",
    marginBottom: "1%",
  },
};
