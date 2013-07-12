Sencha-Touch-Facebook-Slide-Menu
================================

Facebook style slide menu for Sencha Touch apps - made in 5 minutes.
Very easy implementation to get you started. The goal was to provide a very open starting point, giving you the basic functionality with all opportunities to extend.



![ScreenShot](https://raw.github.com/klauswaiss/Sencha-Touch-Facebook-Slide-Menu/master/screen01.png)  - 
![ScreenShot](https://raw.github.com/klauswaiss/Sencha-Touch-Facebook-Slide-Menu/master/screen02.png)




Steps:
==========

1. Add FB_Slide_Menu_Container.js to your project <project_name>/app/view/FB_Slide_Menu_Container.js

2. Implement FB_Slide_Menu_Container.js  into your app.js (under views). See example

3. Add the fb_slide_menu_container to your view. See example (.../app/view/Main.js)

4. Add the css for the slide menu to your resources (..../resources/css/slide_menu.css)

5. Implement the css for the slide menu in your app.json


NOTES:
=========

The FB_Slide_Menu_Container.js is working inside an Ext.Tab.Panel (as a tab item). If you want to include it into a common Container or Panel, you might have to change a few things.
The FB_Slide_Menu_Container.js  comes with a list inside, but of course you can put anything you need inside.

