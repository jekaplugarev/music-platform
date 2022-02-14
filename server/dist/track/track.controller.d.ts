import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";
export declare class TrackController {
    private trackService;
    constructor(trackService: TrackService);
    create(dto: CreateTrackDto): Promise<import("./schemas/track.schema").Track>;
    getAll(): Promise<import("./schemas/track.schema").Track[]>;
    getOne(id: ObjectId): Promise<import("./schemas/track.schema").Track>;
    delete(id: ObjectId): Promise<import("mongoose").Schema.Types.ObjectId>;
    addComment(dto: CreateCommentDto): Promise<import("./schemas/comment.schema").Comment>;
}
