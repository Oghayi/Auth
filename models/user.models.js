import mongoose, { Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 64
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, {
    timestamps: true
});

//Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    this.password = await bcryptjs.hash(this.password, 10);
    next();
});
//Method to compare password
userSchema.methods.comparePassword = async function (password)
{
    return await bcryptjs.compare(password, this.password);
};
export const User = mongoose.model('User', userSchema);