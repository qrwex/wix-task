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

  const removeCategoryById = (id) => {
    const remove = (list) => (
      list.filter((category) => category.id !== id)
        .map(({ children, ...rest }) => ({
          ...rest,
          ...(children ? { children: remove(children) } : {}),
        }))
    );

    setCategories(remove(categories));
  };

  return [
    categories,
    addCategory,
    removeCategoryById,
    setCategories,
  ];
};

export default useCategories;
