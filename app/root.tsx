import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useTransition,
} from '@remix-run/react';
import styles from '~/styles/main.css';
import { Loading } from './components/Loading';
import { shuffleArray } from './utils';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'MotivaAi',
  viewport: 'width=device-width,initial-scale=1',
  keywords: 'frase, motivação, motivacional, gerador, gere, dia, frases, autor, autores',
  'og:locale': 'pt_BR',
  language: 'Portuguese',
  googlebot: 'index,follow',
  robots: 'index,follow,noodp',
  country: 'Brazil',
  'mobile-web-app-capable': 'yes',
  generator: 'Visual Studio Code - Insiders',
  'revisit-after': '10 days',
  'twitter:card': 'summary_large_image',
  'twitter:site': '@oseunando',
});

export function links() {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

type LoaderData = {
  gaId: string;
};

export async function loader() {
  const googleAnalyticsId = process.env.SITE_GA_ID || '';
  return json<LoaderData>({ googleAnalyticsId });
}

export default function App() {
  const { googleAnalyticsId } = useLoaderData<LoaderData>();
  const [bgClass, setBgClass] = React.useState('--bg1');
  const [loading, setLoading] = React.useState(false);
  const transition = useTransition();

  React.useEffect(() => {
    setLoading(transition?.state === 'loading');
    if (transition?.state === 'idle') setBgClass(shuffleBackgrounds());
  }, [transition]);

  const shuffleBackgrounds = () => {
    return shuffleArray<string>(['--bg1', '--bg2', '--bg3', '--bg4'])[0];
  };

  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
        {process.env.NODE_ENV === 'production' && googleAnalyticsId && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125092358-4" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${bgClass} ${loading ? '--loading' : ''}`}>
        {loading && <Loading />}
        <Outlet />
        <footer>
          <address>Desenvolvido em Curitiba-PR, Brasil.</address>{' '}
          <small>
            Com ♡ por{' '}
            <a href="https://nandomoreira.me/?ref=motivaai" target="_blank" rel="noreferrer">
              Fernando Moreira
            </a>
          </small>{' '}
          <small>
            <a href="https://github.com/nandomoreirame/motivaai/" target="_blank" rel="noreferrer">
              Veja o código-fonte.
            </a>
          </small>
        </footer>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
