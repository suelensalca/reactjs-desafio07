import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: {
        translation: {
          landpage: {
            banner1: "5 Continentes, infinitas possibilidades.",
            banner2:
              "Chegou a hora de tirar do papel a viagem que você sempre sonhou.",
            travelType1: "vida noturna",
            travelType2: "praia",
            travelType3: "moderno",
            travelType4: "clássico",
            travelType5: "e mais...",
            text1:
              "Que tal conhecer as melhores cidades para visitar em cada continente?",
            text2: "Vamos nessa?",
            text3: "Então escolha seu continente!",
          },
          africa: {
            continentDataText:
              "O continente africano é conhecido por sua diversidade natural e paisagens, e é rico em história e cultura. De safaris e excursões à resorts e grandes cidades, a África possui turismo para todos os gostos!",
            continentDataPopulation: "{{total}}bi",
            city1: "Cairo",
            country1: "Egito",
            city2: "Cidade do Cabo",
            country2: "África do Sul",
            city3: "Lagos",
            country3: "Nigéria",
            city4: "Casablanca",
            country4: "Marrocos",
          },
          america: {
            continentDataText:
              "O continente americano é a maior massa terrrestre do planeta no sentido norte-sul. Isso permite centenas de lugares incríveis para conhecer, com uma riqueza de climas, paisagens e cultura! Das antigas cidades do Peru à agitada Nova York, temos lugares para todos os gostos.",
            continentDataPopulation: "{{total}}mi",
            city1: "Nova York",
            country1: "EUA",
            city2: "Rio de Janeiro",
            country2: "Brasil",
            city3: "Lima",
            country3: "Peru",
            city4: "Toronto",
            country4: "Canadá",
          },
          asia: {
            continentDataText:
              "A Ásia é o maior dos continentes, tanto em área como em população. Na Ásia você encontra algumas das culturas mais antigas do mundo, projetos arquitetônicos incríveis e lindas paisagens naturais. Cada região é mais fascinante que a outra!",
            continentDataPopulation: "{{total}}bi",
            city1: "Dubai",
            country1: "UAE",
            city2: "Istanbul",
            country2: "Turquia",
            city3: "Shanghai",
            country3: "China",
            city4: "Tóquio",
            country4: "Japão",
          },
          europe: {
            continentDataText:
              "A Europa é um continente cheio de história, cultura e belezas naturais. Além disso, a proximidade dos países permite explorar novas culturas e lugares em uma viagem!",
            continentDataPopulation: "{{total}}mi",
            city1: "Roma",
            country1: "Itália",
            city2: "Atenas",
            country2: "Grécia",
            city3: "Londres",
            country3: "Inglaterra",
            city4: "Paris",
            country4: "França",
          },
          oceania: {
            continentDataText:
              "Oceania é uma região composta por vários grupos de ilhas no oceano Pacífico. E é claro que o continente atrai surfistas, mergulhadores e amantes de praias! A Oceania é o continente perfeito para apreciar as maravilhas da natureza.",
            continentDataPopulation: "{{total}}mi",
            city1: "Apia",
            country1: "Samoa",
            city2: "Suva",
            country2: "Fiji",
            city3: "Sydney",
            country3: "Austrália",
            city4: "Wellington",
            country4: "Nova Zelândia",
          },
          cities: "Cidades",
          continentDataCountries: "Países",
          continentDataLangs: "Línguas",
          continentDataPopulation: "Habitantes",
          continentAfrica: "África",
          continentAmerica: "América",
          continentAsia: "Ásia",
          continentEurope: "Europa",
          continentOceania: "Oceania",
        },
      },
      en: {
        translation: {
          landpage: {
            banner1: "5 Continents, endless possibilities.",
            banner2: "It's time to take the trip you've always dreamed of.",
            travelType1: "nigthtlife",
            travelType2: "beach",
            travelType3: "modern",
            travelType4: "classic",
            travelType5: "and more...",
            text1:
              "Do you want to know the best cities to visit in each continent?",
            text2: "Let's go?",
            text3: "Then choose your continent!",
          },
          africa: {
            continentDataText:
              "The African continent is known for its natural diversity and landscapes, and is rich in history and culture. From safaris and excursions to resorts and big cities, Africa has tourism for all tastes!",
            continentDataPopulation: "{{total}}bi",
            city1: "Cairo",
            country1: "Egypt",
            city2: "Cape Town",
            country2: "South Africa",
            city3: "Lagos",
            country3: "Nigeria",
            city4: "Casablanca",
            country4: "Morocco",
          },
          america: {
            continentDataText:
              "The American continent is the largest land mass on the planet in the north-south direction. This allows for hundreds of amazing places to see, with different of climates, landscapes and culture! From ancient Peruvian cities to bustling New York, we have places for everyone.",
            continentDataPopulation: "{{total}}mi",
            city1: "New York",
            country1: "USA",
            city2: "Rio de Janeiro",
            country2: "Brazil",
            city3: "Lima",
            country3: "Peru",
            city4: "Toronto",
            country4: "Canada",
          },
          asia: {
            continentDataText:
              "Asia is the largest of the continents, both in area and population. In Asia you will find some of the oldest cultures in the world, incredible architectural designs and beautiful natural landscapes. Each region is more fascinating than the next!",
            continentDataPopulation: "{{total}}bi",
            city1: "Dubai",
            country1: "UAE",
            city2: "Istanbul",
            country2: "Turkey",
            city3: "Shanghai",
            country3: "China",
            city4: "Tokyo",
            country4: "Japan",
          },
          europe: {
            continentDataText:
              "Europe is a continent full of history, culture and natural beauty. Plus, the proximity of countries allows you to explore new cultures and places in one trip!",
            continentDataPopulation: "{{total}}mi",
            city1: "Rome",
            country1: "Italy",
            city2: "Athens",
            country2: "Greece",
            city3: "London",
            country3: "England",
            city4: "Paris",
            country4: "France",
          },
          oceania: {
            continentDataText:
              "Oceania is a region made up of several groups of islands in the Pacific Ocean. And of course the mainland attracts surfers, divers and beach lovers! Oceania is the perfect continent to enjoy the wonders of nature.",
            continentDataPopulation: "{{total}}mi",
            city1: "Apia",
            country1: "Samoa",
            city2: "Suva",
            country2: "Fiji",
            city3: "Sydney",
            country3: "Australia",
            city4: "Wellington",
            country4: "New Zealand",
          },
          cities: "Cities",
          continentDataCountries: "Countries",
          continentDataLangs: "Languages",
          continentDataPopulation: "Population",
          continentAfrica: "Africa",
          continentAmerica: "America",
          continentAsia: "Asia",
          continentEurope: "Europe",
          continentOceania: "Oceania",
        },
      },
    },
  });

export default i18n;
