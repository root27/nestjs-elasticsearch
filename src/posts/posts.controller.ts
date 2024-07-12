import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/createPost.dto';


@Controller('posts')
export class PostsController {

  constructor(private postsService: PostsService) { }
  @Post()
  async create(@Body() post: CreatePostDto) {

    return this.postsService.create(post);

  }


  @Get()
  async getPost(@Query('title') title: string) {

    if (!title) {

      return this.postsService.getPosts();
    }

    return this.postsService.getPost(title);

  }



}
