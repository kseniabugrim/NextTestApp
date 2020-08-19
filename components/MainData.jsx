import React, { useState, useEffect } from "react";
import styles from "./MainData.module.scss";

const Sidebar = ({ filter }) => {
  const [data, setData] = useState([]);
  const tempdata = new Array(20).fill(0);
  useEffect(() => {
    setData(
      tempdata.map(() => ({
        age: Math.floor(Math.random() * 80),
        exp: Math.floor(Math.random() * 20),
        prevExp: Math.floor(Math.random() * 20),
        lastView: Math.floor(Math.random() * 1000),
        location: Math.random() > 0.5,
        date: Math.random() > 0.5,
        comments: Math.random() > 0.5,
        contacts: Math.random() > 0.5,
        dir: Math.random() > 0.5
      }))
    );
  }, []);

  return (
    <div className={styles.MainData}>
      {data.map((dataItem, i) => {
        return (
          <div className={styles.item} key={i}>
            <span className={styles.itemField}> age: {dataItem.age}</span>
            <span className={styles.itemField}> exp: {dataItem.exp}</span>
            <span className={styles.itemField}>
              {" "}
              prevExp: {dataItem.prevExp}
            </span>
            <span className={styles.itemField}>
              {" "}
              lastView: {dataItem.lastView} days
            </span>
            <span className={styles.itemField}>
              {" "}
              contacts: {dataItem.contacts ? "yes" : "no"}
            </span>
            <span className={styles.itemField}>
              {" "}
              contacts: {dataItem.contacts ? "yes" : "no"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
