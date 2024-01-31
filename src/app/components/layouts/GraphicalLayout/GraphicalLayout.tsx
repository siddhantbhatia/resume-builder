import { AddressIcon, EmailIcon, LinkedinIcon, PhoneIcon } from "@app/svg";
import { LayoutProps } from "../types";

const personalDetailStyles = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

export const GraphicalLayout = ({ data, styles }: LayoutProps) => {
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
    fontSize = "16px",
    fontColor = "#fff",
    themeColor = "#3498db",
    iconColor = "#fff",
    underlineLinks = true,
    displayIcons = true,
    watermark,
    pageMargin = "20",
  } = styles;

  const linkStyle = underlineLinks
    ? { textDecoration: "underline" }
    : { textDecoration: "none" };

  return (
    <div
      style={{
        fontSize,
        backgroundColor: "#ecf0f1",
        display: "flex",
        position: "relative",
        height: "100%",
      }}
    >
      {watermark && (
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "15%",
            fontSize: "200px",
            opacity: "0.3",
            zIndex: "99",
            color: "black",
            transform: "rotateZ(45deg)",
          }}
        >
          {watermark}
        </div>
      )}
      <div
        style={{
          width: "40%",
          backgroundColor: themeColor,
          padding: `${pageMargin}px`,
          color: fontColor,
        }}
      >
        <div>
          <h1>{`${firstName} ${lastName}`}</h1>
        </div>
        <div>{description}</div>
        <div style={{ marginTop: "10px" }}>
          <div style={personalDetailStyles}>
            <span>
              {displayIcons ? <EmailIcon fill={iconColor} /> : `Email:`}
            </span>
            <a
              href={`mailto:${email}`}
              style={{ color: fontColor, ...linkStyle }}
            >
              {email}
            </a>
          </div>
          <div style={personalDetailStyles}>
            <span>
              {displayIcons ? <PhoneIcon fill={iconColor} /> : `Phone:`}
            </span>
            <a
              href={`tel:+${phoneNumber}`}
              style={{ color: fontColor, ...linkStyle }}
            >
              +{phoneNumber}
            </a>
          </div>
          <div style={personalDetailStyles}>
            <span>
              {displayIcons ? <LinkedinIcon fill={iconColor} /> : `LinkedIn:`}
            </span>
            <a href={linkedin} style={{ color: fontColor, ...linkStyle }}>
              {linkedin}
            </a>
          </div>
          <div style={personalDetailStyles}>
            <span>
              {displayIcons ? <AddressIcon fill={iconColor} /> : `Address:`}
            </span>
            <span>{address}</span>
          </div>
        </div>
        <section style={{ marginTop: "20px" }}>
          <h2>Skills</h2>
          {skills.map((skill, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <p style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "10px", minWidth: "80px" }}>
                  {skill.name}
                </span>
                <progress
                  value={skill.score}
                  max="10"
                  style={{ width: "150px" }}
                ></progress>
              </p>
            </div>
          ))}
        </section>
      </div>
      <div
        style={{
          flex: "1",
          padding: `${pageMargin}px`,
        }}
      >
        <section>
          <h2>Experiences</h2>
          {experiences.map((exp, index) => (
            <div key={index}>
              <h3>{exp.title}</h3>
              <p>{`${exp.startDate} - ${exp.endDate}`}</p>
              <p>
                {exp.company}, {exp.location}
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree}</h3>
              <p>{`${edu.startDate} - ${edu.endDate}`}</p>
              <p>
                {edu.major} | {edu.institution}, {edu.location}
              </p>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>Certifications</h2>
          {certifications.map((cert, index) => (
            <div key={index}>
              <h3>{cert.name}</h3>
              <p>{`Date: ${cert.date}`}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
