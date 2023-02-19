<template>
  <card style="width: 24rem;">
    <ul>
      <li class="green">
        <span>Бизнес центр</span>
        <ul>
          <li class="red"><span>OZ-mall</span></li>
          <li class="green">
            <span>Галерея</span>
            <ul>
              <li class="red"><span>1 очередь</span></li>
              <li class="green">
                <span>2 очередь</span>
                <ul>
                  <li class="red"><span>1 этаж</span></li>
                  <li class="green">
                    <span>2 этаж</span>
                    <ul>
                      <li class="active"><span>A420</span></li>
                      <li class="">
                        <span>A430</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="red"><span>Красная площадь</span></li>
        </ul>
      </li>
      <li class="red"><span>Жилая недвижимость</span></li>
      <li class="red"><span>Коммерческая недвижимость</span></li>
      <li class="red"><span>Земельные участки</span></li>
      <li class="red"><span>Апартаменты</span></li>
    </ul>
  </card>
</template>

<script>
import Card from './card.vue'
export default {
  name: 'ItemsTree',
  components: { Card }
}
</script>

<style lang="scss">

ul {
  flex: 1 1 100%;
  padding: 0;

  ul {
    //margin-top: .5rem;
    padding-left: 1.5rem;
  }
}

li {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  line-height: 1.25;

  &::before {
    content: '';
    display: inline-block;
    height: .5rem;
    width: .5rem;
    border: 0 solid #aaa;
    border-width: 2px 2px 0 0;
    margin-right: .25rem;
    transform: translate(-.25rem, .625rem) rotate(45deg);
    visibility: hidden;
  }

  &.green {
    &::before {
      transform: translate(-.25rem, .625rem) rotate(135deg);
      visibility: visible;
    }
  }
  &.red {
    &::before {
      visibility: visible;
    }
  }

  /*
  &::before {
    content: '';
    display: inline-block;
    height: 1.25em;
    width: .75em;
    margin-right: .25rem;
  }

  &.green {
    &::before {
      background: url("../assets/Icon(1).png") no-repeat;
      background-position: center;
      filter: saturate(0) brightness(1.5);
      width: 1em;
    }
  }
  &.red {
    &::before {
      background: url(../assets/Icon.png) no-repeat;
      background-position: center;
      filter: saturate(0);
      width: 1em;
    }
  }

  */

  span {
    flex: 1 1 0;
    cursor: pointer;
    transition: all .2s;
    display: inline-block;

    &:hover {
      background-color: hsla(120, 10%, 80%, 0.35);
    }
  }

  &.active {
    span {
      background-color: hsla(120, 100%, 80%, 0.35);
    }
  }
}

li span {
  display: flex;
  justify-content: flex-start;
  align-items:  center;
}
</style>
