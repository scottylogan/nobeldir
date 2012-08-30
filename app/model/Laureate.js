Ext.define('NobelDir.model.Laureate', {
	extend: 'Ext.data.Model',
    config: {
        fields: [
                'firstName',
                'middleName',
                'lastName',
                'year',
                'category',
                'displayCategory',
                'shortBio',
                'bioUrl',
                'headshot',
                'photo'
        ]
	},

    fullName: function() {
        var d = this.data;
        return [
            d.firstName,
            (!d.middleName ? "" : d.middleName),
            d.lastName
        ].join(" ");
    }
    

});