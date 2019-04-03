<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="'/'">我要入場</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'Payment'">繳費</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'LeavePark'">我要出場</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'ConfirmProcess'">再次入場？</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 15px 0px;
}
</style>
