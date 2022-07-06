<template>
  <section class="items items-male">
    <div class="container">
      <div class="top">
        <div class="title">
          <span>Voici ce que notre <br> offre comprend.</span>
        </div>
        <div class="sub">
          <span>description du  <br> programme</span>
        </div>
      </div>
      <div class="posts">
        <div class="right">
          <img src="@/assets/img/offer-male/items-img.png">
        </div>
        <div class="left">
          <div class="post-item" v-animate-onscroll="'animated fadeInUp'" v-for="(post, i) in posts">
            <div class="num">/0{{ ++i }}</div>
            <div class="title">
              <span>{{ post.title }}</span>
            </div>
            <div class="text">{{ post.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      posts: [
        {
          title: 'Entraînement mobile',
          text: `Emportez avec vous votre programme à la salle ! Cette version spéciale mobile vous offre une description complète des exercices, des vidéos explicatives, ainsi que le nombre de répétitions et le temps de récupération entre chaque exercice. Pensé spécialement pour les mobiles même les plus petits.`
        },
        {
          title: 'Intro: Entraînez votre esprit',
          text: `Parce que pendant toutes ces années de régimes et d'entraînements j'ai dû apprendre à maîtriser l'art de la motivation. Ces e-mails sont ma manière de partager avec vous certains de mes secrets et de vous aider à remplacer vos mauvaises habitudes par de nouveaux réflexes.`
        },
        {
          title: 'Notre guide de diet 1ère partie : débutant',
          text: `Apprenez les bases de la nutrition dont tout votre régime dépendra. Comprend également un guide qui vous explique comment construire votre propre programme d'alimentation afin de vous assurer que celui-ci correspond bien à votre objectif de perte de poids ou de prise de masse.`
        },
        {
          title: 'Notre guide de diet 2ème partie : avancé',
          text: `Après avoir appris les bases de la diététique, découvrez l'un des plus populaire, si ce n'est le plus populaire de tous les programmes de nutrition utilisé par les modèles de fitness et différents athlètes à travers le monde. Nous voulons vous apprendre comment devenir un expert dans la création de vos propres régimes et comment l'adapter pour éviter l'effet de plateau ou lorsque vous modifiez vos objectifs.`
        },
        {
          title: `Les dix commandements de l'entraînement avec des poids.`,
          text: `La bible a ses 10 commandements, l'entraînement avec poids aussi. Voici les principes que vous devez suivre au quotidien lorsque vous vous entraînez afin d’être le plus efficace possible pendant vos séances. Apprenez à soulever intelligemment.`
        },
        {
          title: `Notre journal d'entraînement`,
          text: `Dans notre journal d'entraînement, je vous propose un programme exact d'entraînement à suivre au quotidien pendant 90 jours. Nous vous précisons les jours où vous devez aller à la salle, les exercices à faire, le nombre de répétitions, le nombre de circuits, le temps de récupération.... Ainsi vous êtes sûr de ne jamais être perdu quand vous allez à la salle.`
        },
        {
          title: 'Notre guide de Hiit cardio',
          text: `Dans ce guide nous vous présentons les meilleurs exercices de HIIT afin de déclencher le fameux effet de post combustion. Là où la plupart des exercices ne vous font brûler des calories que lorsque vous vous entraînez, les exercices réalisés en intervalles training vous permettent de continuer à brûler des calories même APRÈS votre séance. Vous trouverez dans notre programme HIIT cardio tous nos exercices détaillés. Il s’agit sûrement du changement le plus CRUCIAL que vous devriez apporter à votre routine.`
        },
        {
          title: 'Outro: Tout en un',
          text: `Il s’agit de vous accompagner pour garder la motivation pour suivre notre programme pendant ces 90 jours. Nous ne voulons pas que vous abandonniez, nous voulons vous voir réussir et devenir la meilleure version de vous-même.`
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.items{
  padding-top: 50px;
  @media(min-width:768px){
    padding-top: 100px;
  }
}
.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
  @media(max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 40px;
  }
  .title {
    font-family: Agrandir;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #000000;
    font-size: 35px;
    line-height: 48px;
    @media(min-width:576px){
      font-size: 40px;
    }
    @media(min-width: 992px) {
      font-size: 60px;
      line-height: 64px;
    }
  }
  .sub {
    font-family: Agrandir;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 24px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-align: right;
    @media(max-width:767px){
      text-align: left;
    }
  }
}

.posts {
  margin-bottom: 100px;
  @media(min-width: 768px) {
    display: flex;
    margin-bottom: 160px;
  }
}

.post {
  &-item {
    &:not(:first-child) {
      margin-bottom: 40px;
      margin-top: 40px;
      @media(max-width: 767px) {
        margin-top: 80px;
        margin-bottom: 80px;
      }
    }
    &:first-child {
      @media(max-width:767px){
        margin-top: 80px;
      }
    }
  }
}

.left,
.right {
  @media(min-width: 768px) {
    flex: 1 50%;
  }
}

.right {
  @media(min-width: 768px) {
    order: 2;
    padding-left: 70px;
  }
  img {
    width: 100%;
    display: block;
    position: sticky;
    top: 30px;
  }
}

.left {
  .num {
    font-family: Agrandir;
    font-weight: 300;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #CCCCD9;
    margin-bottom: 40px;
    font-size: 48px;
    font-size: 1;
    @media(min-width:768px){
      margin-bottom: 56px;
      font-size: 64px;
      line-height: 80px;
    }
  }
  .title {
    font-family: Agrandir;
    font-weight: 300;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #000000;
    border-bottom: 1px solid #000;
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 20px;
    @media(min-width:768px){
      margin-bottom: 40px;
      font-size: 18px;
      line-height: 24px;
    }
    span {
      display: inline-block;
      border-bottom: 3px solid #000;
    }
  }
  .text {
    font-size: 16px;
    line-height: 24px;
    text-indent: 12%;
  }
}
</style>