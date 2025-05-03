import { create } from "zustand";
import { IArtConfig, ISettings } from "../types";
import { generateElements } from "./useGenerativeArt";

type ArtState = {
  config: IArtConfig;
  settings: ISettings;
  isGenerating: boolean;
};

type ArtActions = {
  generateNewArt: () => void;
  //   saveImage: () => void;
  updateSettings: (newSettings: Partial<ISettings>) => void;
  resetArt: () => void;
};

const initialState: ArtState = {
  config: {
    backgroundColor: "white",
    elements: [],
  },
  settings: {
    elementCount: 0,
    elementTypes: [],
    colorScheme: "",
    minSize: 10,
    maxSize: 50,
    canvasWidth: 800,
    canvasHeight: 600,
  },
  isGenerating: false,
};

export const useArtStore = create<ArtState & ArtActions>((set) => ({
  ...initialState,
  generateNewArt: () => {
    set({ isGenerating: true });

    set((state) => ({
      config: {
        ...state.config,
        elements: generateElements(state.settings.elementCount),
      },
    }));
  },

  updateSettings: (newSettings) => {
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    }));
  },
  resetArt: () => {
    set({ config: initialState.config, settings: initialState.settings });
  },
}));
