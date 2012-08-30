Ext.define('NobelDir.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
        },

        control: {
            'presidentlist': {
                disclose: 'showDetail'
            }
        }
    },

    showDetail: function(list, record) {
        this.getMain().push({
            xtype: 'laureatedetail',
            title: record.fullName(),
            data: record.data
        });
    }

});
