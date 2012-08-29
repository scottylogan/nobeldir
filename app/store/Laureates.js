Ext.define('NobelDir.store.Laureates', {
	extend: 'Ext.data.Store',

	config: {
		model: 'NobelDir.model.Laureate',
		autoLoad: true,
		sorters: 'year',
		grouper: {
			groupFn: function (record) {
				return record.get('lastName').substr(0,1);
			}
		},
		proxy: {
			type: 'ajax',
			url: 'laureates.json'
		}
	}
});