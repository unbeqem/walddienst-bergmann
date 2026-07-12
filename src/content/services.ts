export type Service = {
  id: string;
  title: string;
  teaser: string;
  body: string[];
  icon: "tractor" | "cable" | "axe" | "sprout" | "moon" | "logs";
};

export const services: Service[] = [
  {
    id: "maschinen",
    title: "Maschinen",
    teaser: "Unsere Ausrüstung",
    icon: "tractor",
    body: [
      "Steilhänge sind ein Problem? Nicht für uns. Denn unsere funkgesteuerte Mähraupe Irus Deltrak 61V3 setzt mit ihren 61PS und automatischer, hydraulischer Raupenspannung sowie mit hydraulisch einzeln ausfahrbaren Raupenlaufwerken für die erforderliche Standsicherheit im Steilhang.",
      "Zusätzlich zählen zu unseren Arbeitsgeräten Motorkettensäge, Freischneider – auch Motorsense genannt – sowie die Seilwinde, mit denen wir überwiegend motormanuelle Arbeiten ausführen können.",
    ],
  },
  {
    id: "seilklettertechnik",
    title: "Seilklettertechnik",
    teaser: "Arbeitsverfahren der Baumpflege",
    icon: "cable",
    body: [
      "SKT, umgangssprachlich auch seilunterstützte Baumpflege genannt, ist ein Arbeitsverfahren der Baumpflege, was unter anderem in der Forstwirtschaft eingesetzt wird.",
      "Hierbei kann die gesamte Krone des Baumes und der Feinastbereich erreicht werden.",
    ],
  },
  {
    id: "gefahrenbaumfaellung",
    title: "Gefahrenbaumfällung",
    teaser: "Sichere und fachgerechte Fällung von Bäumen",
    icon: "axe",
    body: [
      "Als Gefahrenbäume werden Bäume bezeichnet, die nach fachmännischer Meinung nicht mehr bruch- und standsicher sind. Sie sind meist eine Herausforderung, da sie schwer zugänglich sind und komplexe Arbeitsabläufe benötigen.",
      "Durch unsere langjährige Berufserfahrung setzen wir gezielt die richtigen Schnitttechniken und für den speziellen Arbeitsauftrag geeignete Maschinen sicher ein.",
    ],
  },
  {
    id: "gruenpflege",
    title: "Grünpflege und Zaunbau",
    teaser: "Pflege von Grünanlagen",
    icon: "sprout",
    body: [
      "Hierzu zählen verschiedene Pflegearbeiten, wie Vegetationspflege, Jungbestandspflege, Kulturpflege und Mahdarbeiten. Dies führen wir vor allem für die Deutsche Bahn und den Staatsbetrieb Sachsenforst aus.",
      "Zaunaufbau sowie Zaunabbau wird von uns ebenfalls fachgerecht erledigt.",
    ],
  },
  {
    id: "mondphasenholz",
    title: "Mondphasenholz",
    teaser: "Besonderes Holz durch altes Wissen",
    icon: "moon",
    body: [
      "Wussten Sie, dass Holz, welches nach alten Mondphasenregeln geerntet wird, widerstandsfähiger und langlebiger ist?",
      "Inspiriert wird diese Arbeit in unserem Unternehmen durch die Literatur von Erwin Thoma und Peter Wohlleben.",
    ],
  },
  {
    id: "holzernte",
    title: "Holzernte",
    teaser: "Individuelle und fachgerechte Beratung und Ausführung",
    icon: "logs",
    body: [
      "Im Moment bieten wir motormanuelle Holzernte an. Vor allem in nicht maschinenbefahrbarem Gelände oder an empfindlichen Standorten bietet sich diese klassische Form der Forstarbeit an.",
      "Dabei wird überwiegend mit der Motorkettensäge gearbeitet und kaum auf große Maschinen zurückgegriffen.",
    ],
  },
];
