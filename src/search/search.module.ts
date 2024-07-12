import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchController } from './search.controller';
import * as fs from 'fs';
import * as path from 'path';


@Module({
  imports: [ElasticsearchModule.register({
    node: 'https://localhost:9200',
    tls: {
      ca: fs.readFileSync(path.resolve('/path/to/your/certificate')),
      rejectUnauthorized: false,
    },
    auth: {
      username: 'elastic',
      password: '', // Add your pass

    },
  })
  ],
  controllers: [SearchController],
  providers: [SearchService],
  exports: [ElasticsearchModule]

})
export class SearchModule { }
