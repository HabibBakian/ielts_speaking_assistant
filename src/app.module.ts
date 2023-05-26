import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";

import { UserModule } from './modules/user/user.module';
import { AuthController } from "./controllers/auth.controller";

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot("mongodb://root:root@localhost:27017", {
      dbName: 'ielts-speaking-assistant-stg'
    })
  ],
  controllers: [AppController, AuthController],
  providers: [AppService]
})
export class AppModule {
}
