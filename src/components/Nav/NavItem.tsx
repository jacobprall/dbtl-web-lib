import { Link } from "@chakra-ui/react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavItem = ({ href, children, isActive }: NavItemProps) => {
  return (
    <Link
      textDecoration="none"
      color="white"
      _hover={{
        color: "gray",
      }}
      href={href}
      borderBottom={isActive ? "2px solid" : "none"}
      borderColor={isActive ? "red5" : "transparent"}
    >
      {children}
    </Link>
  );
};

export default NavItem;
