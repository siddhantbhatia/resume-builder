"use client";

import { ChangeEvent } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Checkbox,
  FormControlLabel,
  TextField,
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Divider,
} from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { LayoutTypes } from "@app/components/LayoutSelector/types";
import { TemplateFormState } from "./types";
import { FontTypes } from "@app/font";

const FontOptions: string[] = [
  "Open Sans",
  "Roboto",
  "Roboto Mono",
  "Roboto Condensed",
  "Monterrat",
  "Merriweather",
  "Playfair Display",
];

const LayoutOptions = [
  {
    value: LayoutTypes.SOLID_HEADER,
    label: "Solid header",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/30483239/300911114-2cac87b4-b72d-457e-aa68-6d0a0c5e4a1c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240130T174613Z&X-Amz-Expires=300&X-Amz-Signature=48096bb0e05441c9d49005f796536330a4b27b1ed40cc315b7f23f89567df6e7&X-Amz-SignedHeaders=host&actor_id=30483239&key_id=0&repo_id=750118772",
  },
  {
    value: LayoutTypes.TWO_COLUMN,
    label: "Two Column",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/30483239/300911149-dbdabd8c-32dd-4105-8b9f-63772f4293f2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240130T174632Z&X-Amz-Expires=300&X-Amz-Signature=3473e4e7f89a7bdbbeaff74aff9316031e632d45a38bf9afde859aa92d16acc2&X-Amz-SignedHeaders=host&actor_id=30483239&key_id=0&repo_id=750118772",
  },
  {
    value: LayoutTypes.GRAPHICAL,
    label: "Graphical",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/30483239/300911187-df5d9778-1b9b-45c7-9172-43dcb287409a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240130T174649Z&X-Amz-Expires=300&X-Amz-Signature=6bcdae6d357cb3b47b59c8f4c1e7929df5e0c82de550cbf41163cf034c646604&X-Amz-SignedHeaders=host&actor_id=30483239&key_id=0&repo_id=750118772",
  },
];

interface TemplateCreateFormProps {
  formData: TemplateFormState;
  setFormData?: (formData: TemplateFormState) => void;
}

export function TemplateForm({
  formData,
  setFormData = () => {},
}: TemplateCreateFormProps) {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setFormData({ ...formData, fontSize: newValue as number });
  };

  const handleFontColorChange = (color: string) => {
    setFormData({ ...formData, fontColor: color });
  };

  const handleThemeColorChange = (color: string) => {
    setFormData({ ...formData, themeColor: color });
  };

  const handleIconColorChange = (color: string) => {
    setFormData({ ...formData, iconColor: color });
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleWatermarkChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, watermark: value });
  };

  const handleTemplateNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, templateName: value });
  };

  const handleLayoutSelection = (layoutValue: LayoutTypes) => {
    setFormData({ ...formData, selectedLayout: layoutValue });
  };

  return (
    <>
      <TextField
        fullWidth
        margin="normal"
        label="Template name"
        value={formData.templateName}
        onChange={handleTemplateNameChange}
      />
      <Divider>
        <Typography gutterBottom>Font</Typography>
      </Divider>
      <FormControl fullWidth margin="normal">
        <Typography gutterBottom>Font Size: {formData.fontSize}</Typography>
        <Slider
          value={formData.fontSize}
          onChange={handleSliderChange}
          min={1}
          max={100}
          step={1}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Typography gutterBottom>Font type</Typography>
        <Select
          value={formData.fontType}
          onChange={(e) =>
            setFormData({ ...formData, fontType: e.target.value as FontTypes })
          }
        >
          {Object.values(FontTypes).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <Typography gutterBottom>Font Color</Typography>
        <MuiColorInput
          value={formData.fontColor}
          onChange={handleFontColorChange}
        />
      </FormControl>

      <Divider>
        <Typography gutterBottom>Page</Typography>
      </Divider>
      <TextField
        fullWidth
        margin="normal"
        label="Watermark"
        value={formData.watermark}
        onChange={handleWatermarkChange}
      />
      <FormControl fullWidth margin="normal">
        <Typography gutterBottom>Page Margin: {formData.pageMargin}</Typography>
        <Slider
          value={formData.pageMargin}
          onChange={(e, newValue) =>
            setFormData({ ...formData, pageMargin: newValue as number })
          }
          min={15}
          max={30}
          step={1}
        />
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.underlineLinks}
            onChange={handleCheckboxChange}
            name="underlineLinks"
          />
        }
        label="Underline Links"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={formData.displayIcons}
            onChange={handleCheckboxChange}
            name="displayIcons"
          />
        }
        label="Display Icons"
      />

      <Divider>
        <Typography gutterBottom>Layout</Typography>
      </Divider>

      <FormControl fullWidth margin="normal">
        <Typography gutterBottom>Theme Color</Typography>
        <MuiColorInput
          value={formData.themeColor}
          onChange={handleThemeColorChange}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <Typography gutterBottom>Icon Color</Typography>
        <MuiColorInput
          value={formData.iconColor}
          onChange={handleIconColorChange}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        {LayoutOptions.map((layout) => (
          <CardActionArea
            key={layout.value}
            onClick={() => handleLayoutSelection(layout.value)}
          >
            <Card
              sx={{
                borderRadius: 4,
                margin: 1,
                "&:hover": {
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                },
                ...(formData.selectedLayout === layout.value && {
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
                }),
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={layout.imageUrl}
                alt={layout.label}
              />
              <CardContent>
                <Typography variant="subtitle2" align="center">
                  {layout.label}
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        ))}
      </FormControl>
    </>
  );
}
