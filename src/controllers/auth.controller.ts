import { Controller, Get, Post, Body } from "@nestjs/common";
import { UserService } from "../modules/user/services/user.service";
import { CreateUserDto } from "../requests/user/create-user.dto";

//TODO: read about decorates in typescript -> have a research and prepare powerpoint
// What is decorate in typescript
@Controller("auth")
export class AuthController {
  constructor(
    private readonly userService: UserService
  ) {
  }

  @Post("/signup")
  async signup(
    //TODO: create request validation
    @Body() inputs: CreateUserDto
  ) {

    console.log(inputs)


    //TODO: check username is exist or not
    //TODO: if exist throw an exception

    const result = await this.userService.create(inputs);

    return {
      message: "User signed up successfully.",
      data: result
    };
  }
}
