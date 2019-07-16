<!-- <template>
  <div>
    <pre>
      {{model.module}}
    </pre>
  </div>
</template> -->


<script>
export default {


  render(createElement) {

    let test = []
    this.model.slot.forEach(slot => {
      let tag = 'div'

      let options = {}
      options.class = 'testClass'
      options.style = `width: ${slot.width}px; height: ${slot.height}px; top: ${slot.y}px; left: ${slot.x}px; position: absolute`

      let inner = slot.name

      let child = createElement(tag, options, inner)

      test.push(child)
    })


    return createElement(
      'div',
      {
        style: "width: 150px; height: 150px; position: absolute",
        // class: "blue",
      },
      // ['kjdncsd', 'dcsdc']
      [test]
    )

    function getItem (arr) {
      let a = []
      forEach.arr(item => {
        a.push(item)
      })
      return a
    }

  },

  props: {

    data: {
      type: Array,
      default: () => ([])
    },

  },

  data: () => ({

    model: {
      slot: [
        {
          id: 1,
          height: 100,
          width: 100,
          name: 'slot1',
          x: 0,
          y: 0
        },
        {
          id: 2,
          height: 100,
          width: 100,
          name: 'slot2',
          x: 100,
          y: 100
        }
      ],

    },

  }),

  computed: {},

  created () {

    console.log('test parent el', this.$parent.$el)

    // this.data.forEach((item, index) => {
    //   if(!this.model[item.cls]) {
    //     this.model[item.cls] = []
    //   }
    //   let obj = Object.assign({}, item)
    //   this.model[item.cls].push(obj)
    // })

    // this.model = this.parseData(this.data)


    // console.log('this.model', this.model)



  },

  mounted () {

  },
  // links?cls=device&id=3&null


  methods: {

    parseData: function (arr) {
      let structure = {}

      arr.forEach((item, index) => {

        if(!structure[item.cls]) {
          structure[item.cls] = []
        }

        let obj = Object.assign({}, item)

        if(item.children && item.children.length > 0) {

          // console.log('item.children && item.children.length > 0')

          let itemChildren = this.parseData(item.children)

          // console.log('itemChildren', itemChildren)

          obj.children = itemChildren

        }

        structure[item.cls].push(obj)
      })

      return structure

    },

    testGet: function (arr) {

      arr.forEach(slot => {
        let obj = {}
        ob
      })

    },




  },

}
</script>

<style lang="css" scoped>

.testClass {

  background-color: red;

}

</style>
