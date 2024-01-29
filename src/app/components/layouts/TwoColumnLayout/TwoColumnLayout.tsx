import { LayoutProps } from "../types";

export const TwoColumnLayout = ({ data, styles }: LayoutProps) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    experiences,
    education,
    certifications,
    description,
    linkedin,
    skills,
  } = data;

  const {
    fontType = "Arial, sans-serif",
    fontSize = "16px",
    fontColor = "#000",
    themeColor = "#3498db",
    iconColor = "#fff",
    underlineLinks = true,
    displayIcons = true,
    watermarkImage,
    pageMargin = "20",
  } = styles;

  const linkStyle = underlineLinks
    ? { textDecoration: "underline" }
    : { textDecoration: "none" };

  return (
    <div
      style={{
        fontFamily: fontType,
        fontSize,
        backgroundColor: "#ecf0f1",
        display: "flex",
        gap: "20px",
      }}
    >
      <div style={{ width: "70%", padding: `${pageMargin}px` }}>
        {/* Personal Details */}
        <div>
          <h1>{`${firstName} ${lastName}`}</h1>
          <div>{description}</div>
        </div>
        {/* Contact Details */}
        <div style={{ marginTop: "20px" }}>
          <div>
            <span>Email:</span>{" "}
            <a
              href={`mailto:${email}`}
              style={{ color: iconColor, ...linkStyle }}
            >
              {email}
            </a>
          </div>
          <div>
            <span>Phone:</span>{" "}
            <a
              href={`tel:+${phoneNumber}`}
              style={{ color: iconColor, ...linkStyle }}
            >
              +{phoneNumber}
            </a>
          </div>
          <div>
            <span>LinkedIn:</span>{" "}
            <a href={linkedin} style={{ color: iconColor, ...linkStyle }}>
              {linkedin}
            </a>
          </div>
          <div>
            <span>Address:</span>{" "}
            <span style={{ color: iconColor }}>{address}</span>
          </div>
        </div>
        {/* Experiences */}
        <section style={{ marginTop: "20px" }}>
          <h2>Experiences</h2>
          {experiences.map((exp, index) => (
            <div key={index}>
              <h3>{exp.title}</h3>
              <p>{`${exp.startDate} - ${exp.endDate}`}</p>
              <p>{exp.company}</p>
              <p>{exp.location}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
        {/* Education */}
        <section>
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree}</h3>
              <p>{`${edu.startDate} - ${edu.endDate}`}</p>
              <p>{edu.major}</p>
              <p>{edu.institution}</p>
              <p>{edu.location}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>
      </div>
      <div
        style={{
          flex: "1",
          backgroundColor: themeColor,
          padding: `${pageMargin}px`,
        }}
      >
        {/* Certifications */}
        <section>
          <h2 style={{ color: "#fff", borderBottom: "1px solid #fff" }}>
            Certifications
          </h2>
          {certifications.map((cert, index) => (
            <div key={index}>
              <h3 style={{ color: "#fff" }}>{cert.name}</h3>
              <p style={{ color: "#fff" }}>{`Date: ${cert.date}`}</p>
            </div>
          ))}
        </section>
        {/* Skills */}
        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#fff", borderBottom: "1px solid #fff" }}>
            Skills
          </h2>
          <ul>
            {skills.map((skill, index) => (
              <li
                key={index}
                style={{ color: "#fff" }}
              >{`${skill.name}: ${skill.score}`}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
