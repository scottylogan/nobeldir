Ext.define("NobelDir.view.Main", {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',

    requires: [
        'NobelDir.view.Laureates',
        'NobelDir.view.laureate.Show'
    ],

    config: {
        autoDestroy: false,

        navigationBar: {
            ui: 'sencha'
        },

        items: [
            { xclass: 'laureates' }
        ]
    }
});
