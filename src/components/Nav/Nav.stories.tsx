import type { Meta, StoryObj } from "@storybook/react";
import Nav from "./Nav";

const meta: Meta<typeof Example> = {
  title: "Nav",
  component: Nav,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const NavExample: Story = {
  args: {
    links: [
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
    pathname: "/about",
  },
};
