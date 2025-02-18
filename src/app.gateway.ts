import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger, UseGuards } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { RepliesService } from './replies/replies.service';
import { TopicsService } from './topics/topics.service';
import { UsersService } from './users/users.service';
import { SupportsService } from './supports/supports.service';
import { RejoindersService } from './rejoinders/rejoinders.service';
import { LikesService } from './likes/likes.service';
import { WsGuard } from './auth/ws.guard';
@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly topicsService: TopicsService,
    private readonly usersService: UsersService,
    private readonly repliesService: RepliesService,
    private readonly supportsService: SupportsService,
    private readonly rejoindersService: RejoindersService,
    private readonly likesService: LikesService,
  ) { }
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

  @UseGuards(WsGuard)
  @SubscribeMessage('newTopicToServer')
  async topicMessage(client: Socket, payload) {
    const topicId = await this.topicsService.create(payload);
    const topic = { id: topicId.toString(), ...payload };
    const user = await this.usersService.findOne(topic.userId);

    this.server.emit('newTopicToClient', {
      ...topic,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        avatarId: user.avatarId
      },
    });
  }

  @UseGuards(WsGuard)
  @SubscribeMessage('updateTopicToServer')
  async topicUpdateMessage(client: Socket, payload) {
    const id = payload.id;
    const updatedTopic = await this.topicsService.update(id, {...payload})
    this.server.emit('updateTopicToClient', updatedTopic);
  }

  @UseGuards(WsGuard)
  @SubscribeMessage('deleteTopicToServer')
  async removeTopicMessage(client: Socket, payload) {
    const removedTopic = await this.topicsService.remove(payload.id);
    this.server.emit('deleteTopicToClient', removedTopic);
  }

  @SubscribeMessage('newSupportToServer')
  async supportMessage(client: Socket, payload) {
    const supportId = await this.supportsService.create(payload)
    const support = { id: supportId.toString(), ...payload };
    this.server.emit('newSupportToClient', support);
  }

  @SubscribeMessage('newReplyToServer')
  async replyMessage(client: Socket, payload) {
    const replyId = await this.repliesService.create(payload);
    const reply = { id: replyId.toString(), ...payload };
    const user = await this.usersService.findOne(reply.userId);
    this.server.emit('newReplyToClient', {
      ...reply,
      user: {
        id: reply.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarId: user.avatarId
      },
    });
  }

  @SubscribeMessage('newRejoinderToServer')
  async rejoinderMessage(client: Socket, payload) {
    const { userId, topicId, replyId, content, createdAt } = payload;
    const rejoinder = { userId, topicId, replyId, content, createdAt };
    const rejoinderId = await this.rejoindersService.create(rejoinder);
    this.server.emit('newRejoinderToClient', { id: rejoinderId.toString(), ...payload });
  }

  @SubscribeMessage('newLikeToServer')
  async likeMessage(client: Socket, payload) {
    const { userId, topicId, replyId, createdAt } = payload;
    const like = { userId, topicId, replyId, createdAt };
    const likeId = await this.likesService.create(like);
    this.server.emit('newLikeToClient', { id: likeId.toString(), ...payload });
  }

  @SubscribeMessage('removeLikeToServer')
  async removeLikeMessage(client: Socket, payload) {
    this.likesService.remove(payload.id);
    this.server.emit('removeLikeToClient', payload);
  }

  @SubscribeMessage('deleteReplyToServer')
  async deleteReplyMessage(client: Socket, payload) {
    const replyRemoved = await this.repliesService.remove(payload.id);
    const { reply, rejoidersArrayIds, likesArrayIds } = replyRemoved;
    this.server.emit('deleteReplyToClient', {
      id: reply._id,
      topicId: reply.topicId,
      rejoidersArrayIds,
      likesArrayIds,
      deletedCount: rejoidersArrayIds.length + 1,
      user: {
        ...payload.user,
        id: payload.userId
      },
    });
  }

  @SubscribeMessage('deleteRejoinderToServer')
  async deleteRejoinderMessage(client: Socket, payload) {
    await this.rejoindersService.remove(payload.id);
    this.server.emit('deleteRejoinderToClient', payload);
  }


}
