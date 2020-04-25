const {Translate} = require('@google-cloud/translate').v2;

const translate = new Translate({projectId: process.env.PROJECT_ID});

const text = 'Olá';
const target = 'en';

async function translateText() {
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];

  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });
}

translateText();