import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import * as path from "path";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
    imports: [
        ServeStaticModule.forRoot(
            {rootPath: path.resolve(__dirname, 'static')}
        ),
        MongooseModule.forRoot('mongodb://jeka:jeka@cluster0-shard-00-00.hthzy.mongodb.net:27017,cluster0-shard-00-01.hthzy.mongodb.net:27017,cluster0-shard-00-02.hthzy.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-q12mxw-shard-0&authSource=admin&retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ],
})

export class AppModule {

}