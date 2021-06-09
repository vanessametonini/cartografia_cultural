import { CanActivate, ConflictException, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { PinsService } from "src/pins/pins.service";
import { UsersService } from "src/users/users.service";

@Injectable()
export class ValidateUserGuard implements CanActivate {
    constructor(private readonly usersService: UsersService, private readonly pinService: PinsService) { }
    async canActivate(context: ExecutionContext): Promise<boolean>{
        const request = context.switchToHttp().getRequest(); 
        const user = await this.usersService.findOne(request.user);
        const pin = await this.pinService.findOne(request.params.id);
        
        if (user.id != pin.userId) throw new UnauthorizedException();
        return true;
    }
}