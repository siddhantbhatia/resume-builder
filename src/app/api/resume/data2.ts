import { ResumeData } from "@app/components/layouts/types";

export const template2: ResumeData = {
  templateId: "3",
  firstName: "Sundar",
  lastName: "Pichai",
  email: "johndoe@example.com",
  phoneNumber: "123-456-7890",
  address: "Paris, France",
  experiences: [
    {
      title: "CEO",
      company: "ABC Company",
      location: "San Francisco, CA",
      startDate: "2018-01-01",
      endDate: "2022-01-01",
      description: "Developed web applications using JavaScript and Node.js",
    },
    {
      title: "Product Manager",
      company: "XYZ Corporation",
      location: "Seattle, WA",
      startDate: "2017-06-01",
      endDate: "2017-12-31",
      description: "Assisted with testing and debugging software",
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
    {
      degree: "High School Diploma",
      major: "Science",
      institution: "XYZ High School",
      location: "Los Angeles, CA",
      startDate: "2010-09-01",
      endDate: "2014-05-01",
      description:
        "Completed high school education with a focus on science subjects",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Developer - Associate",
      date: "2021-05-01",
    },
  ],
  references: [],
  linkedin: "https://www.linkedin.com/in/johndoe",
  description: "",
  skills: [
    {
      name: "SQL",
      score: 9,
    },
    {
      name: "Git",
      score: 10,
    },
  ],
};
