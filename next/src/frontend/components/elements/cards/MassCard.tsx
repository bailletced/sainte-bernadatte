import { GetMassesQuery } from "@/graphql/graphql-types";
import { useSuspenseQuery } from "@apollo/client";
import { Card, CardBody } from "@nextui-org/card";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import massQuery from "@/graphql/tag/massQueries.graphql";


export default function MassCard({ typeOfMass }: { typeOfMass: string }) {

  const { data } = useSuspenseQuery<GetMassesQuery>(massQuery)

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
    <motion.div
      className="box"
      animate={{ x }}
      transition={{ type: "spring" }}
      initial={false}
    >
      <Card
        className={clsx("w-full mb-5 sm:col-span-1", {
          "bg-steber-red/25": typeOfMass === "weekly",
          "bg-steber-blue/25": typeOfMass !== "weekly",
        })}
      >
        <CardBody className="font-classic">
          <h1 className="flex underline text-2xl font-medium antialiased justify-center">
            <strong>
              {typeOfMass === "weekly"
                ? "Messes de semaine"
                : "Messes dominicales"}
            </strong>
          </h1>
          <ul className="list-inside">
            {masses.map((mass, index) => (
              <li key={`${mass}-${index}`} className="pt-5">
                {typeOfMass === "weekly" ? (
                  <>
                    {mass.title} à <strong>{mass.date}</strong>
                  </>
                ) : (
                  <strong>
                    {mass.title} à {mass.date}
                  </strong>
                )}
                {mass.content ? `: ${mass.content}` : null}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </motion.div>
  );
}
