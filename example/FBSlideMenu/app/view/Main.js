Ext.define('FBSlideMenu.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.navigation.View',
        'Ext.dataview.List'
        
    ],
    config: {
        tabBarPosition: 'bottom',
		layout: {
            animation: false
        },
        items: [
            {
                xtype: 'fb_slide_menu_container',
                title: 'FB Slide',
				iconCls: 'home'
            },
            {
                title: 'Woohoo',
                iconCls: 'favorites',
                html: 'Woohoo'
            }
        ]
    }
});
