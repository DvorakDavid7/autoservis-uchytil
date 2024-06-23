import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';
import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: false,
    },
    preferencesModal: {
      layout: 'box',
    },
  },

  onFirstConsent: () => {
    console.log('onFirstAction fired');
  },

  onConsent: () => {
    console.log('onConsent fired ...');
  },

  onChange: () => {
    console.log('onChange fired ...');
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      enabled: true,
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid|_ga_)/,
          },
        ],
      },
    },
    ads: {
      enabled: true
    },
  },

  language: {
    default: 'en',

    translations: {
      en: {
        consentModal: {
          title: "Používáme Cookies!",
          description:
            'Abychom poskytli co nejlepší služby, používáme k ukládání a/nebo přístupu k informacím o zařízení, technologie jako jsou soubory cookies.',
          acceptAllBtn: 'Přijmout vše',
          acceptNecessaryBtn: '',
          showPreferencesBtn: 'Zobrazit předvolby',
          footer: `
            <a href="/zasady-ochrany-osobnich-udaju">Zásady ochrany osobních údajů</a>
            <a href="/zasady-cookies">Cookies</a>
          `,
        },
        preferencesModal: {
          title: 'Předvolby cookies',
          acceptAllBtn: 'Přijmout vše',
          acceptNecessaryBtn: '',
          savePreferencesBtn: 'Uložit předvolby',
          sections: [
            {
              title: 'Použití cookies',
              description:
                'Abychom poskytli co nejlepší služby, používáme k ukládání a/nebo přístupu k informacím o zařízení, technologie jako jsou soubory cookies. Souhlas s těmito technologiemi nám umožní zpracovávat údaje, jako je chování při procházení nebo jedinečná ID na tomto webu. Nesouhlas nebo odvolání souhlasu může nepříznivě ovlivnit určité vlastnosti a funkce.',
            },
            {
              title: 'Potřebné cookies',
              description:
                'Technické uložení nebo přístup je nezbytně nutný pro legitimní účel umožnění použití konkrétní služby, kterou si odběratel nebo uživatel výslovně vyžádal, nebo pouze za účelem provedení přenosu sdělení prostřednictvím sítě elektronických komunikací.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies pro výkon a analýzu',
              description:
                'Technické uložení nebo přístup, který se používá výhradně pro statistické účely.',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                  name: 'Cookie',
                  domain: 'Doména',
                  exp: 'Expirace',
                  desc: 'Poznámka',
                },
                body: [
                  {
                    name: '_ga_*',
                    domain: '.autoservisjju.cz',
                    exp: '1 rok',
                    desc: 'Tento soubor cookie používá Google Analytics k udržení stavu relace.',
                  },
                  {
                    name: '_ga',
                    domain: '.autoservisjju.cz',
                    exp: '2 roky',
                    desc: 'Tento soubor cookie se používá k rozlišení unikátních uživatelů přiřazením náhodně generovaného čísla jako identifikátoru klienta. Je zahrnut v každém požadavku na stránku na webu a používá se k výpočtu údajů o návštěvnících, relacích a kampaních pro analytické zprávy webu.',
                  },
                ],
              },
            },
            {
              title: 'Cookies pro marketingové účely',
              description:
                'Technické uložení nebo přístup je nutný k vytvoření uživatelských profilů za účelem zasílání reklamy nebo sledování uživatele na webových stránkách nebo několika webových stránkách pro podobné marketingové účely.',
              linkedCategory: 'ads',
            },
          ],
        },
      },
    },
  },
};

export default defineNuxtPlugin(async () => {
  await CookieConsent.run(config);

  return {
    provide: {
      CC: CookieConsent,
    },
  };
});
