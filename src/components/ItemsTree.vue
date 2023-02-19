<template>
  <card style="width: 24rem;">
    <ul>
      <li class="green">
        Бизнес центр
        <ul>
          <li class="red">OZ-mall</li>
          <li class="red">
            Галерея
            <ul>
              <li class="green">1 очередь</li>
              <li class="red">
                2 очередь
                <ul>
                  <li class="green">1 этаж</li>
                  <li class="red">
                    2 этаж
                    <ul>
                      <li class="active">A420</li>
                      <li class="">
                        A430
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="red">Красная площадь</li>
          <li class="green">МЕГА</li>
        </ul>
      </li>
      <li class="green">Жилая недвижимость</li>
      <li class="green">Коммерческая недвижимость</li>
      <li class="red">Земельные участки</li>
      <li class="green">Апартаменты</li>
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

  &.active {
    background-color: rgba(255, 255, 255, 0.4);
  }
}

li span {
  display: flex;
  justify-content: flex-start;
  align-items:  center;
}
</style>
