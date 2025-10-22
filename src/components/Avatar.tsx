import React, { useState } from "react";
import { H2 } from "../mini-components/h2/H2";
import styles from "./Avatar.module.css";
import Image from "../mini-components/Image/Image";

type AvatarProps = {
  name: string;
  imageUrl?: string;
};

/**
 * Obtiene las iniciales del nombre (máximo 2 caracteres)
 */
const getInitials = (name: string): string => {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

const Avatar: React.FC<AvatarProps> = ({ name, imageUrl }) => {
  const [imageError, setImageError] = useState(false);
  const showFallback = !imageUrl || imageError;
  const initials = getInitials(name);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={styles.avatar}>
      <div
        className={styles["avatar-circle"]}
        role="img"
        aria-label={`Foto de perfil de ${name}`}
      >
        {showFallback ? (
          <div className={styles["avatar-fallback"]} aria-hidden="true">
            {initials}
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={`Foto de perfil de ${name}`}
            className={styles["avatar-image"]}
            loading="lazy"
            onError={handleImageError}
          />
        )}
      </div>
      <H2 className={styles["avatar-name"]}>{name}</H2>
    </div>
  );
};

export default Avatar;
