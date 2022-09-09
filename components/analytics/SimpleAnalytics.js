import Script from 'next/script'

const SimpleAnalyticsScript = () => {
  return (
    <>
      <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "dl0ly56clg");
</script>
  )
}


// https://docs.simpleanalytics.com/events
export const logEvent = (eventName, callback) => {
  if (callback) {
    return window.sa_event?.(eventName, callback)
  } else {
    return window.sa_event?.(eventName)
  }
}

export default SimpleAnalyticsScript
