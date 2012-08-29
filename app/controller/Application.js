Ext.define('NobelDir.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            laureates: 'laureates',
            showLaureate: 'laureate-show',
        },

        control: {
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },

            contacts: {
                itemtap: 'onLaureateSelect'
            },
        }
    },

    onMainPush: function(view, item) {
        this.getLaureates().deselectAll();
    },

    onMainPop: function(view, item) {
    },

    onLaureateSelect: function(list, index, node, record) {

        if (!this.showLaureate) {
            this.showLaureate = Ext.create('NobelDir.view.laureate.Show');
        }

        // Bind the record onto the show contact view
        this.showLaureate.setRecord(record);

        // Push the show contact view into the navigation view
        this.getMain().push(this.showLaureate);
    },

});
