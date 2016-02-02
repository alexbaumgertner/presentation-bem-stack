/**
 * Блок "Ссылка"
 */
BEMDOM.decl('link', {
  /**
   * Устанавливает текст ссылки
   *
   * @param {String} text
   */
    setInnerText: function(text) {
      this.elem('inner').text(text);
    }
});

BEMDOM.decl('menu', {
    onSetMod: {
      'js': {
        'inited': function() {
          // Finds the first block inside the current block or its elements (including context)
          // https://github.com/bem/bem-core/blob/v2/common.blocks/i-bem/__dom/i-bem__dom.js#L292
          var firstLink = this.findBlockInside('link');

          firstLink.setInnerText('Меню инициализированно');
        }
      }
    }
});
