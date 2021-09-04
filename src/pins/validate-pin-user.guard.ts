import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { PinsService } from "src/pins/pins.service";
@Injectable()
export class ValidatePinUserGuard implements CanActivate {
    constructor(private readonly pinService: PinsService) { }
    async canActivate(context: ExecutionContext): Promise<boolean>{
        const request = context.switchToHttp().getRequest();
        const userId = request.user;         
        const pin = await this.pinService.findOne(request.params.id);
        
        if (userId != pin.userId) throw new UnauthorizedException();
        return true;
    }
}