Ext.define('NobelDir.model.Laureate', {
	extend: 'Ext.data.Model',
    config: {
        fields: [
                'firstName',
                'middleName',
                'lastName',
                'year',
                'category',
                'shortBio',
                'bio',
                'bioUrl',
                'headshot',
                'photo'
        ]
	},

});