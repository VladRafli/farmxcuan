import { Button, Card, Grid, Stack, Typography } from "@mui/joy";
import DashboardLayout from "./Layouts/DashboardLayout";
import React, { useEffect } from "react";

export default function Market() {
    useEffect(() => {
        if (localStorage.getItem("role") === null) {
            window.location.href = "/login";
        }
    }, []);

    return (
        <DashboardLayout>
            <Stack
                spacing={4}
                sx={{
                    padding: "1rem",
                }}
            >
                <Typography level="h1">Market</Typography>
                <Stack spacing={2}>
                    <Card>
                        <Grid container spacing={2}>
                            <Grid>
                                <Typography level="h3">Product A</Typography>
                            </Grid>
                            <Grid>
                                <Typography level="h3">Farmer B</Typography>
                            </Grid>
                            <Grid>
                                <Typography level="h3">
                                    <Typography color="neutral">
                                        Total Share:{" "}
                                    </Typography>
                                    20%
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography level="h3">
                                    <Typography color="neutral">
                                        Available Share:{" "}
                                    </Typography>
                                    5%
                                </Typography>
                            </Grid>
                            <Grid>
                                <Button>See Details</Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Stack>
            </Stack>
        </DashboardLayout>
    );
}
