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
    imageUrl: "/solid_header.jpg",
  },
  {
    value: LayoutTypes.TWO_COLUMN,
    label: "Two Column",
    imageUrl: "/two_column.jpg",
  },
  {
    value: LayoutTypes.GRAPHICAL,
    label: "Graphical",
    imageUrl: "/graphical.jpg",
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
                style={{ objectFit: "contain" }}
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
