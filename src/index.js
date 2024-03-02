// import {RenderTrigger} from "./trigger-rendering-button";
import { CandlestickChart } from './candlestick-chart';
import { CandlestickBuilderPanel } from './candlestick-builder-panel';
import { CandlestickStylingPanel } from './candlestick-styling-panel';

// customElements.define("render-trigger", RenderTrigger)
customElements.define('com-candlestick-chart', CandlestickChart);
customElements.define('com-candlestick-builder', CandlestickBuilderPanel);
customElements.define('com-candlestick-styling', CandlestickStylingPanel);
