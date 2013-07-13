Ext.define('FBSlideMenu.view.FB_Slide_Menu_Container', {
    extend: 'Ext.Container',
    requires: [ 'Ext.data.Store' ],
    alias: 'widget.fb_slide_menu_container',
    config: {
    	layout: 'hbox',
	 	items: [
        {
            xtype: 'container',
            id: 'sliding_menu',
            cls: 'sliding_menu',
            flex: 4,
            layout: 'fit',
			items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title : 'Slide Menu'
			},
			{
				xtype: 'list',
				itemTpl: '{category_name}',
				style:'background-color:#222222;',
				cls:'myList',
                data: [
                {
                    category_name: 'Letter A'
                },
                {
                    category_name: 'Letter B'
                },
                {
                    category_name: 'Letter C'
                }
                ]
			}
			],
			hidden:true
        },
        {
            xtype: 'navigationview',
            flex: 1,
            items: [
            	{
                	xtype: 'container',
                	title: 'Main Container',
                	html: 'Main Container'
                } 
            ],
            navigationBar: {
                items: [
                    {
                    	// SLIDE MENU BUTTON
                        iconMask: true,
						iconCls: 'list',
						align: 'left',
						handler : function() {
							// Show or hide sliding menu:
						    var settingsPanel = Ext.getCmp('sliding_menu');
                        
					        if (settingsPanel.isHidden()) {
					            settingsPanel.show({type:'slideIn', direction:'right', duration:70});
					        } else {
					            settingsPanel.hide({type: 'slideOut', direction: 'left', duration: 70});
					        } 
						}
                    }
                ]
            }
        }
		]  
    }
});
