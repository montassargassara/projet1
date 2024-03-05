import { SafeUrl } from "@angular/platform-browser";

export interface Team {
    id: number;
    name: string;
    description: string;
    teamImages?: ImageModel[];
  }
  
  export interface ImageModel {
    id: number;
    name: string;
    type?: string;
    picByte?: string;
    file: File;
    url?: SafeUrl;
  }