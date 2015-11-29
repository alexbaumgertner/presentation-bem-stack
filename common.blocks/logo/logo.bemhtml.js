// match `logo` block
block('logo')(
    // define `content`
    content()(function() {
        return [
            {
                block: 'icon',
                tag: 'i',
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
