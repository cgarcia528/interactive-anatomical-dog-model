import layer1 from "./layer1.png";
import layer2 from "./layer2.png";
import layer3 from "./layer3.png";
import layer4 from "./layer4.png";
import layer5 from "./layer5.png";
import layer6 from "./layer6.png";
import layer7 from "./layer7.png";
import layer8 from "./layer8.png";
import layer9 from "./layer9.png";
import layer10 from "./layer10.png";
import layer11 from "./layer11.png";
import dogsvg from "../DOGSVG";
import musclesJSON from "../muscles.json";
const textFields = [
  {
    id: 0,
    text: "This is sample text 0",
    array: [
      {
        panelTitle: "Hey0!",
        panelSubtitle: "Hey0",
        panelText: "this is sample text0",
      },
    ],
  },
  {
    id: 1,
    text: "This is sample text 1",
    array: [
      {
        panelTitle: "Hey1!",
        panelSubtitle: "Hey1",
        panelText: "this is sample text1",
      },
    ],
  },
  {
    id: 2,
    text: "This is sample text 2",
    array: [
      {
        panelTitle: "Hey2!",
        panelSubtitle: "Hey2",
        panelText: "this is sample text2",
      },
    ],
  },
  {
    id: 3,
    text: "This is sample text 3",
    array: [
      {
        panelTitle: "Hey3!",
        panelSubtitle: "Hey3",
        panelText: "this is sample text3",
      },
    ],
  },
  {
    id: 4,
    text: "This is sample text 4",
    array: [
      {
        panelTitle: "Hey4!",
        panelSubtitle: "Hey4",
        panelText: "this is sample text4",
      },
    ],
  },
  {
    id: 5,
    text: "This is sample text 5",
    array: [
      {
        panelTitle: "Hey5!",
        panelSubtitle: "Hey5",
        panelText: "this is sample text5",
      },
    ],
  },
  // {
  //   id: 6,
  //   text: "This is sample text 6",
  //   array: [
  //     {
  //       panelTitle: "Hey6!",
  //       panelSubtitle: "Hey6",
  //       panelText: "this is sample text6",
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   text: "This is sample text 7",
  //   array: [
  //     {
  //       panelTitle: "Hey7!",
  //       panelSubtitle: "Hey7",
  //       panelText: "this is sample text7",
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   text: "This is sample text 8",
  //   array: [
  //     {
  //       panelTitle: "Hey8!",
  //       panelSubtitle: "Hey8",
  //       panelText: "this is sample text8",
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   text: "This is sample text 9",
  //   array: [
  //     {
  //       panelTitle: "Hey9!",
  //       panelSubtitle: "Hey9",
  //       panelText: "this is sample text9",
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   text: "This is sample text 10",
  //   array: [
  //     {
  //       panelTitle: "Hey10!",
  //       panelSubtitle: "Hey10",
  //       panelText: "this is sample text10",
  //     },
  //   ],
  // },
];

export const ButtonImageContainer = [
  // {
  //   buttonName: "Muscles (100s)",
  //   imageName: layer1,
  //   textField: textFields[0].text,
  // },
  // {
  //   buttonName: "Muscles (200s)",
  //   imageName: layer2,
  //   textField: textFields[1].text,
  // },
  // {
  //   buttonName: "Muscles (300s)",
  //   imageName: layer3,
  //   textField: textFields[2].text,
  // },
  // {
  //   buttonName: "Muscles (400s)",
  //   imageName: layer4,
  //   textField: textFields[3].text,
  // },
  // {
  //   buttonName: "Muscles (500s)",
  //   imageName: layer5,
  //   textField: textFields[4].text,
  // },
  {
    buttonName: "Muscles (600s)",
    imageName: dogsvg,
    textField: textFields[5].text,
    jsonName: musclesJSON,
  },
  // {
  //   buttonName: "Forelimb/Hindlimb Medial Superficial Layer",
  //   imageName: layer7,
  //   textField: textFields[6].text,
  // },
  // {
  //   buttonName: "Forelimb/Hindlimb Medial Deep Layer",
  //   imageName: layer8,
  //   textField: textFields[7].text,
  // },
  // {
  //   buttonName: "Forelimb/Hindlimb Lateral Deep Layer",
  //   imageName: layer9,
  //   textField: textFields[8].text,
  // },
  // {
  //   buttonName: "Forelimb/Hindlimb Lateral Middle Layer",
  //   imageName: layer10,
  //   textField: textFields[9].text,
  // },
  // {
  //   buttonName: "Forelimb/Hindlimb Lateral Superficial Layer",
  //   imageName: layer11,
  //   textField: textFields[10].text,
  // },
];

export default { ButtonImageContainer };
