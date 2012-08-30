Ext.define('NobelDir.store.Laureates', {
	extend: 'Ext.data.Store',

	config: {
		model: 'NobelDir.model.Laureate',
		autoLoad: true,
		sorters: 'year',
		grouper: {
			groupFn: function (record) {
				return record.get('displayCategory');
			}
		},
		proxy: {
			type: 'ajax',
			url: 'laureates.json'
		}
	}
});