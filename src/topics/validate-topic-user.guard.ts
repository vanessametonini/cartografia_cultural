import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { TopicsService } from "./topics.service";

@Injectable()
export class ValidateTopicnUserGuard implements CanActivate {
    constructor(private readonly topicService: TopicsService) { }
    async canActivate(context: ExecutionContext): Promise<boolean>{
        const request = context.switchToHttp().getRequest();
        const userId = request.user;      
        const topic = await this.topicService.findOne(request.params.id);
        
        if (userId != topic.userId) throw new UnauthorizedException();
        return true;
    }
}