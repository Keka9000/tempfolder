<script>
export default {

  render: function (createElement) {

    let getData = (arr) => {

      let test = []
      console.log('getData started', arr)

      arr.forEach(elem => {
        let tag = 'v-layout'

        let options = {
          attrs: {
            id: elem.id + '',
          },
          class: elem.orientation ? elem.cls + ' rotate' : elem.cls,
          // class: elem.cls,
          // style: `width: ${elem.width}px; height: ${elem.height}px; top: ${elem.y}px; left: ${elem.x}px; position: absolute`,
          style: {
            width: elem.width + 'px',
            height: elem.height + 'px',
            top: elem.y + 'px',
            left: elem.x + 'px',
            position: 'absolute'
          },
          on: {
            click: this.testhandler,
            dblclick: this.testhandler,
            mousedown: this.onMouseDown,
            mouseup: this.onMouseUp,
          },
        }

        let inner = []
        // inner.push(elem.name)

        if (elem.children) {
          let childInner = getData(elem.children)
          inner.push(childInner)
        }


        let child = createElement(tag, options, inner)

        test.push(child)

      })
      return test
    }


    let test = getData(this.model.slot)
    // let test = getData(this.model)

    console.log('this.data', this.data)
    // console.log('test', test)


    return createElement(
      'div',
      {
        style: this.parent,
        // style: "width: 150px; height: 150px; position: absolute",
        // class: "blue",
      },
      // ['kjdncsd', 'dcsdc']
      [test]
    )

  },

  props: {

      data: {
        type: Object,
        default: () => ({})
      },

  },

  data: () => ({
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

  created () {
    console.log('this.data', this.data)
    // this.model = this.parseData(this.data)
    // this.model = this.parseData(this.data)
    // this.model = this.parseData(this.data.children)
  },

  methods: {

    structData: function (arr) {


      arr.forEach(item => {

        if(item.children && item.children.length) {

          this.structData(item.children)

        }

        // if(item.cls == 'module') {
        //
        //   item.orient = true
        //
        // }


        this.heap[item.cls + item.id] = item


      })


    },

    parseData: function (arr) {

      console.log('arr', arr)

      this.structData(arr)

      console.log('heap', this.heap)

      // arr.map(item => {
      //   if(item.children && item.children.length > 0) {
      //     item.children.forEach(child => {
      //       if(!child.x) {
      //         child.x = child.slot_id ? this.heap['slot'+ child.slot_id].x : this.heap['slot'+ item.slot_id].x
      //         child.y = child.slot_id ? this.heap['slot'+ child.slot_id].y : this.heap['slot'+ item.slot_id].y
      //         child.height = child.slot_id ? this.heap['slot'+ child.slot_id].height : this.heap['slot'+ item.slot_id].height
      //         child.width = child.slot_id ? this.heap['slot'+ child.slot_id].width : this.heap['slot'+ item.slot_id].width
      //       }
      //     })
      //   }
      //   if(!item.x) {
      //     item.x = this.heap['slot'+ item.slot_id].x
      //     item.y = this.heap['slot'+ item.slot_id].y
      //     item.height = this.heap['slot'+ item.slot_id].height
      //     item.width = this.heap['slot'+ item.slot_id].width
      //   }
      //
      //
      // })

      return arr

    },

    testhandler: function (e) {

     console.log('slot click.self', e.target.id)

    },

    onMouseDown: function (e) {
      console.log('onMouseDown catch on slot', e.target.id)
      // this.$emit('onMouseDown', e, this.data.unit)
    },

    onMouseMove: function (e) {
      // this.$emit('onMouseMove', e)
    },

    onMouseUp: function (e) {
      console.log('onMouseDown catch on slot', e.target.id)
      // this.$emit('onMouseUp', e, this.data.unit, this.data.id)
    },

  },

}
</script>

<style scoped>

.example-device {
  height: 20px;
  width: 220px;
  /* background-color: yellow; */
  background-image: url(png/_device2.png);
  /* background-size: contain; */
  background-size: cover;
  /* border: solid 1px grey; */
  position: absolute;
  /* z-index: 9; */
}

.slot {

  background-color: green;
  /* transform: rotate(90deg); */

}

.child {

  background-color: cyan;
  /* transform: rotate(90deg); */

}

  .rotate {

    background-color: black;

  }

.module {


  background-color: blue;

}

.socket {

  background-color: purple;
}

</style>
