import { CanActivate, ConflictException, ExecutionContext, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class UserExistGuard implements CanActivate {
    constructor(private readonly usersService: UsersService) { }
    async canActivate(context: ExecutionContext): Promise<boolean>{
        const user = context.switchToHttp().getRequest().body;
        const exists = await this.usersService.findByEmail(user.email);
        if (exists) throw new ConflictException('User already exist');
        return !exists;
    }
}