export type MediaTone = "oxblood" | "juniper" | "gilt";

export interface MediaAsset {
  src?: string;
  alt: string;
  objectPosition?: string;
  label?: string;
  tone?: MediaTone;
}

export interface JourneyHighlight {
  title: string;
  description: string;
  image: MediaAsset;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  location: string;
  description: string;
  image?: MediaAsset;
}

export interface Accommodation {
  propertyName: string;
  location: string;
  description: string;
  image: MediaAsset;
}

export interface PracticalInfo {
  bestTimeToTravel: string;
  difficulty: string;
  recommendedFor: string;
  groupSize: string;
  startingPoint: string;
  duration: string;
}

export interface Journey {
  slug: string;
  name: string;
  tagline: string;
  subtitle: string;
  themes: string[];
  durationDays: number;
  heroMedia: MediaAsset;
  story: string[];
  highlights: JourneyHighlight[];
  itinerary: ItineraryDay[];
  routeMap: string[];
  included: string[];
  notIncluded: string[];
  accommodations: Accommodation[];
  gallery: MediaAsset[];
  practicalInfo: PracticalInfo;
  customizable: boolean;
  durationOptions?: number[];
  travelStyleOptions?: string[];
}
