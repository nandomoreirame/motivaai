export type PhraseDatabase = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: {
    published: {
      id: string;
      type: string;
      checkbox: boolean;
    };
    phrase: {
      id: string;
      type: string;
      rich_text: [
        {
          type: string;
          text: {
            content: string;
            link: string;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: string;
        },
      ];
    };
    id: {
      id: string;
      type: string;
      formula: {
        type: string;
        string: string;
      };
    };
    author: {
      id: string;
      type: string;
      title: [
        {
          type: string;
          text: {
            content: string;
            link: string;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: string;
        },
      ];
    };
  };
  url: string;
};
