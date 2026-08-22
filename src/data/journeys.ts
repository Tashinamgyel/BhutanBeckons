import type { Journey, MediaAsset } from "./types";

const valley: MediaAsset = {
  src: "/images/bhutan-valley-dawn.jpg",
  alt: "A whitewashed Bhutanese dzong above a forested Himalayan valley at dawn",
};

const weaver: MediaAsset = {
  src: "/images/bhutan-weaver.jpg",
  alt: "A Bhutanese artisan weaving traditional cloth beside a timber window",
};

const mountainTrail: MediaAsset = {
  src: "/images/bhutan-mountain-trail.jpg",
  alt: "Hikers following a mountain trail toward a remote Bhutanese monastery",
};

const heroVariant = (media: MediaAsset, journey: string): MediaAsset => ({
  ...media,
  src: `${media.src}?hero=${journey}`,
});

const placeholder = (
  label: string,
  tone: MediaAsset["tone"] = "juniper",
): MediaAsset => ({ alt: label, label, tone });

const standardIncluded = [
  "Carefully selected accommodation",
  "Private transportation throughout Bhutan",
  "English-speaking local guide",
  "Meals described in the itinerary",
  "All planned experiences and activities",
  "Bhutan travel arrangements",
  "Local assistance from arrival to departure",
];

const standardNotIncluded = [
  "International flights",
  "Travel insurance",
  "Personal purchases and gratuities",
  "Meals or activities outside the itinerary",
];

