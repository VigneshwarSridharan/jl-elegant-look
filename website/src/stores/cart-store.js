import { createStore } from "zustand/vanilla";

export const initCartStore = () => {
  return { count: new Date().getFullYear() };
};

export const defaultInitState = {
  items: [
    {
      id: 1,
      name: "White Bridal Saree",
      slug: "white-bridal-saree",
      category: "sarees",
      cover: {
        data: {
          id: 115,
          attributes: {
            url: "/uploads/white_bridal_saree_2_8effc5b93f.png",
          },
        },
      },
      qty: 1,
    },
  ],
};

export const createCartStore = (initState = defaultInitState) => {
  return createStore()((set) => ({
    ...initState,
    decrementQty: (id) =>
      set((state) => ({
        items: state.items.map((item) => {
          if (item.id === id) item.qty--;
          return item;
        }),
      })),
    incrementQty: (id) =>
      set((state) => ({
        items: state.items.map((item) => {
          if (item.id === id) item.qty++;
          return item;
        }),
      })),
    removeItem: (id) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      })),
  }));
};
