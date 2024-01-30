import { AddressIcon, EmailIcon, LinkedinIcon, PhoneIcon } from "@app/svg";
import { LayoutProps } from "../types";

const personalDetailStyles = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

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
    fontSize,
    fontColor,
    themeColor,
    iconColor,
    underlineLinks,
    displayIcons,
    watermark,
    pageMargin,
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
        height: "100%",
        position: "relative",
      }}
    >
      {watermark && (
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "20%",
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
      <div style={{ width: "70%", padding: pageMargin }}>
        <div>
          <h1>{`${firstName} ${lastName}`}</h1>
          <div>{description}</div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={personalDetailStyles}>
            <span>
              {displayIcons ? <EmailIcon fill={iconColor} /> : `Email:`}
            </span>
            <a
              href={`mailto:${email}`}
              style={{ ...linkStyle, color: fontColor }}
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
              style={{ ...linkStyle, color: fontColor }}
            >
              +{phoneNumber}
            </a>
          </div>
          <div style={personalDetailStyles}>
            <span>
              {displayIcons ? <LinkedinIcon fill={iconColor} /> : `LinkedIn:`}
            </span>{" "}
            <a href={linkedin} style={{ ...linkStyle, color: fontColor }}>
              {linkedin}
            </a>
          </div>
          <div style={personalDetailStyles}>
            <span>
              {displayIcons ? <AddressIcon fill={iconColor} /> : `Address:`}
            </span>{" "}
            <span>{address}</span>
          </div>
        </div>
        {/* Experiences */}
        <section style={{ marginTop: "20px" }}>
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
        {/* Education */}
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
              <li key={index} style={{ color: "#fff" }}>{`${skill.name}`}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
