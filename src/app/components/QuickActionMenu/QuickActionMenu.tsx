"use client";
import { useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { QuickActionMenuProps } from "./types";

const QuickActionMenu = function <T>({
  items,
  target,
}: QuickActionMenuProps<T>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (
    event: React.MouseEvent<HTMLElement>,
    cb: (t: T) => void
  ) => {
    handleMenuClose(event);
    cb(target);
  };

  const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more-actions"
        aria-controls="actions-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="actions-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            minWidth: "20ch",
          },
        }}
      >
        {items.map((action, idx) => {
          return (
            <MenuItem key={idx} onClick={(e) => handleClose(e, action.onClick)}>
              {action.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default QuickActionMenu;
