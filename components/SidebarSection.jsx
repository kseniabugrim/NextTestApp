import React, { useState } from "react";
import styles from "./SidebarSection.module.scss";

const SidebarSection = ({ title, children }) => {
  const [active, setActive] = useState(true);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className={styles.SidebarSection}>
      <div className={styles.title} onClick={handleToggle}>
        <img src="arrow.svg" active={active ? "true" : undefined} className={styles.arrow} />
        <span className={styles.titleText}>{title}</span>
      </div>
      <div className={styles.body} active={active ? "true" : undefined}>{children}</div>
    </div>
  );
};

export default SidebarSection;
