<template lang="html">
  <div class="header">
    <slot name="header" class="header"></slot>
  </div>

  <slot name="item"></slot>
  <slot name="calculate"></slot>
</template>
<script>
export default {
  components: {},
  methods: {},
};
</script>
<style>
.header h1 {
  width: 100%;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: var(--darkGrey);
  color: var(--lightGrey);
  font-size: 2rem;
  margin-block-start: 0%;
  margin-block-end: 0%;
}
</style>
