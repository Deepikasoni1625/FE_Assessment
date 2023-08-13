import { LineChart } from "@mui/x-charts";
import React from "react";

const uData = [23, 29, 58, 75, 33, 20, 73, 49];
const xLabels = ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "49%"];
export const Chart = () => {
  const DayText = (props) => {
    return (
      <div style={styles.textWrapper}>
        <text style={styles.mediumText}>{props.text}</text>
        <span class="material-icons" style={styles.icon}>
          wb_sunny
        </span>
        <text style={styles.mediumText}>{props.temp}&deg;</text>
      </div>
    );
  };
  return (
    <div style={styles.container}>
      <div style={styles.body}>
        <div style={styles.top}>
          <text style={styles.text}>Upcoming hours</text>
          <div
            style={styles.rightContainer}
          >
            <div style={styles.smallTextDisable}>
              <text
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  color: "#B1B1B1",
                }}
              >
                Rain precipitation
              </text>
              <span
                class="material-icons"
                style={{ ...styles.icon, color: "#B1B1B1" }}
              >
                expand_more
              </span>
            </div>
            <div style={styles.smallText}>
              <text style={{ fontSize: "8px", fontWeight: "bold" }}>
                Next Days
              </text>
              <span class="material-icons" style={styles.icon}>
                chevron_right
              </span>
            </div>
          </div>
        </div>
        <div style={styles.middle}>
          <DayText text="Now" temp="27" />
          <DayText text="11:00" temp="28" />
          <DayText text="12:00" temp="28" />
          <DayText text="13:00" temp="29" />
          <DayText text="14:00" temp="30" />
          <DayText text="15:00" temp="29" />
          <DayText text="16:00" temp="29" />
          <DayText text="17:00" temp="28" />
        </div>
        <div style={styles.chartWrapper}>
          <LineChart
            width={600}
            height={180}
            series={[{ data: uData, area: true, type: "line", stack: "total" }]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{
              ".MuiLineElement-root, .MuiMarkElement-root": {
                display: "flex",
              },              
            }}
            leftAxis={null}
            
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "65%",
    width: "89%",
    backgroundColor: "#FFFFFF",
    borderRadius: "1.5rem",
    marginBottom: "2.3%",
    flexDirection: "column",
  },
  body: {
    display: "flex",
    height: "85%",
    width: "100%",
    flexDirection: "column",
    alignItems: "",
    // justifyContent: "space-evenly",
    position: "relative",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "93%",
    alignSelf: "center",
    height: "30%",
    alignItems: "center",
  },
  rightContainer:{
    width: "30%",
    justifyContent: "space-between",
    display: "flex",
    height: "50%",
    backgroundColor: "",
    alignItems: "center",
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "40%",
  },
  chartWrapper: {
    display: "flex",
    width: "100%",
    backgroundColor: "",
    height: "40%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    left: 1,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "",
    width: "5%",
  },
  mediumText: {
    fontSize: "9px",
  },
  icon: {
    color: "black",
    fontSize: "12px",
  },
  text: {
    fontSize: "10px",
    fontWeight: "bold",
  },
  smallText: {
    backgroundColor: "#F1F1F1",
    padding: "0.2rem",
    borderRadius: "0.4rem",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
  },
  smallTextDisable: {
    backgroundColor: "#F1F1F1",
    borderRadius: "0.4rem",
    color: "#DFDFDF",
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    padding: "0.2rem",
  },
};
