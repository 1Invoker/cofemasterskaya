const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const baseUrl = 'https://remont-kofemashin-servis.ru';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/articles', changefreq: 'daily', priority: 0.8 },
  { url: '/neispravnosti', changefreq: 'weekly', priority: 0.7 },
  { url: '/city', changefreq: 'weekly', priority: 0.8 },
  { url: '/district', changefreq: 'weekly', priority: 0.8 },
  { url: '/brand', changefreq: 'weekly', priority: 0.8 },
  { url: '/type', changefreq: 'weekly', priority: 0.7 },
  { url: '/neispravnosti/', changefreq: 'weekly', priority: 0.7 },
];

const cities = [
  'alabushevo', 'andreevka', 'aprelevka', 'balashikha', 'barvikha', 'barybino', 
  'beloozerskiy', 'bronnitsy', 'bykovo', 'vereya', 'vyoshki', 'vidnoye', 
  'vladimir', 'vlasiha', 'poselok-vnukovo', 'volokolamsk', 'voskresensk', 
  'vostryakovo', 'voskresensk', 'golitsyno', 'dedovsk', 'dzerzhinskiy', 'dmitrov', 
  'dolgoprudnyy', 'domodedovo', 'drezna', 'dubna', 'egorevsk', 'zhavoronki', 
  'zheleznodorozhnyy', 'zhukovskiy', 'zagoryanskiy', 'zaprudnya', 'zaraysk', 
  'zarechye', 'zvenigorod', 'zelenograd', 'ivanteyevka', 'iksha', 'ilinskiy', 
  'istra', 'kalininets', 'kashira', 'klimovsk', 'klin', 'klyazma', 'kolomna', 
  'kommunarka', 'konakovo', 'korolyov', 'kotelniki', 'kraskovo', 'krasnoarmeysk', 
  'krasnogorsk', 'krasnozavodsk', 'krasnoznamensk', 'kratovo', 'kryokshino', 
  'kryukovo', 'kubinka', 'kupavna', 'kurovskoye', 'dikino-dulevo', 'lobnya', 
  'losino-petrovsky', 'lugovaya', 'lukhovitsy', 'lytkarino', 'lvovskiy', 
  'lyubertsy', 'malakhovka', 'mamontovka', 'mikhnevo', 'mozhaysk', 'monino', 
  'moskovskiy', 'mytishchi', 'naro-fominsk', 'nakhabino', 'nekrasovskiy', 
  'nemchinovka', 'noginsk', 'obukhovo', 'odintsovo', 'ozherelye', 'ozyory', 
  'opalikha', 'orekhovo-zuyevo', 'pavlovskaya-sloboda', 'pavlovskiy-posad', 
  'peresvet', 'petrovskoye', 'pirogovskiy', 'povarovo', 'podolsk', 'pravdinskiy', 
  'protvino', 'putilkovo', 'pushkino', 'pushchino', 'razvilka', 'ramenskoe', 
  'rasskazovka', 'rastunovo', 'reutov', 'roshal', 'ruza', 'rumyantsevo', 
  'salaryevo', 'selyatino', 'sergiev-posad', 'serpukhov', 'solnechnogorsk', 
  'sosenki', 'sofrino', 'staraya-kupavna', 'stolbovaya', 'stupino', 'skhodnya', 
  'taldom', 'tomilino', 'tryokhgorka', 'troitsk', 'tuchkovo', 'udelnaya', 
  'fryazino', 'fryanovo', 'khimki', 'khotkovo', 'chernogolovka', 'chekhov', 
  'shatura', 'shchyolkovo', 'shcherbinka', 'elektrogorsk', 'elektrostal', 
  'elektroougli', 'yakhroma'
];
const districts = [
  'alekseevskiy', 'akademicheskiy', 'altufyevskiy', 'arbat', 'aeroport', 
  'babushkinskiy', 'basmannyy', 'begovoy', 'beskudnikovskiy', 'bibirevo', 
  'biryulyovo-vostochnoye', 'biryulyovo-zapadnoye', 'bogorodskoe', 'brateevo', 
  'butovo-severnoye', 'butovo-yuzhnoye', 'butyrskiy', 'veshnyaki', 'vnukovo', 
  'voykovskiy', 'vostochniy', 'vykhino-zhulebino', 'gagarinskiy', 'golovinskiy', 
  'goljanovo', 'danilovskiy', 'degunino-vostochnoye', 'degunino-zapadnoye', 
  'dmitrovskiy', 'donskoy', 'dorogomilovo', 'zamoskvorechye', 'zyuzino', 
  'zyablikovo', 'ivanovskoye', 'izmaylovo', 'kapotnya', 'konkovo', 'koptevo', 
  'kosino-ukhtomskiy', 'kotlovka', 'krasnoselskiy', 'krylatskoye', 'kryukovo', 
  'kuzminki', 'kuntsevo', 'kurkino', 'levoberezhniy', 'lefortovo', 'lianozovo', 
  'lomonosovskiy', 'losinoostrovskiy', 'lyublino', 'marfino', 'maryina-roshcha', 
  'maryino', 'matushkino', 'medvedkovo-severnoye', 'medvedkovo-yuzhnoye', 
  'metrogorodok', 'meshchanskiy', 'mitino', 'mozhayskiy', 'molzhaninovskiy', 
  'moskvorechye-saburovo', 'nagatino-sadovniki', 'nagatinskiy-zaton', 'nagornyy', 
  'nekrasovka', 'nizhegorodskiy', 'novo-peredelkino', 'novogireevo', 
  'novokosino', 'obruchevskiy', 'orekhovo-borisovo-severnoye', 
  'orekhovo-borisovo-yuzhnoye', 'ostankinskiy', 'otradnoye', 
  'ochakovo-matveevskoye', 'perovo', 'pechatniki', 'pokrovskoe-streshnevo', 
  'preobrazhenskoye', 'presnenskiy', 'prospekt-vernadskogo', 'ramenki', 
  'rostokino', 'ryazanskiy', 'savelyki', 'savyolovskiy', 'sviblovo', 'severniy', 
  'silino', 'sokol', 'sokolinaya-gora', 'sokolniki', 'solntsevo', 
  'staroe-kryukovo', 'strogino', 'taganskiy', 'tverskoy', 'tekstilshchiki', 
  'timiryazevskiy', 'tyoply-stan', 'troparevo-nikulino', 'tushino-severnoye', 
  'tushino-yuzhnoye', 'filevskiy-park', 'fili-davydkovo', 'khamovniki', 'khovrino', 
  'khoroshyovo-mnyovniki', 'khoroshevskiy', 'tsaritsyno', 'cheremushki', 
  'chertanovo-severnoye', 'chertanovo-tsentralnoye', 'chertanovo-yuzhnoye', 
  'shchukino', 'yuzhnoportovyy', 'yakimanka', 'yaroslavskiy', 'yasenevo'
];
const brands = [
  "DeLonghi", "Kitfort", "Philips", "Krups", "Nivona", "Melitta", "Polaris", 
  "Saeco", "Bosch", "Jura", "Smeg", "Redmond", "Siemens", "Vitek", "Nespresso", 
  "Xiaomi", "Hibrew", "Miele", "Tuvio", "Garlyn", "Gaggia", "Kaffit-com", "Gorenje", 
  "Pioneer", "Rondell", "Brayer", "Electrolux", "Thomson", "Aeg", "Inhouse", 
  "Maunfeld", "Red-Solution", "KitchenAid", "Beko", "Wacaco", "Centek", 
  "Kuppersbusch", "Dr.Coffee", "Lelit", "Vista", "Oursson", "Ariete", "Neff", 
  "Hyundai", "BQ", "KaringBee", "Nescafe Dolce Gusto", "Caso", "Supra", 
  "Ningbo Rooma Electric", "Grundig", "Caffitaly", "Zelmer", "Russell Hobbs", 
  "JVC", "La Pavoni", "Nuova Simonelli", "Kyvol", "Teka", "GFgril", "Sate", 
  "Viatto", "Normann", "DEXP", "Kuppersberg", "Arcelik", "Asko", "First Austria", 
  "Home&Work", "Franke", "JONR", "Futula", "Sakura", "Zwilling", "Gaggenau", 
  "DSP", "RAF", "Proxima", "Sanremo", "SciShare", "Oulemei", "Rombica", 
  "De Dietrich", "Arzum Okka", "La Marzocco", "Delta", "Sencor", "Gasian", 
  "Breville", "Bravilor Bonamat", "Sage", "Clatronic", "Reoka", "Whirlpool", 
  "FrancisFrancis!", "Leran", "La Cimbali", "Graude", "Bugatti", "Ufesa", 
  "Donlim", "Conti", "Illy", "Gelberk", "Manya", "Hosta Home", "Rise", "Deerma", 
  "Kimbo", "Airhot", "Graef", "Korting", "Geniard", "EKSI", "Weissgauff", 
  "Bertazzoni", "Black+Decker", "Zepter", "Necta", "Aroma", "Fulgor Milano", 
  "KEF", "Solac", "Alvatto", "Cafe Silvestre", "Felfri", "Jacky’s", "Travola", 
  "Kuchenland", "SWAN", "Senix", "VARD", "ADRC Company", "Gemilai", "Proliss", 
  "Catler", "Carrera", "Manifesta", "Saint Coffee", "Agave", "Blaupunkt", 
  "BlitzWolf", "Caffiano", "Dauscher", "MIA", "OubaOloon", "Epeios", "Василиса", 
  "Аксинья", "MasterKofe", "WMF", "BORK", "ENDEVER", "EUPA", "Faber", "FAEMA", 
  "Gastroback", "Gemlux", "Indesit", "Kaffit", "Kambrook", "Kenwood", "La Spaziale", 
  "Laretti", "Panasonic", "Princess", "Rancilio", "Rommelsbacher", "Rowenta", 
  "Spinel", "Thermador", "WOLF", "WPM", "V-ZUG"
];
const issues = [
  "ne-vklyuchaetsya",
  "ne-kachaet-vodu",
  "ne-rabotaet-pomol",
  "ne-nalivet-kofe",
  "ne-podaet-penu",
  "ne-rabotayut-knopki",
  "protekaet",
  "ne-nagrevaet-vodu",
  "ne-vstavlyaetsya-blok",
  "ne-rabotaet-kapuchinator",
  "ne-rabotaet",
  "ne-rabotaet-pompa",
  "ne-varit-kofe",
  "ne-vzbivaet-moloko",
  "ne-vidit-vodu",
  "ne-vidit-kofe",
  "ne-goryachiy-kofe",
  "ne-greet"
];
const services = [
  "zamena-ili-remont-mikrovyklyuchateley",
  "zamena-ili-remont-zavarochnogo-bloka",
  "zamena-ili-remont-reduktora",
  "zamena-ili-remont-uplotnitelnogo-koltsa",
  "zamena-ili-remont-kofevoda",
  "zamena-ili-remont-kolets-shtutsera",
  "chistka-kofemolki",
  "zamena-ili-remont-zhernovov-nozhey",
  "zamena-schetchika-vody",
  "zamena-ili-remont-nasosa",
  "zamena-ili-remont-elektromagnitnogo-klapana",
  "udalenie-nakipi-i-chistka-gidrosistemy",
  "zamena-ili-remont-termostata",
  "zamena-ili-remont-predokhraniteley",
  "zamena-ili-remont-bloka-upravleniya",
  "zamena-ili-remont-tena-nagrevatelnogo-elementa",
  "zamena-ili-remont-koltsa-dozatora",
  "zamena-ili-remont-kofemolki",
  "smazka-vsekh-uzlov",
  "zamena-ili-remont-termobloka",
  "zamena-ili-remont-parobloka",
  "zamena-ili-remont-verkhnego-porshnya",
  "zamena-ili-remont-dvigatelya",
  "zamena-ili-remont-shtutsera",
  "zamena-ili-remont-kapuchinatora",
  "zamena-ili-remont-drenazhnoqo-klapana",
  "chistka-dispensera",
  "zamena-ili-remont-boylera",
  "dekaltsinatsiya",
  "zamena-ili-remont-silovoy-platy",
  "zamena-ili-remont-platy",
  "zamena-ili-remont-prokladok",
  "dekofeinatsiya",
  "zamena-ili-remont-displeya",
  "zamena-ili-remont-odometra",
  "zamena-ili-remont-enkodera",
  "zamena-ili-remont-knopok",
  "zamena-ili-remont-setevoqo-shnura",
  "zamena-ili-remont-elektroprovodki",
  "zamena-ili-remont-svetovoqo-indikatora",
  "zapusk-kofemashiny",
  "zamena-filtra-kofemashiny",
  "zamena-ili-remont-holdera-rozhka",
  "zamena-ili-remont-parovoqo-krana",
  "zamena-ili-remont-krana-podachi-kipyatka",
  "zamena-ili-remont-indikatora-urovnya-vody",
  "zamena-ili-remont-datchikov",
  "zamena-ili-remont-datchikov-davleniya-para",
  "zamena-ili-remont-manometra",
  "zamena-ili-remont-pereklyuchateley",
  "zamena-ili-remont-pompy",
  "zamena-ili-remont-pressostata"
];

cities.forEach(city => {
  links.push({ url: `/city/${city}`, changefreq: 'weekly', priority: 0.8 });
});

districts.forEach(district => {
  links.push({ url: `/district/${district}`, changefreq: 'weekly', priority: 0.8 });
});

brands.forEach(brand => {
  links.push({ url: `/brand/${brand}`, changefreq: 'weekly', priority: 0.8 });
});

issues.forEach(issue => {
  links.push({ url: `/neispravnosti/${issue}`, changefreq: 'weekly', priority: 0.7 });
});

services.forEach(service => {
  links.push({ url: `/service/${service}`, changefreq: 'weekly', priority: 0.7 });
});

const typeNames = ['automatic', 'drip', 'combined', 'carob', 'capsule', 'pod'];
typeNames.forEach(typeName => {
  links.push({ url: `/type/${typeName}`, changefreq: 'weekly', priority: 0.7 });
});

// Создаем поток для sitemap
const stream = new SitemapStream({ hostname: baseUrl });

// Преобразуем поток в промис и записываем в файл
streamToPromise(Readable.from(links).pipe(stream))
  .then(data => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
    console.log('Sitemap успешно создан!');
  })
  .catch(err => {
    console.error('Ошибка при генерации sitemap:', err);
  });