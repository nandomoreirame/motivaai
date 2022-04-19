import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { LoaderSubmission } from '@remix-run/react/transition';
import type { Phrase as PhraseType } from '~/tyles/phrase';
import { loaderPhrase } from '~/loaders/phrase';
import { PhraseView } from '~/views/PhraseView';

type LoaderData = {
  phrase: PhraseType;
};

export const meta: MetaFunction = ({ data }) => {
  if (!data || data?.status) return { title: data?.status || 'Oops!', description: data?.statusText };

  const { phrase } = data as LoaderData;

  return {
    title: `Frade de ${phrase.author} | 💪🏼  MotivaAí`,
    description: `${phrase.phrase} ⎼ ${phrase.author}`,
  };
};

export async function loader(submission: LoaderSubmission) {
  const data = await loaderPhrase<PhraseType>(submission);
  return json<LoaderData>(data);
}

export default function Index() {
  const { phrase } = useLoaderData<LoaderData>();
  return <PhraseView phrase={phrase} />;
}
