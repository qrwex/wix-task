import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const useCategories = (initialState) => {
  const [categories, setCategories] = useState(initialState);

  const addCategory = ({ id, label }) => {
    const mapCategories = ({ children, ...rest }) => (
      rest.id === id ? {
        ...rest,
        children: [
          ...(children ?? []),
          {
            id: uuid(),
            label,
          },
        ],
      } : {
        ...rest,
        ...(children ? { children: children.map(mapCategories) } : {}),
      });
    setCategories(categories.map(mapCategories));
  };

  return [
    categories,
    addCategory,
    setCategories,
  ];
};

export default useCategories;
