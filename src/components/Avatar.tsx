import React from "react";
import { H2 } from "../mini-components/h2/H2";
import styles from "./Avatar.module.css";

type AvatarProps = {
  name: string;
  imageUrl: string;
};

const Avatar: React.FC<AvatarProps> = ({ name, imageUrl }) => {
  return (
    <div className={styles.avatar}>
      <div
        className={styles["avatar-circle"]}
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
      ></div>
      <H2 className={styles["avatar-name"]}>{name}</H2>
    </div>
  );
};

export default Avatar;
