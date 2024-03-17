const translations = {
    en: {
      hello: 'Hello',
      goodbye: 'Goodbye',
      welcome: 'Welcome',
    },
    fr: {
      hello: 'Bonjour',
      goodbye: 'Au revoir',
      welcome: 'Bienvenue',
    },
    // Add more language translations as needed
  };
  
  function translate(key, lang) {
    if (translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    } else {
      return translations['en'][key] || key;
    }
  }
  
  module.exports = { translate };
  