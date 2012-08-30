Ext.define('NobelDir.view.laureate.Show', {

	extend: 'Ext.Container',
	xtype: 'laureate-show',

	config: {
		title: 'Details',
		baseCls: 'x-show-laureate',
		layout: 'vbox',

		items: [
			{
				id: 'content',
				tpl: [
					'<div class="top">',
						'<div class="photo"><img src="resources/images/photos/{photo}"></div>',
						'<div class="name">{firstName} {middleName} {lastName}<span>{category} {year}</span></div>',
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
	}
});