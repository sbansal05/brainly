import mongoose from "mongoose"
import {model, Schema} from "mongoose"
import dotenv from "dotenv";
dotenv.config();
    //@ts-ignore
mongoose.connect(process.env.MONGO_URL)

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})


export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true,
    unique: true},
})

export const ContentModel = model("Content", ContentSchema);
export const LinkModel = model("Links", LinkSchema);
