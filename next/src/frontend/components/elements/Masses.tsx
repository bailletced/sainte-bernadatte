import { GetMassesQuery } from "@/graphql/graphql-types";
import { useSuspenseQuery } from "@apollo/client";
import { Card, CardBody } from "@nextui-org/card";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import massQuery from "@/graphql/tag/massQueries.graphql";

export default function Mass({ typeOfMass }: { typeOfMass: string }) {
  const { data } = useSuspenseQuery<GetMassesQuery>(massQuery);

  let masses;

  typeOfMass == "weekly"
    ? (masses = data.fetchAllMasses.filter((m) => m.isWeekly))
    : (masses = data.fetchAllMasses.filter((m) => !m.isWeekly));

  // typeOfMass == "weekly" ? (masses = weeklyMasses) : (masses = sundayMasses);

  const [x, setX] = useState(-350);

  useEffect(() => {
    setTimeout(() => {
      setX(0);
    }, 250);
  }, []);

  return (
    <div className="text-steber-blue-text">
      <h1 className="text-center text-3xl mb-3 font-bold font-beautiful underline sm:text-4xl">
        {typeOfMass === "weekly" ? "Messes de semaines" : "Messes Dominicales"}
      </h1>
      <div className="font-classic text-center sm:text-2xl">
        <ul>
          {masses.map((mass, index) => (
            <li key={`${mass}-${index}`} className="pb-5">
              {mass.title} à{" "}
              <strong className="text-black">{mass.date}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
