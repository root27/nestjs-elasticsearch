import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { SearchModule } from './search/search.module';


@Module({
  imports: [PostsModule,
    SearchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
