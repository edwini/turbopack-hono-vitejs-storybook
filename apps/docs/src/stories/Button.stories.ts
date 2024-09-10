import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@repo/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atom/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Button'
    }

  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Botón"
  },
};
export const Secondary: Story = {
  args: {
    children: "Botón",
    variant: "secondary"
  },
};
export const Ghost: Story = {
  args: {
    children: "Botón",
    variant: "ghost"
  },
};
export const Link: Story = {
  args: {
    children: "Botón",
    variant: "link"
  },
};
export const Outline: Story = {
  args: {
    children: "Botón",
    variant: "outline"
  },
};
