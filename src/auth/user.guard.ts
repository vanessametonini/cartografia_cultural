import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class UserGuard implements CanActivate {
    constructor(private readonly usersService: UsersService) { }
    async canActivate(context: ExecutionContext): Promise<boolean>{
        const request = context.switchToHttp().getRequest(); 
        const user = await this.usersService.findOne(request.user);
        
        if (user.id !== request.params.id) throw new UnauthorizedException();
        return true;
    }
}