"use client";

import { useState, ChangeEvent } from "react";
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
import styles from "./page.module.css";

const INITIAL_STATE = {
  fontType: "Open Sans",
  fontSize: 16,
  underlineLinks: false,
  showIcons: true,
  showWatermark: false,
  watermarkImage: undefined,
};

const fontTypes = [
  "Open Sans",
  "Merriweather",
  "Roboto Condensed",
  "Playfair Display",
  "Lato",
  "Lora",
  "PT Sans",
  "PT Serif",
  "IBM Plex Sans",
  "IBM Plex Serif",
];

const FontOptions: string[] = [
  "Open Sans",
  "Merriweather",
  "Roboto Condensed",
  "Playfair Display",
  "Lato",
  "Lora",
  "PT Sans",
  "PT Serif",
  "IBM Plex Sans",
  "IBM Plex Serif",
];

const LayoutOptions = [
  {
    value: "layout1",
    label: "Layout 1",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjowI25eZlIVpH8MvRVpJqx8nvWC57Gzy0YX9wn7RLg&s",
  },
  {
    value: "layout2",
    label: "Layout 2",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjowI25eZlIVpH8MvRVpJqx8nvWC57Gzy0YX9wn7RLg&s",
  },
  {
    value: "layout3",
    label: "Layout 3",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjowI25eZlIVpH8MvRVpJqx8nvWC57Gzy0YX9wn7RLg&s",
  },
  {
    value: "layout4",
    label: "Layout 4",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjowI25eZlIVpH8MvRVpJqx8nvWC57Gzy0YX9wn7RLg&s",
  },
  {
    value: "layout5",
    label: "Layout 5",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjowI25eZlIVpH8MvRVpJqx8nvWC57Gzy0YX9wn7RLg&s",
  },
];

interface FormState {
  fontType: string;
  fontSize: number;
  fontColor: string;
  underlineLinks: boolean;
  displayIcons: boolean;
  addWatermark: boolean;
  watermarkImage: string;
  pageMargin: number;
  selectedLayout: string | null;
}

const defaultState: FormState = {
  fontType: "Open Sans",
  fontSize: 16,
  fontColor: "#000000",
  underlineLinks: false,
  displayIcons: false,
  addWatermark: false,
  watermarkImage: "",
  pageMargin: 8,
  selectedLayout: null,
};

export default function Template() {
  const [formData, setFormData] = useState<FormState>(defaultState);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setFormData({ ...formData, fontSize: newValue as number });
  };

  const handleColorChange = (color: string) => {
    setFormData({ ...formData, fontColor: color });
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleWatermarkCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    setFormData({ ...formData, addWatermark: checked, watermarkImage: "" });
  };

  const handleWatermarkImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, watermarkImage: value });
  };

  const handleLayoutSelection = (layoutValue: string) => {
    setFormData({ ...formData, selectedLayout: layoutValue });
  };

  return (
    <div className={styles.container}>
      <div className={styles.template_style_sidebar}>
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
              setFormData({ ...formData, fontType: e.target.value as string })
            }
          >
            {FontOptions.map((option) => (
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
            onChange={handleColorChange}
          />
        </FormControl>

        <Divider>
          <Typography gutterBottom>Page</Typography>
        </Divider>
        <FormControl fullWidth margin="normal">
          <Typography gutterBottom>
            Page Margin: {formData.pageMargin}
          </Typography>
          <Slider
            value={formData.pageMargin}
            onChange={(e, newValue) =>
              setFormData({ ...formData, pageMargin: newValue as number })
            }
            min={1}
            max={20}
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

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.addWatermark}
              onChange={handleWatermarkCheckboxChange}
              name="addWatermark"
            />
          }
          label="Add Watermark"
        />

        {formData.addWatermark && (
          <TextField
            fullWidth
            margin="normal"
            label="Watermark Image URL"
            value={formData.watermarkImage}
            onChange={handleWatermarkImageChange}
          />
        )}

        <Divider>
          <Typography gutterBottom>Layout</Typography>
        </Divider>

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
      </div>
    </div>
  );
}
