"use client"
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import  { useState } from "react";
export default function SizeAvatars() {
  const [active, setActive] = useState(false);
    const handleClick = () => {
      setActive(!active);
    };
  return (
    <>
      <Toolbar />
      <Toolbar />

<Grid spacing={0}>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
      
      >
        <Grid xs={2}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100 }}
          />
        </Grid>

        <Grid xs={2}>
          <Typography variant="body1" gutterBottom>
            Amanda Pulitano
          </Typography>
        </Grid>
        <Grid xs={2}>
          <Typography variant="body2" gutterBottom>
            347K subscribers
          </Typography>
        </Grid>
        <Grid xs={2}>
          <Button variant="contained"    onClick={handleClick} style={{
        borderRadius: 35,
        backgroundColor: "#e53935",
        color:"white"
      
    }}>  { active ? "Subscribed" : "Subscribe"}</Button>
        </Grid>
      </Grid>


      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      
      >
        <Grid xs={2}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100 }}
          />
        </Grid>

        <Grid xs={2}>
          <Typography variant="body1" gutterBottom>
            Amanda Pulitano
          </Typography>
        </Grid>
        <Grid xs={2}>
          <Typography variant="body2" gutterBottom>
            347K subscribers
          </Typography>
        </Grid>
        <Grid xs={2}>
        <Button variant="contained"    onClick={handleClick} style={{
        borderRadius: 35,
        backgroundColor: "#e53935",
        color:"white"
      
    }}>  { active ? "Subscribed" : "Subscribe"}</Button>
        </Grid>
      </Grid>

      </Grid>
    </>
  );
}
