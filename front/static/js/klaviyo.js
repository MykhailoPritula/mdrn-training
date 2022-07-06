let klaviyo = document.createElement('script');
klaviyo.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XDGXFa';
klaviyo.async = true;

window.addEventListener("load", event => {
  document.getElementsByTagName('head')[0].appendChild(klaviyo);
});