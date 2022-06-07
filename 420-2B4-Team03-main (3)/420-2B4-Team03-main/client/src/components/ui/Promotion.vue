<template>
  <div id="l-bottom" class="animate-charcter">
    <div id="discount" class="animate-charcter">
      <p id="discount-item">- {{ item.discountPercentage }} %</p>
    </div>
    <div>
      <p>
        {{
          (item.price - (item.price * item.discountPercentage) / 100).toFixed(2)
        }}
        $
      </p>
    </div>
    <div>
      <h2>
        {{ parseMillisecondsIntoReadableTime(distance) }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Promotion",
  props: ["item"],

  data() {
    return {
      date: 0,
      dateItem: 0,
      timer: null,
      distance: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.distance > 0 || this.distance == null) {
        this.date = Math.trunc(new Date());
        this.dateItem = this.item.featuredExpiration;
        this.distance = this.dateItem - this.date;
      } else {
        this.$store.dispatch("prods/deleteItemsPromo", {
          id: this.item.id,
        });

        clearInterval(this.timer);
      }
    }, 1000);
  },

  methods: {
    parseMillisecondsIntoReadableTime(milliseconds) {
      /* milliseconds = milliseconds - this.date; */
      //Get hours from milliseconds
      let hours = milliseconds / (1000 * 60 * 60);
      let absoluteHours = Math.floor(hours);
      let h = absoluteHours > 9 ? absoluteHours : "0" + absoluteHours;

      //Get remainder from hours and convert to minutes
      let minutes = (hours - absoluteHours) * 60;
      let absoluteMinutes = Math.floor(minutes);
      let m = absoluteMinutes > 9 ? absoluteMinutes : "0" + absoluteMinutes;

      //Get remainder from minutes and convert to seconds
      let seconds = (minutes - absoluteMinutes) * 60;
      let absoluteSeconds = Math.floor(seconds);
      let s = absoluteSeconds > 9 ? absoluteSeconds : "0" + absoluteSeconds;

      return h + ":" + m + ":" + s;
    },
    getTimer() {
      this.timer = this.parseMillisecondsIntoReadableTime(this.distance);
      return this.timer;
    },
  },
};
</script>
