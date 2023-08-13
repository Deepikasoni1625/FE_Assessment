import React from "react";

export const Heading = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textWrapper}>
        <text style={styles.mainText}>Welocme back Isabella!</text>
        <text style={styles.subText}>Checkout today's weather information</text>
      </div>
      <div style={styles.righWrapper}>
        <span class="material-icons" style={styles.icon}>
          more_horiz
        </span>
        <div style={styles.pic}></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "22%",
    width: "89%",
    backgroundColor: "",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  mainText: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  subText: {
    fontSize: "12px",
    fontWeight: "500",
  },
  pic: {
    height: "42%",
    width: "44%",
    backgroundColor: "grey",
    borderRadius: "0.5rem",
  },
  righWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "11%",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "flex-end",
    paddingBottom: "1%",
  },
  icon: { fontSize: "20px", alignSelf: "flex-end", marginBottom: "4%" },
};
