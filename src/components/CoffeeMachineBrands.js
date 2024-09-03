import React, { useState } from 'react';
import '../styles/CoffeeMachineBrands.css';

const coffeeMachineBrands = [
    { name: "DeLonghi", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/delonghi.png" },
    { name: "Kitfort", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kitfort.png" },
    { name: "Philips", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/philips.png" },
    { name: "Krups", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/krups.png" },
    { name: "Nivona", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/nivona.png" },
    { name: "Melitta", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/melitta.png" },
    { name: "Polaris", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/polaris.png" },
    { name: "Saeco", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/saeco.png" },
    { name: "Bosch", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/bosch.png" },
    { name: "Jura", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/jura.png" },
    { name: "Smeg", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/smeg.png" },
    { name: "Redmond", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/redmond.png" },
    { name: "Siemens", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/siemens.png" },
    { name: "Vitek", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/vitek.png" },
    { name: "Nespresso", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/nespresso.png" },
    { name: "Xiaomi", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/xiaomi.png" },
    { name: "Hibrew", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/hibrew.png" },
    { name: "Miele", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/miele.png" },
    { name: "Tuvio", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/tuvio.png" },
    { name: "Garlyn", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/garlyn.png" },
    { name: "Gaggia", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/gaggia.png" },
    { name: "Kaffit-com", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kaffit-com.png" },
    { name: "Gorenje", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/gorenje.png" },
    { name: "Pioneer", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/pioneer.png" },
    { name: "Rondell", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/rondell.png" },
    { name: "Brayer", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/brayer.png" },
    { name: "Electrolux", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/electrolux.png" },
    { name: "Thomson", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/thomson.png" },
    { name: "Aeg", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/aeg.png" },
    { name: "Inhouse", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/inhouse.png" },
    { name: "Maunfeld", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/maunfeld.png" },
    { name: "Red-Solution", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/red-solution.png" },
    { name: "KitchenAid", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kitchenaid.png" },
    { name: "Beko", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/beko.png" },
    { name: "Wacaco", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/wacaco.png" },
    { name: "Centek", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/centek.png" },
    { name: "Kuppersbusch", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kuppersbusch.png" },
    { name: "Dr.Coffee", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/drcoffee.png" },
    { name: "Lelit", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/lelit.png" },
    { name: "Vista", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/vista.png" },
    { name: "Oursson", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/oursson.png" },
    { name: "Ariete", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/ariete.png" },
    { name: "Neff", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/neff.png" },
    { name: "Hyundai", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/hyundai.png" },
    { name: "BQ", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/bq.png" },
    { name: "KaringBee", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/karingbee.png" },
    { name: "Nescafe Dolce Gusto", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/nescafe-doice-gusto.png" },
    { name: "Caso", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/caso.png" },
    { name: "Supra", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/supra.png" },
    { name: "Ningbo Rooma Electric", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/ningbo-rooma-electric.png" },
    { name: "Grundig", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/grundig.png" },
    { name: "Caffitaly", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/caffitaly.png" },
    { name: "Zelmer", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/zelmer.png" },
    { name: "Russell Hobbs", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/russell-hobbs.png" },
    { name: "JVC", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/jvc.png" },
    { name: "La Pavoni", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/la-pavoni.png" },
    { name: "Nuova Simonelli", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/nuova-simonelli.png" },
    { name: "Kyvol", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kyvol.png" },
    { name: "Teka", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/teka.png" },
    { name: "GFgril", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/gfgril.png" },
    { name: "Sate", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/sate.png" },
    { name: "Viatto", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/viatto.png" },
    { name: "Normann", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/normann.png" },
    { name: "DEXP", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/dexp.png" },
    { name: "Kuppersberg", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kuppersberg.png" },
    { name: "Arcelik", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/arcelik.png" },
    { name: "Asko", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/asko.png" },
    { name: "First Austria", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/first-austria.png" },
    { name: "Home&Work", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/home-work.png" },
    { name: "Franke", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/franke.png" },
    { name: "JONR", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/jonr.png" },
    { name: "Futula", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/futula.png" },
    { name: "Sakura", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/sakura.png" },
    { name: "Zwilling", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/zwilling.png" },
    { name: "Gaggenau", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/gaggenau.png" },
    { name: "DSP", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/dsp.png" },
    { name: "RAF", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/raf.png" },
    { name: "Proxima", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/proxima.png" },
    { name: "Sanremo", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/sanremo.png" },
    { name: "SciShare", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/scishare.png" },
    { name: "Oulemei", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/oulemei.png" },
    { name: "Rombica", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/rombica.png" },
    { name: "De Dietrich", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/de-dietrich.png" },
    { name: "Arzum Okka", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/arzum-okka.png" },
    { name: "La Marzocco", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/la-marzocco.png" },
    { name: "Delta", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/delta.png" },
    { name: "Sencor", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/sencor.png" },
    { name: "Gasian", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/gasian.png" },
    { name: "Breville", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/breville.png" },
    { name: "Bravilor Bonamat", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/bravilor-bonamat.png" },
    { name: "Sage", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/sage.png" },
    { name: "Clatronic", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/clatronic.png" },
    { name: "Reoka", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/reoka.png" },
    { name: "Whirlpool", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/whirlpool.png" },
    { name: "FrancisFrancis!", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/francisfrancis.png" },
    { name: "Leran", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/leran.png" },
    { name: "La Cimbali", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/la-cimbali.png" },
    { name: "Graude", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/graude.png" },
    { name: "Bugatti", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/bugatti.png" },
    { name: "Ufesa", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/ufesa.png" },
    { name: "Donlim", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/donlim.png" },
    { name: "Conti", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/conti.png" },
    { name: "Illy", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/illy.png" },
    { name: "Gelberk", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/gelberk.png" },
    { name: "Manya", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/manya.png" },
    { name: "Hosta Home", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/hosta-home.png" },
    { name: "Rise", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/rise.png" },
    { name: "Deerma", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/deerma.png" },
    { name: "Kimbo", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kimbo.png" },
    { name: "Airhot", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/airhot.png" },
    { name: "Graef", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/graef.png" },
    { name: "Korting", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/korting.png" },
    { name: "Geniard", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/geniard.png" },
    { name: "EKSI", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/eksi.png" },
    { name: "Weissgauff", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/weissgauff.png" },
    { name: "Bertazzoni", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/bertazzoni.png" },
    { name: "Black+Decker", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/black-decker.png" },
    { name: "Zepter", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/zepter.png" },
    { name: "Necta", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/necta.png" },
    { name: "Aroma", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/aroma.png" },
    { name: "Fulgor Milano", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/fulgor-milano.png" },
    { name: "KEF", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kef.png" },
    { name: "Solac", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/solac.png" },
    { name: "Alvatto", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/alvatto.png" },
    { name: "Cafe Silvestre", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/cafe-silvestre.png" },
    { name: "Felfri", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/felfri.png" },
    { name: "Jacky’s", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/jackys.png" },
    { name: "Travola", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/travola.png" },
    { name: "Kuchenland", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kuchenland.png" },
    { name: "SWAN", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/swan.png" },
    { name: "Senix", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/senix.png" },
    { name: "VARD", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/vard.png" },
    { name: "ADRC Company", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/adrc-company.png" },
    { name: "Gemilai", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/gemilai.png" },
    { name: "Proliss", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/proliss.png" },
    { name: "Catler", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/catler.png" },
    { name: "Carrera", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/carrera.png" },
    { name: "Manifesta", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/manifesta.png" },
    { name: "Saint Coffee", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/saint-coffee.png" },
    { name: "Agave", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/agave.png" },
    { name: "Blaupunkt", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/blaupunkt.png" },
    { name: "BlitzWolf", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/blitzwolf.png" },
    { name: "Caffiano", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/caffiano.png" },
    { name: "Dauscher", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/dauscher.png" },
    { name: "MIA", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/mia.png" },
    { name: "OubaOloon", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/oubaoloon.png" },
    { name: "Epeios", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/epeios.png" },
    { name: "Василиса", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/vasilisa.png" },
    { name: "Аксинья", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/aksinya.png" },
    { name: "MasterKofe", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/masterkofe.png" },
    { name: "WMF", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/wmf.png" },
    { name: "BORK", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/bork.png" },
    { name: "ENDEVER", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/endever.png" },
    { name: "EUPA", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/eupa.png" },
    { name: "Faber", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/faber.png" },
    { name: "FAEMA", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/faema.png" },
    { name: "Gastroback", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/gastroback.png" },
    { name: "Gemlux", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/gemlux.png" },
    { name: "Indesit", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/indesit.png" },
    { name: "Kaffit", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kaffit.png" },
    { name: "Kambrook", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kambrook.png" },
    { name: "Kenwood", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/kenwood.png" },
    { name: "La Spaziale", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/la-spaziale.png" },
    { name: "Laretti", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/laretti.png" },
    { name: "Panasonic", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/panasonic.png" },
    { name: "Princess", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/princess.png" },
    { name: "Rancilio", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/rancilio.png" },
    { name: "Rommelsbacher", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/rommelsbacher.png" },
    { name: "Rowenta", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/rowenta.png" },
    { name: "Spinel", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/spinel.png" },
    { name: "Thermador", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/thermador.png" },
    { name: "WOLF", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/wolf.png" },
    { name: "WPM", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/wpm.png" },
    { name: "V-ZUG", imageUrl: "https://kofemasterskaya.ru/bitrix/templates/books/img/content/kofemashin/logo/v-zug.png" }
  ];

const CoffeeMachineBrands = () => {
  const [показатьВсе, установитьПоказатьВсе] = useState(false);

  const отображаемыеБренды = показатьВсе ? coffeeMachineBrands : coffeeMachineBrands.slice(0, 16);

  return (
    <section className="coffee-machine-brands-wrapper">
      <h2 className="coffee-machine-brands-title">Ремонтируем все бренды кофемашин</h2>
      <div className="coffee-machine-brands-grid">
        {отображаемыеБренды.map((brand) => (
          <a
            key={brand.name}
            href={`/${brand.name.toLowerCase().replace(/ /g, '-')}`}
            className="coffee-machine-brand-card"
          >
            <img
              src={brand.imageUrl}
              alt={`${brand.name} логотип`}
              className="brand-logo"
            />
          </a>
        ))}
      </div>
      <div className="show-more-container">
        {показатьВсе ? (
          <button 
            className="show-more-button" 
            onClick={() => установитьПоказатьВсе(false)}
          >
            Свернуть
          </button>
        ) : (
          <button 
            className="show-more-button" 
            onClick={() => установитьПоказатьВсе(true)}
          >
            Показать еще
          </button>
        )}
      </div>
    </section>
  );
};

export default CoffeeMachineBrands;