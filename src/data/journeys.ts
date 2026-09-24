import { photos } from "./photos";
import type { Journey, MediaAsset, MediaTone } from "./types";

const heroVariant = (media: MediaAsset, journey: string): MediaAsset => ({
  ...media,
  src: `${media.src}?hero=${journey}`,
});

const placeholder = (
  label: string,
  tone: MediaAsset["tone"] = "juniper",
): MediaAsset => ({ alt: label, label, tone });

const stay = (location: string, tone: MediaTone, description: string) => ({
  propertyName: `${location} stay`,
  location,
  description,
  image: placeholder(`A thoughtfully selected stay in ${location}`, tone),
});

const standardIncluded = [
  "Carefully selected accommodation along the route",
  "Private transportation throughout Bhutan",
  "English-speaking local guide",
  "Planned sightseeing and guided walks",
  "Bhutan travel arrangements",
  "Local assistance from arrival to departure",
];

const standardNotIncluded = [
  "Flights or transfers to the journey’s starting point",
  "Travel insurance",
  "Personal purchases and gratuities",
  "Optional activities outside the planned journey",
];

export const journeys: Journey[] = [
  {
    slug: "the-crane-and-the-tiger",
    name: "The Crane & the Tiger",
    tagline: "From a wintering valley to a monastery in the clouds.",
    subtitle: "Seven days through Bhutan’s western valleys, sacred paths, and living heritage.",
    themes: ["Culture", "Nature", "Wildlife"],
    durationDays: 7,
    heroMedia: heroVariant(photos.mistyValley, "crane-and-tiger"),
    story: [
      "This is the fullest of our air-arrival journeys: an unhurried passage from Thimphu’s living traditions to Punakha’s rivers and the wide quiet of Phobjikha.",
      "The route balances temples, village paths, forest walks, and Bhutan’s defining ascent to Taktsang, with time to understand why each place matters.",
    ],
    highlights: [
      {
        title: "The valley of cranes",
        description: "Walk beneath Gangtey Monastery and learn why Phobjikha protects Bhutan’s winter visitors.",
        image: placeholder("Black-necked cranes in Phobjikha Valley", "juniper"),
      },
      {
        title: "Between two rivers",
        description: "Enter Punakha Dzong at the meeting of the Pho Chhu and Mo Chhu, then cross the valley on foot.",
        image: placeholder("Punakha Dzong between the Pho Chhu and Mo Chhu", "gilt"),
      },
      {
        title: "The final ascent",
        description: "Climb through pine forest to Taktsang, allowing the mountain to set the day’s pace.",
        image: placeholder("Taktsang Monastery above the Paro Valley", "oxblood"),
      },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: "The road to the capital",
        location: "Paro · Thimphu",
        description: "Arrive in Paro, pause at Tachogang, and meet Thimphu through Buddha Dordenma, Memorial Chorten, the takin preserve, and a short forest walk.",
      },
      {
        dayNumber: 2,
        title: "Craft, market, and monastery",
        location: "Thimphu",
        description: "Walk to Cheri Monastery, then return for the Centenary Market, traditional arts, textiles, and Tashichho Dzong.",
      },
      {
        dayNumber: 3,
        title: "Across Dochula",
        location: "Punakha",
        description: "Cross the 108 chortens at Dochula, visit Chimi Lhakhang, and arrive at Punakha Dzong and its long suspension bridge.",
      },
      {
        dayNumber: 4,
        title: "Where the cranes return",
        location: "Phobjikha",
        description: "Spend the day around Gangtey Monastery, the valley nature trail, and the Black-necked Crane Education Centre before returning to Punakha.",
      },
      {
        dayNumber: 5,
        title: "A hilltop prayer",
        location: "Punakha · Paro",
        description: "Climb to Khamsum Yulley Namgyal Chorten, then travel west for Rinpung Dzong and the National Museum in Paro.",
      },
      {
        dayNumber: 6,
        title: "The tiger’s path",
        location: "Paro",
        description: "Hike to Taktsang Monastery with time to pause at the midway viewpoint, followed by Kyichu Lhakhang if the day allows.",
      },
      {
        dayNumber: 7,
        title: "One last valley morning",
        location: "Paro",
        description: "A calm breakfast and private transfer to Paro International Airport for your onward journey.",
      },
    ],
    routeMap: ["Paro", "Thimphu", "Punakha", "Phobjikha", "Paro"],
    included: standardIncluded,
    notIncluded: standardNotIncluded,
    accommodations: [
      stay("Thimphu", "juniper", "A comfortable capital base close to the city’s markets, crafts, and evening walks."),
      stay("Punakha", "gilt", "A warm-valley retreat within reach of the dzong, river paths, and the road to Phobjikha."),
      stay("Paro", "oxblood", "A restful final stay with easy access to the Taktsang trail and the airport."),
    ],
    gallery: [
      photos.mistyValley,
      photos.rimpungDzong,
      photos.kichuLhakhang,
      photos.paroValley,
      photos.thimphuPhuntsholingHighway,
      photos.bhutanSunset,
    ],
    practicalInfo: {
      bestTimeToTravel: "Year-round; October–March for black-necked cranes in Phobjikha",
      difficulty: "Moderate, with several guided walks and the Taktsang ascent",
      recommendedFor: "First visits, wildlife, culture, and varied landscapes",
      groupSize: "Private, typically 2–10 guests",
      startingPoint: "Paro International Airport",
      duration: "7 days / 6 nights",
    },
    customizable: true,
    durationOptions: [7, 9],
    travelStyleOptions: ["Classic", "Nature", "Luxury"],
  },
  {
    slug: "three-valleys-one-kingdom",
    name: "Three Valleys, One Kingdom",
    tagline: "Bhutan’s western heart, held in one considered route.",
    subtitle: "Six days of craft, fortresses, forest paths, and the climb to Taktsang.",
    themes: ["Culture", "Heritage", "First Visit"],
    durationDays: 6,
    heroMedia: heroVariant(photos.rimpungDzong, "three-valleys"),
    story: [
      "Thimphu, Punakha, and Paro each reveal a different rhythm of Bhutan: a small capital shaped by craft, a river valley of royal history, and a sacred landscape beneath Taktsang.",
      "This six-day route keeps the essential places while protecting the pauses between them, making it a natural first journey into the Kingdom.",
    ],
    highlights: [
      {
        title: "A capital made by hand",
        description: "Meet Thimphu through its market, traditional arts, textiles, and working religious landmarks.",
        image: placeholder("Traditional arts and crafts in Thimphu", "juniper"),
      },
      {
        title: "The palace of happiness",
        description: "Follow the road over Dochula to Punakha Dzong, framed by two rivers and layers of history.",
        image: placeholder("Punakha Dzong and its river setting", "gilt"),
      },
      {
        title: "Paro’s sacred valley",
        description: "Move from Rinpung Dzong and the old watchtower to Bhutan’s most memorable mountain pilgrimage.",
        image: photos.rimpungDzong,
      },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: "First impressions",
        location: "Paro · Thimphu",
        description: "Receive a traditional welcome, pause at Tachogang, and begin with Thimphu’s great Buddha, Memorial Chorten, takin preserve, and a short hillside walk.",
      },
      {
        dayNumber: 2,
        title: "The capital in detail",
        location: "Thimphu",
        description: "Walk to Cheri Monastery, then explore the Centenary Market, the traditional arts institute, textiles, and the city’s human-scale centre.",
      },
      {
        dayNumber: 3,
        title: "The pass and the rivers",
        location: "Punakha",
        description: "Travel over Dochula for Chimi Lhakhang, Punakha Dzong, and an evening beside the Pho Chhu and Mo Chhu.",
      },
      {
        dayNumber: 4,
        title: "From hilltop to watchtower",
        location: "Punakha · Paro",
        description: "Climb to Khamsum Yulley Namgyal Chorten before returning west to Rinpung Dzong and the National Museum.",
      },
      {
        dayNumber: 5,
        title: "The monastery in the cliff",
        location: "Paro",
        description: "Give the day to the Taktsang ascent, with an optional final visit to Kyichu Lhakhang on the valley floor.",
      },
      {
        dayNumber: 6,
        title: "Farewell to Paro",
        location: "Paro",
        description: "A private airport transfer closes the journey after one final morning beneath the valley walls.",
      },
    ],
    routeMap: ["Paro", "Thimphu", "Punakha", "Paro"],
    included: standardIncluded,
    notIncluded: standardNotIncluded,
    accommodations: [
      stay("Thimphu", "juniper", "A central stay chosen for a comfortable return after the capital’s walks and cultural visits."),
      stay("Punakha", "gilt", "A calm base in the warmer valley, close to river landscapes and historic sites."),
      stay("Paro", "oxblood", "A quiet final address positioned for Paro’s heritage and the Taktsang trail."),
    ],
    gallery: [
      photos.rimpungDzong,
      photos.kichuLhakhang,
      photos.paroValley,
      photos.appleBlossom,
      photos.riceStalk,
      photos.bhutanSunset,
    ],
    practicalInfo: {
      bestTimeToTravel: "Year-round; spring and autumn offer especially comfortable walking conditions",
      difficulty: "Moderate, with the Taktsang ascent on Day 5",
      recommendedFor: "First-time visitors seeking Bhutan’s essential western valleys",
      groupSize: "Private, typically 2–10 guests",
      startingPoint: "Paro International Airport",
      duration: "6 days / 5 nights",
    },
    customizable: true,
    durationOptions: [6, 8],
    travelStyleOptions: ["Classic", "Immersive", "Luxury"],
  },
  {
    slug: "two-sacred-ascents",
    name: "Two Sacred Ascents",
    tagline: "Five purposeful days. Two paths above the clouds.",
    subtitle: "An active passage through Lungchutse, Punakha, Paro, and Taktsang.",
    themes: ["Hiking", "Spiritual", "Active"],
    durationDays: 5,
    heroMedia: heroVariant(photos.thimphuPhuntsholingHighway, "sacred-ascents"),
    story: [
      "This compact journey is defined by two climbs: the forest path from Dochula to Lungchutse Lhakhang and the pilgrimage trail to Taktsang above Paro.",
      "Between them sit Punakha’s river fortress, a hilltop chorten, and the old watchtowers of Paro—a short route with real movement and little wasted time.",
    ],
    highlights: [
      {
        title: "Above Dochula",
        description: "Walk through rhododendron and high forest to Lungchutse Lhakhang, with the Himalayan range opening in clear weather.",
        image: placeholder("The Lungchutse trail above Dochula", "juniper"),
      },
      {
        title: "A valley from above",
        description: "Climb through Punakha’s fields to Khamsum Yulley Namgyal Chorten and its wide river-valley view.",
        image: placeholder("Khamsum Yulley Namgyal Chorten above Punakha", "gilt"),
      },
      {
        title: "Taktsang at your pace",
        description: "Finish with Bhutan’s iconic ascent, taking the full day to reach the monastery without rushing.",
        image: placeholder("The Taktsang pilgrimage trail", "oxblood"),
      },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: "Land and look outward",
        location: "Paro · Thimphu",
        description: "Travel from Paro to Thimphu via Tachogang, then begin with Buddha Dordenma, Memorial Chorten, the takin preserve, and Wangditse’s forest path.",
      },
      {
        dayNumber: 2,
        title: "The first ascent",
        location: "Dochula · Punakha",
        description: "Climb from Dochula to Lungchutse Lhakhang, then continue to Chimi Lhakhang, Punakha Dzong, and the suspension bridge.",
      },
      {
        dayNumber: 3,
        title: "Prayer above the fields",
        location: "Punakha · Paro",
        description: "Walk uphill to Khamsum Yulley Namgyal Chorten before travelling to Paro for Rinpung Dzong and the National Museum.",
      },
      {
        dayNumber: 4,
        title: "The second ascent",
        location: "Paro",
        description: "Hike to Taktsang Monastery, with a midway rest and enough time to absorb the sacred landscape around the cliff.",
      },
      {
        dayNumber: 5,
        title: "Homeward",
        location: "Paro",
        description: "Depart Bhutan after breakfast and a private transfer to Paro International Airport.",
      },
    ],
    routeMap: ["Paro", "Thimphu", "Dochula", "Punakha", "Paro"],
    included: standardIncluded,
    notIncluded: standardNotIncluded,
    accommodations: [
      stay("Thimphu", "juniper", "A well-positioned first-night stay for an early start toward Dochula and Lungchutse."),
      stay("Punakha", "gilt", "A restorative valley stay between the route’s two most active days."),
      stay("Paro", "oxblood", "A comfortable base for the Taktsang ascent and an easy departure morning."),
    ],
    gallery: [
      photos.thimphuPhuntsholingHighway,
      photos.riceStalk,
      photos.paroValley,
      photos.rimpungDzong,
      photos.kichuLhakhang,
      photos.bhutanSunset,
    ],
    practicalInfo: {
      bestTimeToTravel: "Spring and autumn for clearer mountain walking; the route can run year-round",
      difficulty: "Active, with the Lungchutse and Taktsang ascents on separate days",
      recommendedFor: "Fit travellers who prefer walking to extended sightseeing",
      groupSize: "Private, typically 2–8 guests",
      startingPoint: "Paro International Airport",
      duration: "5 days / 4 nights",
    },
    customizable: true,
    durationOptions: [5, 6],
    travelStyleOptions: ["Active", "Classic", "Private"],
  },
  {
    slug: "from-plains-to-prayer-flags",
    name: "From Plains to Prayer Flags",
    tagline: "Enter Bhutan by the long road and watch the landscape rise.",
    subtitle: "Eight days from Bagdogra and Phuentsholing into Bhutan’s high western valleys.",
    themes: ["Overland", "Culture", "Scenic Road"],
    durationDays: 8,
    heroMedia: heroVariant(photos.phuntsholingCloudSea, "plains-to-prayer-flags"),
    story: [
      "The southern approach lets Bhutan arrive gradually. Tropical foothills become cloud forest, mountain roads, and finally the high valleys of Thimphu, Punakha, Phobjikha, and Paro.",
      "Designed for travellers entering overland from India, this route makes the changing landscape part of the experience rather than simply a transfer between places.",
    ],
    highlights: [
      {
        title: "The southern road",
        description: "Climb from Phuentsholing through forest and cloud as the plains fall away behind you.",
        image: photos.phuntsholingCloudSea,
      },
      {
        title: "Four distinct valleys",
        description: "Move through Thimphu, Punakha, Phobjikha, and Paro, each with a landscape and rhythm of its own.",
        image: photos.mistyValley,
      },
      {
        title: "A pilgrimage before the road home",
        description: "Give the final full day to Taktsang before turning south through the mountains once more.",
        image: placeholder("Taktsang Monastery on the cliff above Paro", "oxblood"),
      },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: "At Bhutan’s southern gate",
        location: "Bagdogra · Phuentsholing",
        description: "Meet your driver at Bagdogra Airport, travel to Phuentsholing, and complete the entry formalities with local support.",
      },
      {
        dayNumber: 2,
        title: "The road rises",
        location: "Phuentsholing · Thimphu",
        description: "Follow the long mountain road north, pausing for photographs and lunch before an easy evening in the capital.",
      },
      {
        dayNumber: 3,
        title: "Bhutan in miniature",
        location: "Thimphu",
        description: "Visit Buddha Dordenma, the takin preserve, Simply Bhutan, Memorial Chorten, and the capital’s small shops and streets.",
      },
      {
        dayNumber: 4,
        title: "Across the 108 chortens",
        location: "Punakha",
        description: "Cross Dochula for Druk Wangyel Lhakhang and Chimi Lhakhang before entering Punakha Dzong between its two rivers.",
      },
      {
        dayNumber: 5,
        title: "The open valley",
        location: "Phobjikha · Punakha",
        description: "Visit Gangtey Monastery and walk the Phobjikha nature trail, returning to Punakha as evening reaches the valley.",
      },
      {
        dayNumber: 6,
        title: "West to Paro",
        location: "Punakha · Paro",
        description: "Return across the mountains for Rinpung Dzong, its cantilever bridge, and the collections inside the National Museum.",
      },
      {
        dayNumber: 7,
        title: "The tiger’s nest",
        location: "Paro",
        description: "Hike to Taktsang Monastery for the journey’s defining ascent and a final night beneath the Paro valley walls.",
      },
      {
        dayNumber: 8,
        title: "South through the mountains",
        location: "Paro · Phuentsholing",
        description: "Travel back toward Bhutan’s southern gateway, carrying the landscape’s full change in reverse.",
      },
    ],
    routeMap: ["Bagdogra", "Phuentsholing", "Thimphu", "Punakha", "Phobjikha", "Paro"],
    included: [...standardIncluded, "Bhutan border and route-permit assistance"],
    notIncluded: [...standardNotIncluded, "India-side travel beyond the stated Bagdogra transfer"],
    accommodations: [
      stay("Phuentsholing", "gilt", "A practical, comfortable gateway stay after the journey from Bagdogra."),
      stay("Thimphu", "juniper", "A capital base for cultural visits and a restful evening after the long southern road."),
      stay("Punakha", "gilt", "A warmer-valley retreat for the Punakha and Phobjikha days."),
      stay("Paro", "oxblood", "A quiet final base below the Taktsang trail and the road south."),
    ],
    gallery: [
      photos.phuntsholingCloudSea,
      photos.thimphuPhuntsholingHighway,
      photos.mistyValley,
      photos.rimpungDzong,
      photos.paroValley,
      photos.bhutanSunset,
    ],
    practicalInfo: {
      bestTimeToTravel: "Year-round; spring and autumn suit the longer overland route especially well",
      difficulty: "Moderate, with long road days and the Taktsang ascent",
      recommendedFor: "Overland travellers entering Bhutan through India",
      groupSize: "Private, typically 2–10 guests",
      startingPoint: "Bagdogra Airport, India",
      duration: "8 days / 7 nights",
    },
    customizable: true,
    durationOptions: [8, 10],
    travelStyleOptions: ["Overland", "Classic", "Private"],
  },
  {
    slug: "pass-or-pilgrimage",
    name: "Pass or Pilgrimage",
    tagline: "Choose the high road or the sacred climb.",
    subtitle: "Seven days across Bhutan’s western valleys, ending with a day shaped around you.",
    themes: ["Culture", "Nature", "Flexible"],
    durationDays: 7,
    heroMedia: heroVariant(photos.paroValley, "pass-or-pilgrimage"),
    story: [
      "This route keeps Bhutan’s essential western valleys while leaving room to arrive gently, linger in Paro town, and decide how your final full day should feel.",
      "Choose the mountain road to Chele La for prayer flags and wide Himalayan views, or take the forest pilgrimage to Taktsang. The journey belongs to you either way.",
    ],
    highlights: [
      {
        title: "A gentle arrival",
        description: "Follow the river road from Paro to Thimphu, pausing at Tachogang and Chuzom before settling into the capital.",
        image: placeholder("Tachogang Lhakhang and its bridge beside the Paro–Thimphu road", "juniper"),
      },
      {
        title: "The valley of cranes",
        description: "Spend a day with Gangtey Monastery, the Phobjikha nature trail, and the Black-necked Crane Education Centre.",
        image: placeholder("Phobjikha Valley, Gangtey Monastery, and black-necked cranes", "gilt"),
      },
      {
        title: "Your final-day choice",
        description: "Take the high road to Chele La or make the pilgrimage on foot to Taktsang above Paro.",
        image: placeholder("Prayer flags at Chele La Pass or the Taktsang pilgrimage trail", "oxblood"),
      },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: "Arrive without rushing",
        location: "Paro · Thimphu",
        description: "Meet your local team at Paro Airport and follow the river road to Thimphu, pausing at Tachogang and Chuzom before an easy evening at your hotel.",
      },
      {
        dayNumber: 2,
        title: "The capital from above",
        location: "Thimphu",
        description: "Visit Memorial Chorten, Buddha Dordenma, the takin preserve, and a hillside viewpoint overlooking Tashichho Dzong and the Thimphu Valley.",
      },
      {
        dayNumber: 3,
        title: "Across Dochula",
        location: "Punakha",
        description: "Cross the 108 chortens at Dochula, visit Druk Wangyel Lhakhang, then continue to Punakha Dzong and its long suspension bridge.",
      },
      {
        dayNumber: 4,
        title: "A day in the open valley",
        location: "Phobjikha · Punakha",
        description: "Visit Gangtey Monastery, walk the Phobjikha nature trail, and learn about the valley’s winter visitors at the crane centre before returning to Punakha.",
      },
      {
        dayNumber: 5,
        title: "Return to Paro",
        location: "Punakha · Paro",
        description: "Travel west for the Paro Airport viewpoint, the National Museum, a view of Rinpung Dzong, and unhurried time in Paro town.",
      },
      {
        dayNumber: 6,
        title: "The pass or the path",
        location: "Paro",
        description: "Choose Chele La Pass for a scenic high-road day among prayer flags, or hike through forest to Taktsang Monastery above the valley.",
      },
      {
        dayNumber: 7,
        title: "A quiet farewell",
        location: "Paro",
        description: "Check out after breakfast and transfer privately to Paro International Airport for your onward flight.",
      },
    ],
    routeMap: ["Paro", "Thimphu", "Punakha", "Phobjikha", "Paro"],
    included: standardIncluded,
    notIncluded: standardNotIncluded,
    accommodations: [
      stay("Thimphu", "juniper", "A comfortable capital base chosen for valley views and easy access to the day’s landmarks."),
      stay("Punakha", "gilt", "A warm-valley stay within reach of Punakha’s rivers and the road to Phobjikha."),
      stay("Paro", "oxblood", "A restful final base for the Chele La drive or Taktsang ascent."),
    ],
    gallery: [
      photos.paroValley,
      photos.rimpungDzong,
      photos.mistyValley,
      photos.kichuLhakhang,
      photos.appleBlossom,
      photos.bhutanSunset,
    ],
    practicalInfo: {
      bestTimeToTravel: "Year-round; October–March for cranes, with clear spring and autumn days often favouring Chele La",
      difficulty: "Flexible: gentler with Chele La, moderate with the Taktsang ascent",
      recommendedFor: "First-time visitors who value choice and a more relaxed arrival",
      groupSize: "Private, typically 2–10 guests",
      startingPoint: "Paro International Airport",
      duration: "7 days / 6 nights",
    },
    customizable: true,
    durationOptions: [7, 8],
    travelStyleOptions: ["Chele La", "Taktsang", "Classic"],
  },
];

export function getJourney(slug: string) {
  return journeys.find((journey) => journey.slug === slug);
}
