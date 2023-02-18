<template>
  <card>
    <ul>
      <li class="green">
        Бизнес центр
        <ul>
          <li class="red">OZ-mall</li>
          <li>
            Галерея
            <ul>
              <li>1 очередь</li>
              <li>
                2 очередь
                <ul>
                  <li>1 этаж</li>
                  <li>
                    2 этаж
                    <ul>
                      <li>A420</li>
                      <li>
                        A430
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Красная площадь</li>
          <li>МЕГА</li>
        </ul>
      </li>
      <li>Жилая недвижимость</li>
      <li>Коммерческая недвижимость</li>
      <li>Земельные участки</li>
      <li>Апартаменты</li>
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
  margin-top: 15px;
}

li {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  line-height: 1.25;
  //flex: ;

  &::before {
    content: '';
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

img {
  width: 15px;
    height: 15px;
    display: block;
    margin-right: 10px;
}
</style>
