import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { EventsService } from "src/events/events.service";
@Injectable()
export class ValidateEventUserGuard implements CanActivate {
    constructor(private readonly eventservice: EventsService) { }
    async canActivate(context: ExecutionContext): Promise<boolean>{
        const request = context.switchToHttp().getRequest();
        const userId = request.user;         
        const event = await this.eventservice.findOne(request.params.id);
        
        if (userId != event.userId) throw new UnauthorizedException();
        return true;
    }
}