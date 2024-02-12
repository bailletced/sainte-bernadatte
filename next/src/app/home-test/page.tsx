"use client";

import { GetGroupsQuery, GroupType } from "@/graphql/graphql-types";
import Mass from "@/src/frontend/components/elements/Masses";
import OClocherCard from "@/src/frontend/components/elements/cards/OClocherCard";
import { useSuspenseQuery } from "@apollo/client";
import { Card } from "@nextui-org/card";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import groupQuery from "@/graphql/tag/groupQueries.graphql";
import GroupCard from "@/src/frontend/components/elements/cards/GroupCard";
import { Button } from "@nextui-org/react";
import Link from "next/link";

import json from '../publications.json'
import jsonId from '../publications_id.json'

let publications: TOClocherPublication[] = [];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toRender, setRender] = useState(true);

  const swiperRef = useRef(null);

  const { data } = useSuspenseQuery<GetGroupsQuery>(groupQuery);

  let groups = data.groups;

  useEffect(() => {

    // fetchOClocherData();

    // Pour ne pas faire appel à l'API OClocher
    json.forEach((json) => {
      let publication: TOClocherPublication = {
        id: json.id,
        created_at: json.created_at,
        created_by: json.created_by,
        created_source: json.created_source,
        updated_at: json.updated_at,
        updated_by: json.updated_by,
        disabled: json.disabled,
        disabled_at: json.disabled_at,
        organization: json.organization,
        is_organization: json.is_organization,
        is_anonymous: json.is_anonymous,
        kind: json.kind,
        name: json.name,
        description: json.description,
        content: json.content,
        selection: json.selection,
        medias: json.medias,
        hypertext: json.hypertext,
        warning: json.warning, // ou null si vous voulez mettre explicitement null
        warning_content: json.warning_content, // ou null si vous voulez mettre explicitement null
        datetime_start: json.datetime_start,
        datetime_finish: json.datetime_finish,
        location: json.location,
        address: json.address,
        recurrence_id: json.recurrence_id,
      };
      publications.push(publication)
    })

    publications.forEach((p, index) => formatPublication(p, jsonId[index]))

    register();

    const params = {
      slidesPerView: 1.3,
      spaceBetween: 50,
      navigation: false,
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();

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
      <div className="container mx-auto max-w-7xl pt-5 px-6 flex-grow bg-[#f7f9fc]">
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
          {/* Events */}
          <h1 className="text-4xl font-beautiful text-center pb-5 text-steber-orange">
            Evènements
          </h1>
          <swiper-container
            init={false}
            navigation={false}
            ref={swiperRef}
            slidesPerView={1}
            className="bg-[#f7f9fc]"
          >
            {publications.map((p, index) => (
              <swiper-slide key={`${p}-${index}`}>
                <OClocherCard oClocherData={p}></OClocherCard>
              </swiper-slide>
            ))}
            <swiper-slide>
              <Card
                isPressable
                className="container min-h-64 max-h-64 min-w-64 max-w-64 flex items-center justify-center"
              >
                Voir plus de publications...
              </Card>
            </swiper-slide>
          </swiper-container>
          {/* Groupes */}
          <h1 className="text-4xl font-beautiful text-center mt-5 pb-5 text-steber-orange">
            Groupes
          </h1>
          {groups.map((group, index) => (
            <GroupCard
              key={`${group.name}-${index}`}
              groupName={group.name}
              groupImage={group.imgPath}
            ></GroupCard>
          ))}
          <Link href={"/propositions"}>
            <Button
              className="w-full bg-steber-blue font-classic text-white font-bold mb-5 "
              radius="lg"
            >
              Voir plus de groupes
            </Button>
          </Link>
        </div>
      </div>
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
    .then((pubs: TOClocherPublication[]) =>
      pubs.forEach((p, index) =>
        publications.push(formatPublication(p, pubIds[index]))
      )
    );
}

function formatPublication(
  pub: TOClocherPublication,
  pubId: any
): TOClocherPublication {
  pub.id = pubId;
  pub.content
    ? (pub.content = pub.content.substring(0, 137).concat("", "..."))
    : null;
  pub.link = `https://app.oclocher.fr/publication/${pub.id}`;
  return pub;
}
