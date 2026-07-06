# Now updated to work with the latest Home Assistant 2026.7.1

This is specific to the Dukaone and similar that are using this integration:

[ha-duka-one](https://github.com/dingusdk/ha-dukaone)

It will have "mode" buttons and speed buttons


For a more generic one without the mode you can check out this one:

[Fan Mode Button Row](https://github.com/finity69x2/fan-mode-button-row)


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

