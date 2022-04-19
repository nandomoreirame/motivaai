import { loaderRandom } from '~/loaders/random';

export async function loader() {
  return await loaderRandom();
}

export default function Index() {
  return <></>;
}
