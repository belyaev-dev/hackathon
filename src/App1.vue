<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App1',
  created () {
    const user = JSON.parse(window.localStorage.getItem('user') ?? '{}')

    if ( user.username ) {
    // if ( false && user.username ) {
      this.$router.push('/')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  //background-color: #000321;
  //color: #fff;
}

*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  --hue: 240;

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;

  >[class^="page-"] {
    flex: 1 1 0;
  }
}

.main-menu {
  --menu-bg: hsl(var(--hue), 40%, 98%);
  --menu-bd: hsl(var(--hue), 60%, 93%);

  min-width: 250px;
  border-right: 1px solid var(--menu-bd);

  .header {
    padding: 1rem 1rem;
    font-size: 1.125rem;
    font-weight: 600;
  }

  .items {
    display: flex;
    flex-direction: column;
  }

  .item {
    padding: .5rem 1rem;
    cursor: pointer;
    transition: background-color .2s;

    &:hover {
      background-color: var(--text-bg-color);
    }
  }
}
</style>
