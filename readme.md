# Custom duka one entity row for Home Assistant

This is a Home Assistant custom entity row for the duka one heat exchanger.

[Read more about duka one and HA integration in my blog](https://www.dingus.dk/dukaone-ventilation-with-heat-exchanger-and-home-assistant/)

This is an example of how it looks in HA:

![Duka one entity rom in HA](images/ui.png)

You can control the mode and the fan speed.

You can install it using hacs or just copy the js file manually in the dist folder. Remember to add the js file to your lovelace resources. You find it in configuration|Lovelave Daskboards - and choose "Resources" in the top.

This is the url if you are using hacs:
~~~
/hacsfiles/duka-control-entity-row/duka-control-entity-row.js
~~~
Set resource type to "Javascript module".

To insert the entity row in lovelace, you must choose "Show code editor" in the entity card configuration in lovelace. Then insert it like this:
~~~
-   entity: fan.nameofyourdevice
    name: DukaOne Soveværelse
    type: 'custom:duka-control-entity-row'
~~~
~~~

I used the [Fan Control Entity Row](https://github.com/finity69x2/fan-control-entity-row) as a template for making this. I replaced the button text with images to make sure if remains the same size. And removed the custom text options and simplified the color options a bit.
I am not going to make changes to this on request - only if it is something I want myself. So don't ask - but feel free to copy it and make your own changes, and if you make something great tell about it!