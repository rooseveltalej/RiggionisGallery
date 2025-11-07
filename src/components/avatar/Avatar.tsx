import React, { useState, useMemo } from "react";
import Paragraph from "../../mini-components/paragraph/Paragraph";
import styles from "./Avatar.module.css";
import Image from "../../mini-components/Image/Image";
import { getInitials } from "../../utils/textFormatters";

type AvatarProps = {
  name: string;
  imageUrl?: string;
};

const Avatar: React.FC<AvatarProps> = ({ name, imageUrl }) => {
  const [imageError, setImageError] = useState(false);
  const showFallback = !imageUrl || imageError;
  const initials = useMemo(() => getInitials(name), [name]);

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
          <div className={styles["avatar-fallback"]}>{initials}</div>
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
      <Paragraph className={styles["avatar-name"]}>{name}</Paragraph>
    </div>
  );
};

export default Avatar;
