import type { Meta, StoryObj } from '@storybook/react';

import SelectRelative from 'table-relatives/SelectRelative';

// atom -> molecules -> organisms -> templates -> pages 


const meta = {
  title: 'Molecules/SelectRelative',
  component: SelectRelative,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {}

} satisfies Meta<typeof SelectRelative>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Defatul: Story = { 
  args: {
    parentezcos: [
      {
        id: 1, description: 'Padre'
      },
      {
        id: 2, description: 'Madre'
      },
      {
        id: 3, description: 'Hijo'
      }
    ]
  },
}; 
