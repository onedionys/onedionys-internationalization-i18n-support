const assert = require('assert');
const i18nSupport = require('../src/i18n-support');

describe('i18nSupport', function() {
  it('should return translated string for supported language', function() {
    const result = i18nSupport.translate('hello', 'fr');
    assert.strictEqual(result, 'Bonjour');
  });

  it('should return default string for unsupported language', function() {
    const result = i18nSupport.translate('hello', 'it');
    assert.strictEqual(result, 'Hello');
  });
});
