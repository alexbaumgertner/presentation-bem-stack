block('logo')(
    content()(function() {
        return [
            {
                block: 'icon',
                tag: 'span',
                url: '/logo.png',
                mix: [{ block: 'logo', elem: 'logo' }]
            },
            {
                elem: 'text',
                tag: 'span',
                content: 'HTML Academy'
            }
        ];
    })
);
