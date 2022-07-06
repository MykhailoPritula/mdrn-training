let everflow = document.createElement('script');
everflow.src = 'https://www.cowcash.us/scripts/sdk/everflow.js';
document.getElementsByTagName('head')[0].appendChild(everflow);

setTimeout(()=>{
if( EF.urlParameter('oid') ){
  EF.click({
    sub1: EF.urlParameter('sub1'),
    sub2: EF.urlParameter('sub2'),
    sub3: EF.urlParameter('sub3'),
    sub4: EF.urlParameter('sub4'),
    sub5: EF.urlParameter('sub5'),
    uid: EF.urlParameter('uid'),
    offer_id: EF.urlParameter('oid'),
    affiliate_id: EF.urlParameter('global'),
    source_id: EF.urlParameter('source_id'),
    transaction_id: EF.urlParameter('_ef_transaction_id'),
  });
}
}, 1000);