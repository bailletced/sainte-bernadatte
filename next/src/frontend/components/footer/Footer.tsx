import { GetInformationsQuery } from "@/graphql/graphql-types";
import { useSuspenseQuery } from "@apollo/client";
import informationsQuery from "@/graphql/tag/informationsQueries.graphql";
import Link from "next/link";
import Image from "next/image";

export const Footer: TFC = () => {
  // const { data } = useSuspenseQuery<GetInformationsQuery>(informationsQuery);

  return (
    <div className="h-16 w-full static bottom-0 border-t-4 font-classic ">
      <div className="m-5">
        <div className="mb-3">
          <h1>
            <strong>Horaires d'accueil</strong>
          </h1>
          <div className="text-sm font-light">
            LUNDI APRES-MIDI
            <br />
            15h00 – 19h00
            <br />
            MARDI AU VENDREDI
            <br />
            9h30 – 12h00 et 15h00-19h00
            <br />
            SAMEDI
            <br />
            9h30 – 12h00
          </div>
        </div>
        <div className="mb-3">
          <h1>
            <strong>Contact</strong>
          </h1>
          <div className="text-sm font-light">
            {/* <p>{data.getInformations.phoneNumber}</p>
            <p>{data.getInformations.mail}</p> */}
            <p>06 77 14 11 05</p>
            <p>saintebernadette.mtp@gmail.com</p>
          </div>
        </div>
        <div className="mb-3">
          <h1>
            <strong>Adresse</strong>
          </h1>
          <div className="text-sm font-light">
            PAROISSE ETUDIANTE
            <br />
            SAINTE-BERNADETTE
            <br />
            250 Rue du Truel
            <br />
            34090 MONTPELLIER
          </div>
        </div>
        <div className="w-full grid grid-rows-1 grid-cols-7 text-center">
          <Link
            href={
              "https://www.facebook.com/saintebernadettemontpellier/?locale=fr_FR"
            }
            className="col-start-2"
          >
            <Image
              src={"/icons/facebook_bw.png"}
              alt={"Facebook logo"}
              height={25}
              width={25}
            ></Image>
          </Link>
          <Link
            href={"https://www.instagram.com/paroisse_etudiante_montpellier/"}
            className="col-start-4"
          >
            <Image
              src={"/icons/instagram.png"}
              alt={"Instagram logo"}
              height={25}
              width={25}
            ></Image>
          </Link>
          <Link
            href={""}
            className="col-start-6"
          >
            <Image
              src={"/icons/OClocher.jpg"}
              alt={"OClocher logo"}
              height={25}
              width={25}
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};
