import axios from "axios";
import Vue from "../vendor/vue"

const initGallery = () => {
  const postUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  const app = new Vue({
    el: '#gallery',
    data() {
      return {
        galleryItems: JSON.parse(localStorage.getItem('gallery-items'))
      }
    },
    beforeCreate() {
      {
        if (localStorage.getItem('gallery-items')) {
          return
        }
        localStorage.setItem('gallery-items', JSON.stringify([
          {
            id: 'gallery-img1',
            title: '«Рождение Венеры» Сандро Боттичелли',
            price: '1 000 000 $',
            oldPrice: '2 000 000 $',
            imgSrc: 'gallery-img1',
            inCart: false,
            sold: false,
            loading: false
          },
          {
            id: 'gallery-img2',
            title: '«Тайная вечеря»  Леонардо да Винчи',
            price: '3 000 000 $',
            oldPrice: null,
            imgSrc: 'gallery-img2',
            inCart: false,
            sold: false,
            loading: false
          },
          {
            id: 'gallery-img3',
            title: '«Сотворение Адама» Микеланджело',
            price: '5 000 000 $',
            oldPrice: '6 000 000 $',
            imgSrc: 'gallery-img3',
            inCart: true,
            sold: false,
            loading: false
          },
          {
            id: 'gallery-img4',
            title: '«Урок анатомии»  Рембрандт',
            price: null,
            oldPrice: null,
            imgSrc: 'gallery-img4',
            inCart: false,
            sold: true,
            loading: false
          },
        ]))
        this.galleryItems = JSON.parse(localStorage.getItem('gallery-items'))
        localStorage.setItem('gallery-items', JSON.stringify(this.galleryItems))
      }
    },
    computed: {
      pictures() {
        return this.galleryItems
      }
    },
    methods: {
      addToCart(id) {
        const item = this.galleryItems.find(item => item.id === id)
        if (!item.inCart) {
          item.loading = true
          document.activeElement.blur()
          try {
            axios.get(postUrl).then(value => {
              item.inCart = true
              item.loading = false
              localStorage.setItem('gallery-items', JSON.stringify(this.galleryItems))
            })
          } catch (e) {
            item.loading = false
            console.error(e.message)
          }
        }
      },
    }
  });
}

export {initGallery}
