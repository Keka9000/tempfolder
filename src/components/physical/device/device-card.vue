<script>
export default {

  render: function (createElement) {

    let getData = (arr) => {

      let vDom = []

      arr.forEach(elem => {

        if(elem.cls == 'port') return

        let tag = 'div'

        let options = {
          attrs: {
            id: elem.cls + elem.id,
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

    let vDom = getData(this.getModel)

    return createElement(
      'div',
      {
        class: 'parent-class',

        attrs: {
          id: this.data.cls + this.data.id
        },

        style: {
          width: this.data.width * this.scale + 'px',
          height: this.data.height * this.scale + 'px',
          top: '0px',
          left: '0px',
          // top: this.data.y * this.scale + 'px',
          // left: this.data.x * this.scale + 'px',
          backgroundImage: `url(${this.getBackground(this.data)})`,
          position: 'relative'
          // position: 'absolute'
        },

        on: {
          'click': this.testClickHandler
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
    },
    model: {},
    side: 'front',

  }),

  computed: {

    getModel: function () {

      // return this.model.filter(item => {
      //   // console.log('SIDE', item.side)
      //   return item.side == this.side
      // })
      return this.model

    },

  },

  created () {

    // console.log('this.data created', this.data)
    this.model = this.parseData(this.data.children)

  },

  updated () {

    // console.log('this.data updated', this.data)
    this.model = this.parseData(this.data.children)

  },

  methods: {

    testClickHandler: function (e) {

      if (event.target !== event.currentTarget) return
      console.log('testClickHandler ', e.target.id, e.target.className, e)
      if(e.target.className == 'parent-class') {
        // this.$store.dispatch('addSelected', this.data)
        // this.$emit('select', this.data)
      } else {
        console.log('from heap ', this.heap[e.target.id])
        // this.$store.dispatch('addSelected', this.heap[e.target.id])
        // this.$emit('select', this.heap[e.target.id])
      }
    },

    getBackground: function (data) {

      if(data.template == undefined) return

      let side = data.cls == 'device' ? 'front' : 'image'
      let path = this.$baseURL + '/template/' + data.cls + '/' + data.template + '/' + side + '.png'
      let url = path.replace(/\s/g, '%20')
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

      arr.map(item => {

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

      if(elem.is_used) {
        $_class.push('used')
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
        obj.backgroundSize = '100% 100%'

      }

      return obj

    },

  },


}
</script>

<style scoped>


.testClass {

  /* background-color: red; */


}

.parent-class {

  /* background-color: orange; */
  /* width: 450px;
  height: 355px; */
  /* transform: scale(.5, .5) */
  border: solid 1px transparent;
  opacity: 1;
  z-index: 2;

}
  /* :hover {

    box-sizing: border-box;
    border: solid 1px #F7941D;

  } */

.slot {

  border: solid 1px transparent;
  /* background-color: green; */

}

.subslot {

  border: solid 1px transparent;
  /* background-color: black; */

}

.module {

  border: solid 1px transparent;
  /* background-color: blue; */
  opacity: 1

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

  .used {

    box-sizing: content-box;
    border: solid 1px #F7941D;
    opacity: 1;

  }





</style>
