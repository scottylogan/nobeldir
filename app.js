Ext.application({
    name: 'NobelDir',



    glossOnIcon: false,
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    models: ['Laureate'],
    stores: ['Laureates'],
    views: ['Main'],
    controllers: ['Application'],

    launch: function() {

        // Initialize the main view
        Ext.Viewport.add({
            xclass: 'NobelDir.view.Main'
        });
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
