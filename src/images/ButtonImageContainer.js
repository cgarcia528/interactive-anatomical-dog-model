import imageImport, { EightHundredsPic, FiveHundredsPic, FourHundredsPic, HundredsPic, NineHundredsPic, OneHundredThousandsPic, OneThousandsPic, SevenHundredsPic, SixHundredsPic, ThreeHundredsPic, TwoHundredsPic } from '../images/imageImport';
import JsonImport, { EightHundreds, FiveHundreds, FourHundreds, Hundreds, NineHundreds, OneHundredThousands, OneThousands, SevenHundreds, SixHundreds, ThreeHundreds, TwoHundreds } from '../json/jsonImport';

export const ButtonImageContainer = [
  {
    buttonName: "Muscles (100s)",
    imageName: HundredsPic,
    textField: Hundreds
  },
  {
    buttonName: "Muscles (200s)",
    imageName: TwoHundredsPic,
    textField: TwoHundreds
  },
  {
    buttonName: "Muscles (300s)",
    imageName: ThreeHundredsPic,
    textField: ThreeHundreds
  },
  {
    buttonName: "Muscles (400s)",
    imageName: FourHundredsPic,
    textField: FourHundreds,
  },
  {
    buttonName: "Muscles (500s)",
    imageName: FiveHundredsPic,
    textField: FiveHundreds,
  },
  {
    buttonName: "Muscles (600s)",
    imageName: SixHundredsPic,
    textField: SixHundreds,
  },
  {
    buttonName: "Forelimb/Hindlimb Medial Superficial Layer",
    imageName: SevenHundredsPic,
    textField: SevenHundreds,
  },
  {
    buttonName: "Forelimb/Hindlimb Medial Deep Layer",
    imageName: EightHundredsPic,
    textField: EightHundreds,
  },
  {
    buttonName: "Forelimb/Hindlimb Lateral Deep Layer",
    imageName: NineHundredsPic,
    textField: NineHundreds,
  },
  {
    buttonName: "Forelimb/Hindlimb Lateral Middle Layer",
    imageName: OneThousandsPic,
    textField: OneThousands,
  },
  {
    buttonName: "Forelimb/Hindlimb Lateral Superficial Layer",
    imageName: OneHundredThousandsPic,
    textField: OneHundredThousands,
  },
];

export default { ButtonImageContainer };
