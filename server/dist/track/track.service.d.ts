import { Model, ObjectId } from "mongoose";
import { Track, TrackDocument } from "./schemas/track.schema";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
export declare class TrackService {
    private trackModel;
    private commentModel;
    constructor(trackModel: Model<TrackDocument>, commentModel: Model<CommentDocument>);
    create(dto: CreateTrackDto): Promise<Track>;
    getAll(): Promise<Track[]>;
    getOne(id: ObjectId): Promise<Track>;
    delete(id: ObjectId): Promise<ObjectId>;
    addComment(dto: CreateCommentDto): Promise<Comment>;
}
