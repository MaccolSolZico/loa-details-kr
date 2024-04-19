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
    name: "아르고스",
    image: new URL("../assets/images/encounters/argos.png", import.meta.url)
      .href,
    encounterNames: ["아르고스"],
  },
  ValtanG1: {
    name: "발탄 1관문",
    image: new URL("../assets/images/encounters/valtan.png", import.meta.url)
      .href,
    encounterNames: [
      "검은 산의 포식자",
      "파괴자 루카스",
      "통솔자 루가루",
    ],
  },
  ValtanG2: {
    name: "발탄 2관문",
    image: new URL("../assets/images/encounters/valtan.png", import.meta.url)
      .href,
    encounterNames: ["찢겨진 마수의 군주"],
  },
  VykasG1: {
    name: "비아키스 1관문",
    image: new URL("../assets/images/encounters/vykas.png", import.meta.url)
      .href,
    encounterNames: ["욕망의 탐식자 비아키스"],
  },
  VykasG2: {
    name: "비아키스 2관문",
    image: new URL("../assets/images/encounters/vykas.png", import.meta.url)
      .href,
    encounterNames: ["욕망군단장 비아키스"],
  },
  KakulG1: {
    name: "쿠크세이튼 1관문",
    image: new URL("../assets/images/encounters/Kakul-Saydon.png", import.meta.url)
      .href,
    encounterNames: ["세이튼"],
  },
  KakulG2: {
    name: "쿠크세이튼 2관문",
    image: new URL("../assets/images/encounters/Kakul-Saydon.png", import.meta.url)
      .href,
    encounterNames: ["쿠크"],
  },
  KakulG3: {
    name: "쿠크세이튼 3관문",
    image: new URL("../assets/images/encounters/Kakul-Saydon.png", import.meta.url)
      .href,
    encounterNames: ["쿠크세이튼", "앵콜을 외친 쿠크세이튼"],
  },
  BrelshazaG1: {
    name: "아브렐슈드 1관문",
    image: new URL("../assets/images/encounters/Brelshaza.png", import.meta.url)
      .href,
    encounterNames: ["게헤나 헬카서스"],
  },
  BrelshazaG2: {
    name: "아브렐슈드 2관문",
    image: new URL("../assets/images/encounters/Brelshaza.png", import.meta.url)
      .href,
    encounterNames: ["아슈타로테"],
  },
  BrelshazaG3: {
    name: "아브렐슈드 3관문",
    image: new URL("../assets/images/encounters/Brelshaza.png", import.meta.url)
      .href,
    encounterNames: ["태초의 악몽"],
  },
  BrelshazaG4: {
    name: "아브렐슈드 4관문",
    image: new URL("../assets/images/encounters/Brelshaza.png", import.meta.url)
      .href,
    encounterNames: ["몽환군단장 아브렐슈드"],
  },
  KayangelG1: {
    name: "카양겔 1관문",
    image: new URL("../assets/images/encounters/kayangel.png", import.meta.url)
      .href,
    encounterNames: ["티엔"],
  },
  KayangelG2: {
    name: "카양겔 2관문",
    image: new URL("../assets/images/encounters/kayangel.png", import.meta.url)
      .href,
    encounterNames: [
      "프리우나",
      "프리우나 수호자 (얼음)",
      "프리우나 수호자 (화염)",
      "프리우나 수호자 (자연)",
    ],
  },
  KayangelG3: {
    name: "카양겔 3관문",
    image: new URL("../assets/images/encounters/kayangel.png", import.meta.url)
      .href,
    encounterNames: ["라우리엘", "라우리엘 각성 후"],
  },
  AkkanG1: {
    name: "일리아칸 1관문",
    image: new URL("../assets/images/encounters/akkan.png", import.meta.url)
      .href,
    encounterNames: ["비통의 지배자 마우르그"],
  },
  AkkanG2: {
    name: "일리아칸 2관문",
    image: new URL("../assets/images/encounters/akkan.png", import.meta.url)
      .href,
    encounterNames: ["쇠락의 군주 일리아칸"],
  },
  AkkanG3: {
    name: "일리아칸 3관문",
    image: new URL("../assets/images/encounters/akkan.png", import.meta.url)
      .href,
    encounterNames: ["질병군단장 일리아칸", "일리아칸, 카르테론의 군주"],
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
  EchidnaG1: {
    name: "에키드나 1관문",
    image: new URL("../assets/images/encounters/Echidna.png", import.meta.url)
      .href,
    encounterNames: ["붉은 재앙, 다르키엘"],
  },
  EchidnaG2: {
    name: "에키드나 2관문",
    image: new URL("../assets/images/encounters/Echidna.png", import.meta.url)
      .href,
    encounterNames: ["에키드나","욕망의 주인, 에키드나"],
  },
  BehemothG1: {
    name: "베히모스 1관문",
    image: new URL("../assets/images/encounters/Behemoth.png", import.meta.url)
      .href,
    encounterNames: ["폭풍의 지휘관, 베히모스"],
  },
  BehemothG2: {
    name: "베히모스 2관문",
    image: new URL("../assets/images/encounters/Behemoth.png", import.meta.url)
      .href,
    encounterNames: ["잔혹한 폭풍의 처단자, 베히모스"],
  },
  /* GUARDIANS BELOW */
  Achates: {
    name: "아카테스",
    image: new URL("../assets/images/encounters/achates.png", import.meta.url)
      .href,
    encounterNames: ["아카테스", "아카테스+"],
  },
  Alberhastic: {
    name: "엘버하스틱",
    image: new URL("../assets/images/encounters/alberhastic.png",import.meta.url)
      .href,
    encounterNames: ["엘버하스틱", "엘버하스틱+"],
  },
  "Armored Nacrasena": {
    name: "중갑 나크라세나",
    image: new URL("../assets/images/encounters/armored_nacrasena.png",import.meta.url)
      .href,
    encounterNames: ["중갑 나크라세나", "중갑 나크라세나+"],
  },
  Caliligos: {
    name: "칼엘리고스",
    image: new URL("../assets/images/encounters/Caliligos.png", import.meta.url)
      .href,
    encounterNames: ["칼엘리고스"],
  },
  Calventus: {
    name: "칼벤투스",
    image: new URL("../assets/images/encounters/calventus.png", import.meta.url)
      .href,
    encounterNames: ["칼벤투스", "칼벤투스+"],
  },
  Chromanium: {
    name: "크로마니움",
    image: new URL("../assets/images/encounters/chromanium.png",import.meta.url)
      .href,
    encounterNames: ["크로마니움", "크로마니움+"],
  },
  "Dark Legoros": {
    name: "어둠의 레기오로스",
    image: new URL("../assets/images/encounters/dark_legoros.png",import.meta.url)
      .href,
    encounterNames: ["어둠의 레기오로스", "어둠의 레기오로스+"],
  },
  Deskaluda: {
    name: "데스칼루다",
    image: new URL("../assets/images/encounters/deskaluda.png", import.meta.url)
      .href,
    encounterNames: ["데스칼루다", "데스칼루다+"],
  },
  "Flame Fox Yoho": {
    name: "홍염의 요호",
    image: new URL("../assets/images/encounters/flame_fox_yoho.png",import.meta.url)
      .href,
    encounterNames: ["홍염의 요호", "홍염의 요호+"],
  },
  "Frost Helgaia": {
    name: "혹한의 헬가이아",
    image: new URL("../assets/images/encounters/frost_helgaia.png",import.meta.url)
      .href,
    encounterNames: ["혹한의 헬가이아", "혹한의 헬가이아+"],
  },
  Hanumatan: {
    name: "하누마탄",
    image: new URL("../assets/images/encounters/hanumatan.png", import.meta.url)
      .href,
    encounterNames: ["하누마탄", "하누마탄+"],
  },
  Helgaia: {
    name: "헬가이아",
    image: new URL("../assets/images/encounters/helgaia.png", import.meta.url)
      .href,
    encounterNames: ["헬가이아", "헬가이아+"],
  },
  "Icy Legoros": {
    name: "빙결의 레기오로스",
    image: new URL("../assets/images/encounters/icy_legoros.png", import.meta.url)
      .href,
    encounterNames: ["빙결의 레기오로스", "빙결의 레기오로스+"],
  },
  Igrexion: {
    name: "이그렉시온",
    image: new URL("../assets/images/encounters/igrexion.png", import.meta.url)
      .href,
    encounterNames: ["이그렉시온", "이그렉시온+"],
  },
  "Lava Chromanium": {
    name: "용암 크로마니움",
    image: new URL("../assets/images/encounters/lava_chromanium.png",import.meta.url)
      .href,
    encounterNames: ["용암 크로마니움", "용암 크로마니움+"],
  },
  Levanos: {
    name: "레바노스",
    image: new URL("../assets/images/encounters/levanos.png", import.meta.url)
      .href,
    encounterNames: ["레바노스", "레바노스+"],
  },
  Lumerus: {
    name: "루메루스",
    image: new URL("../assets/images/encounters/lumerus.png", import.meta.url)
      .href,
    encounterNames: ["루메루스", "루메루스+"],
  },
  Nacrasena: {
    name: "나크라세나",
    image: new URL("../assets/images/encounters/nacrasena.png", import.meta.url)
      .href,
    encounterNames: ["나크라세나", "나크라세나+"],
  },
  "Night Fox Yoho": {
    name: "흑야의 요호",
    image: new URL("../assets/images/encounters/night_fox_yoho.png",import.meta.url)
      .href,
    encounterNames: ["흑야의 요호", "흑야의 요호+"],
  },
  Tytalos: {
    name: "타이탈로스",
    image: new URL("../assets/images/encounters/tytalos.png", import.meta.url)
      .href,
    encounterNames: ["타이탈로스", "타이탈로스+"],
  },
  Urnil: {
    name: "우르닐",
    image: new URL("../assets/images/encounters/urnil.png", import.meta.url)
      .href,
    encounterNames: ["우르닐", "우르닐+"],
  },
  Velganos: {
    name: "벨가누스",
    image: new URL("../assets/images/encounters/velganos.png", import.meta.url)
      .href,
    encounterNames: ["벨가누스", "벨가누스+"],
  },
  Vertus: {
    name: "베르투스",
    image: new URL("../assets/images/encounters/vertus.png", import.meta.url)
      .href,
    encounterNames: ["베르투스", "베르투스+"],
  },
  Kungelanium: {
    name: "쿤겔라니움",
    image: new URL("../assets/images/encounters/kungelanium.png",import.meta.url)
      .href,
    encounterNames: ["쿤겔라니움", "쿤겔라니움+"],
  },
  Sonavel: {
    name: "소나벨",
    image: new URL("../assets/images/encounters/sonavel.png", import.meta.url)
      .href,
    encounterNames: ["소나벨", "소나벨+"],
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
