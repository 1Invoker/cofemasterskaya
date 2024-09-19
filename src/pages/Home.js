import React, { useState, useRef, useEffect } from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet'; 
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Process from '../components/Process';
import Questions from '../components/Questions';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import ServiceRepair from '../components/ServiceRepair';
import RepairCost from '../components/RepairCost';
import ServiceAreas from '../components/Areas/ServiceAreas';
import ServiceProcess from '../components/ServiceProcess';
import Testimonials from "../components/Testimonials";
import CoffeeMachineIssues from "../components/coffeeMachineIssues";
import CoffeeMachineBrands from "../components/CoffeeMachineBrands";
import { districts, cities } from "../components/Areas/AreasData";
import brandNameTranslations from "../components/brandNameTranslations";

const cyrillicToLatinMap = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
  'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
  'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
  'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya',
  'ъ': '', 'ь': ''
};

const convertToSlug = (text) => {
  return text
    .toLowerCase()
    .split('')
    .map(char => cyrillicToLatinMap[char] || char)
    .join('')
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const locationNames = {};

districts.forEach(district => {
  locationNames[convertToSlug(district)] = district;
});
cities.forEach(city => {
  locationNames[convertToSlug(city)] = city;
});

const coffeeMachineIssues = [
  {
    title: "Не включается",
    slug: "ne-vklyuchaetsya",
    price: "500 руб",
    description: "Самой распространенной причиной того, что кофемашина не включается, является неисправный термоблок. Также стоит проверить сетевой кабель и блок питания перед вызовом мастера."
  },
  {
    title: "Не качает воду",
    slug: "ne-kachaet-vodu",
    price: "400 руб",
    description: "Проблема с подачей воды может быть вызвана забитым фильтром или насосом. Проверьте систему подачи воды и замените фильтры."
  },
  {
    title: "Не работает помол",
    slug: "ne-rabotaet-pomol",
    price: "600 руб",
    description: "Если помол кофе не происходит, возможно, проблема в блокировке жерновов или неисправности двигателя помола. Требуется диагностика и ремонт или замена компонента."
  },
  {
    title: "Не наливает кофе",
    slug: "ne-nalivet-kofe",
    price: "600 руб",
    description: "Отсутствие налива кофе может указывать на засор в системе подачи или неисправность блока клапанов. Рекомендуется профессиональная очистка системы."
  },
  {
    title: "Не подает пену",
    slug: "ne-podaet-penu",
    price: "800 руб",
    description: "Причиной отсутствия пены может быть проблема с капучинатором или засор в трубке подачи молока. Очистите капучинатор и проверьте систему подачи молока."
  },
  {
    title: "Не работают кнопки",
    slug: "ne-rabotayut-knopki",
    price: "1000 руб",
    description: "Неисправность кнопок может быть вызвана износом или повреждением сенсорной панели. Требуется замена кнопок или сенсоров."
  },
  {
    title: "Протекает",
    slug: "protekaet",
    price: "700 руб",
    description: "Протечка может быть вызвана износом уплотнителей или трещинами в резервуаре. Проверьте уплотнители и замените поврежденные детали."
  },
  {
    title: "Не нагревает воду",
    slug: "ne-nagrevaet-vodu",
    price: "1000 руб",
    description: "Причиной того, что вода не нагревается, может быть неисправный нагревательный элемент или термостат. Необходима проверка и, при необходимости, замена этих компонентов."
  },
  {
    title: "Не вставляется блок",
    slug: "ne-vstavlyaetsya-blok",
    price: "900 руб",
    description: "Если блок не вставляется, возможно, проблема в механическом заедании или неисправности направляющих. Рекомендуется осмотр и смазка движущихся частей."
  },
  {
    title: "Не работает капучинатор",
    slug: "ne-rabotaet-kapuchinator",
    price: "900 руб",
    description: "Неисправность капучинатора может быть вызвана засором или поломкой механизма подачи пара. Требуется чистка или ремонт капучинатора."
  },
  {
    title: "Не работает",
    slug: "ne-rabotaet",
    price: "700 руб",
    description: "Общая неисправность может быть вызвана различными проблемами, включая проблемы с электропитанием или повреждение внутренних компонентов."
  },
  {
    title: "Не работает помпа",
    slug: "ne-rabotaet-pompa",
    price: "800 руб",
    description: "Неисправная помпа может вызвать проблемы с подачей воды. Возможно, потребуется замена помпы или проверка её подключения."
  },
  {
    title: "Не варит кофе",
    slug: "ne-varit-kofe",
    price: "800 руб",
    description: "Если кофемашина не варит кофе, проблема может быть связана с заварочным блоком или системами подачи воды и пара. Необходима диагностика."
  },
  {
    title: "Не взбивает молоко",
    slug: "ne-vzbivaet-moloko",
    price: "800 руб",
    description: "Причиной того, что кофемашина не взбивает молоко, могут быть проблемы с системой подачи пара или загрязнение форсунок. Проведите очистку и проверку оборудования."
  },
  {
    title: "Не видит воду",
    slug: "ne-vidit-vodu",
    price: "900 руб",
    description: "Если кофемашина не видит воду, возможно, сенсоры уровня воды неисправны или забиты. Проверьте и очистите сенсоры."
  },
  {
    title: "Не видит кофе",
    slug: "ne-vidit-kofe",
    price: "1000 руб",
    description: "Проблемы с распознаванием кофе могут быть связаны с датчиками уровня или с системой подачи кофе. Требуется осмотр и диагностика."
  },
  {
    title: "Не горячий кофе",
    slug: "ne-goryachiy-kofe",
    price: "1000 руб",
    description: "Если кофе не горячий, возможно, неисправен термоблок или датчик температуры. Проверьте систему нагрева и, при необходимости, замените компоненты."
  },
  {
    title: "Не греет",
    slug: "ne-greet",
    price: "800 руб",
    description: "Если кофемашина не греет, возможно, проблема в нагревательных элементах или в системе подачи энергии. Требуется диагностика и ремонт."
  },
];

const allServices = [
  "Замена или ремонт микровыключателей",
  "Замена или ремонт заварочного блока",
  "Замена или ремонт редуктора",
  "Замена или ремонт уплотнительного кольца",
  "Замена или ремонт кофевода",
  "Замена или ремонт колец штуцера",
  "Чистка кофемолки",
  "Замена или ремонт жерновов (ножей)",
  "Замена счётчика воды",
  "Замена или ремонт насоса",
  "Замена или ремонт электромагнитного клапана",
  "Удаление накипи и чистка гидросистемы",
  "Замена или ремонт термостата",
  "Замена или ремонт предохранителей",
  "Замена или ремонт блока управления",
  "Замена или ремонт тэна (нагревательного элемента)",
  "Замена или ремонт кольца дозатора",
  "Замена или ремонт кофемолки",
  "Смазка всех узлов",
  "Замена или ремонт термоблока",
  "Замена или ремонт пароблока",
  "Замена или ремонт верхнего поршня",
  "Замена или ремонт двигателя",
  "Замена или ремонт штуцера",
  "Замена или ремонт капучинатора",
  "Замена или ремонт дренажного клапана",
  "Чистка диспенсера",
  "Замена или ремонт бойлера",
  "Декальцинация",
  "Замена или ремонт силовой платы",
  "Замена или ремонт платы",
  "Замена или ремонт прокладок",
  "Декофенация",
  "Замена или ремонт дисплея",
  "Замена или ремонт одометра",
  "Замена или ремонт энкодера",
  "Замена или ремонт кнопок",
  "Замена или ремонт сетевого шнура",
  "Замена или ремонт электпроводки",
  "Замена или ремонт светового индикатора",
  "Запуск кофемашины",
  "Замена фильтра кофемашины",
  "Замена или ремонт холдера (рожка)",
  "Замена или ремонт парового крана",
  "Замена или ремонт крана подачи кипятка",
  "Замена или ремонт индикатора уровня воды",
  "Замена или ремонт датчиков",
  "Замена или ремонт датчиков давления пара",
  "Замена или ремонт манометра",
  "Замена или ремонт переключателей",
  "Замена или ремонт помпы",
  "Замена или ремонт прессостата"
];

const Home = () => {
  const { serviceSlug, cityName, districtName, brandName, typeName, issueSlug } = useParams();
  const [selectedLocation, setSelectedLocation] = useState('Москве');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (cityName) {
      setSelectedLocation(locationNames[cityName]);
    } else if (districtName) {
      setSelectedLocation(locationNames[districtName]);
    } else {
      setSelectedLocation('Москве');
    }

    if (brandName) {
      setSelectedBrand(brandName.charAt(0).toUpperCase() + brandName.slice(1));
    }

    if (typeName) {
      const typeTranslations = {
        'automatic': 'Автоматические',
        'drip': 'Капельные',
        'combined': 'Комбинированные',
        'carob': 'Рожковые',
        'capsule': 'Капсульные',
        'pod': 'Чалдовые',
      };
      setSelectedType(typeTranslations[typeName] || '');
    }

    if (serviceSlug) {
      const translit = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
        'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya',
        'ъ': '', 'ь': ''
      };
      const foundService = allServices.find(service => {
        const slug = service
          .toLowerCase()
          .split('')
          .map(char => translit[char] || char)
          .join('')
          .replace(/ /g, '-')
          .replace(/[^a-z0-9-]+/g, '');
        return slug === serviceSlug;
      });
      setSelectedService(foundService);
    }

    if (issueSlug) {
      const foundIssue = coffeeMachineIssues.find(issue => issue.slug === issueSlug);
      setSelectedIssue(foundIssue);
    }

    let title = "Сервисный центр по ремонту кофемашин по Москве и МО";

    if (cityName) {
      title = `Ремонт кофемашин в ${locationNames[cityName]}`;
    } else if (districtName) {
      title = `Ремонт кофемашин в ${locationNames[districtName]}, Москва`;
    } else if (brandName) {
      const formattedBrandName = brandName.charAt(0).toUpperCase() + brandName.slice(1);
      const russianBrandName = brandNameTranslations[formattedBrandName] || formattedBrandName; 

      title = `Ремонт кофемашин ${formattedBrandName} в Москве | Сервис центр ${russianBrandName}`;
    } else if (typeName) {
      const typeTranslations = {
        'automatic': 'Автоматических',
        'drip': 'Капельных',
        'combined': 'Комбинированных',
        'carob': 'Рожковых',
        'capsule': 'Капсульных',
        'pod': 'Чалдовых',
      };
      title = `Ремонт ${typeTranslations[typeName]} кофемашин в Москве`;
    } else if (issueSlug) {
      const foundIssue = coffeeMachineIssues.find(issue => issue.slug === issueSlug);
      title = `Кофемашина ${foundIssue ? foundIssue.title.toLowerCase() : ''} | Сервис центр`;
    } else if (serviceSlug) {
      title = `${selectedService ? selectedService : ''} кофемашины | Сервис центр`;
    }

    document.title = title;

  }, [cityName, districtName, brandName, typeName, serviceSlug, issueSlug, selectedService]);

  const handleLocationClick = (locationName, locationType) => {
    const slugName = convertToSlug(locationName);
    const url = locationType === 'city'
      ? `/city/${slugName}`
      : `/district/${slugName}`;
    window.location.href = url;
  };

  const handleBrandClick = (brandName) => {
    const convertToSlug = (text) => {
      return text
        .toLowerCase()
        .replace(/\s+/g, '-');
    };

    const slugBrand = convertToSlug(brandName);
    const url = `/brand/${slugBrand}`;
    window.location.href = url;
  };

  const canonicalUrl = `https://remont-kofemashin-servis.ru${pathname}`;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header ref={headerRef} />
      <div id="hero-section">
        <HeroSection 
          location={selectedLocation} 
          selectedBrand={selectedBrand} 
          selectedIssue={selectedIssue} 
          selectedService={selectedService} 
          selectedType={selectedType} 
          issueSlug={issueSlug}
        />
      </div>
      <div id="services-section">
        <Services />
      </div>
      <div>
        <CoffeeMachineIssues location={selectedLocation} />
      </div>
      <div>
        <CoffeeMachineBrands 
          location={selectedLocation} 
          selectedBrand={selectedBrand} 
          onBrandClick={handleBrandClick} 
        />
      </div>
      <div id="service-process-section">
        <ServiceProcess />
      </div>
      <div id="service-repair-section">
        <ServiceRepair location={selectedLocation} />
      </div>
      <div id="repair-cost-section">
        <RepairCost location={selectedLocation} />
      </div>
      <div id="service-areas-section">
        <ServiceAreas
          onCityClick={(cityName) => handleLocationClick(cityName, 'city')}
          onDistrictClick={(districtName) =>
            handleLocationClick(districtName, 'district')
          }
        />
      </div>
      <div id="process-section">
        <Process />
      </div>
      <div id="testimonials-section">
        <Testimonials />
      </div>
      <div id="questions-section">
        <Questions />
      </div>
      <div id="map-section">
        <MapSection />
      </div>
      <Footer ref={footerRef} />
    </>
  );
};

export default Home;