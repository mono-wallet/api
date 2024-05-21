import { Controller } from "@nestjs/common"
import { UserService } from "../services/user.service"

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}
}
