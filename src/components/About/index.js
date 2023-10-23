import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function About() {
    return (
        <Box sx={{ flexGrow: 1 }} className="py-10 bg-green-400" id="about">
            <Grid container spacing={2}>
                <Grid className="py-10" item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid className="py-10" item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid className="py-10" item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid className="py-10" item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid className="py-10" item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid className="py-10" item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid className="py-10" item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid className="py-10" item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid className="py-10" item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid className="py-10" item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid className="py-10" item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid className="py-10" item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid className="py-10" item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid className="py-10" item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
