import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(private esService: ElasticsearchService) { }


  async search(query: string) {

    const body = await this.esService.search({
      index: 'posts',
      body: {
        query: {
          match: {
            title: query
          },

        },
      },
    });



    return body.hits.hits.map((hit) => hit._source);

  }


  async createIndex(index: any) {
    const res = await this.esService.indices.create({
      index,
    });

    return res;
  }


}
