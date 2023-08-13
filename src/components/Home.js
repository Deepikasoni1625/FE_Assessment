import React from "react";
import { Heading } from "./Heading";
import { Chart } from "./Chart";
import { AllIcon } from "./AllIcon";
import { HumidityCard } from "./Cards/HumidityCard";
import { FeelCard } from "./Cards/FeelCard";
import { UVCard } from "./Cards/UVCard";
import { RainCard } from "./Cards/RainCard";
import { PrepCard } from "./Cards/PrepCard";

const Details = () => {
  return (
    <div style={styles.detailContainer}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <text style={{ color: "white", fontSize: "0.75rem" }}>
          New York, USA
        </text>
        <text style={styles.detailText}>Today 28 Sept</text>
      </div>
      <div style={styles.dateWrapper}>
        <div style={styles.icon}>
          <span class="material-icons" style={styles.detailText}>
            wb_twilight
          </span>
          <text style={styles.detailBigText}>07:19</text>
        </div>
        <div style={styles.icon}>
          <span class="material-icons" style={styles.detailText}>
            wb_twilight
          </span>
          <text style={styles.detailBigText}>19:32</text>
        </div>
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.outerWrapper}>
        <div style={styles.outerBox}>
          <div style={styles.leftBox}>
            <AllIcon />
            <Details />
            <div style={styles.midWrapper}>
              <div style={styles.tempContainer}>
                <span class="material-icons" style={styles.arrowIcon}>
                  chevron_left
                </span>
                <text style={styles.bigText}>27&deg;</text>
                <span class="material-icons" style={styles.arrowIcon}>
                  chevron_right
                </span>
              </div>
              <div style={styles.bottomWrapper}>
                <span class="material-icons" style={styles.sunIcon}>
                  light_mode
                </span>
                <text style={styles.mediumText}>Sunny</text>
              </div>
            </div>
          </div>
          <div style={styles.rightBox}>
            <div style={styles.upperWrapper}>
              <Heading />
              <Chart />
            </div>
            <div style={styles.LowerWrapper}>
              <text style={styles.details}>
                More details of today's weather
              </text>
              <div style={styles.cardWrapper}>
                <HumidityCard />
                <HumidityCard />
                <PrepCard />
                <UVCard />
                <FeelCard />
                <RainCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#0E0E0E",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
  },
  outerWrapper: {
    display: "flex",
    backgroundColor: "#B3D6FD",
    width: "63.5%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  midWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "87%",
    justifyContent: "center",
    alignSelf: "center",
  },
  bottomWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "38%",
    alignSelf: "center",
    marginRight: "5%",
  },
  tempContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bigText: {
    color: "white",
    fontSize: "3.7rem",
    fontWeight: "bold",
    marginLeft: "5%",
  },
  outerBox: {
    display: "flex",
    height: "79.5%",
    width: "83.9%",
    backgroundColor: "#5C9CE5",
    borderRadius: "2rem",
    justifyContent: "space-between",
  },
  leftBox: {
    display: "flex",
    height: "100%",
    width: "26.1%",
    flexDirection: "column",
  },
  arrowIcon: { color: "#9DC3EF", fontSize: "32px" },
  sunIcon: { color: "white", fontSize: "1rem" },
  rightBox: {
    display: "flex",
    height: "100%",
    width: "73.9%",
    backgroundColor: "#E4F1FF",
    borderRadius: "2rem",
    alignSelf: "flex-end",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  upperWrapper: {
    display: "flex",
    height: "50%",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "",
    alignItems: "center",
  },
  LowerWrapper: {
    display: "flex",
    height: "43%",
    width: "89%",
    backgroundColor: "",
    alignSelf: "center",
    marginBottom: "4%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  detailContainer: {
    display: "flex",
    height: "12%",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "",
    justifyContent: "space-between",
  },
  detailText: { color: "white", fontSize: "0.6rem", padding: "2%" },
  detailBigText: {
    color: "white",
    fontSize: "0.7rem",
  },
  icon: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "65%",
    padding: "2%",
  },
  cardWrapper: {
    display: "flex",
    height: "86%",
    width: "100%",
    backgroundColor: "",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignSelf: "flex-end",
  },
  dateWrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "",
    width: "40%",
    alignItems: "flex-end",
  },
  details: {
    color: "black",
    fontSize: "0.7rem",
    fontWeight: "600",
  },
  mediumText: {
    color: "white",
    fontSize: "16px",
    fontWeight: "400",
  },
};
