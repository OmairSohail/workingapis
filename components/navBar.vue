<template>
  <div class="Navbar">
     <div class="bg-orange-300 w-full flex flex-row justify-between items-center py-4 px-3">
        <div class="navbar-brand">
            <nuxt-link to="/" class="font-semibold text-2xl">OmairNews</nuxt-link>
        </div>
        <div class="navbar-links">
          <nuxt-link to="/" class="hover:underline hover:text-gray-600 mx-3">Home</nuxt-link>
          <nuxt-link to="/latest" class="hover:underline hover:text-gray-600 mx-3">Latest</nuxt-link>
        </div>
     </div>
  </div>
</template>

<script>
export default {
    name:'navbar'       
}
</script>

<style scoped>

</style>