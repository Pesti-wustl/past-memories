// const express = require("express")
import express from 'express'
import dotenv from 'dotenv';
import getNostalgicPhoto from "./scripts/getImage.js";

dotenv.config()


const PORT = process.env.PORT || 3001

const app = express()
const flickrApiKey = process.env.FLICKR_API_KEY;
console.log(flickrApiKey); // Prints your API key

app.get("/image", async (req, res) => {
    try {
        const response = await getNostalgicPhoto()

        const photo = response.photos.photo[0]

        const imageLink = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
        
        console.log(imageLink)
        res.json({ image_link: imageLink })
    } catch (error) {
        console.log("^^^^")
        res.status(500).json({ error: 'Failed to fetch image' });
    }
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})