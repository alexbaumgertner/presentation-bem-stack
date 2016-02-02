// Basic
({
    block: 'block-name',
    content: 'string'
});

// With elements
({
    block: 'block-name',
    content: {
        elem: 'elem-name'
    }
});

// With modifiers
({
    block: 'block-name',
    mods: { 'modifier-name': 'modifier-value' },
    content: {
        elem: 'elem-name',
        
        // Element modifier
        elemMods: {'modifier-name': 'modifier-value'}
    }
});
