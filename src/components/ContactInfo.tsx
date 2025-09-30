import React from "react";

import { H1 } from "../mini-components/h1/H1";
import { H3 } from "../mini-components/h3/H3";
import styles from "./ContactInfo.module.css";

type ContactInfoProps = {
  phone: string;
  emails: string[];
};

const ContactInfo: React.FC<ContactInfoProps> = ({ phone, emails }) => {
  return (
    <div className={styles["contact-info"]}>
      <H1>Información de contacto</H1>

      <div className={styles["contact-item"]}>
        <H3 className={styles["contact-label"]}>Teléfono:</H3>
        <H3 className={styles["contact-value"]}>{phone}</H3>
      </div>

      {emails.map((email, index) => (
        <div className={styles["contact-item"]} key={index}>
          <H3 className={styles["contact-label"]}>Correo {index + 1}:</H3>
          <H3 className={styles["contact-value"]}>{email}</H3>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
