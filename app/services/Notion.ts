import { APIErrorCode, Client as NotionClient } from '@notionhq/client';
import type { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';
import { shuffleArray } from '~/utils';

class NotionService {
  notion: NotionClient;

  constructor() {
    this.notion = new NotionClient({ auth: process.env.NOTION_ACCESS_TOKEN });
  }

  async getPhrasesDatabase<T>(databaseId: string, params: QueryDatabaseParameters = {}): Promise<Array<T>> {
    try {
      const { filter, ...restParams } = params;

      const _sorts = [
        {
          property: 'author',
          direction: shuffleArray(['descending', 'ascending'])[0],
        },
        {
          property: 'id',
          direction: shuffleArray(['descending', 'ascending'])[0],
        },
        {
          property: 'phrase',
          direction: shuffleArray(['descending', 'ascending'])[0],
        },
      ];

      let _filter = {
        property: 'published', // notion database "published" property
        checkbox: {
          equals: true,
        },
      };

      if (filter) {
        _filter = {
          and: [_filter, filter],
        };
      }

      const { results } = await this.notion.databases.query({
        database_id: databaseId,
        filter: _filter,
        sorts: [shuffleArray(_sorts)[0]],
        ...restParams,
      });

      return results;
    } catch (error) {
      if (error.code === APIErrorCode.ObjectNotFound) {
        //
        // For example: handle by asking the user to select a different database
        //
      } else {
        // Other error handling code
        console.error({ error });
      }
    }
  }
}

export const notionService = new NotionService();
