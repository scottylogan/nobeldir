Ext.define('NobelDir.view.Laureates', {
    extend: 'Ext.List',
    xtype: 'laureates',

    config: {
        title: 'Laureates',
        cls: 'x-laureates',

        store: 'Laureates',
        itemTpl: [
            '<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
            '{firstName} {lastName}',
            '<span>{displayCategory}, {year}</span>'
        ].join('')
    }
});