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
      "https://github-production-user-asset-6210df.s3.amazonaws.com/30483239/301057322-71b7c4f7-ad45-4b3d-8065-6b90c1194eca.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240131T061215Z&X-Amz-Expires=300&X-Amz-Signature=21421c5cf3bcf417db504b47f2881e96c3f4509a926b7c6556d99e7dd58b0b42&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=212090158",
  },
  {
    value: LayoutTypes.TWO_COLUMN,
    label: "Two Column",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/30483239/301057332-022e5490-2c3c-421e-95df-94ee2049f69f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240131T061259Z&X-Amz-Expires=300&X-Amz-Signature=053ccba0ae70fe47a41f33d764d989d0df7bbf7117325bccbd6098278dcee7f3&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=212090158",
  },
  {
    value: LayoutTypes.GRAPHICAL,
    label: "Graphical",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/30483239/301057373-142ca72d-8fea-401b-a8d8-c24b958ad598.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240131T061312Z&X-Amz-Expires=300&X-Amz-Signature=9f0bcc654cad6c09ff1e4b24d986aad0e6cea4259e89124b04cf3ec1d61865ac&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=212090158",
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
