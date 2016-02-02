/*
* Декларация: Привязка JS-блока `menu` к HTML `<div class="menu i-bem" data-dem="{ menu: {} }"></div>`
*
* @see https://ru.bem.info/technology/i-bem/v2/i-bem-js-decl/
* */
BEMDOM.decl(
  {
    block: 'menu'
  },
  {
    /* properties (для каждого экземпляра (DOM-node) блока `menu` ) */
  },
  {
    /* static properties (для всех блоков)  `menu` */
  })
;

// Код для модификации `state = current` элемента `item` блока `menu`
BEMDOM.decl(
  {
    block: 'menu',
    elem: 'item',
    modName: 'state',
    modVal: 'current'
  }, {});
