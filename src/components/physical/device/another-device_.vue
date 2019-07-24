<script>
export default {


  render: function (createElement) {

    let getData = (arr) => {
      // console.log('ARR', arr)
      let vDom = []

      arr.forEach(elem => {

        let tag = 'div'

        let options = {
          attrs: {
            id: elem.id,
          },

          class: this.getClass(elem),
          style: this.getStyle(elem),
          on: {
            click: this.testClickHandler,
            // dblclick: this.testDblClickHandler,
            // mousedown: this.testMouseDownHandler,
            // mouseup: this.testMouseUpHandler,
          },
        }

        let inner = []

        if (elem.children) {
          let childInner = getData(elem.children)
          inner.push(childInner)
        }


        let child = createElement(tag, options, inner)

        vDom.push(child)

      })
      return vDom
    }


    // let vDom = getData(this.model.slot)
    let vDom = getData(this.getModel)

    let gm = this.getModel

    // console.log('this.data', this.data)
    // console.log('test', vDom)
    // console.log('gm', gm)

    return createElement(
      'div',
      {
        class: 'parent-class',
        // style: this.parent,
        style: {
          width: this.data.width * this.scale + 'px',
          height: this.data.height * this.scale + 'px',
          top: this.data.y * this.scale + 'px',
          left: this.data.x * this.scale + 'px',
          backgroundImage: `url(${this.getBackground(this.data)})`,
          // position: 'relative'
          position: 'absolute'
        },
      },
      vDom
    )

  },

  props: {

    data: {
      type: Object,
      default: () => ({})
    },

  },

  data: () => ({
    scale: 1,
    heap: {},
    parent: {
      width: '100%',
      height: '100%',
      position: 'relative',
      // display: 'flex',
    },
    model: {
      slot: [
        {
          id: 1,
          height: 100,
          width: 100,
          name: 'slot1',
          cls: 'slot',
          x: 0,
          y: 0,
          children: [
            {
              id: 11,
              height: 50,
              width: 50,
              name: 'slot3',
              cls: 'child',
              x: 25,
              y: 25,
            }
          ]
        },
        {
          id: 2,
          height: 100,
          width: 100,
          name: 'slot2',
          cls: 'slot',
          x: 100,
          y: 100,
          children: [
            {
              id: 21,
              height: 50,
              width: 50,
              name: 'slot3',
              cls: 'child',
              x: 50,
              y: 50,
            }
          ]
        },
        {
          id: 3,
          height: 100,
          width: 100,
          name: 'slot2',
          cls: 'slot',
          x: 200,
          y: 200,
          children: [
            {
              id: 31,
              height: 50,
              width: 50,
              name: 'slot3',
              cls: 'child',
              x: 50,
              y: 50,
            }
          ]
        }
      ],

    },
    side: 'front',

  }),

  computed: {

    getModel: function () {

      return this.model.filter(item => {
        // console.log('SIDE', item.side)
        return item.side == this.side
      })

    },

    // getBackground: function (data) {
    //
    //   // `url(http://192.168.50.37:3000/template/${this.data.cls}/${this.data.template}/${this.data.mount}.png)`
    //   let path = 'http://192.168.50.37:3000/template/' + this.data.cls + '/' + this.data.template + '/' + this.data.mount + '.png'
    //   let url = path.replace(/\s/g, '%20')
    //   console.log('url', url)
    //   return url
    //
    // },

  },

  created () {

    // console.log('this.parent', this.$parent.$el)




    console.log('this.data', this.data)
    this.model = this.parseData(this.data.children)

  },

  mounted () {},

  methods: {

    testClickHandler: function (e) {

      if (event.target !== event.currentTarget) return
      console.log('click ', e.target.id)

    },
    testDblClickHandler: function (e) {

      if (event.target !== event.currentTarget) return
      console.log('dblClick ', e.target.id)

    },

    testMouseDownHandler: function (e) {

      if (event.target !== event.currentTarget) return
      console.log('MouseDown ', e.target.id)

    },

    testMouseUpHandler: function (e) {

      if (event.target !== event.currentTarget) return
      console.log('MouseUp ', e.target.id)

    },

    getBackground: function (data) {

      // `url(http://192.168.50.37:3000/template/${this.data.cls}/${this.data.template}/${this.data.mount}.png)`
      let side = data.mount ? data.mount : 'image'
      let path = 'http://192.168.50.37:3000/template/' + data.cls + '/' + data.template + '/' + side + '.png'
      let url = path.replace(/\s/g, '%20')
      // console.log('url', url)
      return url

    },

    heapData: function (arr) {


      arr.forEach(item => {

        if(item.children && item.children.length) {

          this.heapData(item.children)

        }

        this.heap[item.cls + item.id] = item

      })

    },

    parseData: function (arr) {

      this.heapData(arr)

      console.log('heap', this.heap)

      arr.map(item => {
        // console.log('parseData started', item)


        if(item.children && item.children.length > 0) {
          item.children.forEach(child => {
            if(!child.width) {
              child.x = item.x
              child.y = item.y

              if (item.orientation && item.orientation == 1 || item.orientation == 3) {
                child.height = item.width
                child.width = item.height
              } else {
                child.height = item.height
                child.width = item.width
              }

            }
            if (item.orientation) {
              child.orient = 'rotate-' + item.orientation
            }
          })
        }

      })

      return arr

    },


    getClass: function (elem) {

      let $_class = []

      $_class.push(elem.cls)
      if(elem.orient) {
        $_class.push(elem.orient)
      }

      if(elem.is_broken) {
        $_class.push('broken')
      }

      return $_class

    },

    getStyle: function (elem) {

      let obj = {}

      obj.width = elem.width * this.scale + 'px'
      obj.height = elem.height * this.scale + 'px'
      obj.top = elem.y * this.scale + 'px'
      obj.left = elem.x * this.scale + 'px'

      obj.position = elem.cls == 'module' ? 'unset' : 'absolute'

      if(elem.cls === 'module' || elem.cls === 'submodule') {
        obj.backgroundImage = `url(${this.getBackground(elem)})`
      }

      return obj

    },

  },

}
</script>

<style lang="css" scoped>


.testClass {

  /* background-color: red; */


}

.parent-class {

  /* background-color: orange; */
  /* width: 450px;
  height: 355px; */
  /* transform: scale(.5, .5) */

}

.slot {

  /* background-color: green; */

}

.subslot {

  /* background-color: black; */

}

.module {

  /* background-color: blue; */

}

  .rotate-1 {

    transform-origin: 0 0;
    transform: rotate(90deg)translate(0, -100%);

  }
  .rotate-2 {

    transform-origin: 0 0;
    transform: rotate(180deg)translate(0, 0);

  }
  .rotate-3 {

    transform-origin: 0 0;
    transform: rotate(270deg)translate(-100%, 0);

  }

  .broken {

    background-color: red;

  }

.socket {

  /* background-color: purple; */

}


</style>
