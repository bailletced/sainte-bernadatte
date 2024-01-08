import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Link from "next/link";
import { Image } from "@nextui-org/image";

export default function OClocherCard({
  oClocherData,
}: {
  oClocherData: OClocherPublication;
}) {
  return (
    <a href={oClocherData.link ? oClocherData.link : ""} target="_blank">
      <Card isPressable className="container min-h-[300px] max-h-[300px]">
        <CardHeader>
          {oClocherData.medias[0] ? (
            <div className="container min-h-[100px] max-h-[100px] relative overflow-hidden">
              <Image
                src={oClocherData.medias[0]}
                alt={""}
                width={400}
                height={100}
              ></Image>
            </div>
          ) : (
            <p>Image nn dispo</p>
          )}
        </CardHeader>
        <CardBody className="text-sm">
          <p>
            <strong>{oClocherData.name}</strong>
          </p>
          <p>
            <em>{oClocherData.description}</em>
          </p>
          <p>{oClocherData.content}</p>
        </CardBody>
      </Card>
    </a>
  );
}
