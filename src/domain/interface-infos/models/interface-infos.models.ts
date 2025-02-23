export interface EngineRemap {
  libelle: string;
  description: string;
}

export interface InterfaceInfoStoreState {
  engineRemap: EngineRemap | null;
}
