export type Scene = "clear" | "herbs" | "sink" | "stir" | "amber" | "pour" | "cup";

export type Chapter = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  scene: Scene;
  flip: boolean;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export const chapters: Chapter[] = [
  {
    id: "erster-blick",
    number: "01",
    eyebrow: "Der erste Blick",
    title: "Ein Blatt.",
    accent: "Ein stilles Glas.",
    body: "Die Zutaten bleiben sichtbar.",
    scene: "clear",
    flip: false,
    primary: { href: "/#zutaten", label: "Das Ritual ansehen" },
    secondary: { href: "/#aufguss", label: "Zum Aufguss scrollen" },
  },
  {
    id: "zutaten",
    number: "02",
    eyebrow: "Die Zutaten",
    title: "Offen",
    accent: "auf dem Tisch.",
    body: "Kamille und Lindenblüte, noch trocken und hell.",
    scene: "herbs",
    flip: true,
  },
  {
    id: "aufguss",
    number: "03",
    eyebrow: "Ins Glas",
    title: "Sichtbar",
    accent: "bis zum Grund.",
    body: "Die Blätter sinken durch klares Wasser.",
    scene: "sink",
    flip: false,
  },
  {
    id: "wasser",
    number: "04",
    eyebrow: "Das Wasser",
    title: "Es bewegt sich,",
    accent: "bevor es Farbe annimmt.",
    body: "Noch kein Bernstein. Nur Glas und Bewegung.",
    scene: "stir",
    flip: true,
  },
  {
    id: "farbe",
    number: "05",
    eyebrow: "Die Farbe",
    title: "Von klar",
    accent: "zu bernstein.",
    body: "Wärme zeigt sich zuerst als Farbe.",
    scene: "amber",
    flip: false,
  },
  {
    id: "guss",
    number: "06",
    eyebrow: "Der Guss",
    title: "Langsam,",
    accent: "in ein doppeltes Glas.",
    body: "Der Strahl bleibt dünn. Dampf steigt leise.",
    scene: "pour",
    flip: true,
  },
  {
    id: "muster",
    number: "07",
    eyebrow: "Der Moment",
    title: "Dampf, Licht,",
    accent: "und dann die Tasse.",
    body: "Hier endet das Ritual. Das Sortiment ist Musterware.",
    scene: "cup",
    flip: false,
    primary: { href: "/sortiment", label: "Muster ansehen" },
    secondary: { href: "/#erster-blick", label: "Szene von vorn" },
  },
];

export type Blend = {
  slug: string;
  name: string;
  kind: string;
  taste: string;
  price: string;
  unit: string;
  cents: number;
  hue: string;
  ingredients: string[];
  water: string;
  time: string;
  dose: string;
  cup: string;
  origin: string;
  story: string;
};

const dose = "zwei Gramm auf 200 Milliliter";
const hof = "Hof am Glasquell, eine erfundene Werkstatt, kein reales Anbaugebiet.";

