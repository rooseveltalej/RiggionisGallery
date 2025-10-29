import React from "react";

import { H1 } from "../mini-components/h1/H1";
import styles from "./ContactInfo.module.css";

type ContactInfoProps = {
  phone: string;
  emails: string[];
};

const ContactInfo: React.FC<ContactInfoProps> = ({ phone, emails }) => {
  const hasPhone = phone && phone.trim().length > 0;
  const hasEmails = emails && emails.length > 0;
  const validEmails = hasEmails
    ? emails.filter((email) => email && email.trim().length > 0)
    : [];

  // Si no hay información de contacto, no renderizar nada
  if (!hasPhone && validEmails.length === 0) {
    return null;
  }

  return (
    <section
      className={styles["contact-info"]}
      aria-labelledby="contact-heading"
    >
      <H1 id="contact-heading">Información de contacto</H1>

      <address className={styles["contact-address"]}>
        <dl className={styles["contact-list"]}>
          {hasPhone && (
            <div className={styles["contact-item"]}>
              <dt className={styles["contact-label"]}>Teléfono:</dt>
              <dd className={styles["contact-value"]}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className={styles["contact-link"]}
                >
                  {phone}
                </a>
              </dd>
            </div>
          )}

          {validEmails.map((email, index) => (
            <div className={styles["contact-item"]} key={email}>
              <dt className={styles["contact-label"]}>
                {validEmails.length > 1 ? `Correo ${index + 1}:` : "Correo:"}
              </dt>
              <dd className={styles["contact-value"]}>
                <a href={`mailto:${email}`} className={styles["contact-link"]}>
                  {email}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </address>
    </section>
  );
};

export default ContactInfo;
