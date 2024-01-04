"use client";

import MassCard from "@/src/frontend/components/elements/cards/MassCard";
import OClocherCard from "@/src/frontend/components/elements/cards/OClocherCard";
import { useSuspenseQuery } from "@apollo/client";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";

let publications: OClocherPublication[] = [];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toRender, setRender] = useState(false);

  const swiperRef = useRef(null);

  useEffect(() => {
    // register();

    // const params = {
    //   slidesPerView: 1.3,
    //   spaceBetween: 25,
    //   navigation: true,
    // };

    // Object.assign(swiperRef.current, params);

    // swiperRef.current.initialize();

    // fetchOClocherData();

  }, []);

  const menuItems = ["Item 1", "Item 2"];

  return (
    <>
      {/* <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-steber-orange/90">
        <NavbarContent>
          <Image
            src={"/cropped-Logo_SteBernadette-03-e1578398286389-2.png"}
            alt={"steberlogo"}
            width={100}
            height={100}
          ></Image>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>{item}</NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar> */}
      <Image
        alt="random alt"
        src={"/images/rentree-etudiants-scaled.jpg"}
        width={1920}
        height={1080}
        className="bg-center"
        onLoad={() => setRender(true)}
      ></Image>
      <main className="container mx-auto max-w-7xl pt-5 px-6 flex-grow">
        <div className="sm:grid grid-cols-4 gap-5">
          {/* Messes dominicales */}
          {toRender ? <MassCard typeOfMass="sunday"></MassCard> : null}
          {/* Messes de semaine */}
          {toRender ? <MassCard typeOfMass="weekly"></MassCard> : null}
          {/* {window.screen.width < 768 ? (<p>Carte 2</p>) : null} */}
          {/* Contenu  */}
          {/* <swiper-container navigation={true} ref={swiperRef}>
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
          </swiper-container> */}
        </div>
      </main>
    </>
  );
}

// function fetchOClocherData() {
//   let pubIds: any;

//   fetch(
//     "https://api.oclocher.fr/organizations/rQMIDeTpEg70dTUB8O7s/publications_news"
//   )
//     .then((res) => {
//       setTimeout(() => {}, 1500);
//       return res.json();
//     })
//     .then((data: string[]) => {
//       const allPubIds = Array.isArray(data) ? data : Object.values(data);
//       pubIds = allPubIds.slice(0, 5);
//       const fetchPublications = pubIds.map(async (pubId: any) => {
//         const res = await fetch(
//           `https://api.oclocher.fr/publications/${pubId}`
//         );
//         return await res.json();
//       });
//       return Promise.all(fetchPublications);
//     })
//     .then((pubs: OClocherPublication[]) =>
//       pubs.forEach((p, index) =>
//         publications.push(formatPublication(p, pubIds[index]))
//       )
//     );
// }

// function formatPublication(
//   pub: OClocherPublication,
//   pubId: any
// ): OClocherPublication {
//   pub.id = pubId;
//   pub.content
//     ? (pub.content = pub.content.substring(0, 137).concat("", "..."))
//     : null;
//   pub.link = `https://app.oclocher.fr/publication/${pub.id}`;
//   return pub;
// }