export const blends: Blend[] = [
  {
    slug: "lindenruhe",
    name: "Lindenruhe",
    kind: "Kräuter",
    taste: "Kamille, Linde, mild und hell",
    price: "8,50 €",
    unit: "/ 50 g",
    cents: 850,
    hue: "#d7c4a2",
    ingredients: ["Kamillenblüten", "Lindenblüten"],
    water: "etwa 90 °C",
    time: "fünf Minuten",
    dose,
    cup: "hellgelb",
    origin: hof,
    story: "Die Tasse bleibt hell. Kamille und Linde liegen offen im Glas, bis das Wasser Farbe annimmt.",
  },
  {
    slug: "feuerblatt",
    name: "Feuerblatt",
    kind: "Kräuter",
    taste: "Ingwer, Zitronenverbene, warm und klar",
    price: "9,00 €",
    unit: "/ 50 g",
    cents: 900,
    hue: "#d08a45",
    ingredients: ["Ingwer", "Zitronenverbene"],
    water: "etwa 95 °C",
    time: "sechs Minuten",
    dose,
    cup: "klar, mit goldener Wärme",
    origin: hof,
    story: "Ingwer bleibt im Glas sichtbar. Die Verbine duftet zuerst, die Schärfe kommt später.",
  },
  {
    slug: "nachtminze",
    name: "Nachtminze",
    kind: "Kräuter",
    taste: "Pfefferminze, Apfel, kühl",
    price: "7,50 €",
    unit: "/ 50 g",
    cents: 750,
    hue: "#7f9a78",
    ingredients: ["Pfefferminze", "Apfelstücke"],
    water: "etwa 85 °C",
    time: "vier Minuten",
    dose,
    cup: "blassgrün",
    origin: hof,
    story: "Minze kühlt den Dampf. Der Apfel hält die Tasse weich und nicht bitter.",
  },
  {
    slug: "waldbeere",
    name: "Waldbeere",
    kind: "Früchte",
    taste: "Hagebutte, Hibiskus, säuerlich",
    price: "8,00 €",
    unit: "/ 50 g",
    cents: 800,
    hue: "#a85a52",
    ingredients: ["Hagebutte", "Hibiskus"],
    water: "etwa 95 °C",
    time: "sechs Minuten",
    dose,
    cup: "rot",
    origin: hof,
    story: "Die Farbe wird rot, bevor der Geschmack säuerlich wird. Beides bleibt im Glas lesbar.",
  },
  {
    slug: "bergkraut",
    name: "Bergkraut",
    kind: "Kräuter",
    taste: "Melisse, Salbei, Kräuterwiese",
    price: "8,50 €",
    unit: "/ 50 g",
    cents: 850,
    hue: "#8d9162",
    ingredients: ["Melisse", "Salbei"],
    water: "etwa 90 °C",
    time: "fünf Minuten",
    dose,
    cup: "hellgrün",
    origin: hof,
    story: "Salbei duftet kräftig, Melisse bleibt hell. Die Mischung ist erfunden und nicht als Heilmittel gemeint.",
  },
  {
    slug: "nebelhang",
    name: "Nebelhang",
    kind: "Grüntee",
    taste: "Frühes Blatt, grasig, hellgrün in der Tasse",
    price: "9,50 €",
    unit: "/ 50 g",
    cents: 950,
    hue: "#b7c48a",
    ingredients: ["Grünteeblätter"],
    water: "etwa 70 °C",
    time: "zwei Minuten",
    dose,
    cup: "hellgrün",
    origin: hof,
    story: "Das Blatt bleibt ganz. Kurze Zeit und kühleres Wasser halten die Tasse hell, nicht braun.",
  },
  {
    slug: "kupferzweig",
    name: "Kupferzweig",
    kind: "Schwarztee",
    taste: "Malzig, kupferfarben, wenig Gerbstoff",
    price: "8,90 €",
    unit: "/ 50 g",
    cents: 890,
    hue: "#b56a3a",
    ingredients: ["Schwarztee"],
    water: "etwa 95 °C",
    time: "drei Minuten",
    dose,
    cup: "kupferfarben",
    origin: hof,
    story: "Drei Minuten reichen. Länger wird die Tasse dunkler und der Aufguss herber, ohne dass daraus ein Versprechen wird.",
  },
  {
    slug: "nachtfunken",
    name: "Nachtfunken",
    kind: "Rooibos",
    taste: "Honigbusch, Orangenschale, ohne Koffein",
    price: "8,20 €",
    unit: "/ 50 g",
    cents: 820,
    hue: "#c47a45",
    ingredients: ["Rooibos", "Honigbusch", "Orangenschale"],
    water: "etwa 98 °C",
    time: "sechs Minuten",
    dose,
    cup: "tief bernstein",
    origin: hof,
    story: "Rooibos enthält von sich aus kein Koffein. Das ist eine Aussage über den Rohstoff, keine Aussage über den Körper.",
  },
  {
    slug: "jasminstill",
    name: "Jasminstill",
    kind: "Grüntee",
    taste: "Jasminblüte, weich, blassgold",
    price: "10,00 €",
    unit: "/ 50 g",
    cents: 1000,
    hue: "#e2c98a",
    ingredients: ["Grüntee", "Jasminblüten"],
    water: "etwa 75 °C",
    time: "zwei Minuten",
    dose,
    cup: "blassgold",
    origin: hof,
    story: "Die Blüte duftet vor dem Blatt. Die Tasse bleibt blass, wenn das Wasser nicht kocht.",
  },
];

export function getBlend(slug: string) {
  return blends.find((blend) => blend.slug === slug);
}

export function relatedBlends(slug: string) {
  return blends.filter((blend) => blend.slug !== slug).slice(0, 3);
}

export const prepSteps = [
  {
    title: "Menge",
    text: "Zwei Gramm lose Mischung auf 200 Milliliter. Die Blätter brauchen Platz im Glas.",
  },
  {
    title: "Temperatur",
    text: "Je nach Muster zwischen etwa 70 und 98 °C. Kochendes Wasser bleibt für den Grüntee in der Kanne.",
  },
  {
    title: "Zeit",
    text: "Zwei bis sechs Minuten, wie auf der Mischungsseite angegeben. Nicht rühren, bis die Farbe steht.",
  },
  {
    title: "Abseihen",
    text: "Abgießen, ohne die Blätter auszudrücken. Die Farbe ist dann fertig.",
  },
];

export const articles = [
  {
    slug: "langsam-aufgiessen",
    title: "Langsam aufgießen",
    lede: "Wie Lindenruhe im Glas Farbe annimmt, und wann der Aufguss beendet ist.",
    blend: "lindenruhe",
  },
  {
    slug: "farbe-im-glas",
    title: "Die Farbe im Glas",
    lede: "Klares Wasser, dann das Blatt. Nebelhang zeigt, warum die Farbe zuletzt kommt.",
    blend: "nebelhang",
  },
  {
    slug: "zwei-gramm",
    title: "Zwei Gramm",
    lede: "Warum die Menge im Glas sichtbar bleiben muss, am Beispiel Kupferzweig.",
    blend: "kupferzweig",
  },
  {
    slug: "lose-mischung",
    title: "Was eine lose Mischung ist",
    lede: "Früchte und Blätter ohne Beutel, gelesen an Waldbeere.",
    blend: "waldbeere",
  },
];

export function formatEuro(cents: number) {
  const euros = Math.floor(cents / 100);
  const rest = Math.abs(cents % 100);
  return `${euros},${rest.toString().padStart(2, "0")} €`;
}
