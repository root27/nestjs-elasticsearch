import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/createPost.dto";
import { ElasticsearchService } from '@nestjs/elasticsearch';



@Injectable()
export class PostsService {
  constructor(private es: ElasticsearchService) { }

  async create(post: CreatePostDto) {

    return await this.es.index({
      index: 'posts',
      body: {
        title: post.title,
        content: post.content,
        author: post.author,
      }
    },
      {

        headers: {
          'Content-Type': 'application/json',
        }
      }
    );



  }




}


