import React from "react";

import { H1 } from "../../mini-components/h1/H1";
import styles from "./ContactInfo.module.css";

type ContactInfoProps = {
  phone: string;
  emails: string[];
  labels?: {
    title?: string;
    phone?: string;
    email?: string;
    emailMultiple?: string;
  };
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  phone,
  emails,
  labels = {},
}) => {
  const defaultLabels = {
    title: "Información de contacto",
    phone: "Teléfono:",
    email: "Correo:",
    emailMultiple: "Correo {number}:",
    ...labels,
  };

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
      <H1 id="contact-heading">{defaultLabels.title}</H1>

      <address className={styles["contact-address"]}>
        <dl className={styles["contact-list"]}>
          {hasPhone && (
            <div className={styles["contact-item"]}>
              <dt className={styles["contact-label"]}>{defaultLabels.phone}</dt>
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
                {validEmails.length > 1
                  ? defaultLabels.emailMultiple.replace(
                      "{number}",
                      String(index + 1),
                    )
                  : defaultLabels.email}
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
