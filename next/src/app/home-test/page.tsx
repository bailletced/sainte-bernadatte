"use client";

import Mass from "@/src/frontend/components/elements/Masses";
import OClocherCard from "@/src/frontend/components/elements/cards/OClocherCard";
import { Card } from "@nextui-org/card";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";

let publications: OClocherPublication[] = [];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toRender, setRender] = useState(true);

  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      slidesPerView: 1.3,
      spaceBetween: 25,
      navigation: true,
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();

    fetchOClocherData();
  }, []);

  return (
    <>
      <div
        className="grid grid-rows-6"
        style={{
          backgroundImage: "url(/images/grotte-lourdes_mobile.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "80svh",
        }}
      >
        <div className="row-start-2 text-center align-top">
          <h1 className=" text-white text-5xl text-center font-beautiful align-top">
            Bienvenue à la paroisse Sainte Bernadette
          </h1>
        </div>
      </div>
      <main className="container mx-auto max-w-7xl pt-5 px-6 flex-grow bg-[#f7f9fc]">
        <div className="sm:grid grid-cols-4 gap-5">
          <h1 className="text-4xl font-beautiful text-center pb-5 text-steber-orange">
            Les Messes
          </h1>
          <Image
            src={"/images/rentree-etudiants-scaled.jpg"}
            alt={"Eglise sainte bernadette"}
            width={1920}
            height={1080}
            className="rounded-xl mb-5"
          ></Image>
          {/* Messes dominicales */}
          <Mass typeOfMass={"sunday"}></Mass>
          {/* Messes de semaine */}
          <Mass typeOfMass={"weekly"}></Mass>
          {/* Contenu  */}
          <swiper-container navigation={true} ref={swiperRef} slidesPerView={1}>
            {publications.map((p, index) => (
              <swiper-slide key={`${p}-${index}`}>
                <OClocherCard oClocherData={p}></OClocherCard>
              </swiper-slide>
            ))}
            <swiper-slide>
              <Card
                isPressable
                className=" min-h-[300px] max-h-[300px] flex items-center justify-center"
              >
                Voir plus de publications...
              </Card>
            </swiper-slide>
          </swiper-container>
        </div>
      </main>
    </>
  );
}

function fetchOClocherData() {
  let pubIds: any;

  fetch(
    "https://api.oclocher.fr/organizations/rQMIDeTpEg70dTUB8O7s/publications_news"
  )
    .then((res) => {
      setTimeout(() => {}, 1500);
      return res.json();
    })
    .then((data: string[]) => {
      const allPubIds = Array.isArray(data) ? data : Object.values(data);
      pubIds = allPubIds.slice(0, 5);
      const fetchPublications = pubIds.map(async (pubId: any) => {
        const res = await fetch(
          `https://api.oclocher.fr/publications/${pubId}`
        );
        return await res.json();
      });
      return Promise.all(fetchPublications);
    })
    .then((pubs: OClocherPublication[]) =>
      pubs.forEach((p, index) =>
        publications.push(formatPublication(p, pubIds[index]))
      )
    );
}

function formatPublication(
  pub: OClocherPublication,
  pubId: any
): OClocherPublication {
  pub.id = pubId;
  pub.content
    ? (pub.content = pub.content.substring(0, 137).concat("", "..."))
    : null;
  pub.link = `https://app.oclocher.fr/publication/${pub.id}`;
  return pub;
}
