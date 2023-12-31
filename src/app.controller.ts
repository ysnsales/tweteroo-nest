import { Body, Controller, Get, HttpCode, HttpException, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dtos/user.dto';
import { CreateTweetDto } from './dtos/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('/sign-up')
  @HttpCode(200)
  createUser(@Body() body: CreateUserDto) {
    return this.appService.createUser(body);  
  }

  @Get('/tweets')
  getTweets(@Query('page') page: number) {
    return this.appService.getTweets(page);
  }

  @Post('/tweets')
  createTweet(@Body() body: CreateTweetDto){
    return this.appService.createTweet(body);
  }

  @Get('/tweets/:username')
  getTwittersByUsername(@Param('username') username: string){
    return this.appService.getTweetsByUsername(username);
  }
}