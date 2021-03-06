import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  keyword?: string;
  image?: string;
  url?: string;
}

const TITLE = 'ERC Test';
const DESCRIPTION = 'This is a website to check your ERC knowledge.';
const KEYWORD = 'erc,ehtereum';
const IMAGE = 'https://erc-checker.web.app/img/ogp/main.png'
const URL = 'https://erc-checker.web.app'

export default ({
  title = TITLE,
  description = DESCRIPTION,
  keyword = KEYWORD,
  image = IMAGE,
  url = URL,
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="photo" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  );
};
