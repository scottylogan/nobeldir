Ext.define('NobelDir.view.laureate.Show', {

	extend: 'Ext.Container',
	xtype: 'laureate-show',

	config: {
		title: 'Details',
		baseCls: 'x-show-laureate',
		layout: 'vbox',
		scrollable: true,

		items: [
			{
				id: 'content',
				tpl: [
					'<div class="top">',
						'<div class="name">{firstName} {middleName} {lastName}<span>{displayCategory} {year}</span></div>',
						'<div class="photo"><img src="resources/images/photos/{photo}"></div>',
						'<div class="bio">{shortBio}</div>',
						'<div class="links">',
							'<ul>',
								'<li><a href="{bioUrl}">Nobel Bio</a></li>',
								'<li><a href="http://www.nobelprize.org/nobel_prizes/{category}/laureates/{year}/">Nobel {year}</a></li>',
							'</ul>',
						'</div>',
					'</div>'
				].join('')
			}
		]
	},

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
        }
    }

});