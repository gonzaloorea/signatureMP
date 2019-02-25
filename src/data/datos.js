// Dataset sedes
let sedesMP = [
   {
    nombresede: 'Cartuja-Sevilla',
    direccion1 : 'PCT Cartuja C/Leonardo da Vinci, 15',
    direccion2 : '41092 Sevilla, España',
    telefono1 : '0034 902 197 277',
    telefono2 : '0034 902 197 277',
    fax : '0034 902 197 277',
    logoname : 'MP',
    imagensede:'cartuja.jpg'
  },
  {
    nombresede: 'Calonge-Sevilla',
    direccion1 : 'Pol. Ind. Calonge, C/Metalurgia, 5',
    direccion2 : '41007 Sevilla, España',
    telefono1 : '0034 955 635 830',
    telefono2 : '0034 955 635 830',
    fax : '0034 955 635 830',
    logoname : 'MP',
    imagensede:'calonge.jpg'
  },
  {
    nombresede: 'Malpica-Zaragoza',
    direccion1 : 'Pol. Ind. Malpica, Calle D, parcela 99-100 (Muelle 61)',
    direccion2 : '50016 Zaragoza, España',
    telefono1 : '0034 976 654 540',
    telefono2 : '0034 976 654 534',
    fax : '0034 976 654 534',
    logoname : 'MP',
    imagensede:'malpica.jpg'
  },
  {
    nombresede: 'Austria DTC',
    direccion1 : 'Triesterstraße 14',
    direccion2 : '2351 Wr. Neudorf, Austria',
    telefono1 : '0043 (0)2236 865626',
    telefono2 : '',
    fax : '',
    logoname : 'MP',
    imagensede:'austria.jpg'
  },
  {
    nombresede: 'France DTC',
    direccion1 : '4 Allée du Carré',
    direccion2 : '92230 Gennevilliers, France',
    telefono1 : '0033(0) 1 41 47 42 30',
    telefono2 : '',
    fax : '',
    logoname : 'MP',
    imagensede:'france.jpg'
  },
  {
    nombresede: 'The Netherlands DTC',
    direccion1 : 'De stek 8b',
    direccion2 : 'Wieringerwerf – 1771 SP, The Netherlands',
    telefono1 : '0031 (0) 227 600 400',
    telefono2 : '',
    fax : '',
    logoname : 'MP',
    imagensede:'holland.jpg'
  },
  {
    nombresede: 'MP ALTOR headquarters',
    direccion1 : '37 Rue Voltaire',
    direccion2 : '93700 Drancy, France',
    telefono1 : '0033 148 310 610',
    telefono2 : '0033 148 310 610',
    fax : '0033 148 310 630',
    logoname : 'MP ALTOR',
    imagensede:'altor.jpg'
  },
  {
    nombresede: 'MP ARVOR headquarters',
    direccion1 : '6 Rue du Pasteur Crespin',
    direccion2 : '22000 Saint-Brieuc, Francia',
    telefono1 : '0033 02 96 424 753',
    telefono2 : '',
    fax : '0033 148 310 630',
    logoname : 'MP ARVOR',
    imagensede:'arvor.jpg'
  },
  {
    nombresede: 'MP DEVENCO headquarters',
    direccion1 : 'AMERSFOORT Algolweg 13,',
    direccion2 : '3821 BG, Nederland',
    telefono1 : '0031 033 - 456 66 31',
    telefono2 : '',
    fax : '0031 033 - 456 66 31',
    logoname : 'MP DEVENCO',
    imagensede:'devenco.jpg'
  },
  {
    nombresede: 'MP PROLIFT headquarters',
    direccion1 : 'ul. Kościelna 21',
    direccion2 : '60-536 Poznan, Poland',
    telefono1 : '0048 61 845 59 00',
    telefono2 : '',
    fax : '',
    logoname : 'MP PROLIFT',
    imagensede:'proliftpoznan.jpg'
  }
  ,
  {
    nombresede: 'MP PROLIFT center',
    direccion1 : 'ul. Poleczki 40',
    direccion2 : '02-822, Warszawa, Poland',
    telefono1 : '0048 22 647 07 01',
    telefono2 : '',
    fax : '',
    logoname : 'MP PROLIFT',
    imagensede:'proliftwarszawa.jpg'
  }
];
// Dataset logos
let logosMP = [
  {
    id:1,
    name : 'MP',
    path : 'MP',
    emaildomain : {
      es : 'mpascensores.com',
      en : 'mplifts.com',
      fr : 'mpascenseurs.com',
      de : 'mpaufzuegue.com'
    },
    webdomain : {
      es : 'mpascensores.com',
      en : 'mplifts.com',
      fr : 'mpascenseurs.com',
      de : 'mpaufzuegue.com',
    }
  },
  {
    id:2,
    name : 'MP ALTOR',
    path : 'MP-ALTOR',
    emaildomain : {
      fr : 'mpaltor.com',
    },
    webdomain : {
      fr : 'mpascenseurs.fr'
    }

  },
  {
    id:3,
    name : 'MP ARVOR',
    path : 'MP-ARVOR',
    emaildomain: {
      fr : 'mpascenseurs.com',
    },
    webdomain : {
      fr : 'mpascenseurs.fr'
    }
  },
  {
    id:4,
    name : 'MP DEVENCO',
    path : 'MP-DEVENCO',
    emaildomain : {
      nl : 'mpliften.com',
    },
    webdomain: {
      nl : 'mpliften.nl'
    }
  },
  {
    id:5,
    name : 'MP PROLIFT',
    path : 'MP-PROLIFT',
    emaildomain : {
      pl : 'mplifts.com',
    },
    webdomain: {
      pl : 'mplifts.pl'
    }
  }

];


export {sedesMP,logosMP};