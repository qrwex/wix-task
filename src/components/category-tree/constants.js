import { v4 as uuid } from 'uuid';

// eslint-disable-next-line import/prefer-default-export
export const initialCategories = [
  {
    id: uuid(),
    label: 'Lorem',
    children: [
      {
        id: uuid(),
        label: 'Ipsum',
      },
      {
        id: uuid(),
        label: 'Dolor',
        children: [
          {
            id: uuid(),
            label: 'Quis',
            children: [
              {
                id: uuid(),
                label: 'Odio',
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        label: 'Sit',
        children: [
          {
            id: uuid(),
            label: 'Amet',
          },
          {
            id: uuid(),
            label: 'Consectetur',
          },
        ],
      },
      {
        id: uuid(),
        label: 'Adipiscing',
        children: [
          {
            id: uuid(),
            label: 'Elit',
            children: [
              {
                id: uuid(),
                label: 'Vestibulum',
              },
              {
                id: uuid(),
                label: 'Vitae',
              },
            ],
          },
        ],
      },
    ],
  },
];
