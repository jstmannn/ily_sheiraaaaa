new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/gift1.jpg",
          img2: "images/gift2.jpg",
          img3: "images/gift3.jpg",
          title: "FIRST GIFT",
          isOpen: false,
        },
        {
          img1: "images/ultah1.jpg",
          img2: "images/ultah2.jpg",
          img3: "images/ultah3.jpg",
          title: "BIRTHDAY",
          isOpen: false,
        },
        {
          img1: "images/date1.jpg",
          img2: "images/date2.jpg",
          img3: "images/date3.jpg",
          title: "FIRST DATE",
          isOpen: false,
        },
        {
          img1: "images/jalan1.jpg",
          img2: "images/jalan2.jpg",
          img3: "images/jalan3.jpg",
          title: "FAV MOMENT",
          isOpen: false,
        },
        {
          img1: "images/bandung1.jpg",
          img2: "images/bandung2.jpg",
          img3: "images/bandung3.jpg",
          title: "BANDUNG",
          isOpen: false,
        },
        {
          img1: "images/jakarta1.jpg",
          img2: "images/jakarta2.jpg",
          img3: "images/jakarta3.jpg",
          title: "JAKARTA",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
