import { HStack } from "@chakra-ui/react";
import { Button } from "../Button";
import NavItem from "./NavItem";

interface NavProps {
  links: {
    href: string;
    text: string;
  }[];
  pathname: string;
}

const Nav = ({ links, pathname = "/" }: NavProps) => {
  const isActive = (href: string) => {
    return pathname !== "/" && href.split("/")[1] === pathname.split("/")[1];
  };
  return (
    <HStack spacing={4}>
      <HStack background="https://assets-global.website-files.com/656a36b5a2024bc6ba6bf223/656f996b5613fc99dd32c1ff_datable-logo-white.svg" />
      <HStack></HStack>
      {links.map((link) => (
        <NavItem active={isActive(link.href)} key={link.href} href={link.href}>
          {link.text}
        </NavItem>
      ))}
      <HStack>
        <Button text="Sign Up" />
      </HStack>
    </HStack>
  );
};

export default Nav;
