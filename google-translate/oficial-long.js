const {TranslationServiceClient} = require('@google-cloud/translate')
const translationClient = new TranslationServiceClient();

const project = process.env.PROJECT_ID
const text = 'Olá'

const request = {
  parent: `projects/${project}/locations/global`,
  contents: [text],
  mimeType: 'text/plain', 
  sourceLanguageCode: 'pt',
  targetLanguageCode: 'en',
};

try {
  translationClient.translateText(request)
    .then(response => console.log(response))
    .catch(err => console.error(err))
} catch (error) {
  console.error(error.details);
}
