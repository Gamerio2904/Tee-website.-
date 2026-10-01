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
  taste: string;
  price: string;
  unit: string;
  cents: number;
  hue: string;
  ingredients: string[];
  water: string;
  time: string;
  story: string;
};

export const blends: Blend[] = [
  {
    slug: "lindenruhe",
    name: "Lindenruhe",
    taste: "Kamille, Linde, mild und hell",
    price: "8,50 €",
    unit: "/ 50 g",
    cents: 850,
    hue: "#d7c4a2",
    ingredients: ["Kamillenblüten", "Lindenblüten"],
    water: "etwa 90 °C",
    time: "fünf Minuten",
    story: "Die Tasse bleibt hell. Kamille und Linde liegen offen im Glas, bis das Wasser Farbe annimmt.",
  },
  {
    slug: "feuerblatt",
    name: "Feuerblatt",
    taste: "Ingwer, Zitronenverbene, warm und klar",
    price: "9,00 €",
    unit: "/ 50 g",
    cents: 900,
    hue: "#d08a45",
    ingredients: ["Ingwer", "Zitronenverbene"],
    water: "etwa 95 °C",
    time: "sechs Minuten",
    story: "Ingwer bleibt im Glas sichtbar. Die Verbine duftet zuerst, die Schärfe kommt später.",
  },
  {
    slug: "nachtminze",
    name: "Nachtminze",
    taste: "Pfefferminze, ein wenig Apfel",
    price: "7,50 €",
    unit: "/ 50 g",
    cents: 750,
    hue: "#7f9a78",
    ingredients: ["Pfefferminze", "Apfelstücke"],
    water: "etwa 85 °C",
    time: "vier Minuten",
    story: "Minze kühlt den Dampf. Der Apfel hält die Tasse weich und nicht bitter.",
  },
  {
    slug: "waldbeere",
    name: "Waldbeere",
    taste: "Hagebutte, Hibiskus, säuerlich",
    price: "8,00 €",
    unit: "/ 50 g",
    cents: 800,
    hue: "#a85a52",
    ingredients: ["Hagebutte", "Hibiskus"],
    water: "etwa 95 °C",
    time: "sechs Minuten",
    story: "Die Farbe wird rot, bevor der Geschmack säuerlich wird. Beides bleibt im Glas lesbar.",
  },
  {
    slug: "bergkraut",
    name: "Bergkraut",
    taste: "Melisse, Salbei, Kräuterwiese",
    price: "8,50 €",
    unit: "/ 50 g",
    cents: 850,
    hue: "#8d9162",
    ingredients: ["Melisse", "Salbei"],
    water: "etwa 90 °C",
    time: "fünf Minuten",
    story: "Salbei duftet kräftig, Melisse bleibt hell. Die Mischung ist erfunden und nicht als Heilmittel gemeint.",
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
    title: "Wasser",
    text: "Knapp unter dem Siedepunkt, etwa 90 °C. Sprudelndes Wasser bleibt in der Kanne.",
  },
  {
    title: "Menge",
    text: "Zwei Gramm lose Mischung auf 200 Milliliter. Die Blätter brauchen Platz im Glas.",
  },
  {
    title: "Zeit",
    text: "Vier bis sechs Minuten ziehen lassen, dann abseihen. Nicht ausdrücken.",
  },
];

export function formatEuro(cents: number) {
  const euros = Math.floor(cents / 100);
  const rest = Math.abs(cents % 100);
  return `${euros},${rest.toString().padStart(2, "0")} €`;
}
