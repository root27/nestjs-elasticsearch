import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/createPost.dto';


@Controller('posts')
export class PostsController {

  constructor(private postsService: PostsService) { }
  @Post()
  async create(@Body() post: CreatePostDto) {

    return this.postsService.create(post);



  }




}
