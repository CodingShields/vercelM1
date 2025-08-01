import burkinaImageOne from "./burkina/burkina-image-one-min.jpg";
import burkinaImageTwo from "./burkina/burkina-image-two-min.jpg";
import burkinaImageThree from "./burkina/burkina-image-three-min.jpg";
import congoImageOne from "./congo/congo-image-one-min.jpg";
import congoImageTwo from "./congo/congo-image-two-min.jpg";
import congoImageThree from "./congo/congo-image-three-min.jpg";
import cubaImageOne from "./cuba/cuba-image-one-min.jpg";
import cubaImageTwo from "./cuba/cuba-image-two-min.jpg";
import cubaImageThree from "./cuba/cuba-image-three-min.jpg";
import dominicanImageOne from "./dominican/dominican-image-one-min.jpg";
import dominicanImageTwo from "./dominican/dominican-image-two-min.jpg";
import dominicanImageThree from "./dominican/dominican-image-three-min.jpg";
import dominicanImageFour from "./dominican/dominican-image-four-min.jpg";
import indiaAmImageOne from "./india-ammapettai/india-am-image-one-min.jpg";
import indiaAmImageTwo from "./india-ammapettai/india-am-image-two-min.jpg";
import indiaAmImageThree from "./india-ammapettai/india-am-image-three-min.jpg";
import indiaGuImageOne from "./india-guwahati/india-gu-image-one-min.jpg";
import indiaGuImageTwo from "./india-guwahati/india-gu-image-two-min.jpg";
import indiaGuImageThree from "./india-guwahati/india-gu-image-three-min.jpg";
import kenyaDagImageOne from "./kenya-dagoretti/kenya-dag-image-one-min.jpg";
import kenyaDagImageTwo from "./kenya-dagoretti/kenya-dag-image-two-min.jpg";
import kenyaDagImageThree from "./kenya-dagoretti/kenya-dag-image-three-min.jpg";
import kenyaMalaaImageOne from "./kenya-malaa/kenya-malaa-image-one-min.jpg";
import kenyaMalaaImageTwo from "./kenya-malaa/kenya-malaa-image-two-min.jpg";
import kenyaMalaaImageThree from "./kenya-malaa/kenya-malaa-image-three-min.jpg";
import nepalImageOne from "./nepal/nepal-image-one-min.jpg";
import nepalImageTwo from "./nepal/nepal-image-two-min.jpg";
import nepalImageThree from "./nepal/nepal-image-three-min.jpg";
import salvadorImageOne from "./salvador/salvador-image-one-min.jpg";
import salvadorImageTwo from "./salvador/salvador-image-two-min.jpg";
import salvadorImageThree from "./salvador/salvador-image-three-min.jpg";
import senegalImageOne from "./senegal/senegal-image-one-min.jpg";
import senegalImageTwo from "./senegal/senegal-image-two-min.jpg";
import zimImageOne from "./zimbabwe/zim-image-one-min.jpg";
import zimImageTwo from "./zimbabwe/zim-image-two-min.jpg";
import zimImageThree from "./zimbabwe/zim-image-three-min.jpg";
import zimImageFour from "./zimbabwe/zim-image-four-min.jpg";
const locationData = [
  {
    id: 0,
    value: "barkunda-nepal ",
    hasMultiple: false,
    state: "Barkunda",
    country: "Nepal",
    location: "Barkunda, Nepal",
    leaders: "Pastor Jeetendra Tiruwa",
    situation:
      "The church currently meets in  homes and averages 60+ adults and 40+ children",
    cost: "$35,000",
    images: [nepalImageOne, nepalImageTwo, nepalImageThree],
    className:
      "absolute top-80 left-96 translate-x-[455px] -translate-y-[104px] cursor-pointer ",
  },
  {
    id: 1,
    value: "kikanda-congo",
    hasMultiple: false,
    location: "Kikanda, Congo",
    state: "Kikanda",
    country: "Congo",
    leaders: "Christian + Shawna Hendrick",
    situation:
      "The church is currently meeting in a rented facility and the land is ready",
    cost: "$58,000",
    images: [congoImageOne, congoImageTwo, congoImageThree],
    className:
      "absolute top-80 left-96 translate-x-[250px] -translate-y-[-10px] cursor-pointer",
  },
  {
    id: 2,
    value: "dahara-senegal",
    hasMultiple: false,
    location: "Dahara, Senegal",
    state: "Dahara",
    country: "Senegal",
    leaders: "Pastor Oumar + Rougui Diallo",
    situation: "The church is currently meeting in a rented facility",
    cost: "$21,000",
    images: [senegalImageOne, senegalImageTwo],
    className:
      "absolute top-80 left-96 translate-x-[116px] -translate-y-[50px] cursor-pointer",
  },
  {
    id: 3,
    value: "los-pinos-cuba",
    hasMultiple: false,
    location: "Los Pinos, Cuba",
    state: "Los Pinos",
    country: "Cuba",
    leaders: "Pastor Enrique + Annette Chaviano",
    situation: "The church is currently meeting outside",
    cost: "$58,000",
    images: [cubaImageOne, cubaImageTwo, cubaImageThree],
    className:
      "absolute top-60 left-40 translate-x-[110px] translate-y-1 cursor-pointer ",
    locationHelperStyle:
      "absolute top-60 left-40 translate-x-[110px] translate-y-1 cursor-pointer",
  },
  {
    id: 4,
    value: "burkina-faso",
    hasMultiple: false,
    location: "Burkina Faso",
    state: null,
    country: "Burkina Faso",
    leaders: "Pastor Douninoma + Tamar Korgo",
    situation: "The church is currently meeting outside",
    cost: "$35,000",
    images: [burkinaImageOne, burkinaImageTwo, burkinaImageThree],
    className:
      "absolute top-80 left-96 translate-x-[165px] -translate-y-[40px] cursor-pointer",
  },
  {
    id: 5,
    value: "kenya",
    hasMultiple: true,
    locations: [
      {
        id: 5.1,
        value: "dagoretti-kenya",
        location: "Dagoretti, Kenya",
        state: "Dagoretti",
        country: "Kenya",
        leaders: "Jim + Sybill Eberhard",
        situation: "The church is currently meeting outside",
        cost: "$23,000",
        images: [kenyaDagImageOne, kenyaDagImageTwo, kenyaDagImageThree],
      },
      {
        id: 5.2,
        value: "malaa-kenya",
        location: "Malaa, Kenya",
        state: "Malaa",
        country: "Kenya",
        leaders: "Jim + Sybill Eberhard",
        situation: "The church is currently meeting in a sheet metal shed ",
        cost: "$21,000",
        images: [kenyaMalaaImageOne, kenyaMalaaImageTwo, kenyaMalaaImageThree],
      },
    ],
    className:
      "absolute top-80 left-96 translate-x-[300px] translate-y-6 cursor-pointer",
  },

  {
    id: 6,
    value: "harare-zimbabwe",
    hasMultiple: false,
    location: "Harare, Zimbabwe",
    state: "Harare",
    country: "Zimbabwe",
    leaders: "Nyandoro + Lovemore Mpandzula Vincent Luwizhi (YWAM)",
    situation: "The church is currently meeting in a mud brick shelter",
    cost: "$30,000",
    images: [zimImageOne, zimImageTwo, zimImageThree, zimImageFour],
    className:
      "absolute top-60 left-96 translate-x-[275px] translate-y-[170px] cursor-pointer",
  },
  {
    id: 8,
    value: "el-salvador",
    state: null,
    country: "El Salvador",
    hasMultiple: false,
    location: "Los americas, El salvador",
    leaders: "Pastor Davis + Myra Reyes",
    situation: "The church is currentlymeeting in mobile locations",
    cost: "$21,000",
    images: [salvadorImageOne, salvadorImageTwo, salvadorImageThree],
    className:
      "absolute top-64 left-48 translate-x-10 -translate-y-2 cursor-pointer",
  },
  {
    id: 9,
    value: "ammapettai-india",
    hasMultiple: false,
    location: "Ammapettai, India",
    state: "Ammapettai",
    country: "India",
    leaders: "Pastor Samuel + Anna Jayakumar",
    situation:
      "The church is currently meeting overflowing rentals and needing a permanent space",
    cost: "$40,000",
    images: [indiaAmImageOne, indiaAmImageTwo, indiaAmImageThree],
    className:
      "absolute top-72 left-48 translate-x-[645px] translate-y-[4px] cursor-pointer",
  },
  {
    id: 10,
    value: "guwahati-india ",
    hasMultiple: false,
    location: "Guwahati, India",
    state: "Guwahati",
    country: "India",
    leaders: "Pastor Bendang + Aka Aier",
    situation:
      "The church is currently meeting rented building owned by Muslims",
    cost: "$75,000",
    images: [indiaGuImageOne, indiaGuImageTwo, indiaGuImageThree],
    className: "absolute top-56 left-48 translate-x-[685px] cursor-pointer",
  },
  {
    id: 11,
    value: "bavaro-dominican",
    state: "Bavaro",
    country: "Dominican Republic",
    hasMultiple: false,
    location: "Bavaro, Dominican",
    leaders: "Pastor Rafael + Kirsy Espinal Jonathan Autrey",
    situation:
      "The church is currently meeting in an unfinished block building",
    cost: "$46,000",
    images: [
      dominicanImageOne,
      dominicanImageTwo,
      dominicanImageThree,
      dominicanImageFour,
    ],
    className:
      "absolute top-60 left-40 translate-x-[145px] translate-y-4 cursor-pointer",
  },
];

export default locationData;
