Ext.define('NobelDir.view.LaureateDetail', {

	extend: 'Ext.Panel',
	xtype: 'laureatedetail',

	config: {
		title: 'Details',
		baseCls: 'x-show-laureate',
		styleHtmlContent: true,
		scrollable: 'vertical',

		tpl: [
			'<div class="top">',
				'<div class="photo" style="background-image:url(resources/images/photos/{photo});"></div>',
				'<div class="name">{firstName} {middleName} {lastName}<span>{displayCategory} {year}</span></div>',
				'<div class="bio">{bio}</div>',
				'<div class="links">',
					'<ul>',
						'<li><a href="{bioUrl}">Nobel Bio</a></li>',
						'<li><a href="http://www.nobelprize.org/nobel_prizes/{category}/laureates/{year}/">Nobel {year}</a></li>',
					'</ul>',
				'</div>',
			'</div>'
		].join('')
	}
});