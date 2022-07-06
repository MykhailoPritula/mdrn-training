<template>
  <div class="cart" :class="`cart-${cl}`" v-if="answers">
    <table>
      <thead v-if="cl === 'white'">
        <tr>
          <th colspan="3"><span>Résumé de votre commande</span></th>
        </tr>
      </thead>
      <thead v-else>
        <tr>
          <th colspan="2"><span>PRODUIT</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="cl === 'white'">
          <td>Produit</td>
          <td>Quantité</td>
          <td>Prix</td>
        </tr>
        <tr>
          <td class="cart-general">{{ products[answers.q6].title }}</td>
          <td v-if="cl === 'white'">1</td>
          <td>{{ this.$store.state.currency }}{{ products[answers.q6].price }}</td>
        </tr>
        <tr v-for="option in products[answers.q6].options">
          <td>{{ option }}</td>
          <td v-if="cl === 'white'">1</td>
          <td>GRATUIT</td>
        </tr>
        <tr v-if="meal">
          <td>Plan alimentaire personnalisé</td>
          <td v-if="cl === 'white'">1</td>
          <td>{{ this.$store.state.currency }}57</td>
        </tr>
      </tbody>
      <tfoot>
        <tr v-if="this.$store.state.couponDiscount">
          <td>Discount:</td>
          <td v-if="cl === 'white'">&nbsp;</td>
          <td>{{ this.$store.state.couponDiscount }}%</td>
        </tr>
        <tr>
          <td>Le total</td>
          <td v-if="cl === 'white'">&nbsp;</td>
          <td v-if="meal && this.$store.state.couponDiscount">{{ this.$store.state.currency }}{{ ( (Number(products[answers.q6].price) + Number(products[8].price)) - (Number(products[answers.q6].price) + Number(products[8].price)) * Number(this.$store.state.couponDiscount) / 100 ).toFixed(2) }}</td>
          <td v-else-if="!meal && this.$store.state.couponDiscount">{{ this.$store.state.currency }}{{ ( Number(products[answers.q6].price) - (Number(products[answers.q6].price) * Number(this.$store.state.couponDiscount) / 100 ) ).toFixed(2) }}</td>
          <td v-else-if="meal && !this.$store.state.couponDiscount">{{ this.$store.state.currency }}{{ Number(products[answers.q6].price) + Number(products[8].price) }}</td>
          <td v-else >{{ this.$store.state.currency }}{{ products[answers.q6].price }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
export default {
  props: ['cl'],
  data(){
    return {
      total: 0
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    answers(){
      return this.$store.state.answers;
    },
    meal(){
      return this.$store.state.meal;
    }
  },
  beforeCreate(){
    this.$store.dispatch("getAnswers")
    this.$store.dispatch("getMeal")
  }
}
</script>
<style lang="scss" scoped>
.cart{
  padding: 24px 16px;
  margin-bottom: 60px;
  @media(min-width:768px){
    padding: 40px;
    margin-bottom: 0;
  }
  &-white{
    background: #fff;
    border: 1px solid #CCCCD9;
    margin-bottom: 24px;
    padding: 16px;
    @media(min-width:768px){
      padding: 25px;
    }
    thead{
        border-bottom: 1px solid #CCCCD9;
      th{
        padding-bottom: 24px;
        text-align: left;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 17px;
        line-height: 24px;
        color: #000000;
        text-transform: none;
        @media(min-width:768px){
          font-size: 20px;
        }
      }
    }
    tbody{
      tr:first-child{
        td{ 
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #000;
        text-transform: none;
        }
      }
      td{
        &:nth-child(2){
          text-align: center;
        }
        &:last-child{
          font-size: 13px;
          line-height: 16px;
          text-align: right;
          color: #4C4D53;
          text-transform: lowercase;
        }
      }
    }
    tfoot{
      td{
        font-family: Agrandir;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #000000;
        @media(min-width:576px){
          font-size: 20px;
        }
      }
    }
    .cart-general{
      font-family: Montserrat;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #4C4D53;
    }
  }
  &-gray{
    background: #ECF0F5;
    thead{
      th{
        padding: 0;
        text-align: left;
        font-family: Agrandir;
        font-weight: 300;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        border-bottom: 1px solid #000;
        font-size: 15px;
        line-height: 20px;
        @media(min-width:768px){
          font-size: 18px;
          line-height: 24px;
        }
        span{
          border-bottom: 3px solid #000;
          display: inline-block;
        }
      }
    }
  }
  &-general{
    font-family: Montserrat;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    @media(min-width:768px){
      font-size: 20px;
      line-height: 24px;
    }
  }
}
table{
  width: 100%;
  td{
    text-align: left;
    &:last-child{
      text-align: right;
    }
  }
}

tbody{
  td{
    padding: 8px 0;
    font-size: 16px;
    line-height: 24px;
    color: #4C4D53;
    @media(min-width:768px){
      padding: 12px 0;
    }
    &:first-child{
      padding-right: 16px;
    }
    &:last-child{
      font-size: 10px;
      line-height: 16px;
      @media(min-width:768px){
        font-size: 12px;
      }
    }
  }
  tr{
    &:first-child{
      td{
        padding-top: 24px;
        @media(min-width:768px){
          padding-top: 40px;
        }
      }
    }
    &:last-child{
      td{
        padding-bottom: 24px;
        @media(min-width:768px){
          padding-bottom: 40px;
        }
      }
    }
  }
}
tfoot{
  border-top: 1px dashed #CCCCD9;
  td{
    font-family: Agrandir;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    padding: 24px 0 0;
    @media(min-width:768px){
      font-size: 20px;
    }
  }
}
</style>
