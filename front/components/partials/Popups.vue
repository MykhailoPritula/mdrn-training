<template>
  <div class="popups">
    <a href="#" v-for="(item, i) in popups" @click="openModal" :data-index="i">{{ item.title }}</a>
    <a href="https://member.burnittraining.com/users/sign_in" target="_blank">Se connecter</a>
  </div>
</template>
<script>
export default {
  data(){
    return {
      popups: [
        {
          title: 'Mentions légales',
          content: `
            <h2>Conditions générales d’utilisation</h2>
            <h3>ARTICLE 1. MENTIONS LÉGALES</h3>
            <h4>EDITION DU SITE</h4>
            <p>Le site MDRN Training, accessible par voie électronique à l’adresse url mdrn-training.com est la propriété de MDRN Training Inc 8 The Green , Ste A Dover, DE 19901.</p>
            <p>Les coordonnées de MDRN Training Inc sont :</p>
            <p>Adresse postale établissement principal : 8 The Green , Ste A Dover, DE 19901</p>
            <p>MDRN Training Inc est la société éditrice du site susvisé.</p>

            <h4>HÉBERGEMENT DU SITE</h4>
            <p>Le site est hébergé par AWS, dont le siège social est :</p>
            <p>52 RUE DU PORT 92000 Nanterre</p>

            <h4>ARTICLE 2. DÉFINITIONS</h4>
            <p>Conditions d’Utilisation : désigne les conditions générales d’utilisation du Site.</p>
            <p>Site : ce terme désigne le site internet de la société MDRN Training Inc accessible à l’adresse <a href="https://mdrn-training.com/">mdrn-training.com</a>.</p>
            <p>Utilisateur : désigne les internautes utilisateurs du Site.</p>
            <p>Forum: désigne l'espace de discussion accessible sur le site.</p>
            <p>Service: désigne les services proposés parmi l'offre de Services présentée à l'article 9. Présentation des services des Conditions Générales d'Abonnement.</p>

            <h4>ARTICLE 3. ACCEPTATION DES CONDITIONS D'UTILISATION PAR L'UTILISATEUR</h4>
            <p>Les présentes conditions générales d’utilisation s'appliquent de façon exclusive entre tout Utilisateur et la société MDRN Training Inc et s’appliquent sans restriction ni réserve à l’ensemble du site. L’utilisation du Site vaut acceptation intégrale et sans réserve des Conditions d’Utilisation par l’Utilisateur.</p>
            <p>Pour ne pas être lié par les présentes Conditions d'Utilisation, nous vous remercions de ne pas accéder et/ou utiliser le site.</p>
            <p>La société MDRN Training Inc conserve également la possibilité de mettre à la disposition des Utilisateurs d'autres services que ceux décrits dans le cadre des présentes.</p>
            <p>Dans cette hypothèse, la société MDRN Training Inc pourra appliquer d'autres conditions d'utilisation qui devront être, le cas échéant, préalablement acceptées par les Utilisateurs.</p>

            <h4>ARTICLE 4. MAINTENANCE DU SITE</h4>
            <p>La société MDRN Training Inc s’engage à assurer la maintenance régulière du Site et se réserve également la possibilité de recourir à un tiers afin d’assurer une partie ou la totalité des dites opérations de maintenance. Certaines opérations de maintenance pourront entraîner des interruptions momentanées de l’accès au Site.</p>

            <h4>ARTICLE 5. DONNÉES A CARACTÈRE PERSONNEL</h4>
            <p>Lors des visites sur le site ou de souscription à un de nos programmes, des informations par le biais de questionnaires, formulaires, sont recueillies auprès de ce dernier.</p>
            <p>MDRN Training Inc a conçu ce programme personnalisé pour aider ses utilisateurs à améliorer leur comportement alimentaire et retrouver leur poids d'équilibre. Le programme de coaching en ligne met à votre disposition un parcours alimentaire et un parcours forme sur mesure, avec de nombreux exercices et outils : tableau de bord, statistiques personnelles, carnets alimentaires, bilans réguliers personnalisés selon votre progression. La communauté des utilisateurs peut communiquer par chats, forums et blogs.</p>
            <p>La vie privée et les données personnelles seront toujours respectées sur notre site.</p>

            <h4>ARTICLE 6. COOKIES</h4>
            <p>Article 6.1. Que sont les Cookies ?</p>
            <p>Afin de permettre à tous les internautes une navigation optimale sur le présent site, l’éditeur pourra procéder à l’implantation de cookies sur le poste informatique de l’utilisateur. Ces cookies permettent de stocker des informations relatives à la navigation sur le site (date, pages, heures, langue, adresse Internet, Protocole de l'ordinateur). Ils sont également utilisés à des fins d'analyse.</p>
            <p>En outre, lorsque vous visualisez ou cliquez sur des bandeaux publicitaires lors de votre visite du site, des cookies peuvent être placés afin de vous faire bénéficier de contenus publicitaires ciblés.</p>
            <p>Ces cookies ont vocation à être conservés sur le poste informatique de l’internaute pour la durée nécessaire à leur finalité et pourront être lus et utilisés par l’éditeur lors d’une visite ultérieure de l’Internaute sur le présent site.</p>

            <h4>Article 6.2. Comment les désactiver ?</h4>
            <p>Les internautes ont la possibilité de supprimer les cookies préalablement présents sur leur ordinateur, en se rendant dans le menu de leur navigateur prévu à cet effet.</p>
            <p>Sachez cependant que les modifications des paramétrages de cookies peuvent limiter l'accès à une partie de nos services</p>
            <p>Les internautes peuvent s'opposer à l'enregistrement de cookies en se renseignant dans la rubrique "Aide" de leur navigateur Internet ou en configurant leur navigateur de la manière suivante :</p>
            <p>- Pour Google Chrome : choisissez le menu "Paramètres" puis cliquez sur "Afficher les paramètres avancés", cliquez sur le bouton "Paramètres de contenu" dans la rubrique "Confidentialité", et dans la rubrique "Cookie", sélectionnez les options qui vous conviennent</p>
            <p>- Pour Microsoft Internet Explorer : choisissez le menu "Outils" puis "Options Internet", cliquez sur l'onglet "Confidentialité" et sélectionnez le niveau souhaité à l'aide du curseur.</p>
            <p>- Pour Mozilla Firefox : choisissez le menu "Outils" puis "Options", cliquez sur l'icône "Vie privée", et repérez le menu "cookie" et sélectionnez les options qui vous conviennent.</p>
            <p>- Pour Opera 6 et au-delà : choisissez le menu "Fichier" puis "Préférences" et enfin « Vie Privée ».</p>
            <p>- Pour Safari : choisissez le menu « Edition » puis « Préférences », cliquez sur l'option « Données personnelles » puis allez dans la Rubrique « Cookies »</p>

            <h4>ARTICLE 7. UTILISATION DES FORUMS ET ACCÈS A LA COMMUNAUTÉ MDRN Training.</h4>
            <h4>Article 7.1. Utilisation des Forums</h4>
            <p>Les forums de discussion du site <a href="https://mdrn-training.com/">mdrn-training.com</a> ont pour finalité d'offrir un espace d'expression autour de sujets liés au surpoids et à la perte de poids. MDRN Training Inc peut décider à tout moment et de manière discrétionnaire de ne pas diffuser les contributions d’un utilisateur qui seraient contraires à la loi, à l’éthique, ou sans lien avec l’activité de MDRN Training Inc.</p>
            <p>L'Utilisateur est entièrement responsable du contenu de sa contribution</p>
            <p>L’utilisateur est informé qu'il est strictement interdit de collecter et/ou d'utiliser les données à caractère personnel figurant dans ces espaces.</p>
            <h4>Article 7.2. Qualité des contributions.</h4>
            <p>L’utilisateur s’engage à ce que les contributions publiées sur le site ou dans le cadre des services ne soient pas contraires aux dispositions légales et/ou réglementaires en vigueur, ainsi qu’aux stipulations des présentes.</p>
            <p>Notamment, le contenu de ces contributions ne doit pas être susceptible de porter atteinte à l’image du site, des fonctionnalités et prestations qui y sont proposées ou encore de MDRN Training Inc.</p>
            <p>L’utilisateur s’engage notamment à s’interdire de communiquer des contributions :</p>
            <p>sans rapport avec l’objet du site, incomplet ou ne reflétant pas l’esprit du site</p>
            <p>contraires aux intérêts moraux et/ou matériels de MDRN Training Inc</p>
            <p>contraires aux lois et règlements en vigueur ;</p>
            <p>diffamatoires, insultants, déplacés, injurieux, obscènes, mensongers, fallacieux, agressifs, menaçants, vulgaires, dénigrants, médisants, calomnieux, indécent, ou portant atteinte à l’image ou à la réputation d’une marque ou d’une quelconque personne physique ou morale, de quelque que manière que ce soit ;</p>
            <p>et notamment sans que cela ne soit limitatif :</p>
            <p>haineux, raciste, xénophobe, pédophile, homophobe, révisionniste ou portant atteinte à l’honneur ou à la réputation d’autrui, menaçant une personne ou un groupe de personnes ;</p>
            <p>incitant à la discrimination, à l’injure, à la haine ou à la violence à l’égard d’une personne ou d’un groupe de personnes notamment en raison de leur origine, de leur appartenance ou non à une ethnie, une nation, une race ou une religion déterminée, de leur handicap, de leur préférences sexuelles, ou de toute autre différence ;</p>
            <p>faisant l’apologie ou la négation ou remettant en question des crimes de guerre ou des crimes contre l’humanité,</p>
            <p>contraires à l’ordre public ou aux bonnes mœurs ;</p>
            <p>incitant à la violence notamment celle faite aux femmes,</p>
            <p>incitant de quelque manière que ce soit à la pornographie enfantine ;</p>
            <p>encourageant, aidant, colportant ou propageant de quelque manière que ce soit des rumeurs et/ou violant le caractère privé des correspondances ;</p>
            <p>portant atteinte à des mineurs, ou aux droits et à la protection des enfants ou adolescents ;</p>
            <p>incitant au suicide ou à la réalisation d’actions violentes contre autrui ;</p>
            <p>incitant à la maltraitance et/ou l’attaque d’individus ou d’animaux ;</p>
            <p>comportant des termes, propos et/ou des images susceptibles de porter atteinte au respect de la personne humaine ou de sa dignité ;</p>
            <p>comportant des termes, propos et/ou des images encourageant la commission de crimes et délits tels le commerce et la consommation de substances interdites, la prostitution, etc. ;</p>
            <p>susceptible de faire apparaître des croyances religieuses ou politiques ;</p>
            <p>visant à détourner la finalité du site et des services à des fins de propagande, de prosélytisme.</p>
            <p>L’utilisateur garantit également que les contenus des contributions qu’il publie ne portent pas atteinte aux droits de tiers, et notamment :</p>
            <p>ne portent pas atteinte aux droits de propriété intellectuelle des tiers, à une enseigne, une dénomination sociale, un nom de domaine ou un nom de serveur télématique ;</p>
            <p>ne portent pas atteinte à des droits de la personnalité, à la vie privée des personnes et/ou aux droits de celles-ci sur leur image et/ou à la propriété des biens et/ou aux dispositions relatives à la protection des données à caractère personnel et/ou au droit de la concurrence et/ou au droit commercial et des sociétés et/ou au droit social et/ou au droit de la consommation.</p>
            <p>D’une façon générale, l’utilisateur est invité à faire preuve de discernement et de prudence s’agissant des contributions qu’il publie et s’engage à porter le plus grand soin à leur contenu.</p>
            <p>L’utilisateur s'engage à ne pas inclure dans ses contributions des publicités, des informations, des liens hypertextes actifs ou non actifs, des numéros de téléphone, des adresses postales ou de courrier électronique ou toutes coordonnées de toute autre personne.</p>
            <p>L’utilisateur déclare qu'il dispose de tous les droits permettant de conclure les présentes et que rien, en conséquence, ne s'oppose à sa conclusion et à son exécution.</p>

            <h4>ARTICLE 8. RESPONSABILITÉ</h4>
            <p>MDRN Training Inc est responsable de plein droit à l’égard de l’abonné agissant en qualité de consommateur de la bonne exécution des obligations résultant des présentes. Cependant, MDRN Training Inc ne saurait être tenue pour responsable de l'inexécution des présentes due à un cas de force majeure (notamment, perturbation ou grève totale ou partielle, notamment des services postaux et moyens de transport ou de communications).</p>
            <p>MDRN Training Inc ne saurait également être considérée comme responsable lorsque la mauvaise exécution ou l’inexécution des présentes est imputable au fait imprévisible et insurmontable d’un tiers aux présentes ou au fait de l’abonné.</p>

            <h4>ARTICLE 9. JEUX, CONCOURS ET PROMOTIONS</h4>
            <p>MDRN Training Inc pourra occasionnellement proposer aux Utilisateurs des jeux, concours et/ou promotions accessibles sur le Site. Ces jeux, concours et promotions seront accessibles aux Utilisateurs selon des conditions et/ou règlements spécifiques qui devront être, le cas échéant, préalablement acceptés par les Utilisateurs.</p>

            <h4>ARTICLE 10. DROITS DE PROPRIÉTÉ INTELLECTUELLE</h4>
            <p>Article 10.1. Propriété intellectuelle de MDRN Training Inc</p>
            <p>Les présentes conditions n‘emportent aucune cession ou concession de droits de propriété intellectuelle au bénéfice de l’utilisateur, qui s’interdit en tout état de cause tout agissement et tout acte susceptible de porter atteinte directement ou non aux droits de propriété intellectuelle de MDRN Training Inc.</p>
            <p>A cet égard, il est précisé que le contenu du site, la structure générale ainsi que les marques, les dessins, les modèles, les images animées ou non, les textes, les photographies, les logos, les chartes graphiques, les logiciels et programmes, les moteurs de recherche, les bases de données, les sons, les vidéos, les noms de domaines, le design et tous les autres éléments composant le site ou toute autre information y figurant, sans que cette liste soit exhaustive, sont la propriété exclusive de MDRN Training Inc ou des partenaires ou tiers qui lui ont concédé une licence, et sont protégés par des droits de propriété intellectuelle qui leur sont ou seront reconnus selon les lois en vigueur.</p>
            <p>Toute reproduction et/ou représentation, totale ou partielle d’un de ces éléments, sans l’autorisation expresse de MDRN Training Inc, est interdite et constituerait notamment mais non exclusivement une contrefaçon sanctionnée par les dispositions du Code de la propriété intellectuelle.</p>
            <p>En aucun cas, l’utilisateur n’est autorisé à télécharger et/ou à modifier et/ou à reproduire tout ou partie du site.</p>
            <p>Toutefois, la mise en place par l'utilisateur d'un lien hypertexte vers le site est possible mais ne pourra engager la responsabilité de la société MDRN Training Inc. En outre, l’utilisateur s’engage à ne rien faire qui puisse créer une quelconque référence à la Société MDRN Training Inc ou au site et engager la responsabilité de la société MDRN Training Inc envers les tiers.</p>
            <p>Toute utilisation commerciale ou promotionnelle de contenus (information, texte, charte graphique, rubrique …) et/ou dénomination et/ou de marques et/ou de logos ou autres signes distinctifs de la société MDRN Training Inc est interdite sauf autorisation préalable expresse et écrite de la société MDRN Training Inc.</p>

            <h4>10.2. Propriété intellectuelle de l'utilisateur</h4>
            <p>Les contributions publiées et mises en ligne sur le site par l’utilisateur, notamment sur le forum, ne sont soumises, par leur nature, à aucun droit de propriété intellectuelle.</p>
            <p>A ce titre, les abonnés reconnaissent notamment que MDRN Training Inc est libre de les exploiter, en tout ou partie, sur quelque support que ce soit et pour quelque usage que ce soit.</p>
            <p>Si l’une des contributions revêt le caractère d’originalité propre à accorder à son auteur la protection au titre du droit d’auteur, ce dernier cède à MDRN Training Inc à titre gratuit, avec toutes les garanties de fait et de droit associées, l'intégralité des droits de propriété intellectuelle qu'il serait susceptible de détenir sur les contributions qu’il aura publié sur le site.</p>
            <p>Les droits cédés comprennent, en application de l'article L. 131-3 du Code de la propriété intellectuelle:</p>
            <p>- pour le droit de reproduction : le droit de reproduire ou de faire reproduire tout ou partie des contenus sur tous supports connus ou inconnus à ce jour ;</p>
            <p>- pour le droit d'adaptation : le droit de modifier, de faire évoluer, de réaliser de nouvelles versions des contenus, de les maintenir, de les mettre à jour, de les enrichir, de les associer en tout ou partie à tout texte ou légende, de les traduire en toute langue, de les intégrer en tout ou partie à toutes œuvres existantes ou à venir, et ce sur tous supports connus ou inconnus à ce jour ;</p>
            <p>- pour le droit de représentation : le droit de représenter, de diffuser ou de faire diffuser les contenus par tous moyens et/ou supports électroniques, numériques, informatiques, de télécommunications et ce, auprès de tout public et pour tout réseau de télécommunications.</p>
            <p>Pour l'ensemble des droits susvisés, sont compris les vecteurs de communication et les supports de toute nature, tels que la diffusion directe ou indirecte par tout moyen électronique, de télécommunication et de communication électronique, satellitaire ou par câble, sous forme télévisuelle par voie hertzienne terrestre ou spatiale, analogique ou numérique, sous toute forme, telles que intranet, internet, GSM, GPRS, UMTS et sur tous supports présents et à venir, notamment papier, électronique, magnétique, disque, réseau, disquette, DVD, CD Rom.</p>
            <p>Les droits énumérés dans le présent article sont cédés à MDRN Training Inc pour toute la durée légale de protection des droits de propriété intellectuelle telle que reconnue par les lois présentes ou à venir et pour le monde entier.</p>

            <h4>ARTICLE 11. RADIATION DE L'UTILISATEUR</h4>
            <p>La société MDRN Training Inc se réserve le droit de radier immédiatement un Utilisateur inscrit, en cas de non-respect de l’une des Conditions d’Utilisation du site ou de conditions particulières propres à tout ou partie des Services.</p>

            <h4>ARTICLE 12. CONSERVATION ET ARCHIVAGE</h4>
            <p>La société MDRN Training Inc s’engage auprès des Utilisateurs à conserver les documents selon la réglementation en vigueur.</p>

            <h4>ARTICLE 13. MODIFICATION DU SITE ET DES CONDITIONS D'UTILISATIONS</h4>
            <p>La société MDRN Training Inc a la possibilité de modifier tout ou partie des Services et du Site.</p>
            <p>Corrélativement, la société MDRN Training Inc a également la possibilité de modifier les Conditions d’Utilisation en mettant à jour le présent document, étant précisé que les conditions modifiées entreront en vigueur à la date à laquelle elles seront apposées sur le Site.</p>
            <p>La poursuite de l’utilisation du Site par les Utilisateurs après la date d’entrée en vigueur de telles modifications vaudra acceptation par les Utilisateurs des modifications apportées.</p>

            <h4>ARTICLE 14. LOI APPLICABLE ET JURIDICTION COMPÉTENTE</h4>
            <p>Les présentes conditions d’utilisation sont soumises à la loi française. Toute difficulté d’interprétation ou d’exécution relève exclusivement de la compétence du Tribunal de Grande Instance de Paris.</p>

            <h4>ARTICLE 15. DROIT DE RÉTRACTATION</h4>
            <p>
              En vertu de l’article L221-18 du code de la consommation, le consommateur dispose d’un droit de rétractation de 14 jours à compter de la conclusion du contrat ou de la réception du bien. <br><br>
              Néanmoins, l’article L221-28 alinéa 13 prévoit une exception dans le cas de la fourniture d’un « contenu numérique non fourni sur un support matériel dont l'exécution a commencé après accord préalable exprès du consommateur» <br><br>
              Les produits proposés par la société MDRN Training Inc rentrant dans ce cadre, le droit de rétractation prévu par l’article L221-18 ne s’applique donc pas. <br><br>
              En revanche, dans le cadre de notre politique commerciale, la société MDRN Training Inc, s’engage à rembourser sur simple demande par email au support (support@mdrn-training.com) toute inscription faite dans les 30 jours suivant la réception du paiement. <br><br>
              Chaque utilisateur pourra donc librement demander le remboursement de son prélèvement à condition que la demande soit effectuée dans les 30 jours suivant son inscription.
            </p>
          `
        },
        {
          title: 'Politique de confidentialité',
          content: `
            <h2>Politique de confidentialité</h2>
            <h4>1.Collecte de l’information </h4>
            <p>Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, faites un achat, participez à un concours, et / ou lorsque vous vous déconnectez. Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone, et / ou carte de crédit.</p>
            <p>En outre, nous recevons et enregistrons automatiquement des informations à partir de votre ordinateur et navigateur, y compris votre adresse IP, vos logiciels et votre matériel, et la page que vous demandez.</p>
            <p><h4>2. Utilisation des informations </h4></p>
            <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
            <p>- Personnaliser votre expérience et répondre à vos besoins individuels</p>
            <p>- Améliorer notre site</p>
            <p>- Améliorer le service client et vos besoins de prise en charge</p>
            <p>- Vous contacter par e-mail</p>
            <p>- Administrer un concours, une promotion, ou une enquête</p>
            <h4>3. Confidentialité du commerce en ligne </h4>
            <p>Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n’importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et / ou une transaction, comme par exemple pour expédier une commande.</p>
            <h4>4. Divulgation à des tiers </h4>
            <p>Nous ne vendons, n’échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.</p>
            <p>Nous pensons qu’il est nécessaire de partager des informations afin d’enquêter, de prévenir ou de prendre des mesures concernant des activités illégales, fraudes présumées, situations impliquant des menaces potentielles à la sécurité physique de toute personne, violations de nos conditions d’utilisation, ou quand la loi nous y contraint.</p>
            <p>Les informations non-privées, cependant, peuvent être fournies à d’autres parties pour le marketing, la publicité, ou d’autres utilisations.</p>
            <h4>5. Protection des informations </h4>
            <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne. Seuls les employés qui ont besoin d’effectuer un travail spécifique (par exemple, la facturation ou le service à la clientèle) ont accès aux informations personnelles identifiables. Les ordinateurs et serveurs utilisés pour stocker des informations personnelles identifiables sont conservés dans un environnement sécurisé.</p>
            <p>Est-ce que nous utilisons des cookies ? </p>
            <p>Nos cookies améliorent l’accès à notre site et identifient les visiteurs réguliers. En outre, nos cookies améliorent l’expérience d’utilisateur grâce au suivi et au ciblage de ses intérêts. Cependant, cette utilisation des cookies n’est en aucune façon liée à des informations personnelles identifiables sur notre site.</p>
            <h4>6. Se désabonner </h4>
            <p>Nous utilisons l’adresse e-mail que vous fournissez pour vous envoyer des informations et mises à jour relatives à votre commande, des nouvelles de l’entreprise de façon occasionnelle, des informations sur des produits liés, etc. Si à n’importe quel moment vous souhaitez vous désinscrire et ne plus recevoir d’e-mails, des instructions de désabonnement détaillées sont incluses en bas de chaque e-mail.</p>
            <h4>7. Consentement </h4>
            <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
          `
        }
      ]
    }
  },
  methods: {
    openModal(e){
      e.preventDefault();
      let index = e.target.dataset.index;
      this.$store.state.modal = this.popups[index].content;
      document.documentElement.style.overflowY = 'hidden'
    }
  }
}
</script>
<style lang="scss" scoped>
a{
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #004889;
  display: block;
  &:not(:first-child){
    margin-top: 10px;
    @media(min-width:768px){
      margin-top: 16px;
    }
  }
  &:hover{
    opacity: .7;
  }
}
.popups{
  margin-bottom: 40px;
  @media(min-width:768px){
    margin-bottom: 0;
  }
}
</style>
