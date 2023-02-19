<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App2',
  created () {
    const user = JSON.parse(window.localStorage.getItem('user') ?? '{}')


    if ( user.username ) {
    // if ( false && user.username ) {
      this.$router.push('/control')
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
  flex-direction: column;
  align-items: center;

  >* {
    width: 100%;
    max-width: 1400px;
  }

  >[class^="page-"] {
    flex: 1 1 0;
    color: #fff;
    padding: 2rem;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  &+.row {
    margin-top: 1rem;
  }
}

.container {
  border: 1px solid #656565;
  border-radius: .75rem;
  padding: 1rem;
}

.main-menu {
  --menu-bg: hsl(var(--hue), 40%, 98%);
  --menu-bd: hsl(var(--hue), 60%, 93%);

  min-width: 250px;
  display: flex;
  align-items: center;

  .header {
    padding: 1rem 2rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--main-text-color);
  }

  .footer {
    padding: 1rem 2rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--main-text-color);

    .profile {
      position: relative;
      cursor: pointer;

      .avatar {
        background: #D9D9D9 url("assets/avatar_i.png") no-repeat;
        background-size: 1.5rem 1.5rem;
        background-position: center;
        display: block;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }
      .label {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding-top: .5rem;
        font-size: .75rem;
        width: 7rem;
        text-align: center;
      }
    }
  }

  .items {
    flex: 1 1 0;
    display: flex;
    justify-content: center;
    //flex-direction: column;
  }

  .item {
    padding: .5rem 1rem;
    cursor: pointer;
    transition: background-color .2s;

    color: var(--main-text-color);

    &:hover {
      background-color: var(--text-bg-color);
    }
  }
}

.btn {
  background-color: #2A2D46;
  border: 1px solid #656565;
  height: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: .75rem;
  cursor: pointer;
  transition: all .2s;

  &::before {
    content: '+';
    font-size: 3rem;
    line-height: .75;
    text-align: center;
    font-weight: 300;
    border: 1px solid #fff;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    margin-right: .75rem;
  }

  &:hover {
    background-color: hsl(234, 25%, 32%);
  }
}
</style>
