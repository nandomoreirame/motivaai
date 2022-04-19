import * as React from 'react';
import { NavLink } from '@remix-run/react';
import { Phrase } from '~/components/Phrase';
import { shuffleArray } from '~/utils';

export interface ListViewProps {
  phrases: PhraseType[];
}

export function ListView({ phrases }: ListViewProps): React.ReactElement {
  const [newPhrases, setNewPhrases] = React.useState<PhraseType[]>(phrases);

  React.useEffect(() => {
    setNewPhrases([...phrases]);
  }, [phrases]);

  return (
    <div className="phrases container">
      <h3>
        <button className="btn-shuffle" onClick={() => setNewPhrases(shuffleArray<PhraseType>(phrases))}>
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
