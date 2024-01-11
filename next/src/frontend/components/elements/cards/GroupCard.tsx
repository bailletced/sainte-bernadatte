import { Card } from "@nextui-org/card";
import { CardBody, CardHeader, Image, Link } from "@nextui-org/react";

export default function GroupCard({
  groupName,
  groupImage,
}: {
  groupName: string;
  groupImage: string;
}) {
  return (
    <Card className=" relative mb-5 min-h-[250px] max-h-[250px]">
      <Link
        href="#"
        style={{
          backgroundImage: `url(${groupImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100svh",
        }}
        className="flex items-center justify-center w-full hover:scale-110 transition duration-500 "
      >
        <div
          className="flex items-center justify-center flex-1 w-full h-full "
          style={{
            backgroundColor: "rgba(15, 14, 23, .63)",
          }}
        >
          <h3 className="text-white text-4xl text-center font-beautiful ">
            {groupName}
          </h3>
        </div>
      </Link>
    </Card>
  );
}