export const journeys: Journey[] = [
  {
    slug: "whispers-of-the-kingdom",
    name: "Whispers of the Kingdom",
    tagline: "Some places are visited. Others are experienced.",
    subtitle: "Seven days inside Bhutan’s living heritage.",
    themes: ["Culture", "Heritage", "Slow Travel"],
    durationDays: 7,
    heroMedia: heroVariant(valley, "whispers"),
    story: [
      "Bhutan does not reveal itself all at once. It arrives in the sound of morning prayers, the warmth of butter tea, and a mountain road that asks you to slow down.",
      "This is a gentle passage through western Bhutan’s living heart: time with artisans, quiet courtyards, forest paths, and the people who keep old traditions present without placing them behind glass.",
    ],
    highlights: [
      {
        title: "Living fortresses",
        description: "Walk through dzongs where monastic life and civic ritual still share the same courtyards.",
        image: valley,
      },
      {
        title: "Hands of the kingdom",
        description: "Meet makers whose weaving, carving, and painting carry family knowledge forward.",
        image: weaver,
      },
      {
        title: "A sacred ascent",
        description: "Follow the pine-scented trail to Taktsang, held above the Paro valley.",
        image: mountainTrail,
      },
    ],
    itinerary: [
      { dayNumber: 1, title: "The valley opens", location: "Paro", description: "Land between mountain walls, meet your guide, and settle into Bhutan’s quieter rhythm with a gentle riverside walk." },
      { dayNumber: 2, title: "Capital at human pace", location: "Thimphu", description: "Cross the Dochula road and spend an unhurried afternoon among workshops, markets, and neighbourhood temples." },
      { dayNumber: 3, title: "Courtyards and craft", location: "Thimphu", description: "Step into a working dzong, share tea with an artisan, and see how traditional forms remain part of everyday life." },
      { dayNumber: 4, title: "Across the high pass", location: "Punakha", description: "Travel beneath prayer flags to the warmer Punakha valley, pausing for a village walk through rice fields." },
      { dayNumber: 5, title: "Between two rivers", location: "Punakha", description: "Enter Punakha Dzong in the calm morning light and picnic beside the river before returning west." },
      { dayNumber: 6, title: "The tiger’s path", location: "Paro", description: "Climb through blue pine forest to Taktsang Monastery, with time to rest, listen, and take in the valley below." },
      { dayNumber: 7, title: "One last morning", location: "Paro", description: "A quiet breakfast and final valley views before your onward flight." },
    ],
    routeMap: ["Paro", "Thimphu", "Punakha", "Paro"],
    included: standardIncluded,
    notIncluded: standardNotIncluded,
    accommodations: [
      { propertyName: "Zhiwa Ling Heritage", location: "Paro", description: "Bhutanese craftsmanship, garden paths, and a restful base beneath the valley slopes.", image: placeholder("Zhiwa Ling Heritage, Paro", "oxblood") },
      { propertyName: "Druk Hotel", location: "Thimphu", description: "A central, composed address within walking distance of the capital’s small shops and squares.", image: placeholder("Druk Hotel, Thimphu", "juniper") },
      { propertyName: "Dhensa Boutique Resort", location: "Punakha", description: "Forest-framed rooms above the valley, made for still evenings after days on the road.", image: placeholder("Dhensa, Punakha", "gilt") },
    ],
    gallery: [valley, weaver, mountainTrail, placeholder("Punakha river valley", "gilt"), placeholder("Morning prayers in Paro", "oxblood"), placeholder("A Bhutanese farmhouse table", "juniper")],
    practicalInfo: { bestTimeToTravel: "March–May and September–November", difficulty: "Gentle, with one moderate hike", recommendedFor: "First visits, culture, and thoughtful pacing", groupSize: "Private, typically 2–10 guests", startingPoint: "Paro International Airport", duration: "7 days / 6 nights" },
    customizable: true,
    durationOptions: [7, 9, 12],
    travelStyleOptions: ["Classic", "Luxury", "Immersive"],
  },
  {
    slug: "the-tigers-path",
    name: "The Tiger’s Path",
    tagline: "The mountain gives back the pace you bring to it.",
    subtitle: "Eight days of high paths, forest air, and sacred ground.",
    themes: ["Trekking", "Adventure"],
    durationDays: 8,
    heroMedia: heroVariant(mountainTrail, "tigers-path"),
    story: [
      "In Bhutan, a trail is rarely only a way through the landscape. It links pasture to village, monastery to valley, and effort to a clearer kind of attention.",
      "The Tiger’s Path balances purposeful walking with warm lodges, generous meals, and time to understand the places beneath your boots.",
    ],
    highlights: [
      { title: "Ridge-line mornings", description: "Begin above the cloud line as the eastern peaks take the first light.", image: mountainTrail },
      { title: "Forest camps", description: "Rest among juniper and blue pine with a local crew who knows these paths by season.", image: placeholder("Blue pine forest camp", "juniper") },
      { title: "Taktsang at eye level", description: "Reach Bhutan’s best-known monastery with the confidence of a week spent walking.", image: valley },
    ],
    itinerary: [
      { dayNumber: 1, title: "Arrive between mountains", location: "Paro", description: "Meet the valley on foot with a gentle acclimatisation walk and an early evening." },
      { dayNumber: 2, title: "Above the capital", location: "Thimphu", description: "Walk a forest ridge before descending toward Thimphu and preparing for the higher trail." },
      { dayNumber: 3, title: "The first camp", location: "Jele Dzong", description: "Climb gradually through apple orchards and forest to a quiet camp below the old ridge fortress." },
      { dayNumber: 4, title: "Across the yak pastures", location: "Jangchulakha", description: "Follow open ridges with distant Himalayan views and traces of seasonal herders." },
      { dayNumber: 5, title: "Lakes in the high country", location: "Jimilang Tsho", description: "Pass clear mountain lakes and camp where the evening arrives without interruption." },
      { dayNumber: 6, title: "Descent through juniper", location: "Thimphu", description: "Leave the high path through fragrant forest and return to a warm room in the capital." },
      { dayNumber: 7, title: "A final ascent", location: "Paro", description: "Walk to Taktsang Monastery at a measured pace, pausing at the lookout for tea." },
      { dayNumber: 8, title: "Homeward", location: "Paro", description: "Depart with one last view of the trail lines crossing the valley." },
    ],
    routeMap: ["Paro", "Jele Dzong", "Jangchulakha", "Jimilang Tsho", "Thimphu", "Paro"],
    included: [...standardIncluded, "Trekking crew and camp equipment"],
    notIncluded: [...standardNotIncluded, "Personal trekking equipment"],
    accommodations: [
      { propertyName: "Naksel Boutique Hotel", location: "Paro", description: "Forest-edge rooms with broad valley views before and after the trail.", image: placeholder("Naksel, Paro", "juniper") },
      { propertyName: "Druk Path Camps", location: "High country", description: "Well-kept seasonal camps chosen for shelter, water, and expansive mornings.", image: placeholder("Druk Path camp", "oxblood") },
    ],
    gallery: [mountainTrail, placeholder("Jele Dzong ridge", "oxblood"), placeholder("High mountain camp", "juniper"), valley, placeholder("Jimilang Tsho", "gilt")],
    practicalInfo: { bestTimeToTravel: "April–June and September–November", difficulty: "Moderate; consecutive walking days", recommendedFor: "Active travellers comfortable on mountain paths", groupSize: "Private, typically 2–8 guests", startingPoint: "Paro International Airport", duration: "8 days / 7 nights" },
    customizable: true,
    durationOptions: [8, 10],
    travelStyleOptions: ["Classic", "Private camp"],
  },
  {
    slug: "kingdom-for-two",
    name: "Kingdom for Two",
    tagline: "A private chapter, written at Bhutan’s gentler pace.",
    subtitle: "Seven days of seclusion, ceremony, and mountain light.",
    themes: ["Romance", "Luxury"],
    durationDays: 7,
    heroMedia: heroVariant(valley, "kingdom-for-two"),
    story: [
      "The rarest luxury in Bhutan is not excess. It is room: room to linger over breakfast, to take the longer valley road, and to let a day change shape around the two of you.",
      "Private guides, thoughtful stays, and quiet rituals create a journey that feels cared for without ever feeling managed.",
    ],
    highlights: [
      { title: "Breakfast above the valley", description: "Begin slowly with mountain light, local honey, and nowhere else to be.", image: valley },
      { title: "A blessing for two", description: "Share a private temple blessing arranged with respect and local guidance.", image: placeholder("Temple blessing", "oxblood") },
      { title: "Warm-stone evenings", description: "Return from the trail to a traditional bath and a table set around the season.", image: placeholder("Warm-stone bath", "gilt") },
    ],
    itinerary: [
      { dayNumber: 1, title: "Your valley", location: "Paro", description: "A private welcome, an easy drive, and an evening left beautifully unplanned." },
      { dayNumber: 2, title: "The quiet capital", location: "Thimphu", description: "Meet makers and curators at a pace shaped around your interests." },
      { dayNumber: 3, title: "Over Dochula", location: "Punakha", description: "Cross the pass after the morning crowds and arrive among subtropical gardens." },
      { dayNumber: 4, title: "River light", location: "Punakha", description: "Walk to a hilltop temple, picnic by the Mo Chhu, and share a private evening meal." },
      { dayNumber: 5, title: "Return west", location: "Paro", description: "Pause at mountain viewpoints and settle into a secluded forest retreat." },
      { dayNumber: 6, title: "The monastery in the cliff", location: "Paro", description: "Climb to Taktsang with a private breakfast stop and time for a blessing." },
      { dayNumber: 7, title: "A soft farewell", location: "Paro", description: "One final morning together in the valley before departure." },
    ],
    routeMap: ["Paro", "Thimphu", "Punakha", "Paro"],
    included: [...standardIncluded, "Private dining and blessing arrangements"],
    notIncluded: standardNotIncluded,
    accommodations: [
      { propertyName: "COMO Uma Paro", location: "Paro", description: "A forested hillside retreat with intimate rooms and deeply restorative quiet.", image: placeholder("COMO Uma Paro", "juniper") },
      { propertyName: "Six Senses Punakha", location: "Punakha", description: "A contemporary lodge above the rice fields, grounded in the valley’s materials.", image: placeholder("Six Senses Punakha", "gilt") },
    ],
    gallery: [valley, placeholder("Private valley picnic", "gilt"), placeholder("Punakha at dusk", "oxblood"), weaver, placeholder("Forest retreat", "juniper")],
    practicalInfo: { bestTimeToTravel: "Year-round; spring and autumn are especially clear", difficulty: "Gentle, with an optional moderate hike", recommendedFor: "Honeymoons, anniversaries, and private escapes", groupSize: "Designed for two", startingPoint: "Paro International Airport", duration: "7 days / 6 nights" },
    customizable: true,
    durationOptions: [7, 9, 12],
    travelStyleOptions: ["Luxury", "Wellness", "Celebration"],
  },
  {
    slug: "the-quiet-kingdom",
    name: "The Quiet Kingdom",
    tagline: "Travel far enough inward, and the landscape changes.",
    subtitle: "Seven days of forest, stillness, and considered wellbeing.",
    themes: ["Wellness", "Nature"],
    durationDays: 7,
    heroMedia: heroVariant(valley, "quiet-kingdom"),
    story: [
      "Wellbeing in Bhutan is woven into ordinary life: a path taken on foot, food shaped by the season, smoke from juniper, and a view given the time it deserves.",
      "The Quiet Kingdom creates space for gentle movement and genuine rest, held by landscape rather than a list of treatments.",
    ],
    highlights: [
      { title: "Forest breathing", description: "Walk slowly through blue pine and juniper with a guide who reads the landscape by scent and sound.", image: mountainTrail },
      { title: "Hot-stone ritual", description: "Experience a traditional bath prepared with river stones and local herbs.", image: placeholder("Traditional hot-stone bath", "gilt") },
      { title: "Valley stillness", description: "Spend two nights in Phobjikha, where cranes and cloud move across a broad glacial valley.", image: placeholder("Phobjikha valley", "juniper") },
    ],
    itinerary: [
      { dayNumber: 1, title: "Arrive gently", location: "Paro", description: "Settle in with herbal tea, a short valley walk, and an early rest." },
      { dayNumber: 2, title: "Quiet above the capital", location: "Thimphu", description: "Begin with guided movement and spend the afternoon in a peaceful hillside temple." },
      { dayNumber: 3, title: "Into the central valleys", location: "Phobjikha", description: "Cross Dochula and continue into the open glacial valley as the road grows quieter." },
      { dayNumber: 4, title: "A day measured by light", location: "Phobjikha", description: "Walk the valley floor, share a farmhouse lunch, and leave the afternoon open." },
      { dayNumber: 5, title: "River and warmth", location: "Punakha", description: "Descend to Punakha for a restorative hot-stone bath beside the river." },
      { dayNumber: 6, title: "Return to the beginning", location: "Paro", description: "Travel west with an optional forest walk and a final slow dinner." },
      { dayNumber: 7, title: "Carry the quiet", location: "Paro", description: "Depart after a simple morning practice and breakfast." },
    ],
    routeMap: ["Paro", "Thimphu", "Phobjikha", "Punakha", "Paro"],
    included: [...standardIncluded, "Guided wellbeing practices and traditional hot-stone bath"],
    notIncluded: standardNotIncluded,
    accommodations: [
      { propertyName: "Gangtey Lodge", location: "Phobjikha", description: "A warm, intimate lodge looking across one of Bhutan’s most spacious valleys.", image: placeholder("Gangtey Lodge, Phobjikha", "juniper") },
      { propertyName: "Dhensa Boutique Resort", location: "Punakha", description: "Quiet rooms among pine forest, with the valley opening below.", image: placeholder("Dhensa, Punakha", "gilt") },
    ],
    gallery: [valley, mountainTrail, placeholder("Phobjikha morning", "juniper"), placeholder("Juniper smoke ritual", "oxblood"), placeholder("Punakha river stones", "gilt")],
    practicalInfo: { bestTimeToTravel: "October–April for Phobjikha; year-round alternatives available", difficulty: "Gentle", recommendedFor: "Rest, nature, and unhurried time", groupSize: "Private, typically 1–8 guests", startingPoint: "Paro International Airport", duration: "7 days / 6 nights" },
    customizable: true,
    durationOptions: [7, 9, 11],
    travelStyleOptions: ["Wellness", "Nature", "Luxury"],
  },
  {
    slug: "a-taste-of-bhutan",
    name: "A Taste of Bhutan",
    tagline: "A kingdom is often best understood at the table.",
    subtitle: "Six days of kitchens, markets, farms, and generous tables.",
    themes: ["Food", "Culture", "Local Life"],
    durationDays: 6,
    heroMedia: heroVariant(weaver, "taste-of-bhutan"),
    story: [
      "Bhutanese food makes sense in context: chillies dried on a farmhouse roof, red rice growing beside the river, cheese stirred over a wood fire, and a host insisting on one more serving.",
      "This journey follows those connections from market to field to family table, with enough space between meals to walk, talk, and notice where each flavour begins.",
    ],
    highlights: [
      { title: "Market morning", description: "Walk Thimphu’s weekend stalls with a cook who knows each ingredient and its season.", image: placeholder("Thimphu market", "oxblood") },
      { title: "The farmhouse table", description: "Cook and eat with a valley family, from hand-ground spices to red rice and ema datshi.", image: placeholder("Bhutanese farmhouse meal", "gilt") },
      { title: "Craft between courses", description: "Meet weavers and makers whose work carries the same patience as the kitchen.", image: weaver },
    ],
    itinerary: [
      { dayNumber: 1, title: "First flavours", location: "Paro", description: "Arrive to butter tea, seasonal snacks, and a relaxed introduction to the valley." },
      { dayNumber: 2, title: "The market tells the season", location: "Thimphu", description: "Shop with a local cook, visit a small producer, and prepare lunch together." },
      { dayNumber: 3, title: "Across Dochula", location: "Punakha", description: "Pause for mountain tea at the pass before a garden-led dinner in the lower valley." },
      { dayNumber: 4, title: "From field to table", location: "Punakha", description: "Walk rice terraces, share a farmhouse kitchen, and learn the balance behind Bhutan’s boldest dishes." },
      { dayNumber: 5, title: "A final shared meal", location: "Paro", description: "Return west for a village visit and a closing dinner shaped by the week’s discoveries." },
      { dayNumber: 6, title: "Breakfast and departure", location: "Paro", description: "Take the taste of suja and buckwheat with you as the valley falls away." },
    ],
    routeMap: ["Paro", "Thimphu", "Punakha", "Paro"],
    included: [...standardIncluded, "Cooking sessions and hosted meals"],
    notIncluded: standardNotIncluded,
    accommodations: [
      { propertyName: "Dewachen Resort", location: "Punakha", description: "A warm valley base close to farms, village paths, and riverside gardens.", image: placeholder("Dewachen Resort, Punakha", "gilt") },
      { propertyName: "Rema Resort", location: "Paro", description: "An intimate hillside stay with a kitchen rooted in local produce.", image: placeholder("Rema Resort, Paro", "oxblood") },
    ],
    gallery: [weaver, placeholder("Red rice harvest", "gilt"), placeholder("Thimphu market chillies", "oxblood"), placeholder("Farmhouse kitchen", "juniper"), valley],
    practicalInfo: { bestTimeToTravel: "Year-round; harvest season runs September–November", difficulty: "Easy", recommendedFor: "Curious eaters, makers, and culture-led travellers", groupSize: "Private, typically 2–10 guests", startingPoint: "Paro International Airport", duration: "6 days / 5 nights" },
    customizable: true,
    durationOptions: [6, 8],
    travelStyleOptions: ["Classic", "Farm stays", "Luxury"],
  },
];

export function getJourney(slug: string) {
  return journeys.find((journey) => journey.slug === slug);
}
