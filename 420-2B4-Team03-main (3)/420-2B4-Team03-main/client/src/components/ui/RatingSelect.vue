<template>
  <div id="star">
    <font-awesome-icon
      icon="star"
      id="onestar"
      :class="{ checked: modelValue >= 1 }"
      @click="setFilterRating(1)"
    />
    <font-awesome-icon
      icon="star"
      id="onestar"
      :class="{ checked: modelValue >= 2 }"
      @click="setFilterRating(2)"
    />
    <font-awesome-icon
      icon="star"
      id="onestar"
      :class="{ checked: modelValue >= 3 }"
      @click="setFilterRating(3)"
    />
    <font-awesome-icon
      icon="star"
      id="onestar"
      :class="{ checked: modelValue >= 4 }"
      @click="setFilterRating(4)"
    />
    <font-awesome-icon
      icon="star"
      id="onestar"
      :class="{ checked: modelValue >= 5 }"
      @click="setFilterRating(5)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: 0,
    };
  },

  methods: {
    setFilterRating(value) {
      this.modelValue = value;
      console.log(`Rating Select : ${value}`);

      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style scoped>
.checked {
  color: orange;
}
#star {
  margin-bottom: 0.5rem;
}
#onestar:hover {
  cursor: pointer;
  color: orange;
}
</style>
