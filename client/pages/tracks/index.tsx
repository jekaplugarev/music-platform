import React from "react";
import MainLayout from "../../layouts/MainLayout";
import {Grid, Card, Button, Box} from "@material-ui/core";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {_id: '1', name: 'Трек 1', artist: 'Артист 1', audio: 'Артист 1', listens: 0},
        {_id: '2', name: 'Трек 2', artist: 'Артист 2', audio: 'Артист 2', listens: 0},
        {_id: '3', name: 'Трек 3', artist: 'Артист 3', audio: 'Артист 3', listens: 0},
    ]

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>
                                Список треков
                            </h1>
                            <Button
                                onClick={() => router.push('/tracks/create')}
                            >
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList
                        tracks={tracks}
                    />
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index