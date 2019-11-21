<template>
  <div>
    <router-link to="/login" title="Login">
      <i class="fas fa-user-circle user my-2"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    localStorage.removeItem('customerId')
  }
}
</script>

<style scoped>
  .user {
    font-size: 40px;
    padding: 3px;
    color: #ff9f49;
    border: 3px solid #ff9f49;
    border-radius: 50%;
  }
</style>
