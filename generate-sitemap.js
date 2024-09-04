const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Указываем базовый URL сайта
const baseUrl = 'https://remont-kofemashin-servis.ru';

// Определяем статические пути, которые будут включены в sitemap
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/articles', changefreq: 'daily', priority: 0.8 },
  { url: '/city/:cityName', changefreq: 'weekly', priority: 0.8 },   // Динамический путь для городов
  { url: '/brand/:brandName', changefreq: 'weekly', priority: 0.8 }, // Динамический путь для брендов
  { url: '/district/:districtName', changefreq: 'weekly', priority: 0.8 }, // Динамический путь для районов
  { url: '/type/:typeName', changefreq: 'weekly', priority: 0.7 }, // Динамический путь для типов
];

// Добавляем динамические пути для городов, районов и брендов (пример)
const cities = ['Алабушево', 'Андреевка', 'Апрелевка', 'Балашиха', 'Барвиха',
'Барыбино', 'Белоозерский', 'Бронницы', 'Быково', 'Верея',
'Вёшки', 'Видное', 'Владимир', 'Власиха', 'поселок Внуково',
'Волоколамск', 'Воскресенск', 'Востряково', 'Высоковск', 'Голицыно',
'Дедовск', 'Дзержинский', 'Дмитров', 'Долгопрудный', 'Домодедово',
'Дрезна', 'Дубна', 'Егорьевск', 'Жаворонки', 'Железнодорожный',
'Жуковский', 'Загорянский', 'Запрудня', 'Зарайск', 'Заречье',
'Звенигород', 'Зеленоград', 'Ивантеевка', 'Икша', 'Ильинский',
'Истра', 'Калининец', 'Кашира', 'Климоск', 'Клин',
'Клязьма', 'Коломна', 'Коммунарка', 'Конаково', 'Королёв',
'Котельники', 'Красково', 'Красноармейск', 'Красногорск', 'Краснозаводск',
'Краснознаменск', 'Кратово', 'Крёкшино', 'Крюково', 'Кубинка',
'Купавна', 'Куровское', 'Дикино-Дулёво', 'Лобня', 'Лосино-Петровский',
'Луговая', 'Луховицы', 'Лыткарино', 'Львовский', 'Люберцы',
'Малаховка', 'Мамонтовка', 'Михнево', 'Можайск', 'Монино',
'Московский', 'Мытищи', 'Наро-Фоминск', 'Нахабино', 'Некрасовский',
'Немчиновка', 'Ногинск', 'Обухово', 'Одинцово', 'Ожерелье',
'Озёры', 'Опалиха', 'Орехово-Зуево', 'Павловская Слобода', 'Павловский Посад',
'Пересвет', 'Петровское', 'Пироговский', 'Поварово', 'Подольск',
'Правдинский', 'Протвино', 'Путилково', 'Пушкино', 'Пущино',
'Развилка', 'Раменское', 'Рассказовка', 'РАстуново', 'Реутов',
'Рошаль', 'Руза', 'Румянцево', 'Саларьево', 'Селятино',
'Сергиев Посад', 'Серпухов', 'Солнечногорск', 'Сосенки', 'Софрино',
'Старая Купавна', 'Столбовая', 'Ступино', 'Сходня', 'Талдом',
'Томилино', 'Трёхгорка', 'Троицк', 'Тучково', 'Удельная',
'Фрязино', 'Фряново', 'Химки', 'Хотьково', 'Черноголовка',
'Чехов', 'Шатура', 'Щелково', 'Щербинка', 'Электрогорск',
'Электросталь', 'Электроугли', 'Яхрома'];
const districts = ['Алексеевский', 'Академический', 'Алтуфьевский', 'Арбат', 'Аэропорт',
'Бабушкинский', 'Басманный', 'Беговой', 'Бескудниковский', 'Бибирево',
'Бирюлево Восточное', 'Бирюлево Западное', 'Богородское', 'Братеево',
'Бутово Северное', 'Бутово Южное', 'Бутырский', 'Вешняки', 'Внуково',
'Войковский', 'Восточный', 'Выхино-Жулебино', 'Гагаринский', 'Головинский',
'Гольяново', 'Даниловский', 'Дегунино-Восточное', 'Дегунино-Западное',
'Дмитровский', 'Донской', 'Дорогомилово', 'Замоскворечье', 'Зюзино',
'Зябликово', 'Ивановское', 'Измайлово', 'Капотня', 'Коньково', 'Коптево',
'Косино-Ухтомский', 'Котловка', 'Красносельский', 'Крылатское', 'Крюково',
'Кузьминки', 'Кунцево', 'Куркино', 'Левобережный', 'Лефортово', 'Лианозово',
'Ломоносовский', 'Лосиноостровский', 'Люблино', 'Марфино', 'Марьина Роща',
'Марьино', 'Матюшкино', 'Медведково Северное', 'Медведково Южное',
'Метрогородок', 'Мещанский', 'Митино', 'Можайский', 'Молжаниновский',
'Москворечье-Сабурово', 'Нагатино-Садовники', 'Нагатинский Затон', 'Нагорный',
'Некрасовка', 'Нижегородский', 'Ново-Переделкино', 'Новогиреево',
'Новокосино', 'Обручевский', 'Орехово-Борисово Северное', 'Орехово-Борисово Южное',
'Останкинский', 'Отрадное', 'Очаково-Матвеевское', 'Перово', 'Печатники',
'Покровское-Стрешнево', 'Преображенское', 'Пресненский', 'Проспект Вернадского',
'Раменки', 'Ростокино', 'Рязанский', 'Савелки', 'Савеловский', 'Свиблово',
'Северный', 'Силино', 'Сокол', 'Соколиная Гора', 'Сокольники', 'Солнцево',
'Старое Крюково', 'Строгино', 'Таганский', 'Тверской', 'Текстильщики',
'Тимирязевский', 'Теплый Стан', 'Тропарево-Никулино', 'Тушино Северное',
'Тушино Южное', 'Филевский Парк', 'Фили-Давыдково', 'Хамовники', 'Ховрино',
'Хорошево-Мневники', 'Хорошевский', 'Царицыно', 'Черемушки', 'Чертаново Северное',
'Чертаново Центральное', 'Чертаново Южное', 'Щукино', 'Южнопортовый', 'Якиманка',
'Ярославский', 'Ясенево'];
const brands = ["DeLonghi", "Kitfort", "Philips", "Krups", "Nivona", "Melitta", "Polaris", "Saeco", "Bosch", "Jura", "Smeg", "Redmond", "Siemens", "Vitek", "Nespresso", "Xiaomi", "Hibrew", "Miele", "Tuvio", "Garlyn", "Gaggia", "Kaffit-com", "Gorenje", "Pioneer", "Rondell", "Brayer", "Electrolux", "Thomson", "Aeg", "Inhouse", "Maunfeld", "Red-Solution", "KitchenAid", "Beko", "Wacaco", "Centek", "Kuppersbusch", "Dr.Coffee", "Lelit", "Vista", "Oursson", "Ariete", "Neff", "Hyundai", "BQ", "KaringBee", "Nescafe Dolce Gusto", "Caso", "Supra", "Ningbo Rooma Electric", "Grundig", "Caffitaly", "Zelmer", "Russell Hobbs", "JVC", "La Pavoni", "Nuova Simonelli", "Kyvol", "Teka", "GFgril", "Sate", "Viatto", "Normann", "DEXP", "Kuppersberg", "Arcelik", "Asko", "First Austria", "Home&Work", "Franke", "JONR", "Futula", "Sakura", "Zwilling", "Gaggenau", "DSP", "RAF", "Proxima", "Sanremo", "SciShare", "Oulemei", "Rombica", "De Dietrich", "Arzum Okka", "La Marzocco", "Delta", "Sencor", "Gasian", "Breville", "Bravilor Bonamat", "Sage", "Clatronic", "Reoka", "Whirlpool", "FrancisFrancis!", "Leran", "La Cimbali", "Graude", "Bugatti", "Ufesa", "Donlim", "Conti", "Illy", "Gelberk", "Manya", "Hosta Home", "Rise", "Deerma", "Kimbo", "Airhot", "Graef", "Korting", "Geniard", "EKSI", "Weissgauff", "Bertazzoni", "Black+Decker", "Zepter", "Necta", "Aroma", "Fulgor Milano", "KEF", "Solac", "Alvatto", "Cafe Silvestre", "Felfri", "Jacky’s", "Travola", "Kuchenland", "SWAN", "Senix", "VARD", "ADRC Company", "Gemilai", "Proliss", "Catler", "Carrera", "Manifesta", "Saint Coffee", "Agave", "Blaupunkt", "BlitzWolf", "Caffiano", "Dauscher", "MIA", "OubaOloon", "Epeios", "Василиса", "Аксинья", "MasterKofe", "WMF", "BORK", "ENDEVER", "EUPA", "Faber", "FAEMA", "Gastroback", "Gemlux", "Indesit", "Kaffit", "Kambrook", "Kenwood", "La Spaziale", "Laretti", "Panasonic", "Princess", "Rancilio", "Rommelsbacher", "Rowenta", "Spinel", "Thermador", "WOLF", "WPM", "V-ZUG"];

;

// Генерация ссылок для городов
cities.forEach(city => {
  links.push({ url: `/city/${city}`, changefreq: 'weekly', priority: 0.8 });
});

// Генерация ссылок для районов
districts.forEach(district => {
  links.push({ url: `/district/${district}`, changefreq: 'weekly', priority: 0.8 });
});

// Генерация ссылок для брендов
brands.forEach(brand => {
  links.push({ url: `/brand/${brand}`, changefreq: 'weekly', priority: 0.8 });
});

// Создаем поток для записи sitemap
const stream = new SitemapStream({ hostname: baseUrl });

// Преобразуем поток в промис и записываем его в файл
streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  fs.writeFileSync('./public/sitemap.xml', data.toString())
).catch((err) => {
  console.error('Ошибка при генерации sitemap:', err);
});

console.log('Sitemap успешно создан!');
