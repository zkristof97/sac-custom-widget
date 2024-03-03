This repository includes the source code to create a custom widget in **SAC (SAP Analytics Cloud).**

[The Highcharts Live candlestick chart is displayed in the widget](https://www.highcharts.com/demo/stock/live-candlestick)

[Link to SAC custom widget developer guide](https://help.sap.com/docs/SAP_ANALYTICS_CLOUD/0ac8c6754ff84605a4372468d002f2bf/75311f67527c41638ceb89af9cd8af3e.html)

Everything is based on custom [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)s which you will have to create, so that your widget would be displayed in SAC.

Gluing everything together happens in the _candle-sticks.json_ (name is arbitrary) which is the only file that you are going to upload to SAC when you want to "register" your custom widget.

You can read more about which property is for what in the json, by following the link to the developer guide above.

Hosting of the static files have to be done somewhere on your side. In my case for local development I was just running a local express.js server (_setup in server.js_) with ngrok exposing the port.

Important **webcomponent** properties in the json file:
- "kind": the kind of the webcomponent e.g. main, styling, builder.
  -  main: is going to be your rendered chart
  -  styling: is going to be displayed in the View > Right Side Panel > Styling and allows you to set custom properties to style your chart
  -  builder: is going to be displayed in the View > Right Side Panel > Builder and allows you to customize your chart
-  "tag": the name of your custom **HTMLElement**
-  "url": the url of the file in which your custom **HTMLElement** is implemented

In the json config file, under:
- "properties": you have to define the properties that you want to set during runtime
- "method": you have to define the methods you want to trigger in your custom **HTMLElement** the key name has to match your function's name!

The 3 custom **HTMLElement**s:
 - com-candlestick-chart: has the "kind" set to "main" which signals to SAC that this is the chart itself that will be displayed as the chart content,
 - com-candlestick-styling: has the "kind" set to "styling" so is going to be displayed in the Styling panel
 - com-candlestick-builder: has the "kind" set to "builder" so is going to be displayed in the Builder panel

It is best to bundle and minify your code **when using 3rd party libraries** to avoid script loading errors, as shown in this repository using webpack.

Custom **HTMLElement** lifecycle in SAC:
1. onCustomWidgetBeforeUpdate(changedProperties): is called before the chart updates
2. onCustomWidgetAfterUpdate(changedProperties): is called after the properties changed for example when changing the styling
