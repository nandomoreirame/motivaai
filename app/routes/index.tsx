import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { loaderList } from '~/loaders/list';
import type { Phrase as PhraseType } from '~/tyles/phrase';
import { ListView } from '~/views/ListView';

type LoaderListData = {
  phrases: PhraseType[];
};

export async function loader() {
  const data = await loaderList<LoaderListData>();
  return json<LoaderListData>(data);
}

export default function Index() {
  const { phrases } = useLoaderData<LoaderListData>();
  return <ListView phrases={phrases} />;
}
