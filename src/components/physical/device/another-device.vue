<script>
export default {


  render: function (createElement) {

    let getData = (arr) => {

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
            dblclick: this.testDblClickHandler,
            mousedown: this.testMouseDownHandler,
            mouseup: this.testMouseUpHandler,
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
    let vDom = getData(this.model)

    // console.log('this.data', this.data)
    // console.log('test', vDom)


    return createElement(
      'div',
      {
        class: 'parent-class',
        // style: this.parent,
        style: {
          width: this.data[0].width * this.scale + 'px',
          height: this.data[0].height * this.scale + 'px',
          top: this.data[0].y * this.scale + 'px',
          left: this.data[0].x * this.scale + 'px',
          position: 'relative'
          // position: 'absolute'
        },
      },
      vDom
    )

  },

  props: {

    data: {
      type: Array,
      default: () => ([])
    },

  },

  data: () => ({
    scale: .6,
    heap: {},
    parent: {
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
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

  }),

  computed: {},

  created () {

    // console.log('this.parent', this.$parent.$el)




    console.log('this.data', this.data)
    this.model = this.parseData(this.data[0].children)

  },

  mounted () {},

  methods: {

    testClickHandler: function (e) {

      console.log('click ', e.target.id)

    },
    testDblClickHandler: function (e) {

      console.log('dblClick ', e.target.id)

    },

    testMouseDownHandler: function (e) {

      console.log('MouseDown ', e.target.id)

    },

    testMouseUpHandler: function (e) {

      console.log('MouseUp ', e.target.id)

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
              child.height = item.width
              child.width = item.height
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

      return $_class

    },

    getStyle: function (elem) {

      let obj = {}

      obj.width = elem.width * this.scale + 'px'
      obj.height = elem.height * this.scale + 'px'
      obj.top = elem.y * this.scale + 'px'
      obj.left = elem.x * this.scale + 'px'
      obj.position = elem.cls == 'module' ? 'unset' : 'absolute'

      return obj

    },

  },

}
</script>

<style lang="css" scoped>


.testClass {

  background-color: red;


}

.parent-class {

  background-color: orange;
  /* width: 450px;
  height: 355px; */
  /* transform: scale(.5, .5) */

}

.slot {

  background-color: green;

}

.subslot {

  background-color: black;

}

.module {

  background-color: blue;

}

  .rotate-1 {

    transform-origin: 0 0;
    transform: rotate(90deg)translate(0, -100%);

  }

.socket {

  background-color: purple;

}


</style>
