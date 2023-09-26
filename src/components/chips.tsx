"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import DiamondIcon from "@mui/icons-material/Diamond";
import Stack from '@mui/material/Stack';
interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "Polymer" },
    { key: 2, label: "React" },
    { key: 3, label: "Bun" },
    { key: 4, label: "Vue.js" },
    { key: 5, label: "Nextjs" },
    { key: 6, label: "Mongo DB" },
    { key: 7, label: "React Native" },
    { key: 8, label: "Unity" },
    { key: 9, label: "Blender" },
    { key: 10, label: "Unreal Engine" },
    { key: 11, label: "Python" },
    { key: 12, label: "Gnome" },
    // { key: 13, label: "RPI" },
    // { key: 14, label: "Window Manager" },
    // { key: 15, label: "FossTube" },
    // { key: 16, label: "Vsiual Studio Code" },
    // { key: 17, label: "AOSP" },
    // { key: 18, label: "Masstodon" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
      
    <div className="scroll-parent">
         <Stack direction="row" spacing={4}  component="ul">
      <div className="scroll-element primary">
        {/* <Paper
          className="chips"
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
          }}
          component="ul"
        > */}
          <Stack direction="row" spacing={2}  component="ul">
          {chipData.map((data) => {
            let icon;

            if (data.label === "NEW") {
              icon = <DiamondIcon />;
            }

            return (
              <ListItem key={data.key}>
                <Chip
                  icon={icon}
                  label={data.label}
                  onDelete={
                    data.label === "NEW" ? undefined : handleDelete(data)
                  }
                />
              </ListItem>
            );
          })}
     </Stack>
      </div>
      <div className="scroll-element secondary">
        {/* <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
          }}
          component="ul"
        > */}
         <Stack direction="row" spacing={2}  component="ul">
          {chipData.map((data) => {
            let icon;

            if (data.label === "NEW") {
              icon = <DiamondIcon />;
            }

            return (
              <ListItem key={data.key}>
                <Chip
                  icon={icon}
                  label={data.label}
                  onDelete={
                    data.label === "NEW" ? undefined : handleDelete(data)
                  }
                />
              </ListItem>
            );
          })}
        </Stack>
      </div>
      </Stack>
    </div>
      
  );
}
