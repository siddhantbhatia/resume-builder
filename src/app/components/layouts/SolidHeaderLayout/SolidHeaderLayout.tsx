import React from "react";

import { AddressIcon, EmailIcon, LinkedinIcon, PhoneIcon } from "@app/svg";
import { LayoutProps } from "../types";

const personalDetailStyles = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
};

const PersonalDetailSeparator = ({
  displayIcons,
}: {
  displayIcons: boolean;
}) => <span style={{ display: displayIcons ? "none" : "inline" }}> | </span>;

export const SolidHeaderLayout = ({ data, styles }: LayoutProps) => {
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
    fontType,
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
        fontSize: fontSize + "px",
        color: fontColor,
        padding: pageMargin + "px",
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
      <div
        style={{
          backgroundColor: themeColor,
          textAlign: "center",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div style={{ fontSize: 32 }}>{`${firstName} ${lastName}`}</div>
        </div>
        <div>{description}</div>
        <div style={{ marginTop: "10px" }}>
          <div style={personalDetailStyles}>
            <EmailIcon
              fill={iconColor}
              display={displayIcons ? "inline" : "none"}
            />
            <a
              href={`mailto:${email}`}
              style={{ color: fontColor, ...linkStyle }}
            >
              {email}
            </a>
          </div>
          <PersonalDetailSeparator displayIcons={displayIcons} />
          <div style={personalDetailStyles}>
            <PhoneIcon
              fill={iconColor}
              display={displayIcons ? "inline" : "none"}
            />
            <a
              href={`tel:+${phoneNumber}`}
              style={{ color: fontColor, ...linkStyle }}
            >
              +{phoneNumber}
            </a>
          </div>
          <PersonalDetailSeparator displayIcons={displayIcons} />
          <div style={personalDetailStyles}>
            <LinkedinIcon
              fill={iconColor}
              display={displayIcons ? "inline" : "none"}
            />
            <a href={linkedin} style={{ color: fontColor, ...linkStyle }}>
              {linkedin}
            </a>
          </div>
          <PersonalDetailSeparator displayIcons={displayIcons} />
          <div style={personalDetailStyles}>
            <AddressIcon
              fill={iconColor}
              display={displayIcons ? "inline" : "none"}
            />
            <span style={{ color: fontColor }}>{address}</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <section>
          <h2 style={{ borderBottom: "1px solid black" }}>Experiences</h2>
          {experiences.map((exp, index) => (
            <div key={index}>
              <h3>{exp.title}</h3>
              <div style={{ display: "flex" }}>
                {exp.company}, {exp.location}
                <div
                  style={{ marginLeft: "auto" }}
                >{`${exp.startDate} - ${exp.endDate}`}</div>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 style={{ borderBottom: "1px solid black" }}>Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree}</h3>

              <div style={{ display: "flex" }}>
                {edu.major} | {edu.institution}, {edu.location}
                <div
                  style={{ marginLeft: "auto" }}
                >{`${edu.startDate} - ${edu.endDate}`}</div>
              </div>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 style={{ borderBottom: "1px solid black" }}>Certifications</h2>
          {certifications.map((cert, index) => (
            <div key={index}>
              <h3>{cert.name}</h3>
              <p>{`Date: ${cert.date}`}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 style={{ borderBottom: "1px solid black" }}>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{`${skill.name}`}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
