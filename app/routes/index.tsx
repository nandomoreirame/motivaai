import { json } from '@remix-run/node';
import { NavLink, useLoaderData } from '@remix-run/react';
import { Phrase } from '~/components/Phrase';
import { notionService } from '~/services/Notion';
import type { Phrase as PhraseType } from '~/tyles/phrase';
import type { PhraseDatabase } from '~/tyles/schema';
import { normalizePhrase, shuffleArray } from '~/utils';

type LoaderData = {
  phrases: PhraseType[];
};

export async function loader() {
  const { NOTION_PHRASES_DATABASE_ID } = process.env;
  const database = await notionService.getPhrasesDatabase<PhraseDatabase>(NOTION_PHRASES_DATABASE_ID);
  const phrases = database.map(phrase => normalizePhrase(phrase));
  return json<LoaderData>({ phrases: shuffleArray(phrases) });
}

export default function Index() {
  const { phrases } = useLoaderData<LoaderData>();
  const [newPhrases, setnewPhrases] = React.useState<PhraseType[]>([]);

  React.useEffect(() => {
    setnewPhrases(phrases);
  }, [phrases]);

  return (
    <div className="phrases container">
      <h3>
        <button className="btn-shuffle" onClick={() => setnewPhrases(shuffleArray(phrases))}>
          Misturar lista
        </button>
        <NavLink className="btn-grad" to="/random">
          Motiva Ai!
        </NavLink>
      </h3>

      <ul className="phrases__list">
        {newPhrases.map(phrase => (
          <li className="phrases__item" key={phrase.id}>
            <NavLink className="phrases__link" to={phrase.path}>
              <Phrase phrase={phrase} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
