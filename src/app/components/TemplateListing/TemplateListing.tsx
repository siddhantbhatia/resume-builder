"use client";
import { useRouter } from "next/navigation";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import QuickActionMenu from "../QuickActionMenu/QuickActionMenu";
import { TemplateListingProps } from "./types";
import { Button } from "@mui/material";
// import styles from "./page.module.css";

export const TemplateListing = ({ data }: TemplateListingProps) => {
  const router = useRouter();
  return (
    <div>
      <Button variant="contained" onClick={() => router.push("/template/new")}>
        Create new template
      </Button>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Template Name</TableCell>
              <TableCell align="left">Layout type</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.layout}</TableCell>
                <TableCell align="left">
                  <QuickActionMenu
                    target={row}
                    items={[
                      {
                        label: "Edit template",
                        onClick: (row) => router.push(`/template/${row.id}`),
                      },

                      {
                        label: "Create resume from template",
                        onClick: (row) => router.push(`/resume/new/${row.id}`),
                      },
                    ]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
