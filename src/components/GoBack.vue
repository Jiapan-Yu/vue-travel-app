<template>
  <span class="go-back" @click="goBack">go back</span>
</template>

<script>
export default {
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}
button {
  border: 0;
};
</style>