import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

import { AppConfig } from "../../utils/AppConfig";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

export const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="toDxQumJ3lO_EcbmkDPtucDF5k1bcuELVOKG-TNHeXc"
        />
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta name="description" content={props.description} />
        <link
          rel="icon"
          href={`${router.basePath}/kfit_it_logo_small.png`}
          key="favicon"
        />
        <title>KlantFirst</title>
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};
