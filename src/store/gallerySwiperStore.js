import { create } from "zustand";

export const gallerySwiperStore = create((set) => ({
  isOpen: false,
  imgIndex: null,
  openGallerySwiper: (imgIndex) => set({ isOpen: true, imgIndex }),
  closeGallerySwiper: () => set({ isOpen: false, imgIndex: null }),
}));
