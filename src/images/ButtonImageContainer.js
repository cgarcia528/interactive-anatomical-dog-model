import {
  EightHundreds,
  FiveHundreds,
  FourHundreds,
  Hundreds,
  NineHundreds,
  OneHundredThousands,
  OneThousands,
  SevenHundreds,
  SixHundreds,
  ThreeHundreds,
  TwoHundreds,
} from "../json/jsonImport";

import HundredsPic from "./layer1.png";
import TwoHundredsPic from "./layer2.png";
import ThreeHundredsPic from "./layer3.png";
import FourHundredsPic from "./layer4.png";
import FiveHundredsPic from "./layer5.png";
import SixHundredsPic from "./layer6.png";
import SevenHundredsPic from "./layer7.png";
import EightHundredsPic from "./layer8.png";
import NineHundredsPic from "./layer9.png";
import OneThousandsPic from "./layer10.png";
import OneHundredThousandsPic from "./layer11.png";

export const ButtonImageContainer = [
  {
    buttonName: "Muscles (100s)",
    imageName: HundredsPic,
    textField: Hundreds,
  },
  {
    buttonName: "Muscles (200s)",
    imageName: TwoHundredsPic,
    textField: TwoHundreds,
  },
  {
    buttonName: "Muscles (300s)",
    imageName: ThreeHundredsPic,
    textField: ThreeHundreds,
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

export default ButtonImageContainer;
