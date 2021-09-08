import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { WsException } from "@nestjs/websockets";
import { UsersService } from "src/users/users.service";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class WsGuard implements CanActivate {
    constructor(
        private readonly usersService: UsersService,
        private configService: ConfigService,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean | any>{
        const bearerToken = context.getArgByIndex(0).handshake.query.authorization; 
        const secret = this.configService.get<string>('supersecret');
        
        try {
            const decoded = jwt.verify( bearerToken, secret ) as any;
            return new Promise((resolve, reject) => {
                
                return this.usersService.findOne(decoded.id).then(user => {
                    if (user) {
                        resolve(user);
                    } else {
                        reject(false);
                    }
                });
            });
        } catch (error) {
            return new WsException(error);
        }
    }
}