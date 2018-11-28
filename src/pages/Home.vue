<template>
  <div>
    <div class="hero">
      <h1>Hello. I'm a User Experience Designer and 
          this space is a collection of my works
      </h1>
      <p>+ experiments and experiences</p>
    </div>
    <div class="projects">
      <h3>Featured Projects</h3>
      <div class="projectsRow">

        <router-link :to="{name: 'PageEDGame'}" class="project">
          <img src="../assets/images/sf.gif" width="100%"/>
          <h3>Gamification of English Learning</h3>
          <p>UI Design, UX Design, Prototyping</p>
        </router-link> 

        <div class="project">
          <img src="../assets/images/sf.gif" width="100%"/>
          <h3>Accion Design System</h3>
          <p>UI Design, UX Design, Prototyping</p>
        </div> 

        <div class="project">
          <img src="../assets/images/sf.gif" width="100%"/>
          <h3>Local Reading Community</h3>
          <p>UI Design, UX Design, Prototyping</p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
.hero {
  margin: 20vh 0 10vh 0;
  max-width: 70%;
  text-align: left;
  line-height: 1.2;
  }
.hero h1 {
  font-family: bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #3C3C3C;
  margin: 0;
  font-size: 3.4rem;
  letter-spacing: -.8px;
  }
.hero p {
  font-family: regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #707070;
  font-size: 20px;
  margin: 6px 0;
  font-size: 2rem;
}

.projects >h3 {
  text-align: left;
  font-family: bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #EC1084;
  font-size: 1.2rem;
}

.projectsRow {
  display: flex;
  justify-content: space-between;
}

.project {
  text-align: left;
  max-width: 360px;
}

.project h3 {
  color: #3C3C3C;
  font-family: bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: .8rem 0 .5rem 0;
  font-size: 1.4rem;
}

.project p {
  color: #707070;
  font-family: regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  font-size: 1rem;
}

</style>
