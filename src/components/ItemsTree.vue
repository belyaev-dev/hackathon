<template>
  <card style="width: 24rem;">
    <ul>
      <li class="green">
        Бизнес центр
        <ul>
          <li class="red">OZ-mall</li>
          <li class="green">
            Галерея
            <ul>
              <li class="red">1 очередь</li>
              <li class="green">
                2 очередь
                <ul>
                  <li class="red">1 этаж</li>
                  <li class="green">
                    2 этаж
                    <ul>
                      <li class="green">A420</li>
                      <li class="red">
                        A430
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="red">Красная площадь</li>
          <li class="red">МЕГА</li>
        </ul>
      </li>
      <li class="red">Жилая недвижимость</li>
      <li class="red">Коммерческая недвижимость</li>
      <li class="red">Земельные участки</li>
      <li class="red">Апартаменты</li>
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
    margin-top: .5rem;
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
    width: 1em;
    height: 1.25em;
    margin-right: .25rem;
  }

  &.green {
    &::before {
      background: url(../assets/Icon.png) no-repeat;
      background-position: center;
    }
  }
  &.red {
    &::before {
      background: url("../assets/Icon(1).png") no-repeat;
      background-position: center;
    }
  }
}

li span {
  display: flex;
  justify-content: flex-start;
  align-items:  center;
}
</style>
