Ext.define("NobelDir.view.Main", {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',

    requires: [
        'NobelDir.view.LaureateList',
        'NobelDir.view.LaureateDetail'
    ],

    config: {
    
        items: [
            { xtype: 'laureatelist' }
        ]
    }
});
