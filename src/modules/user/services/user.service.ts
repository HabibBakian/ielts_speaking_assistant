import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User, UserDocument } from "../schemas/user.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {
  }

  async create(user: User) {
    const result = await new this.userModel(user);

    await result.save();

    return result;
  }


}
