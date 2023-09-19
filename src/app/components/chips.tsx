"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import DiamondIcon from '@mui/icons-material/Diamond';

interface ChipData {
    key: number;
    label: string;
}

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
    const [chipData, setChipData] = React.useState<readonly ChipData[]>([
        { key: 0, label: 'Angular' },
       
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
        { key: 5, label: 'Nextjs' },
        { key: 6, label: 'Mongo DB' },
        { key: 7, label: 'React Native' },
        { key: 8, label: 'Unity' },
        { key: 9, label: 'Blender' },
        { key: 10, label: 'Unreal Engine' },

    ]);

    const handleDelete = (chipToDelete: ChipData) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <Paper elevation={0}
      sx= {{
        display: 'flex',
            justifyContent: 'center',
                flexWrap: 'wrap',
                    listStyle: 'none',
                        p: 0.5,
                            m: 0,
      }
}
component = "ul"
    >
{
    chipData.map((data) => {
        let icon;

        if (data.label === 'NEW') {
            icon = <DiamondIcon />;
          }

        return (
            <ListItem key= { data.key } >
            <Chip
              icon={ icon }
        label = { data.label }
        onDelete = { data.label === 'NEW' ? undefined : handleDelete(data) }
            />
            </ListItem>
        );
})}
</Paper>
  );
}
