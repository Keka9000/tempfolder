<template>

  <l-map v-if="center" ref="map" :zoom.sync="zoom" :center="center | coords" class="stretch z-index-1">
        <l-tile-layer ref="map-tile-layer" :url="url" :attribution="attribution"></l-tile-layer>
        <!-- <l-marker :lat-lng="marker"></l-marker> -->
        <!-- <v-tooltip bottom>
            <v-btn
                slot="activator"
                color="transparent"
            >
            </v-btn>
            <span>Tooltip</span>
        </v-tooltip> -->

        <!-- https://korigan.github.io/Vue2Leaflet/#/components/l-marker/ -->
        <!-- <l-marker v-for="(item, index) in markerList" title="asdfasdf" :key="index" :lat-lng="item.latlng | coords" @click="(payload) => onMarkerClick(item.id, payload)"> -->
        <!-- <l-marker v-for="(item, index) in markerList" :key="index" :lat-lng="item.latlng | coords" @click="(payload) => onMarkerClick(item.id, payload)"> -->

        <!-- <l-marker
            v-for="(item, index) in markerList"
            :key="index" :icon="getIcon(item.types)"
            :lat-lng="item.latlng | coords"
            @click="(payload) => onMarkerClick(item.id, payload)"
            draggable
        /> -->

        <!-- @dragStart="onDragStart"
        @drag="onDrag"
        @dragEnd="onDragEnd" -->

        <!-- <l-marker
            v-if="marker && center"
            :lat-lng="marker.latlng | coords"
            :icon="getIcon()"
            @click="onMarkerClick"
            @update:latLng="onMarkerDragged"
            draggable
        /> -->

        <!-- https://korigan.github.io/Vue2Leaflet/#/components/l-polyline/ -->
        <!-- <l-polyline
            v-if="!search"
            :color="$vuetify.theme.error"
            :weight="4"
        ></l-polyline> -->

        <!-- <v-btn @click="panTo(0,0)" class="absolute" style="z-index: 1000">asdfasdfasdfsadfasdfsadf</v-btn> -->

    </l-map>

</template>

<script>

import { LMap, LTileLayer, LMarker, LPolyline } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

    L.Map.mergeOptions({
        zoomControl: false,
        zoomSnap: 0.25,
        zoomDelta: 0.25,
        attributionControl: false,
        // bounceAtZoomLimits: false
    });

export default {

  components: {

      LMap,
      LTileLayer,
      LMarker,
      LPolyline,
      // LIcon

  },

  filters: {

      coords: function (value) {

          return L.latLng(value)

      }

  },

  props: {

      // search: String,
      // marker: Object,
      //
      // points: {
      //
      //     type: Object,
      //     default: () => ({
      //
      //         latlngs: [],
      //         ids: [],
      //
      //     }),
      //
      // },

  },

  data: () => ({

      map: undefined,
      zoom: 13,
      center: [55.755919, 37.617589],

      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      minZoom: 1,
      maxZoom: 18,

      polyline: {

        latlngs: [],
        ids: [],

      },

      icon: {},

  }),



}
</script>

<style lang="css" scoped>
</style>
