import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { PostsController } from './posts.controller';

@Module({
  imports: [ElasticsearchModule.register({
    node: 'http://localhost:9200',

  }),
  ],
  providers: [PostsService],
  controllers: [PostsController],

})
export class PostsModule { }
