import ailPdf from "./L'ail.pdf";
import ailPng from "./L'ail.png";
import cannellePdf from './La cannelle.pdf';
import cannellePng from './La cannelle.png';
import pimentPdf from './Le piment de cayenne.pdf';
import pimentPng from './Le piment de cayenne.png';
import curcumaPdf from './Le curcuma.pdf';
import curcumaPng from './Le curcuma.png';
import gingembrePdf from './Le gingembre.pdf';
import gingembrePng from './Le gingembre.png';

export interface ActualiteData {
  id: string;
  title: string;
  intro: string;
  img: string;
  pdf: string;
  numberOfPage: number;
}

function randomId(): string {
  return String(Math.floor(Math.random() * 1e9));
}

export const actualites: ActualiteData[] = [
  {
    id: randomId(),
    title: 'La cannelle',
    intro:
      'Originaire de Ceylan, le cannelier fournit une écorce fortement parfumée. La cannelle est associée à l’idée du sucré bien qu’utilisée aussi dans des préparations culinaires salées.',
    img: cannellePng,
    pdf: cannellePdf,
    numberOfPage: 1,
  },
  {
    id: randomId(),
    title: 'Le curcuma',
    intro:
      'Ce rhizome, proche du gingembre, a été apporté de Chine par Marco Polo. Sa belle couleur jaune doré, rappelant celle du safran, a séduit, d’autant plus qu’il s’est avéré moins onéreux.',
    img: curcumaPng,
    pdf: curcumaPdf,
    numberOfPage: 1,
  },
  {
    id: randomId(),
    title: "L'ail",
    intro:
      'C’est la reine des herbes ! L’ail cultivée et l’ail des ours, la variété sauvage, sont connues pour leurs bienfaits depuis l’Antiquité, de l’Occident à l’Extrême-Orient. Les bâtisseurs de pyramides en consommaient et Hyppocrate utilisait l’ail pour soigner les cancers du sein et de la prostate.',
    img: ailPng,
    pdf: ailPdf,
    numberOfPage: 1,
  },
  {
    id: randomId(),
    title: 'Le piment de cayenne',
    intro:
      'Ce piment rouge est utilisé depuis des millénaires par les natifs d’Amérique du Nord et dans les cultures traditionnelles de l’Inde et de la Chine. Outre son utilisation culinaire, ses propriétés médicinales ancestrales sont parvenues jusqu’à nous.',
    img: pimentPng,
    pdf: pimentPdf,
    numberOfPage: 1,
  },
  {
    id: randomId(),
    title: 'Le gingembre',
    intro:
      'Frais ou sec, antispasmodique, carminatif, c’est notre allier digestion. C’est un excellent agent préventif des affections de la sphère digestive: gastrites et autres infections gastro-intestinale.Cette protection est due à son huile essentielle (gingérol) qui augmente les sécrétions de salive et desucs digestifs.',
    img: gingembrePng,
    pdf: gingembrePdf,
    numberOfPage: 1,
  },
];
