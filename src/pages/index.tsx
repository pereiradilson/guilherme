import type { GetStaticProps } from "next";
import Head from "next/head";

import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";
import { RichText } from "prismic-dom";

import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

type Video = {
  id: string;
  image: string;
  description: string;
  videoUrl: string;
  typeVideo: string;
};

type Art = {
  id: string;
  description: string;
  image: string;
};

type Landpage = {
  id: string;
  description: string;
  image: string;
  link_url: string;
};

type Logo = {
  id: string;
  description: string;
  image: string;
};

type Info = {
  image: string;
  profile: string;
  whatsapp: string;
  email: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
};

interface HomeProps {
  videos: Video[];
  arts: Art[];
  logos: Logo[];
  info: Info;
  landpages: Landpage[];
}

export default function Home({
  videos,
  arts,
  logos,
  info,
  landpages,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Guiplay | Editor Audiovisual</title>
      </Head>

      <Header />

      <Content
        videos={videos}
        arts={arts}
        logos={logos}
        info={info}
        landpages={landpages}
      />

      <Footer info={info} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const responseVideos = await prismic.query(
    [Prismic.predicates.at("document.type", "video")],
    {
      fetch: [
        "video.image",
        "video.description",
        "video.videourl",
        "video.typevideo",
        "video.order",
      ],
      pageSize: 100,
      orderings: "[my.video.order desc]",
    }
  );

  const videos = responseVideos.results.map((video) => {
    return {
      id: video.uid,
      image: video.data.image.url,
      description: RichText.asText(video.data.description),
      videoUrl: RichText.asText(video.data.videourl),
      typeVideo: video.data.typevideo,
    };
  });

  const responseArts = await prismic.query(
    [Prismic.predicates.at("document.type", "art")],
    {
      fetch: ["art.uid", "art.description", "art.image", "art.order"],
      pageSize: 100,
      orderings: "[my.art.order desc]",
    }
  );

  const arts = responseArts.results.map((art) => {
    return {
      id: art.uid,
      description: RichText.asText(art.data.description),
      image: art.data.image.url,
    };
  });

  const responseLandpages = await prismic.query(
    [Prismic.predicates.at("document.type", "landpage")],
    {
      fetch: [
        "landpage.uid",
        "landpage.description",
        "landpage.image",
        "landpage.order",
        "landpage.link_url",
      ],
      pageSize: 100,
      orderings: "[my.landpage.order desc]",
    }
  );

  const landpages = responseLandpages.results.map((landpage) => {
    return {
      id: landpage.uid,
      description: RichText.asText(landpage.data.description),
      image: landpage.data.image.url,
      link_url: landpage.data.link_url.url,
    };
  });

  const responseLogos = await prismic.query(
    [Prismic.predicates.at("document.type", "logo")],
    {
      fetch: ["logo.uid", "logo.description", "logo.image", "logo.order"],
      pageSize: 100,
      orderings: "[my.logo.order desc]",
    }
  );

  const logos = responseLogos.results.map((logo) => {
    return {
      id: logo.uid,
      description: RichText.asText(logo.data.description),
      image: logo.data.image.url,
    };
  });

  const responseInfo = await prismic.query(
    [Prismic.predicates.at("document.type", "info")],
    {
      fetch: [
        "info.image",
        "info.profile",
        "info.whatsapp",
        "info.email",
        "info.facebook",
        "info.twitter",
        "info.instagram",
        "info.youtube",
      ],
      pageSize: 1,
      orderings: "[document.first_publication_date]",
    }
  );

  const info = {
    image: responseInfo.results[0].data.image.url,
    profile: RichText.asText(responseInfo.results[0].data.profile),
    whatsapp: RichText.asText(responseInfo.results[0].data.whatsapp),
    email: RichText.asText(responseInfo.results[0].data.email),
    facebook: RichText.asText(responseInfo.results[0].data.facebook),
    twitter: RichText.asText(responseInfo.results[0].data.twitter),
    instagram: RichText.asText(responseInfo.results[0].data.instagram),
    youtube: RichText.asText(responseInfo.results[0].data.youtube),
  };

  return {
    props: {
      videos,
      arts,
      logos,
      info,
      landpages,
    },
    revalidate: 60,
  };
};
