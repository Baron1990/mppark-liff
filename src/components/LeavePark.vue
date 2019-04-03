<template>
  <div class="container text-monospace" id="app">
    <b-card bg-variant="light" text-variant="black" title="MP 停車場">
      <b-card-text class="mt-5">請確認前方沒有其他車輛，再按下按鈕。</b-card-text>
      <b-card-text>離開停車場</b-card-text>
      <b-button class="btn btn-danger btn-lg btn-block mt-3" @click="enter">打開柵欄</b-button>
    </b-card>
  </div>
</template>

<script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
<script>
const moment = require('moment')
const color = {
  black: '#242a36', // 黑色
  gray: '#999999', // 灰色
  lightGray: '#dddddd', // 亮灰色
  orange: '#f9901e', // 橘色
  red: '#ff0028', // 紅色
  teal: '#1c8c82', // 水鴨青
  turquoise: '#40c2b8', // 綠寶石
  white: '#ffffff', // 白色
  yellow: '#ffd654' // 黃
}
// 設定 moment
moment.locale('zh-tw')
// https://momentjs.com/docs/#/customization/relative-time-threshold/
moment.relativeTimeThreshold('s', 60)
moment.relativeTimeThreshold('m', 60)
moment.relativeTimeThreshold('h', 24)
moment.relativeTimeThreshold('ss', -1)
moment.updateLocale('zh-tw', {
  relativeTime: {
    ss: '%d 秒'
  }
})
export default {
  name: 'LeavePark',
  mounted () {
    this.initLiff()
  },
  methods: {
    async initLiff () {
      await new Promise((resolve, reject) => {})
    },
    async enter () {
      let nowStr = moment().format('Y/MM/DD HH:mm')
      await this.initLiff()
      await liff.sendMessages([
        {
          'type': 'flex',
          'altText': `您已於 ${nowStr} 進入「MP 停車場」`,
          'contents': {
            'type': 'bubble',
            'styles': {
              'header': {
                'backgroundColor': color.yellow
              }
            },
            'header': {
              'type': 'box',
              'layout': 'vertical',
              'margin': 'md',
              'contents': [
                {
                  'type': 'text',
                  'text': '您已進入',
                  'size': 'xs',
                  'color': color.black
                },
                {
                  'align': 'center',
                  'color': color.black,
                  'size': 'xxl',
                  'text': 'MP 停車場',
                  'type': 'text',
                  'weight': 'bold',
                }
              ]
            },
            'body': {
              'type': 'box',
              'layout': 'vertical',
              'contents': [
                {
                  'type': 'box',
                  'layout': 'horizontal',
                  'contents': [
                    {
                      'type': 'text',
                      'text': '入場時間',
                      'size': 'sm',
                      'color': color.gray,
                      'flex': 0
                    },
                    {
                      'type': 'text',
                      'text': nowStr,
                      'size': 'sm',
                      'color': color.black,
                      'align': 'end'
                    }
                  ]
                },
                {
                  'type': 'box',
                  'layout': 'horizontal',
                  'contents': [
                    {
                      'type': 'text',
                      'text': '停車費率',
                      'size': 'sm',
                      'color': color.gray,
                      'flex': 0
                    },
                    {
                      'type': 'text',
                      'text': '每小時 40 元',
                      'size': 'sm',
                      'color': color.black,
                      'align': 'end'
                    }
                  ]
                },
              ]
            },
            'footer': {
              'type': 'box',
              'layout': 'horizontal',
              'contents': [{
                'type': 'button',
                'style': 'secondary',
                'height': 'md',
                'color': color.yellow,
                'action': {
                  'type': 'uri',
                  'label': '繳費出場',
                  'uri': 'line://app/1558590172-3dZgPjvR'
                }
              }]
            }
          }
        }
      ])
      liff.closeWindow()
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
