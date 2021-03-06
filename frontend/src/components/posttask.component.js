import React from 'react';
import axios from "axios"
import { Redirect } from "react-router-dom";
import {Button, Box, Grid, Typography, Container, TextField} from '@material-ui/core';

export default function PostTask() {
    return (
        <Container>
            <Typography component="h1" variant="h5">
                Add a new task
            </Typography>
            <form noValidate>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            id="subject_modulecode"
                            label="Subject Modulecode"
                            name="subject_modulecode"
                            autoFocus
                            onChange={e => this.last_name = e.target.value}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            autoFocus
                            onChange={e => this.first_name = e.target.value}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="center">
                
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Description"
                            multiline
                            fullWidth
                            autoFocus
                            margin="normal"

                            rowsMax={4}
                            // onChange={e => this.last_name = e.target.value}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="datetime-local"
                            label="Planned Time"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            onChange={e => this.last_name = e.target.value}
                        />
                    </Grid>
                    <Grid item xs ={3}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            // onClick={this.onSubmitClick}
                        >
                            Add Task
                        </Button>
                    </Grid>            
                </Grid>
            </form>
        </Container>
        
    )
}