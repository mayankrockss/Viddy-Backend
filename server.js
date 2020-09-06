import express from 'express';
import mongoose from 'mongoose';
import videos from './dbModel.js';

const app = express();
const port = 9000;
const connection_url = "mongodb+srv://admin:drZpIigqpiojVQfi@cluster0.jch8x.mongodb.net/vidApp?retryWrites=true&w=majority";

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.get('/fetchVideos', (req, res) => {
    videos.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    });
})

app.post('/putVideo', (req, res) => {
    const vidinfo = req.body;
    videos.create(vidinfo, (err, data) => {
        
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })
})

app.listen(port, () => console.log("listning on some awesome port"));