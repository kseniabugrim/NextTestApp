import React, { useState, useEffect } from "react";
import SidebarSection from "./SidebarSection";
import RangeSlider from "./RangeSlider";

import styles from "./Sidebar.module.scss";

const baseFilter = {
  inputDays: 30,
  location: false,
  date: false,
  comments: false,
  contacts: false,
  dir: false,
  age: [0, 60],
  exp: [0, 15],
  prevExp: [0, 15]
};

const Sidebar = ({ onChange }) => {
  const [filter, setFilter] = useState(baseFilter);
  const handleErase = () => {
    setFilter(baseFilter);
  };
  const handleInputDays = e => {
    setFilter({ ...filter, inputDays: e.target.value });
  };
  const handleCheckbox = e => {
    setFilter({ ...filter, [e.target.name]: e.target.checked });
  };
  const handleAge = value => {
    setFilter({ ...filter, age: value });
  };
  const handleExp = value => {
    setFilter({ ...filter, exp: value });
  };
  const handlePrevExp = value => {
    setFilter({ ...filter, prevExp: value });
  };

  return (
    <div className={styles.Sidebar}>
      <div className={styles.topbar}>
        <span>ФИЛЬТРЫ</span>
        <span className={styles.erase} onClick={handleErase}>
          Очистить
        </span>
      </div>
      <div>
        <SidebarSection title="Общие">
          <label className={styles.checkboxField}>
            <input
              type="checkbox"
              onChange={handleCheckbox}
              checked={filter.date}
              name="date"
            />
            Скрывать профили просмотренные за{" "}
            <input
              type="text"
              className={styles.inputDays}
              onChange={handleInputDays}
              value={filter.inputDays}
            />{" "}
            дней
          </label>
          <label className={styles.checkboxField}>
            <input
              type="checkbox"
              onChange={handleCheckbox}
              checked={filter.location}
              name="location"
            />
            Профили со спорной локацией
          </label>
          <label className={styles.checkboxField}>
            <input
              type="checkbox"
              onChange={handleCheckbox}
              checked={filter.comments}
              name="comments"
            />
            Профили без комментариев
          </label>
          <label className={styles.checkboxField}>
            <input
              type="checkbox"
              onChange={handleCheckbox}
              checked={filter.dir}
              name="dir"
            />
            Профили отобранные в папки
          </label>
        </SidebarSection>
        <SidebarSection title="Возраст">
          <RangeSlider
            value={filter.age}
            onChange={handleAge}
            min={0}
            max={60}
            marks={{
              0: { label: "0" },
              18: { label: "18" },
              20: { label: "20" },
              25: { label: "25" },
              30: { label: "30" },
              35: { label: "35" },
              40: { label: "40" },
              50: { label: "50" },
              60: { label: "60+" }
            }}
          />
        </SidebarSection>
        <SidebarSection title="Опыт работы">
          <RangeSlider
            value={filter.exp}
            onChange={handleExp}
            min={0}
            max={15}
            marks={{
              0: { label: "0" },
              1: { label: "1" },
              2: { label: "2" },
              3: { label: "3" },
              4: { label: "4" },
              5: { label: "5" },
              7: { label: "7" },
              10: { label: "10" },
              15: { label: "15+" }
            }}
          />
        </SidebarSection>
        <SidebarSection title="Опыт работы на последнем месте">
          <RangeSlider
            value={filter.prevExp}
            onChange={handlePrevExp}
            min={0}
            max={10}
            marks={{
              0: { label: "0" },
              1: { label: "1" },
              2: { label: "2" },
              3: { label: "3" },
              4: { label: "4" },
              5: { label: "5" },
              7: { label: "7" },
              10: { label: "10" },
              15: { label: "15+" }
            }}
          />
        </SidebarSection>
        <SidebarSection title="Доступные контакты">
          <label className={styles.checkboxField}>
            <input
              type="checkbox"
              onChange={handleCheckbox}
              checked={filter.contacts}
              name="contacts"
            />
            С указанием контактов
          </label>
        </SidebarSection>
      </div>
    </div>
  );
};

export default Sidebar;
