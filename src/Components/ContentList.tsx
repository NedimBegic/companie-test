import React from "react";
import { useAppContext } from "../store/appContext";
import ContentCard from "../SideComponents/ContentCard";
import style from "./ContentList.module.css";

const ContentList: React.FC = () => {
  const { data } = useAppContext();
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {data.map((item, index) => (
          <li key={index}>
            <ContentCard movie={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
