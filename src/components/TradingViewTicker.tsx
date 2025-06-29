
import { useEffect } from 'react';

const TradingViewTicker = () => {
  useEffect(() => {
    // Clean up any existing TradingView scripts
    const existingScript = document.querySelector('script[src*="ticker-tape.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append the TradingView script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500 Index"
        },
        {
          proName: "FOREXCOM:NSXUSD", 
          title: "US 100 Cash CFD"
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD"
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin"
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum"
        }
      ],
      colorTheme: "dark",
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      displayMode: "adaptive"
    });

    const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700">
      <div className="tradingview-widget-container h-16">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright hidden">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TradingViewTicker;
