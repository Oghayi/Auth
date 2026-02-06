import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    
})