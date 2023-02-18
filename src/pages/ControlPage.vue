<script setup lang="ts">
import MainLayout from '../layout/Main.vue'
import Card from '../components/card.vue'

</script>
<template>
  <MainMenu/>
  <div class="page">
    <main-layout>
      <card>
        <ul>
          <li>

            <span>
              <img src="../assets/Icon.png">
              Бизнес центр
            </span>
            <ul>
              <li>OZ-mall</li>
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
    </main-layout>
  </div>
</template>

<style scoped>
li,span {
  margin-bottom: 15px;
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
