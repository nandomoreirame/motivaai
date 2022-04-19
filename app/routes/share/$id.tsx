import type { LoaderSubmission } from '@remix-run/react/transition';
import { redirect } from '@remix-run/node';
import type { Phrase as PhraseType } from '~/tyles/phrase';
import { loaderPhrase } from '~/loaders/phrase';

export async function loader(submission: LoaderSubmission) {
  const { phrase, author, path } = await loaderPhrase<PhraseType>(submission);
  if (!phrase) return redirect(`/`);

  const BASE_URL = process.env.SITE_BASE_URL || 'https://motivaai.nandomoreira.dev';
  const text = encodeURIComponent(`_“${phrase}”_ ⏤ ${author} \nconfira em: ${BASE_URL}/${path}`);
  const url = 'https://api.whatsapp.com/send';

  return redirect(`${url}?text=${text}`);
}

export default function Index() {
  return <></>;
}
