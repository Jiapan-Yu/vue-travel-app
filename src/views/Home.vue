<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <!-- destination 拿不到 -->
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{ name: 'details', params: { slug: destination.slug } }"
        >
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{ name: 'details', params: { slug: destination.slug } }"
          >
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "Home",
  components: {},
  data() {
    console.log("store: ", store.destinations);
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
a {
  color: lightseagreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
</style>
