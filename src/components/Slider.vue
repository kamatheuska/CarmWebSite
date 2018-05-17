<template>
  <div class="Slider grid">
      <div class="Slider__image-container">
        <figure v-for="(image, index) in images"
            :key="`img#${index}`"
            v-if="image.active"
            class="Slider__image">
          <img :src="`/static/pictures/${image.name}`">
          <figcaption class="Slider__caption-h1">{{ currentCollection | toUpperCase }}</figcaption>
          <figcaption class="Slider__caption-h2">{{ image.caption | toUpperCase }}</figcaption>
        </figure>
        <div class="Slider__controls Slider__controls-left"
            @click="changePicture('left')">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="Slider__controls Slider__controls-right"
            @click="changePicture('right')">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    <div class="Slider__collection" v-if="true">
      <div v-for="(image, index) in images"
            :key="`img#${index}`"
          :class="{ 'Slider__image-active': image.active }"
           class="Slider__collection-image">
        <img :src="`/static/pictures/${image.name}`"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-slider',
  data () {
    return {
      currentCollection: 'Televisión',
      images: [
        {
          name: 'agoney.jpg',
          collection: 'Televisión OT',
          caption: 'Esta es la imagen número 1',
          active: true
        },
        {
          name: 'robertoleal1.jpg',
          collection: 'Televisión OT',
          caption: 'Esta es la imagen número 2',
          active: false
        },
        {
          name: 'television.jpg',
          collection: 'Televisión OT',
          caption: 'Esta es la imagen número 3',
          active: false
        },
        {
          name: 'agoney.jpg',
          collection: 'Televisión OT',
          caption: 'Esta es la imagen número 4',
          active: false
        },
        {
          name: 'robertoleal1.jpg',
          collection: 'Televisión OT',
          caption: 'Esta es la imagen número 5',
          active: false
        },
        {
          name: 'television.jpg',
          collection: 'Televisión OT',
          caption: 'Esta es la imagen número 6',
          active: false
        },
        {
          name: 'agoney.jpg',
          collection: 'Televisión OT',
          caption: 'Esta es la imagen número 7',
          active: false
        },
        {
          name: 'robertoleal1.jpg',
          collection: 'Televisión OT',
          caption: 'Esta es la imagen número 8',
          active: false
        },
        {
          name: 'television.jpg',
          collection: 'Televisión OT',
          caption: 'Esta es la imagen número 9',
          active: false
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    getActiveImage () {
      return this.images.reduce((acc, image, i) => {
        if (image.active) {
          acc = i
        }
        return acc
      }, 0)
    },
    changePicture (direction) {
      let index = this.getActiveImage()
      if (direction === 'right' && index === 0) {
        console.log('test1')
        this.changeStatus(index, 1)
      } else if (direction === 'right' && index !== this.images.length - 1) {
        console.log('test2')
        this.changeStatus(index, 1)
      } else if (direction === 'left' && index === this.images.length) {
        this.changeStatus(index, -1)
      } else if (direction === 'left' && index !== 0) {
        this.changeStatus(index, -1)
      } else {
        console.log('No more pics---')
      }
    },
    changeStatus (i, direction) {
      this.images[i].active = false
      this.images[i + direction].active = true
    }
  },
  filters: {
    toUpperCase (str) {
      return str.toUpperCase()
    }
  }
}
</script>

<style scoped>
.Slider {
  grid-template-columns: auto;
  grid-template-rows: auto 8rem;
  grid-gap: 0.4rem;
  padding: 1rem 0;
}
.Slider__image-active { border: 4px solid #00B1BD }
.Slider__caption-h1 {
  top: 0;
  position: absolute;
  background-color: #1fafbc;
  color: #E3E3E3;
  width: max-content;
  padding: 0.2rem 1.2rem;
  font-weight: 900;
  font-size: 3rem;
  align-items: right;
  opacity: 0.9;
}
.Slider__caption-h2 {
  font-weight: 900;
  position: absolute;
  color: #E3E3E3;
  opacity: 0.9;
}
.Slider__image {
  max-height: 100%;
  height: auto;
  color: #00B1BD;
  text-align: center;
  font-size: 1.6rem;
}
.Slider__image-container {
  color: #E3E3E3;
  margin: 0;
  position: relative;
  height: max-content;
  grid-row: 1 / span 1;
}
.Slider__controls-left {
  top: 40%;
  left: 1rem;
}
.Slider__controls-right {
  top: 40%;
  right: 1rem;
}
.Slider__controls {
  font-size: 2.7rem;
  color: white;
  position: absolute;
  opacity: 0.7;
  cursor: pointer;
}
.Slider__collection {
  overflow-x: auto;
  overflow-y: hidden;
  border:1px solid black;
  white-space: nowrap;
  font-size: 0;
  grid-row: 2 / span 1;
  display: flex;
  background-color: #333;
}
.Slider__image-container .Slider__image img {
  width: 900px;
}
.Slider__collection .Slider__collection-image img {
  flex: 1;
  max-height: 100%;
  height: 110px;
}
</style>
