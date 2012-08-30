Ext.define('NobelDir.view.LaureateList', {
    extend: 'Ext.List',
    xtype: 'laureatelist',
    requires: [ 'NobelDir.store.Laureates' ],

    config: {
        title: 'Nobel Laureates',
        grouped: true,
        store: 'Laureates',
        onItemDisclosure: true,
        itemTpl: [
            '<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
            '{firstName} {middleName} {lastName}',
            '<span>{displayCategory}, {year}</span>'
        ].join('')
    }
});