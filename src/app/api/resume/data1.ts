import { ResumeData } from "@app/components/layouts/types";

export const template1: ResumeData = {
  templateId: "1",
  firstName: "Elon",
  lastName: "Musk",
  email: "elonmusk@tesla.com",
  phoneNumber: "123-456-7890",
  address: "California, USA",
  experiences: [
    {
      title: "CEO",
      company: "SpaceX",
      location: "San Francisco, CA",
      startDate: "2018-01-01",
      endDate: "2022-01-01",
      description: "Developed web applications using JavaScript and Node.js",
    },
    {
      title: "Intern",
      company: "XYZ Corporation",
      location: "Seattle, WA",
      startDate: "2017-06-01",
      endDate: "2017-12-31",
      description: "Assisted with testing and debugging software",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      institution: "University of ABC",
      location: "New York, NY",
      startDate: "2014-09-01",
      endDate: "2018-05-01",
      description:
        "Studied computer science and gained knowledge in various programming languages",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Developer - Associate",
      date: "2021-05-01",
    },
  ],
  description: "I like X",
  references: [],
  linkedin: "https://www.linkedin.com/in/elonmusk",
  skills: [
    {
      name: "JavaScript",
      score: 10,
    },
    {
      name: "Node.js",
      score: 9,
    },
    {
      name: "HTML",
      score: 8,
    },
    {
      name: "CSS",
      score: 8,
    },
  ],
};
