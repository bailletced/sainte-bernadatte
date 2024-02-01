"use client";

import { Spacer } from "@/src/frontend/components/elements/Spacer";
import { HeadPage } from "@/src/frontend/components/general/HeadPage";
import { url } from "inspector";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element-bundle";
import { EffectFade, Autoplay } from "swiper/modules";


export default function Page() {

  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      autoplay: {
        delay: 5000,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);
  return (
    <>
      <HeadPage
        title={"Présentation de la paroisse"}
        subtitle={""}
        url={"/images/Autel.jpg"}
      ></HeadPage>
      <Spacer size="h-3" />
      <div
        className="container mx-auto max-w-7xl pt-5 px-6 flex-grow bg-[#f7f9fc]"
        style={{ minHeight: "40svh" }}
      >
        <div className="text-justify ">
          <h1 className="text-4xl font-beautiful text-center pb-5 text-steber-orange">
            Notre Histoire
          </h1>
          <h2 className="text-steber-blue-text font-classic font-bold">
            La Paroisse étudiante Ste Bernadette se situe dans le quartier des
            hôpitaux-facultés. Dotée d’une population jeune, avec une forte
            présence étudiante, les familles aiment s’y retrouver.
          </h2>
          <Spacer size="h-3" />
          <Image
            src={"/images/Comite_de_Liberation.jpg"}
            alt={"Comité de libération"}
            width={1920}
            height={1080}
            className="rounded-xl mb-5"
          ></Image>
          <div className="text-steber-blue-text">
            <h3 className="text-center pb-5 font-classic font-bold">
              Depuis 1938
            </h3>
            <p className="pb-5">
              Érigée le 10 octobre 1938 par Mgr. Brunnes, la paroisse fut bâtie
              par l’abbé Paul Parguel, figure de la résistance Montpelliéraine
              au cours de la guerre 39-45.
            </p>
            <h3 className="text-center pb-5 font-classic font-bold">
              Son engagement aujourd’hui
            </h3>
            <p className="pb-5">
              Elle est engagée depuis 2017 dans un projet pastoral missionnaire
              <strong>“l’Évangile jusqu’au bout”</strong> qui mobilise chaque
              paroissien.
            </p>
          </div>
          <h1 className="text-4xl font-beautiful text-center pb-5 text-steber-orange">
            Les églises
          </h1>
          <swiper-container init={false} ref={swiperRef}>
            <swiper-slide>
              <Image
                src={"/images/petite_eglise.jpg"}
                alt={"Petite Eglise"}
                width={1920}
                height={1080}
                className="rounded-xl mb-5"
              ></Image>
            </swiper-slide>
            <swiper-slide>
              <Image
                src={"/images/grande_eglise.jpg"}
                alt={"Grande Eglise"}
                width={1920}
                height={1080}
                className="rounded-xl mb-5"
              ></Image>
            </swiper-slide>
          </swiper-container>
          <div className="text-steber-blue-text">
            <h3 className="text-center pb-5 font-classic font-bold">
              La Petite église
            </h3>
            <p className="pb-5">
              Datant de 1941, elle est l’oeuvre de Dom Bellot, moine bénédictin
              architecte. Elle dispose de 130 places assises pour accueillir les
              célébrations de la semaine.
            </p>
            <h3 className="text-center pb-5 font-classic font-bold">
              La Grande église
            </h3>
            <p className="pb-5">
              De construction plus récente, elle accueille les messes du
              dimanche et des jours de fêtes et solennités. Elle est dotée de
              plus de 540 places assises.
            </p>
          </div>
          <h1 className="text-4xl font-beautiful text-center pb-5 text-steber-orange">
            Autour des églises
          </h1>
          <swiper-container init={false} ref={swiperRef}>
            <swiper-slide>
              <Image
                src={"/images/monument_souvenir.jpg"}
                alt={"Monument du souvenir"}
                width={1920}
                height={1080}
                className="rounded-xl mb-5"
              ></Image>
            </swiper-slide>
            <swiper-slide>
              <Image
                src={"/images/grotte.jpg"}
                alt={"Grotte de Lourdes"}
                width={1920}
                height={1080}
                className="rounded-xl mb-5"
              ></Image>
            </swiper-slide>
            <swiper-slide>
              <Image
                src={"/images/cloitre.jpg"}
                alt={"Cloître Végétal"}
                width={1920}
                height={1080}
                className="rounded-xl mb-5"
              ></Image>
            </swiper-slide>
          </swiper-container>
          <div className="text-steber-blue-text">
            <h3 className="text-center pb-5 font-classic font-bold">
              La grotte dédiée à Notre-Dame de Lourdes
            </h3>
            <p className="pb-5">
              La grotte d’origine construite en 1956, a été remplacée par une
              nouvelle construction inaugurée en septembre 2019.
            </p>
            <h3 className="text-center pb-5 font-classic font-bold">
              Le Monument du souvenir
            </h3>
            <p className="pb-5">
              C'est là que se trouve le caveau du Père fondateur et résistant,
              Paul Parguel.
            </p>
            <h3 className="text-center pb-5 font-classic font-bold">
              Le cloître végétal
            </h3>
            <p className="pb-5">
              En son centre se situe une statue du Sacré Coeur de Jésus et une
              roseraie dédiée à Sainte Thérèse de Lisieux.
            </p>
          </div>
          <h1 className="text-4xl font-beautiful text-center pb-5 text-steber-orange">
            Espaces Communautaires
          </h1>
          <Spacer size={"h-3"}></Spacer>
          <div className="text-steber-blue-text">
            <h3 className="text-center pb-5 font-classic font-bold">
              La maison catholique des étudiants : "Le Truel"
            </h3>
            <p className="pb-5">
              Elle est composée d’une cuisine, d’une salle à manger conviviale
              et d’un petit salon pour les réunions des groupes étudiants.
            </p>
            <h3 className="text-center pb-5 font-classic font-bold">
              8 salles de réunions
            </h3>
            <p className="pb-5">
              Elles sont de capacités variables selon leur configuration (de 12
              à 150 personnes). Dédiées en priorité au fonctionnement de la
              paroisse, ces salles peuvent être mises à disposition moyennant
              une participation au frais d’occupation.
            </p>
            <p className="pb-5 mb-5 font-classic font-bold text-center border rounded-md p-2 bg-slate-100 drop-shadow-lg">
              Si vous souhaitez occuper une salle de réunion pour le compte d’un
              organisme, contactez-nous :
              <br />
              <a
                href="mailto:reservationsallesaintebernadette@gmail.com"
                className="underline underline-offset-2 text-xs"
              >
                reservationsallesaintebernadette@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
