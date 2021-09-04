import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class ValidateUserGuard implements CanActivate {
    constructor(private readonly usersService: UsersService) { }
    async canActivate(context: ExecutionContext): Promise<boolean>{
        const request = context.switchToHttp().getRequest(); 
        const userId = request.user;
        
        if (userId !== request.params.id) throw new UnauthorizedException();
        return true;
    }
}