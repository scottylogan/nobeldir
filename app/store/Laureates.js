Ext.define('NobelDir.store.Laureates', {
	extend: 'Ext.data.Store',

	config: {
		model: 'NobelDir.model.Laureate',
		autoLoad: true,
		sorters: 'displayCategory',
		grouper: {
			groupFn: function (record) {
				return record.get('year');
			}
		},
		proxy: {
			type: 'ajax',
			url: 'laureates.json'
		}
	}
});