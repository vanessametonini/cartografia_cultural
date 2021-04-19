import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { UsersService } from "src/users/users.service";

@Injectable()
export class UserExistGuard implements CanActivate {
    constructor(private readonly usersService: UsersService) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const user = context.switchToHttp().getRequest().body;
        console.log(user);        
        return !(this.usersService.findByEmail(user.email));
    }
}