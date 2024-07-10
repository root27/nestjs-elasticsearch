import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchController } from './search.controller';

@Module({
  imports: [ElasticsearchModule.register({
    node: 'http://localhost:9200',
  }),
  ],
  controllers: [SearchController],
  providers: [SearchService],

})
export class SearchModule { }
