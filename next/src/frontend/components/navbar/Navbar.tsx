import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar: TFC = () => {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <NextUiNavbar classNames={{ base: "" }}>
      <NavbarContent>
        <NavbarBrand>
          <Image src="/images/logo.png" alt="logo" width={140} height={80} />
        </NavbarBrand>

        <NavbarMenuToggle aria-label="Menu" className="sm:hidden" />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Communauté
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Étudiants
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Propositions
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Actualités
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
};
