import type { MediaAsset } from "./types";

export const photos = {
  appleBlossom: {
    src: "/photos/apple-blossom.jpg",
    alt: "Pink apple blossom on lichen-covered branches in Bhutan",
    objectPosition: "52% 48%",
  },
  bhutanFlag: {
    src: "/photos/bhutan-flag.jpg",
    alt: "A helicopter carrying the Bhutanese flag above silhouetted trees",
    objectPosition: "67% 45%",
  },
  bhutanSunset: {
    src: "/photos/bhutan-sunset.jpg",
    alt: "A warm Bhutanese sunset behind a solitary tree",
    objectPosition: "50% 67%",
  },
  kichuLhakhang: {
    src: "/photos/kichu-lhakhang.jpg",
    alt: "Kyichu Lhakhang framed by flowers and a cloud-filled sky",
    objectPosition: "48% 67%",
  },
  mistyValley: {
    src: "/photos/misty-valley.jpg",
    alt: "A cultivated Bhutanese valley emerging through morning mist",
    objectPosition: "50% 55%",
  },
  paroValley: {
    src: "/photos/paro-valley.jpg",
    alt: "Farmhouses and fields rising into the mist in Paro Valley",
    objectPosition: "50% 62%",
  },
  phuntsholingCloudSea: {
    src: "/photos/phuntsholing-cloud-sea.jpg",
    alt: "Mountain ridges above a sea of cloud near Phuentsholing",
    objectPosition: "55% 46%",
  },
  riceStalk: {
    src: "/photos/rice-stalk.jpg",
    alt: "A ripe Bhutanese rice stalk held against blue sky and mountain fields",
    objectPosition: "50% 47%",
  },
  rimpungDzong: {
    src: "/photos/rimpung-dzong.jpg",
    alt: "Rinpung Dzong overlooking green fields and the Paro Valley",
    objectPosition: "50% 53%",
  },
  thimphuPhuntsholingHighway: {
    src: "/photos/thimphu-phuntsholing-highway.jpg",
    alt: "The Thimphu–Phuentsholing highway above layered mountains and cloud",
    objectPosition: "50% 57%",
  },
} satisfies Record<string, MediaAsset>;
