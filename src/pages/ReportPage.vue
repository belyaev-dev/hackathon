<template>
  <MainMenu/>
  <div class="page-report">

    <div class="row">
      <ItemsTree/>

      <div class="container" style="flex: 1 1 0;display:flex;flex-direction: column;justify-content: flex-end">
        <div class="indicator-list">
          <div class="prev"></div>
          <div class="indicator">
            <div class="title">Предыдущий месяц</div>
            <div class="month">Январь</div>
            <div class="chart">
              <div class="bar" style="--green:1;">1</div>
              <div class="bar" style="">2</div>
              <div class="bar" style="--green:1;--red:.6;">3</div>
              <div class="bar" style="--red:.2;">4</div>
            </div>
            <div class="more">Подробнее</div>
          </div>
          <div class="indicator active">
            <div class="title">Текущий месяц</div>
            <div class="label">Общий оборот</div>
            <div class="value">82 000</div>
            <div class="label">Чистая прибыль</div>
            <div class="value">34 000</div>
            <div class="month">Февраль</div>
            <div class="chart">
              <div class="bar" style="--green:1;">1</div>
              <div class="bar" style="">2</div>
              <div class="bar" style="--green:1;--red:.6;">3</div>
              <div class="bar" style="--red:.2;">4</div>
            </div>
            <div class="more">Подробнее</div>
          </div>
          <div class="indicator">
            <div class="title">Прогноз</div>
            <div class="month">Март</div>
            <div class="chart">
              <div class="bar" style="--green:1;">1</div>
              <div class="bar" style="">2</div>
              <div class="bar" style="--green:1;--red:.6;">3</div>
              <div class="bar" style="--red:.2;">4</div>
            </div>
            <div class="more">Подробнее</div>
          </div>
          <div class="next"></div>
        </div>

        <div class="legend">
          <div class="profit">Прибыль</div>
          <div class="expense">Издержки</div>
        </div>
      </div>

      <ObjectProperties style="flex: 1 1 100%;"/>
    </div>

  </div>
</template>

<script>
import MainLayout from '../layout/Main.vue'
import MainMenu from '../layout/MainMenu.vue'
import ItemsTree from '../components/ItemsTree.vue'
import ObjectProperties from '../components/ObjectProperties.vue'

export default {
  name: 'ReportPage',
  components: {
    ObjectProperties,
    ItemsTree,
    MainMenu,
    MainLayout
  },
}
</script>

<style lang="scss">
.legend {
  display: flex;
  flex-direction: column;
  gap: .5rem;

  > * {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    width: 8rem;

    &::after {
      content: '';
      width: 1.25rem;
      height: 1.25rem;
      border-radius: .25rem;
      background-color: currentColor;
    }
  }

  .profit {
    color: #04B400;
  }

  .expense {
    color: #E00000;
  }
}

.indicator-list {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  justify-content: center;

  .prev, .next {
    background-color: #5F5F5F;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 8rem;
    text-align: center;
    cursor: pointer;
    transition: background-color .2s;

    &:hover {
      background-color: #808080;
    }

    &::before {
      content: '';
      display: inline-block;
      border: 0 solid #fff;
      border-width: 2px 2px 0 0;
      width: 40%;
      height: 40%;
      margin-top: 50%;
      transform: translate(.125rem, -50%) rotate(-135deg);
    }
  }

  .next {
    &::before {
      transform: translate(-.125rem, -50%) rotate(45deg);
    }
  }

  .indicator {
    border: 1px solid #656565;
    border-radius: .75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.125;
    padding: 1rem 2rem;
    margin-top: 2rem;
    //margin-bottom: 1.5rem;
    position: relative;

    .title {
      position: absolute;
      top: -2rem;
      width: 100%;
      text-align: center;
    }

    .chart {
      display: flex;
      gap: .375rem;
      --bar-height: 6rem;

      .bar {
        font-size: .75rem;
        line-height: 2;
        display: flex;
        flex-direction: column;
        text-align: center;

        &::before {
          content: '';
          display: block;
          width: 1.375rem;
          //height: 6rem;
          height: calc(var(--bar-height) * var(--green));
          margin-top: calc(var(--bar-height) * (1 - var(--green, 0)));
          background-color: #8E8E8E;
          border-radius: .25rem;
        }

        &::after {
          content: '';
          display: block;
          width: 1.375rem;
          //height: 6rem;
          height: calc(var(--bar-height) * var(--red));
          margin-bottom: calc(var(--bar-height) * (1 - var(--red, 0)));
          background-color: #404040;
          border-radius: .25rem;
        }

      }
    }

    .label {
      font-size: .875rem;
    }

    .value {
      font-size: 2rem;
      margin-bottom: .5rem;
    }

    .month {
      font-size: 1.25rem;
      margin-bottom: .75rem;
    }

    .more {
      font-size: .875rem;
      padding: .25rem 1rem;
      border: 1px solid #fff;
      border-radius: 2rem;
    }

    &.active {
      margin-bottom: 0;

      .chart {
        .bar {
          &::before {
            background-color: #04B400;
          }

          &::after {
            background-color: #E00000;
          }
        }
      }
    }
  }

}
</style>
