import { notionService } from '~/services';

const { NOTION_PHRASES_DATABASE_ID } = process.env;

export async function getSocialLinks() {
  return await notionService.getDatabaseDataPage<ContentDatabase>(NOTION_PHRASES_DATABASE_ID, {
    filter: {
      property: 'category', // notion database "category" property
      select: {
        equals: 'socialLink',
      },
    },
  });
}

export async function getStaticPage<T>(phraseId: string) {
  return await notionService.getDatabaseDataPage<T>(NOTION_PHRASES_DATABASE_ID, {
    filter: {
      property: 'id',
      formula: {
        equals: phraseId,
      },
    },
  });
}
