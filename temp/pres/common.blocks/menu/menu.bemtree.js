// match `menu` block
block('menu')( // this.ctx
  content()(function() {
    return ({
      block: 'menu',
      mods: { section: 'learning' },
      content: [
        { elem: 'title', content: this.ctx.title },
        { elem: 'list',  content: this.ctx.items.map(
          function(item) { return { elem: 'item', url: item.url, title: item.title }; })
        }
      ]
    });
  })
);
