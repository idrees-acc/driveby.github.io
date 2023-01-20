const brands = [
  "AUDI",
  "BENTLEY",
  "BMW",
  "DATSUN",
  "FIAT",
  "FORD",
  "HONDA",
  "HYUNDAI",
  "JAGUAR",
  "JEEP",
  "KIA",
  "LAMBORGHINI",
  "LANDROVER",
  "LEXUS",
  "MAHINDRA",
  "MARUTISUZUKI",
  "MASERATI",
  "MERCEDESBENZ",
  "MGMOTORS",
  "MINI",
  "MITSUBISHI",
  "NISSAN",
  "PORSCHE",
  "RANGEROVER",
  "RENAULT",
  "ROLLSROYCE",
  "SKODA",
  "TATA",
  "TOYOTA",
  "VOLKSWAGON",
  "VOLVO",
];
const modelDetails = [
  {
    type: "HATCH-B",
    premiumWash: 499,
    interiorDeepCleaning: 1999,
    exteriorCleaning: 1999,
    completeCarSpa: 2999,
    fullDetailing: 4999,
    bronze: 9999,
    silver: 11999,
    gold: 16999,
    platinum: 20999,
  },
  {
    type: "SEDAN",
    premiumWash: 599,
    interiorDeepCleaning: 2499,
    exteriorCleaning: 2499,
    completeCarSpa: 3799,
    fullDetailing: 5999,
    bronze: 11999,
    silver: 14999,
    gold: 18999,
    platinum: 24999,
  },
  {
    type: "Compac SUV",
    premiumWash: 599,
    interiorDeepCleaning: 2499,
    exteriorCleaning: 2499,
    completeCarSpa: 3799,
    fullDetailing: 5999,
    bronze: 11999,
    silver: 14999,
    gold: 18999,
    platinum: 24999,
  },
  {
    type: "SUV",
    premiumWash: 699,
    interiorDeepCleaning: 2999,
    exteriorCleaning: 2999,
    completeCarSpa: 4499,
    fullDetailing: 9999,
    bronze: 12999,
    silver: 17999,
    gold: 22999,
    platinum: 33999,
  },
  {
    type: "L-HATCH-B",
    premiumWash: 799,
    interiorDeepCleaning: 3499,
    exteriorCleaning: 3499,
    completeCarSpa: 5299,
    fullDetailing: 10999,
    bronze: 14999,
    silver: 20999,
    gold: 25999,
    platinum: 36999,
  },
  {
    type: "L-SEDAN",
    premiumWash: 899,
    interiorDeepCleaning: 3999,
    exteriorCleaning: 3999,
    completeCarSpa: 5999,
    fullDetailing: 11999,
    bronze: 16999,
    silver: 23999,
    gold: 29999,
    platinum: 42999,
  },
  {
    type: "L-Compac SUV",
    premiumWash: 899,
    interiorDeepCleaning: 3999,
    exteriorCleaning: 3999,
    completeCarSpa: 5999,
    fullDetailing: 11999,
    bronze: 16999,
    silver: 23999,
    gold: 29999,
    platinum: 42999,
  },
  {
    type: "L-SUV",
    premiumWash: 999,
    interiorDeepCleaning: 4499,
    exteriorCleaning: 4499,
    completeCarSpa: 6799,
    fullDetailing: 12999,
    bronze: 18999,
    silver: 27999,
    gold: 33999,
    platinum: 48999,
  },
];
let brandValue;
const model = [
  [
    "A3|L-SEDAN",
    "A4|L-SEDAN",
    "A6|L-SEDAN",
    "A8|L-SEDAN",
    "etron|L-Compac SUV",
    "Q2|L-Compac SUV",
    "Q3|L-Compac SUV",
    "Q5|L-Compac SUV",
    "Q7|L-SUV",
    "Q8|L-SUV",
    "S5|L-SEDAN",
  ],
  ["Bentayga|L-SUV", "Continental|L-SEDAN", "FlyingSpur|L-SEDAN"],
  [
    "2Series|L-SEDAN",
    "3Series|L-SEDAN",
    "5Series|L-SEDAN",
    "6Series|L-SEDAN",
    "7Series|L-SEDAN",
    "8Series|L-SEDAN",
    "i4|L-SEDAN",
    "X1|L-SUV",
    "X2|L-SUV",
    "X3|L-SUV",
    "X4|L-SUV",
    "X5|L-SUV",
    "X6|L-SUV",
    "X7|L-SUV",
    "Z4|L-SEDAN",
  ],
  ["Datsun-Go|HATCH-B", "Datsun-Go+|Compac SUV", "Redi-Go|HATCH-B"],
  ["Avventura|SUV", "Linea|SEDAN", "Punto|HATCH-B", "Punto-Abarth|HATCH-B"],
  [
    "Aspire|SEDAN",
    "Ecosport|Compac SUV",
    "Endeavour|SUV",
    "Figo|HATCH-B",
    "Freestyle|HATCH-B",
  ],
  [
    "Accord|SEDAN",
    "Amaze|HATCH-B",
    "Brio|HATCH-B",
    "City|SEDAN",
    "Civic|SEDAN",
    "Honda-HRV|Compac SUV",
    "Honda-WRV|HATCH-B",
    "Jazz|HATCH-B",
  ],
  [
    "Alcazar|SEDAN",
    "Aura|HATCH-B",
    "Creta|Compac SUV",
    "i10|HATCH-B",
    "i20|HATCH-B",
    "Kona|Compac SUV",
    "Santro|HATCH-B",
    "Tucson|Compac SUV",
    "Venue|Compac SUV",
    "Verna|Compac SUV",
  ],
  [
    "E-Pace|L-SUV",
    "F-Pace|L-SUV",
    "F-Type|L-SEDAN",
    "I-Pace|L-SUV",
    "XF|L-SEDAN",
  ],
  ["Cherokee|L-SUV", "Compass|Compac SUV", "Meridian|SUV", "Wrangler|L-SUV"],
  [
    "Carens|Compac SUV",
    "Carnival|SUV",
    "EV6|Compac SUV",
    "Seltos|Compac SUV",
    "Sonet|HATCH-B",
  ],
  ["Urus|L-SUV"],
  ["Defender|L-SUV", "Discovery|L-SUV", "Velar|L-SUV"],
  [
    "LexusES|L-SEDAN",
    "LexusLS|L-SEDAN",
    "LexusLX|L-SUV",
    "LexusNX|L-SUV",
    "LexusRX|L-SUV",
  ],
  [
    "Alturas|SUV",
    "Bolero|SUV",
    "BoleroNEO|SUV",
    "eVerito|SEDAN",
    "KUV|HATCH-B",
    "Marazzo|SUV",
    "Scorpio|SUV",
    "ScorpioN|SUV",
    "Thar|SUV",
    "TUV300|Compac SUV",
    "TUV500|SUV",
    "XUV300|Compac SUV",
    "XUV500|SUV",
    "XUV700|SUV",
    "Xylo|SUV",
  ],
  [
    "Alto|HATCH-B",
    "S-presso|HATCH-B",
    "Celerio|HATCH-B",
    "WagonR|HATCH-B",
    "Ignis|HATCH-B",
    "Swift|HATCH-B",
    "Baleno|HATCH-B",
    "Eco|Compac SUV",
    "Dzire|SEDAN",
    "Brezza|Compac SUV",
    "Ciaz|SEDAN",
    "XL6|SUV",
    "Ertiga|SUV",
    "S-Cross|Compac SUV",
  ],
  ["Ghibli|L-SEDAN", "Levante|L-SEDAN", "Quattroporte|L-SEDAN"],
  [
    "A-Class|L-HATCH-B",
    "A-Class-Limo|L-SEDAN",
    "C-Class|L-SEDAN",
    "E-Class|L-SEDAN",
    "EQC|L-SUV",
    "EQS|L-SEDAN",
    "G-Class|L-SUV",
    "GLA|L-Compac SUV",
    "GLC Coupe|L-SUV",
    "GLC-Class|L-Compac SUV",
    "GLE|L-SUV",
    "GLE Coupe|L-SUV",
    "GLS|L-SUV",
    "Maybach S-Class|L-SUV",
    "S-Class|L-SEDAN",
  ],
  ["Astor|Compac SUV", "Gloster|SUV", "Hector|SUV", "ZS EV|Compac SUV"],
  ["Cooper|L-HATCH-B", "Countryman|L-HATCH-B"],
  ["Pajero|SUV"],
  ["Kicks|Compac SUV", "Magnite|Compac SUV"],
  ["Cayenne|L-SUV"],
  ["RR|L-SUV", "RR-Evoque|L-SUV", "RR-Sports|L-SUV"],
  ["Kiger|Compac SUV", "Kwid|HATCH-B", "Triber|Compac SUV"],
  ["Dawn|L-SUV", "Ghost|L-SUV", "Phantom|L-SUV"],
  [
    "Kodiaq|SUV",
    "Kushaq|Compac SUV",
    "Octavia|SEDAN",
    "Slavia|SEDAN",
    "Superb|SEDAN",
  ],
  [
    "Altroz|HATCH-B",
    "Harrier|SUV",
    "Nexon|Compac SUV",
    "Nexon-EV|Compac SUV",
    "Punch|HATCH-B",
    "Safari|SUV",
    "Tiago|HATCH-B",
    "Tigor|SEDAN",
    "Xpress-T|SEDAN",
  ],
  [
    "Camry|SEDAN",
    "Etios|HATCH-B",
    "Etios - Sedan|SEDAN",
    "Fortuner|SUV",
    "Glanza|HATCH-B",
    "Innova|SUV",
    "Urban Cruiser|Compac SUV",
    "Velfire|SUV",
  ],
  [
    "Jetta|SEDAN",
    "Passat|SEDAN",
    "Polo|HATCH-B",
    "Taigun|Compac SUV",
    "Tiguan|Compac SUV",
    "Virtus|SEDAN",
  ],
  [
    "S60|L-SEDAN",
    "S90|L-SEDAN",
    "XC40|L-Compac SUV",
    "XC60|L-Compac SUV",
    "XC90|L-SUV",
  ],
];
