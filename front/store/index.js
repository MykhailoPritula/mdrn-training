import Vuex from 'vuex';
import Request from '@/services/Request.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      coupons: false,
      offerActive: false,
      answers: false,
      modal: false,
      loader: false,
      loaderMSG: false,
      currency: '€',
      couponCode: false,
      couponDiscount: false,
      amountDiscount: false,
      meal: false,
      campaignId: 11,
      products: {
        1: {
          id: 66,
          title:`Programme tonic max 90 jours (femme)`,
          price: 57,
          options: [`Guide de recette spécial tonification (femme)`, `Programme HIIT cardio`, `Programme abdo ventre plat`, `Booty max`, `Programme tonic max 90 jours à la maison (femme)`],
          courses: [1107840, 1104710, 1096529, 1092657, 1107152, 1107254, 1092443, 1086580, 1185560]
        },
        2: {
          id: 67,
          title:`Programme spécial sèche 90 jours (femme)`,
          price: 57,
          options: [`Guide de recette spécial perte de poids (femme)`, `Programme HIIT cardio`, `Programme abdo ventre plat`, `Booty max`, `Programme spécial sèche 90 jours à la maison (femme)`],
          courses: [1107836, 1104710, 1096529, 1092670, 1107257, 1107260, 1092443, 1086579, 1185560]
        },
        3: {
          id: 68,
          title:`Programme tonic max 90 jours (femme)`,
          price: 57,
          options: [`Guide de recette spécial tonification (femme)`, `Programme HIIT cardio`, `Programme abdo ventre plat`, `Booty max`, `Programme tonic max 90 jours à la maison (femme)`],
          courses: [1107840, 1104710, 1096529, 1092657, 1107152, 1107254, 1092443, 1086580, 1185560]
        },
        4: {
          id: 69,
          title:`Programme spécial masse 90 jours (homme)`,
          price: 57,
          options: [`Guide de recette spécial prise de masse (homme)`, `Programme spécial bras (homme)`, `Programme HIIT cardio`, `Programme spécial masse 90 jours à la maison (homme)`, `Abdo cut (homme) `],
          courses: [1107841, 1100335, 1104710, 1086574, 1107346, 1107354, 1093344, 1103314, 1185560]
        },
        5: {
          id: 70,
          title:`Programme spécial sèche 90 jours (homme)`,
          price: 57,
          options: [`Guide de recette spécial sèche (homme)`, `Programme spécial bras (homme)`, `Programme HIIT cardio`, `Programme spécial sèche 90 jours à la maison (homme)`, `Abdo cut (homme) `],
          courses: [1107835, 1100335, 1104710, 1086550, 1107355, 1107365, 1091388, 1103314, 1185560]
        },
        6: {
          id: 71,
          title:`Programme spécial sèche 90 jours (homme)`,
          price: 57,
          options: [`Guide de recette spécial sèche (homme)`, `Programme spécial bras (homme)`, `Programme HIIT cardio`, `Programme spécial sèche 90 jours à la maison (homme)`, `Abdo cut (homme) `],
          courses: [1107835, 1100335, 1104710, 1086550, 1107355, 1107365, 1091388, 1103314, 1185560]
        },
        7: {
          id: 72,
          title:`Programme spécial sèche 90 jours (homme)`,
          price: 57,
          options: [`Guide de recette spécial sèche (homme)`, `Programme spécial bras (homme)`, `Programme HIIT cardio`, `Programme spécial sèche 90 jours à la maison (homme)`, `Abdo cut (homme) `],
          courses: [1107835, 1100335, 1104710, 1086550, 1107355, 1107365, 1091388, 1103314, 1185560]
        },
        8: {
          id: 73,
          title:`Meal plan`,
          price: 57,
          course: 1086264
        }
      }
    },
    mutations: {
      SET_COUPONS(state, coupons) {
        state.coupons = coupons
      },
      SET_ANSWERS(state, answers) {
        state.answers = answers
      },
      SET_MEAL(state, meal) {
        state.meal = meal
      }
    },
    actions: {
      getCoupons({ commit }) {
        Request.konnektiveCampaignCoupons({campaignId: this.state.campaignId})
          .then(coupons => {
            commit('SET_COUPONS', coupons)
          })
      },
      getAnswers({ commit }) {
        let answers;

        if(localStorage.answers){
          answers = JSON.parse(localStorage.answers)
        } else {
          answers = {
            q1: false,
            q2: false,
            q3: false,
            q4: false,
            q5: false,
            q6: false
          }
          localStorage.answers = JSON.stringify(answers)
        }
        commit('SET_ANSWERS', answers)
      },
      getMeal({ commit }) {
        if(localStorage.meal){
          let meal = JSON.parse(localStorage.meal);
          commit('SET_MEAL', meal);
        }
      }
    },
    modules: {
    }
  })
}

export default createStore