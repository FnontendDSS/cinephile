<template>
  <nav class="navbar">
    <div class="navbar-nav container">
      <RouterLink class="navbar-nav__logo" to="/">
        <img src="@/assets/images/Logo.svg" alt="">
      </RouterLink>
      
      <button class="navbar-nav__open" @click="openMenu">
        <fa icon="fa-solid fa-bars" />
      </button>
      
      <ul class="navbar-nav__list">
        <button class="navbar-nav__close" @click="closeMenu">
          <fa icon="fa-regular fa-circle-xmark" />
        </button>
        <li v-for="(link, ind) in navbarList" :key="ind">
          <RouterLink :to="link.url">{{ link.name }}</RouterLink>
        </li>
        <li>
          <RouterLink to="/search">
            <fa icon="fa-solid fa-magnifying-glass" />
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarList: [
        {url: '/', name: 'Главная'},
        {url: '/films', name: 'Фильмы'},
        {url: '/serials', name: 'Сериалы'},
      ]
    }
  },
  methods: {
    openMenu(){
      const navbarList = document.querySelector('.navbar-nav__list')
      navbarList.style.transition = '0.3s'
      navbarList.style.transform = 'translateX(0)'
    },
    closeMenu(){
      const navbarList = document.querySelector('.navbar-nav__list')
      navbarList.style.transition = '0.3s'
      navbarList.style.transform = 'translateX(-330px)'
      setTimeout(() => {
        navbarList.removeAttribute('style')
      }, 400);
    },
  }, 
  created() {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 992){
        const navbarList = document.querySelector('.navbar-nav__list')
        navbarList.removeAttribute('style')
      }
    })
  },
}
</script>