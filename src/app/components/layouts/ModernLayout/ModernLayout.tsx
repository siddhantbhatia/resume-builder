// ResumeTemplate4.tsx
import React from "react";
import { LayoutProps } from "../types";

export const ResumeTemplate4 = ({ data, styles }: LayoutProps) => {
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
    fontColor = "#333",
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
        fontFamily: fontType,
        fontSize,
        backgroundColor: "#ecf0f1",
        color: fontColor,
        padding: `${pageMargin}px`,
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h1>{`${firstName} ${lastName}`}</h1>
        <div>{description}</div>
      </div>

      {/* Contact Details */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Contact Details</h2>
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
      </section>

      {/* Experiences */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Experiences</h2>
        {experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <h3>{exp.title}</h3>
            <p>{`${exp.startDate} - ${exp.endDate}`}</p>
            <p>{exp.company}</p>
            <p>{exp.location}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <h3>{edu.degree}</h3>
            <p>{`${edu.startDate} - ${edu.endDate}`}</p>
            <p>{edu.major}</p>
            <p>{edu.institution}</p>
            <p>{edu.location}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Certifications</h2>
        {certifications.map((cert, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <h3>{cert.name}</h3>
            <p>{`Date: ${cert.date}`}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <p>
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
  );
};
