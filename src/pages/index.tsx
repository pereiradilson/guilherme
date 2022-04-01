import type { GetStaticProps, NextPage } from "next";
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
  info: Info;
}

export default function Home({ videos, arts, info }: HomeProps) {
  return (
    <>
      <Head>
        <title>Guiplay | Editor Audiovisual</title>
      </Head>

      <Header />

      <Content videos={videos} arts={arts} info={info} />

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
      ],
      pageSize: 100,
      orderings: "[document.first_publication_date]",
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
      fetch: ["art.uid", "art.description", "art.image"],
      pageSize: 100,
      orderings: "[document.first_publication_date]",
    }
  );

  const arts = responseArts.results.map((art) => {
    return {
      id: art.uid,
      description: RichText.asText(art.data.description),
      image: art.data.image.url,
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
      info,
    },
    revalidate: 60,
  };
};
