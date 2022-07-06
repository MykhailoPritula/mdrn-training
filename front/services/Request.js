import axios from "axios"
const api = process.env.NODE_ENV === 'production' ? 'https://api.mdrn-training.com' : 'http://localhost:9100';

export default {
  async konnektiveCreditcardOrderImport(data) {
    let res = await axios.post(api+'/konnektive/creditcard/order/import', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async konnektivePaypalOrderImport(data) {
    let res = await axios.post(api+'/konnektive/paypal/order/import', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async konnektivePaypalOrderConfirm(data) {
    let res = await axios.post(api+'/konnektive/paypal/order/confirm', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async konnektiveOrderConfirm(data) {
    let res = await axios.post(api+'/konnektive/order/confirm', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async konnektiveCampaignCoupons(data) {
    let res = await axios.post(api+'/konnektive/campaign/coupons', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async thinkificUsers(data) {
    let res = await axios.post(api+'/thinkific/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async klaviyoIdentify(data) {
    let res = await axios.post(api+'/klaviyo/identify', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  }
}