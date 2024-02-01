import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { CardFooter } from "@nextui-org/react";

export default function OClocherCard({
  oClocherData,
}: {
  oClocherData: TOClocherPublication;
}) {
  return (
    // <a href={oClocherData.link ? oClocherData.link : ""} target="_blank">
    //   {/* <Card isPressable className="container min-h-[200px] max-h-[250px]"> */}
    //   <Card isPressable className="container">
    //     <CardHeader>
    //       {oClocherData.medias[0] ? (
    //         // <div className="container min-h-[100px] max-h-[150px] relative overflow-hidden">
    //         <div className="container">
    //           <Image
    //             src={oClocherData.medias[0]}
    //             alt={""}
    //             width={400}
    //             height={150}
    //             className="scale-75"
    //           ></Image>
    //         </div>
    //       ) : (
    //         <p>Image nn dispo</p>
    //       )}
    //     </CardHeader>
    //     <CardBody className="text-sm">
    //       <p>
    //         <strong>{oClocherData.name}</strong>
    //       </p>
    //       <p>
    //         <em>{oClocherData.description}</em>
    //       </p>
    //       <p>{oClocherData.content}</p>
    //     </CardBody>
    //   </Card>
    // </a>
    <a href={oClocherData.link ? oClocherData.link : ""} target="_blank">
      <Card isPressable className="container min-h-64 max-h-64 min-w-64 max-w-64">
        <CardBody className="p-0 min-h-[170px] max-h-[170px]">
          {oClocherData.medias[0] ? (
            <Image
              src={oClocherData.medias[0]}
              alt={oClocherData.description}
              width={400}
              height={150}
              className="object-fill "
            ></Image>
          ) : (
            // </div>
            <p>Image indisponible</p>
          )}
        </CardBody>
        <CardFooter className="text-sm text-center">
          <p>
            <strong>{oClocherData.name}</strong>
          </p>
          {/* <p>
            <em>{oClocherData.description}</em>
          </p>
          <p>{oClocherData.content}</p> */}
        </CardFooter>
      </Card>
    </a>
  );
}