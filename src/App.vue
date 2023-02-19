<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TrueNorth</a>
        <div id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/new-operation">New Operation</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">Records</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link sign-out" to="/about">Sign Out</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

<div class="container">
  <div class="row">
    <div class="col-sm-6 offset-sm-3">
      <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
    </div>
  </div>
  <!-- <h3>Basic Navbar Example</h3>
  <p>A navigation bar is a navigation header that is placed at the top of the page.</p> -->
  <div class="row">
    <div class="col">&nbsp;</div>
    <div class="col-6">
      <RouterView />
    </div>
    <div class="col">&nbsp;</div>
  </div>
</div>

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (to, from){
      // clear alert on location change
     this.clearAlert();
    }
  }
};
</script>

<style scoped>
  .container-fluid {
    padding: 0 32px;
  }
  .nav-link {
    margin-right: 20px;
  }
  .sign-out {
    margin-left: 40px;
  }
  .container {
    margin: 50px auto;
    max-width: 800px;
  }
  .col-6 {
    padding: 15px;
    background-color: lightgrey;
    border-radius: 10px;
  }
</style>
