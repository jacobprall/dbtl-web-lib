import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button",
    disabled: false,
    variant: "primary",
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Button",
    disabled: false,
    variant: "secondary",
    onClick: () => console.log("Button"),
  },
};
