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
    }
    );



  }


  async getPosts() {

    const res = await this.es.search({
      index: 'posts',
      body: {
        query: {
          match_all: {}
        }
      }
    });

    return res.hits.hits.map((hit) => hit._source);


  }

  async getPost(title: string) {

    const posts = await this.es.search({
      index: 'posts',
      body: {
        query: {
          match: { title: title }
        }
      }
    });

    return posts.hits.hits.map((hit) => hit._source);

  }




}


