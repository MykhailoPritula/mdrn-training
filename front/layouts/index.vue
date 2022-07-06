<template>
  <main>
    <Nuxt />
    <Footer />
    <Modal v-if="this.$store.state.modal" />
    <Loader v-if="this.$store.state.loader" />
  </main>
</template>