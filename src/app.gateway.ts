import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { RepliesService } from './replies/replies.service';
import { TopicsService } from './topics/topics.service';
import { UsersService } from './users/users.service';
import { SupportsService } from './supports/supports.service';
import { RejoindersService } from './rejoinders/rejoinders.service';





@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly topicsService: TopicsService,
    private readonly usersService: UsersService,
    private readonly repliesService: RepliesService,
    private readonly supportsService: SupportsService,
    private readonly rejoindersService: RejoindersService,
  ){}
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('newTopicToServer')
  async topicMessage(client: Socket, payload) {
    const topicId = await this.topicsService.create(payload)
    const topic = {id: topicId.toString(), ...payload};
    const user = await this.usersService.findOne(topic.userId)
    this.server.emit('newTopicToClient', { 
      ...topic,
      user: {
        firstName: user.firstName, 
        lastName: user.lastName,
        avatarId: user.avatarId
      },
    });
  }

  @SubscribeMessage('newSupportToServer')
  async supportMessage(client: Socket, payload) {
    const supportId = await this.supportsService.create(payload)
    const support = {id: supportId.toString(), ...payload};
    this.server.emit('newSupportToClient', support);
  }

  @SubscribeMessage('newReplyToServer')
  async replyMessage(client: Socket, payload) {
    const replyId = await this.repliesService.create(payload);
    const reply = {id: replyId.toString(), ...payload};
    const user = await this.usersService.findOne(reply.userId);
    this.server.emit('newReplyToClient', { 
      ...reply,
      user: {
        firstName: user.firstName, 
        lastName: user.lastName,
        avatarId: user.avatarId
      },
    });
  }

  @SubscribeMessage('newRejoinderToServer')
  async rejoinderMessage(client: Socket, payload) {
    const rejoinderId = await this.rejoindersService.create(payload);
    const rejoinder = {id: rejoinderId.toString(), ...payload};
    const user = await this.usersService.findOne(rejoinder.userId);
    this.server.emit('newRejoinderToClient', { 
      ...rejoinder,
      user: {
        firstName: user.firstName, 
        lastName: user.lastName,
        avatarId: user.avatarId
      },
    });
  }



  
}
