<template>
  <nav id="nav">
    <p class="logo">The Vue School Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li
        class="links"
        v-for="destination in destinations"
        :key="destination.id"
      >
        <router-link
          :to="{
            name: 'details',
            params: { slug: destination.slug }
          }"
          >{{ destination.name }}</router-link
        >
      </li>
      <li class="links">
        <router-link to="/user">Dashboard</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store.js";

export default {
  data() {
    return {
      destinations: store.destinations
    };
  }
}
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid grey;
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}

#nav .exact-active-spot {
  color: #ab26ab;
}

.nav-links {
  display: flex;
  align-items: center;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
