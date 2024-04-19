// this array is only used for github copilot auto array object generation :)
/*
const test = [
  "Argos",
  "ValtanG1",
  "ValtanG2",
  "VykasG1",
  "VykasG2",
  "VykasG3",
  // GUARDIANS START
  // GUARDIANS SHOULD "NAME+" PATTERN
  "Achates",
  "Alberhastic",
  "Armored Nacrasena",
  "Calventus",
  "Chromanium",
  "Dark Legoros",
  "Deskaluda",
  "Flame Fox Yoho",
  "Frost Helgaia",
  "Helgaia",
  "Icy Legoros",
  "Igrexion",
  "Lava Chromanium",
  "Levanos",
  "Lumerus",
  "Nacrasena",
  "Night Fox Yoho",
  "Tytalos",
  "Urnil",
  "Velganos",
  "Vertus",
  "Kungelanium",
  // GUARDIANS END
];
*/

export const encounters = {
  Argos: {
    name: "Argos",
    image: new URL("../assets/images/encounters/argos.png", import.meta.url)
      .href,
    encounterNames: ["Argos"],
  },
  ValtanG1: {
    name: "Valtan Gate 1",
    image: new URL("../assets/images/encounters/valtan.png", import.meta.url)
      .href,
    encounterNames: [
      "Dark Mountain Predator",
      "Destroyer Lucas",
      "Leader Lugaru",
    ],
  },
  ValtanG2: {
    name: "Valtan Gate 2",
    image: new URL("../assets/images/encounters/valtan.png", import.meta.url)
      .href,
    encounterNames: ["Demon Beast Commander Valtan"],
  },
  VykasG1: {
    name: "Vykas Gate 1",
    image: new URL("../assets/images/encounters/vykas.png", import.meta.url)
      .href,
    encounterNames: ["Incubus Morphe", "Nightmarish Morphe"],
  },
  VykasG2: {
    name: "Vykas Gate 2",
    image: new URL("../assets/images/encounters/vykas.png", import.meta.url)
      .href,
    encounterNames: ["Covetous Devourer Vykas"],
  },
  VykasG3: {
    name: "Vykas Gate 3",
    image: new URL("../assets/images/encounters/vykas.png", import.meta.url)
      .href,
    encounterNames: ["Covetous Legion Commander Vykas"],
  },
  KakulG1: {
    name: "Kakul-Saydon Gate 1",
    image: new URL(
      "../assets/images/encounters/Kakul-Saydon.png",
      import.meta.url
    ).href,
    encounterNames: ["Saydon"],
  },
  KakulG2: {
    name: "Kakul-Saydon Gate 2",
    image: new URL(
      "../assets/images/encounters/Kakul-Saydon.png",
      import.meta.url
    ).href,
    encounterNames: ["Kakul"],
  },
  KakulG3: {
    name: "Kakul-Saydon Gate 3",
    image: new URL(
      "../assets/images/encounters/Kakul-Saydon.png",
      import.meta.url
    ).href,
    encounterNames: ["Kakul-Saydon"],
  },
  BrelshazaG1: {
    name: "Brelshaza Gate 1",
    image: new URL("../assets/images/encounters/Brelshaza.png", import.meta.url)
      .href,
    encounterNames: ["Gehenna Helkasirs"],
  },
  BrelshazaG2: {
    name: "Brelshaza Gate 2",
    image: new URL("../assets/images/encounters/Brelshaza.png", import.meta.url)
      .href,
    encounterNames: ["Prokel's Spiritual Echo", "Prokel"],
  },
  BrelshazaG3: {
    name: "Brelshaza Gate 3",
    image: new URL("../assets/images/encounters/Brelshaza.png", import.meta.url)
      .href,
    encounterNames: ["Ashtarot"],
  },
  BrelshazaG4: {
    name: "Brelshaza Gate 4",
    image: new URL("../assets/images/encounters/Brelshaza.png", import.meta.url)
      .href,
    encounterNames: ["Primordial Nightmare"],
  },
  BrelshazaG5: {
    name: "Brelshaza Gate 5",
    image: new URL("../assets/images/encounters/Brelshaza.png", import.meta.url)
      .href,
    encounterNames: ["Brelshaza, Monarch of Nightmares"],
  },
  BrelshazaG6: {
    name: "Brelshaza Gate 6",
    image: new URL("../assets/images/encounters/Brelshaza.png", import.meta.url)
      .href,
    encounterNames: ["Phantom Legion Commander Brelshaza"],
  },
  KayangelG1: {
    name: "Kayangel Gate 1",
    image: new URL("../assets/images/encounters/kayangel.png", import.meta.url)
      .href,
    encounterNames: ["Celestial Sentinel"],
  },
  KayangelG2: {
    name: "Kayangel Gate 2",
    image: new URL("../assets/images/encounters/kayangel.png", import.meta.url)
      .href,
    encounterNames: ["Tienis"],
  },
  KayangelG3: {
    name: "Kayangel Gate 3",
    image: new URL("../assets/images/encounters/kayangel.png", import.meta.url)
      .href,
    encounterNames: [
      "Prunya",
      "Frost Guardian",
      "Flame Guardian",
      "Nature Guardian",
    ],
  },
  KayangelG4: {
    name: "Kayangel Gate 4",
    image: new URL("../assets/images/encounters/kayangel.png", import.meta.url)
      .href,
    encounterNames: ["Lauriel"],
  },
  AkkanG1: {
    name: "Akkan Gate 1",
    image: new URL("../assets/images/encounters/akkan.png", import.meta.url)
      .href,
    encounterNames: ["Griefbringer Maurug"],
  },
  AkkanG2: {
    name: "Akkan Gate 2",
    image: new URL("../assets/images/encounters/akkan.png", import.meta.url)
      .href,
    encounterNames: ["Lord of Degradation Akkan"],
  },
  AkkanG3: {
    name: "Akkan Gate 3",
    image: new URL("../assets/images/encounters/akkan.png", import.meta.url)
      .href,
    encounterNames: ["Plague Legion Commander Akkan", "Lord of Kartheon Akkan"],
  },
  IvorytowerG1: {
    name: "혼돈의 상아탑 1관문",
    image: new URL("../assets/images/encounters/Ivorytower.png", import.meta.url)
      .href,
    encounterNames: ["피어나는 혼돈, 칼테이야"],
  },
  IvorytowerG2: {
    name: "혼돈의 상아탑 2관문",
    image: new URL("../assets/images/encounters/Ivorytower.png", import.meta.url)
      .href,
    encounterNames: ["웅크린 교만, 라카이서스"],
  },
  IvorytowerG3: {
    name: "혼돈의 상아탑 3관문",
    image: new URL("../assets/images/encounters/Ivorytower.png", import.meta.url)
      .href,
    encounterNames: ["대지를 짓밟는 파이어혼"],
  },
  IvorytowerG4: {
    name: "혼돈의 상아탑 4관문",
    image: new URL("../assets/images/encounters/Ivorytower.png", import.meta.url)
      .href,
    encounterNames: ["길을 여는 자, 라자람"],
  },
  ThaemineG1: {
    name: "카멘 1관문",
    image: new URL("../assets/images/encounters/Thaemine.png", import.meta.url)
      .href,
    encounterNames: ["칠흑의 숭배자, 킬리네사"],
  },
  ThaemineG2: {
    name: "카멘 2관문",
    image: new URL("../assets/images/encounters/Thaemine.png", import.meta.url)
      .href,
    encounterNames: [
      "어둠의 기사, 발리나크",
      "금기를 삼킨 자, 발리나크",
      "종언을 고하는 자, 발리나크"
    ],
  },
  ThaemineG3: {
    name: "카멘 3관문",
    image: new URL("../assets/images/encounters/Thaemine.png", import.meta.url)
      .href,
    encounterNames: ["빛을 꺼트리는 자, 카멘"],
  },
  ThaemineG4: {
    name: "카멘 4관문",
    image: new URL("../assets/images/encounters/Thaemine.png", import.meta.url)
      .href,
    encounterNames: ["어둠군단장 카멘", "별을 제패한 자, 카멘"],
  },
  /* GUARDIANS BELOW */
  Achates: {
    name: "Achates",
    image: new URL("../assets/images/encounters/achates.png", import.meta.url)
      .href,
    encounterNames: ["Achates", "Achates+"],
  },
  Alberhastic: {
    name: "Alberhastic",
    image: new URL(
      "../assets/images/encounters/alberhastic.png",
      import.meta.url
    ).href,
    encounterNames: ["Alberhastic", "Alberhastic+"],
  },
  "Armored Nacrasena": {
    name: "Armored Nacrasena",
    image: new URL(
      "../assets/images/encounters/armored_nacrasena.png",
      import.meta.url
    ).href,
    encounterNames: ["Armored Nacrasena", "Armored Nacrasena+"],
  },
  Caliligos: {
    name: "Caliligos",
    image: new URL("../assets/images/encounters/Caliligos.png", import.meta.url)
      .href,
    encounterNames: ["Caliligos"],
  },
  Calventus: {
    name: "Calventus",
    image: new URL("../assets/images/encounters/calventus.png", import.meta.url)
      .href,
    encounterNames: ["Calventus", "Calventus+"],
  },
  Chromanium: {
    name: "Chromanium",
    image: new URL(
      "../assets/images/encounters/chromanium.png",
      import.meta.url
    ).href,
    encounterNames: ["Chromanium", "Chromanium+"],
  },
  "Dark Legoros": {
    name: "Dark Legoros",
    image: new URL(
      "../assets/images/encounters/dark_legoros.png",
      import.meta.url
    ).href,
    encounterNames: ["Dark Legoros", "Dark Legoros+"],
  },
  Deskaluda: {
    name: "Deskaluda",
    image: new URL("../assets/images/encounters/deskaluda.png", import.meta.url)
      .href,
    encounterNames: ["Deskaluda", "Deskaluda+"],
  },
  "Flame Fox Yoho": {
    name: "Flame Fox Yoho",
    image: new URL(
      "../assets/images/encounters/flame_fox_yoho.png",
      import.meta.url
    ).href,
    encounterNames: ["Flame Fox Yoho", "Flame Fox Yoho+"],
  },
  "Frost Helgaia": {
    name: "Frost Helgaia",
    image: new URL(
      "../assets/images/encounters/frost_helgaia.png",
      import.meta.url
    ).href,
    encounterNames: ["Frost Helgaia", "Frost Helgaia+"],
  },
  Hanumatan: {
    name: "Hanumatan",
    image: new URL("../assets/images/encounters/hanumatan.png", import.meta.url)
      .href,
    encounterNames: ["Hanumatan", "Hanumatan+"],
  },
  Helgaia: {
    name: "Helgaia",
    image: new URL("../assets/images/encounters/helgaia.png", import.meta.url)
      .href,
    encounterNames: ["Helgaia", "Helgaia+"],
  },
  "Icy Legoros": {
    name: "Icy Legoros",
    image: new URL(
      "../assets/images/encounters/icy_legoros.png",
      import.meta.url
    ).href,
    encounterNames: ["Icy Legoros", "Icy Legoros+"],
  },
  Igrexion: {
    name: "Igrexion",
    image: new URL("../assets/images/encounters/igrexion.png", import.meta.url)
      .href,
    encounterNames: ["Igrexion", "Igrexion+"],
  },
  "Lava Chromanium": {
    name: "Lava Chromanium",
    image: new URL(
      "../assets/images/encounters/lava_chromanium.png",
      import.meta.url
    ).href,
    encounterNames: ["Lava Chromanium", "Lava Chromanium+"],
  },
  Levanos: {
    name: "Levanos",
    image: new URL("../assets/images/encounters/levanos.png", import.meta.url)
      .href,
    encounterNames: ["Levanos", "Levanos+"],
  },
  Lumerus: {
    name: "Lumerus",
    image: new URL("../assets/images/encounters/lumerus.png", import.meta.url)
      .href,
    encounterNames: ["Lumerus", "Lumerus+"],
  },
  Nacrasena: {
    name: "Nacrasena",
    image: new URL("../assets/images/encounters/nacrasena.png", import.meta.url)
      .href,
    encounterNames: ["Nacrasena", "Nacrasena+"],
  },
  "Night Fox Yoho": {
    name: "Night Fox Yoho",
    image: new URL(
      "../assets/images/encounters/night_fox_yoho.png",
      import.meta.url
    ).href,
    encounterNames: ["Night Fox Yoho", "Night Fox Yoho+"],
  },
  Tytalos: {
    name: "Tytalos",
    image: new URL("../assets/images/encounters/tytalos.png", import.meta.url)
      .href,
    encounterNames: ["Tytalos", "Tytalos+"],
  },
  Urnil: {
    name: "Urnil",
    image: new URL("../assets/images/encounters/urnil.png", import.meta.url)
      .href,
    encounterNames: ["Urnil", "Ur'nil", "Urnil+"],
  },
  Velganos: {
    name: "Velganos",
    image: new URL("../assets/images/encounters/velganos.png", import.meta.url)
      .href,
    encounterNames: ["Velganos", "Velganos+"],
  },
  Vertus: {
    name: "Vertus",
    image: new URL("../assets/images/encounters/vertus.png", import.meta.url)
      .href,
    encounterNames: ["Vertus", "Vertus+"],
  },
  Kungelanium: {
    name: "Kungelanium",
    image: new URL(
      "../assets/images/encounters/kungelanium.png",
      import.meta.url
    ).href,
    encounterNames: ["Kungelanium", "Kungelanium+"],
  },
  Sonavel: {
    name: "Sonavel",
    image: new URL("../assets/images/encounters/sonavel.png", import.meta.url)
      .href,
    encounterNames: ["Sonavel", "Sonavel+"],
  },
  Gargadis: {
    name: "가르가디스",
    image: new URL("../assets/images/encounters/gargadis.png", import.meta.url)
      .href,
    encounterNames: ["가르가디스", "가르가디스+"],
  },
  Veskal: {
    name: "베스칼",
    image: new URL("../assets/images/encounters/veskal.png", import.meta.url)
      .href,
    encounterNames: ["베스칼", "베스칼+"],
  },
};
