import { Controller, Param, Get, Body, Post } from '@nestjs/common';
import { SearchService } from './search.service';


@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) { }
  @Get(':query')
  async search(@Param('query') query: string) {
    return this.searchService.search(query);
  }


  @Post('index')
  async createIndex(@Body() data: any) {
    const res = await this.searchService.createIndex(data.index);

    console.log(res);


  }

}
