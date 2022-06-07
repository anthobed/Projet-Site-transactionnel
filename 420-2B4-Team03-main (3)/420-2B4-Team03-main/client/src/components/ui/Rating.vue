<template>
  <div id="star">
    <font-awesome-icon icon="star" :class="{ checked: modelValue >= 1 }" />
    <font-awesome-icon icon="star" :class="{ checked: modelValue >= 2 }" />
    <font-awesome-icon icon="star" :class="{ checked: modelValue >= 3 }" />
    <font-awesome-icon icon="star" :class="{ checked: modelValue >= 4 }" />
    <font-awesome-icon icon="star" :class="{ checked: modelValue >= 5 }" />
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  data() {
    return {
      value: this.modelValue,
    };
  },
  methods: {
    activate(value) {
      console.log("CLick", value);
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style scoped>
.checked {
  color: orange;
}

.checked:hover {
  color: black;
}
#star {
  margin-bottom: 0.5rem;
}
</style>
