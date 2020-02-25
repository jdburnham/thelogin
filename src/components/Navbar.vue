<template>
  <nav class="flex bg-orange-600 h-20 px-6 justify-between items-center">
    <div>
      <router-link class="logo font-bold text-xl tracking-tight" to="/"
        >The Login</router-link
      >
    </div>
    <div>
      <span v-if="user" class="text-white font-bold mr-8">
        Welcome <span class="font-normal">{{ user.displayName }}</span>
      </span>
      <router-link
        v-if="!user"
        class="p-2 mx-1 hover:text-orange-600 hover:bg-gray-800"
        to="/login"
        >Login</router-link
      >
      <button
        v-if="user"
        class="p-2 mx-1 hover:text-orange-600 hover:bg-gray-800"
        @click="logout"
      >
        Logout
      </button>
      <router-link
        class="p-2 mx-1 hover:text-orange-600 hover:bg-gray-800"
        to="/public"
        >Public</router-link
      >
      <router-link
        v-if="user"
        class="p-2 mx-1 hover:text-orange-600 hover:bg-gray-800"
        to="/private"
        >Private</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style lang="scss" scoped>
:not(.logo).router-link-exact-active {
  @apply font-bold text-orange-600 bg-white;
}
</style>
