import React, { useEffect } from "react";
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

import {
  useForm,
  Controller,
  SubmitHandler,
  useFieldArray,
} from "react-hook-form";

interface ResumeFormProps {
  setFormData: (values: ResumeData) => void;
  formData: ResumeData;
}

const experienceInitialValue = {
  title: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
};

const educationInitialValue = {
  degree: "",
  major: "",
  institution: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
};

const certificateInitialValue = { name: "", date: "" };

const skillInitialValue = { name: "", score: 0 };

const ResumeForm: React.FC<ResumeFormProps> = ({ setFormData, formData }) => {
  const { control, handleSubmit, watch } = useForm<ResumeData>({
    defaultValues: formData,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setFormData(value as ResumeData);
    });
    return () => subscription.unsubscribe();
  }, [setFormData, watch]);

  const {
    fields: experienceFields,
    remove: removeExperience,
    append: addExperience,
  } = useFieldArray({
    name: "experiences",
    control,
  });

  const {
    fields: educationFields,
    remove: removeEducation,
    append: addEducation,
  } = useFieldArray({
    name: "education",
    control,
  });

  const {
    fields: certificationFields,
    remove: removeCertification,
    append: addCertification,
  } = useFieldArray({
    name: "certifications",
    control,
  });

  const {
    fields: skillFields,
    remove: removeSkill,
    append: addSkill,
  } = useFieldArray({
    name: "skills",
    control,
  });

  const processNumericInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value === "") return;

    const inputNumber = parseInt(e.target.value);

    if (inputNumber < 0 || isNaN(inputNumber)) e.target.value = "0";
    else if (inputNumber > 10) e.target.value = "10";
    else e.target.value = inputNumber.toString();
  };

  return (
    <form>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="user-detail-header"
        >
          <Typography variant="h6">User details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="First Name"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Short description"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email address"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Phone number"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="linkedin"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="LinkedIn Profile URL"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Address"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="experience-header"
        >
          <Typography variant="h6">Work experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {experienceFields.map((field, i) => (
            <Grid container spacing={2} key={field.id}>
              <Grid item xs={12}>
                <Controller
                  name={`experiences.${i}.title`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Title / Designation"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`experiences.${i}.company`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Company"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`experiences.${i}.location`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Company location"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`experiences.${i}.startDate`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Start date"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`experiences.${i}.endDate`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="End date"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`experiences.${i}.description`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Experience description"
                      variant="outlined"
                      multiline
                      maxRows={4}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                {i !== 0 && (
                  <Button type="button" onClick={() => removeExperience(i)}>
                    Delete
                  </Button>
                )}
                <Button
                  type="button"
                  onClick={() =>
                    addExperience(experienceInitialValue, {
                      focusName: `experiences.${i}.title`,
                    })
                  }
                >
                  Add more
                </Button>
              </Grid>
            </Grid>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="education-header">
          <Typography variant="h6">Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {educationFields.map((field, i) => (
            <Grid container spacing={2} key={field.id}>
              <Grid item xs={12}>
                <Controller
                  name={`education.${i}.degree`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Degree / Course"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`education.${i}.major`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Major"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`education.${i}.institution`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Institution name"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`education.${i}.location`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Institution location"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`education.${i}.startDate`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Start date"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`education.${i}.endDate`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="End date"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`education.${i}.description`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Experience description"
                      variant="outlined"
                      multiline
                      maxRows={4}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                {i !== 0 && (
                  <Button type="button" onClick={() => removeEducation(i)}>
                    Delete
                  </Button>
                )}
                <Button
                  type="button"
                  onClick={() => addEducation(educationInitialValue)}
                >
                  Add more
                </Button>
              </Grid>
            </Grid>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="certification-header"
        >
          <Typography variant="h6">Certifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {certificationFields.map((field, i) => (
            <Grid container spacing={2} key={field.id}>
              <Grid item xs={12}>
                <Controller
                  name={`certifications.${i}.name`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Certification name"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`certifications.${i}.date`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Date of achievement"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                {i !== 0 && (
                  <Button type="button" onClick={() => removeCertification(i)}>
                    Delete
                  </Button>
                )}
                <Button
                  type="button"
                  onClick={() => addCertification(certificateInitialValue)}
                >
                  Add more
                </Button>
              </Grid>
            </Grid>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="certification-header"
        >
          <Typography variant="h6">Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {skillFields.map((field, i) => (
            <Grid container spacing={2} key={field.id}>
              <Grid item xs={12}>
                <Controller
                  name={`skills.${i}.name`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Skill name"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={`skills.${i}.score`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <TextField
                        {...field}
                        onChange={(e) => {
                          processNumericInput(e);
                          field.onChange(e);
                        }}
                        fullWidth
                        type="number"
                        label="Expertise score"
                        variant="outlined"
                      />
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {i !== 0 && (
                  <Button type="button" onClick={() => removeSkill(i)}>
                    Delete
                  </Button>
                )}
                <Button
                  type="button"
                  onClick={() => addSkill(skillInitialValue)}
                >
                  Add more
                </Button>
              </Grid>
            </Grid>
          ))}
        </AccordionDetails>
      </Accordion>

      <Button
        variant="contained"
        onClick={() => alert("Resume saved")}
        fullWidth
        style={{ marginTop: "20px" }}
      >
        Save
      </Button>
    </form>
  );
};

export default ResumeForm;
