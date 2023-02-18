<template>
  <div class="page-login">

    <div class="panel">
      <div class="title">Вход в систему</div>
      <div class="form" :class="{lock}">
        <input name="username" v-model="username">
        <input name="password" v-model="password" type="password">
        <div class="buttons">
          <i class="wait"></i>
          <button class="login" @click="login">Вход</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: '',
      lock: false,
    }
  },
  methods: {
    login () {
      this.lock = true
      let user = {
        username: this.username,
        password: this.password,
      }
      window.localStorage.setItem('user', JSON.stringify(user))
      console.log(user)

      setTimeout(() => {
        this.lock = false
        this.$router.push('/')
      }, 500)
    }
  }
}
</script>

<style lang="scss">
.page-login {
  display: flex;
  align-items: center;
  justify-content: center;

  .panel {
    border-radius: .5rem;
    border: 1px solid #def;
    box-shadow: 0 .5rem 1rem #defa;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid #def;
  }

  .form {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 1rem;

    &.lock {
      pointer-events: none;

      .wait {
        opacity: 1;
      }
    }
  }

  input {
    padding: .5rem 1rem;
    border: 1px solid #abc;
    border-radius: .25rem;
    width: 16rem;
    outline: none;
    transition: all .2s;

    &:hover {
      border-color: hsl(210, 75%, 63%);
    }

    &:focus {
      border-color: hsl(210, 100%, 63%);
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  button {
    padding: .5rem 1rem;
    border: 1px solid hsl(210, 25%, 73%);
    background-color: hsl(210, 25%, 93%);
    border-radius: .25rem;
    transition: all .2s;

    &:hover {
      border-color: hsl(210, 75%, 63%);
      background-color: hsl(210, 50%, 90%);
    }

    &:focus {
      border-color: hsl(210, 100%, 63%);
    }
  }

  .wait {
    display: block;
    width: 2rem;
    height: 2rem;
    border: 2px solid hsl(210, 25%, 73%);
    border-width: 2px 2px 0 0;
    border-radius: 50%;
    animation: rotate 2s infinite;
    transition: all .2s;
    opacity: 0;
  }

}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
