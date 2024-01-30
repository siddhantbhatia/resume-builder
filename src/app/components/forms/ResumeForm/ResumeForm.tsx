import React from "react";
import {
  FieldArray,
  Formik,
  FormikConfig,
  FormikProps,
  useFormik,
} from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { validationSchema } from "./validationSchema";
import { ResumeData } from "@app/components/layouts/types";

interface ResumeFormProps {
  formRef: React.Ref<FormikProps<ResumeData>>;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ formRef }) => {
  return (
    <Container component="main" maxWidth="sm">
      <Formik<ResumeData>
        innerRef={formRef}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: "",
          linkedin: "",
          description: "",
          experiences: [
            {
              title: "",
              company: "",
              location: "",
              startDate: "",
              endDate: "",
              description: "",
            },
          ],
          education: [
            {
              degree: "",
              major: "",
              institution: "",
              location: "",
              startDate: "",
              endDate: "",
              description: "",
            },
          ],
          certifications: [{ name: "", date: "" }],
          skills: [{ name: "", score: 0 }],
          references: [],
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          setFieldValue,
          setFieldTouched,
        }) => (
          <form onSubmit={handleSubmit}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="experience-panel"
                id="experience-header"
              >
                <Typography variant="h6">User details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      error={touched.firstName && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      error={touched.lastName && Boolean(errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone number"
                      variant="outlined"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="LinkedIn Profile URL"
                      variant="outlined"
                      name="linkedin"
                      value={values.linkedin}
                      onChange={handleChange}
                      error={touched.linkedin && Boolean(errors.linkedin)}
                      helperText={touched.linkedin && errors.linkedin}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      variant="outlined"
                      name="phoneNumber"
                      value={values.address}
                      onChange={handleChange}
                      error={touched.address && Boolean(errors.address)}
                      helperText={touched.address && errors.address}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Short description"
                      variant="outlined"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      error={touched.description && Boolean(errors.description)}
                      helperText={touched.description && errors.description}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="experience-panel"
                id="experience-header"
              >
                <Typography variant="h6">Experience</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FieldArray name="experiences">
                  {({ remove, push }) => (
                    <>
                      {values.experiences.map((exp, index) => (
                        <Grid container spacing={2} key={index}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Title / Designation"
                              variant="outlined"
                              name={`experiences.${index}.title`}
                              value={exp.title}
                              onChange={(e) => {
                                setFieldTouched(
                                  `experiences.${index}.title`,
                                  false
                                );
                                setFieldValue(
                                  `experiences.${index}.title`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Company"
                              variant="outlined"
                              name={`experiences.${index}.company`}
                              value={exp.company}
                              onChange={(e) => {
                                setFieldTouched(
                                  `experiences.${index}.company`,
                                  false
                                );
                                setFieldValue(
                                  `experiences.${index}.company`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Company location"
                              variant="outlined"
                              name={`experiences.${index}.location`}
                              value={exp.location}
                              onChange={(e) => {
                                setFieldTouched(
                                  `experiences.${index}.location`,
                                  false
                                );
                                setFieldValue(
                                  `experiences.${index}.location`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Start date"
                              variant="outlined"
                              name={`experiences.${index}.startDate`}
                              value={exp.startDate}
                              onChange={(e) => {
                                setFieldTouched(
                                  `experiences.${index}.startDate`,
                                  false
                                );
                                setFieldValue(
                                  `experiences.${index}.startDate`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="End date"
                              variant="outlined"
                              name={`experiences.${index}.endDate`}
                              value={exp.endDate}
                              onChange={(e) => {
                                setFieldTouched(
                                  `experiences.${index}.endDate`,
                                  false
                                );
                                setFieldValue(
                                  `experiences.${index}.endDate`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Experience"
                              variant="outlined"
                              name={`experiences.${index}.description`}
                              value={exp.description}
                              onChange={(e) => {
                                setFieldTouched(
                                  `experiences.${index}.description`,
                                  false
                                );
                                setFieldValue(
                                  `experiences.${index}.description`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          {index !== 0 && (
                            <Button type="button" onClick={() => remove(index)}>
                              Remove
                            </Button>
                          )}
                          <Button type="button" onClick={() => push({})}>
                            Add experience
                          </Button>
                        </Grid>
                      ))}
                    </>
                  )}
                </FieldArray>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="education-panel"
                id="education-header"
              >
                <Typography variant="h6">Education</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FieldArray name="education">
                  {({ remove, push }) => (
                    <>
                      {values.education.map((edu, index) => (
                        <Grid container spacing={2} key={index}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Degree"
                              variant="outlined"
                              name={`education.${index}.degree`}
                              value={edu.degree}
                              onChange={(e) => {
                                setFieldTouched(
                                  `education.${index}.degree`,
                                  false
                                );
                                setFieldValue(
                                  `education.${index}.degree`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Major"
                              variant="outlined"
                              name={`education.${index}.major`}
                              value={edu.major}
                              onChange={(e) => {
                                setFieldTouched(
                                  `education.${index}.major`,
                                  false
                                );
                                setFieldValue(
                                  `education.${index}.major`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Institution"
                              variant="outlined"
                              name={`education.${index}.institution`}
                              value={edu.institution}
                              onChange={(e) => {
                                setFieldTouched(
                                  `education.${index}.institution`,
                                  false
                                );
                                setFieldValue(
                                  `education.${index}.institution`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Institution location"
                              variant="outlined"
                              name={`education.${index}.location`}
                              value={edu.location}
                              onChange={(e) => {
                                setFieldTouched(
                                  `education.${index}.location`,
                                  false
                                );
                                setFieldValue(
                                  `education.${index}.location`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Start date"
                              variant="outlined"
                              name={`education.${index}.startDate`}
                              value={edu.startDate}
                              onChange={(e) => {
                                setFieldTouched(
                                  `education.${index}.startDate`,
                                  false
                                );
                                setFieldValue(
                                  `education.${index}.startDate`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="End date"
                              variant="outlined"
                              name={`education.${index}.endDate`}
                              value={edu.endDate}
                              onChange={(e) => {
                                setFieldTouched(
                                  `education.${index}.endDate`,
                                  false
                                );
                                setFieldValue(
                                  `education.${index}.endDate`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Other details"
                              variant="outlined"
                              name={`education.${index}.description`}
                              value={edu.description}
                              onChange={(e) => {
                                setFieldTouched(
                                  `education.${index}.description`,
                                  false
                                );
                                setFieldValue(
                                  `education.${index}.description`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          {index !== 0 && (
                            <Button type="button" onClick={() => remove(index)}>
                              Remove
                            </Button>
                          )}
                          <Button type="button" onClick={() => push({})}>
                            Add education
                          </Button>
                        </Grid>
                      ))}
                    </>
                  )}
                </FieldArray>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="certifications-panel"
                id="certifications-header"
              >
                <Typography variant="h6">Certifications</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FieldArray name="certifications">
                  {({ remove, push }) => (
                    <>
                      {values.certifications.map((cert, index) => (
                        <Grid container spacing={2} key={index}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Certificate name"
                              variant="outlined"
                              name={`certifications.${index}.name`}
                              value={cert.name}
                              onChange={(e) => {
                                setFieldTouched(
                                  `certifications.${index}.name`,
                                  false
                                );
                                setFieldValue(
                                  `certifications.${index}.name`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Date of achievement"
                              variant="outlined"
                              name={`certifications.${index}.date`}
                              value={cert.date}
                              onChange={(e) => {
                                setFieldTouched(
                                  `certifications.${index}.date`,
                                  false
                                );
                                setFieldValue(
                                  `certifications.${index}.date`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          {index !== 0 && (
                            <Button type="button" onClick={() => remove(index)}>
                              Remove
                            </Button>
                          )}
                          <Button type="button" onClick={() => push({})}>
                            Add certification
                          </Button>
                        </Grid>
                      ))}
                    </>
                  )}
                </FieldArray>
              </AccordionDetails>
            </Accordion>

            {/* Skills Section */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="skills-panel"
                id="skills-header"
              >
                <Typography variant="h6">Skills</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FieldArray name="skills">
                  {({ remove, push }) => (
                    <>
                      {values.skills.map((skill, index) => (
                        <Grid container spacing={2} key={index}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Name"
                              variant="outlined"
                              name={`skills.${index}.name`}
                              value={skill.name}
                              onChange={(e) => {
                                setFieldTouched(`skills.${index}.name`, false);
                                setFieldValue(
                                  `skills.${index}.name`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Expertise score"
                              variant="outlined"
                              name={`skills.${index}.score`}
                              value={skill.score}
                              onChange={(e) => {
                                setFieldTouched(`skills.${index}.score`, false);
                                setFieldValue(
                                  `skills.${index}.score`,
                                  e.target.value
                                );
                              }}
                            />
                          </Grid>
                          {index !== 0 && (
                            <Button type="button" onClick={() => remove(index)}>
                              Remove
                            </Button>
                          )}
                          <Button type="button" onClick={() => push({})}>
                            Add skill
                          </Button>
                        </Grid>
                      ))}
                    </>
                  )}
                </FieldArray>
              </AccordionDetails>
            </Accordion>

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default ResumeForm;
