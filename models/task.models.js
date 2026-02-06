import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    
    description: {
        type: String,
        required: false,
        trim: true
    },


    dueDate: {
        type: Date,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    }
    
}, {
    timestamps: true
});


export default mongoose.model('Task', postSchema);