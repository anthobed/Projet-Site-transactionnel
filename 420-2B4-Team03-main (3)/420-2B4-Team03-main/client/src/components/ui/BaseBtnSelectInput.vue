<template lang="html">
  <div id="main">
    <slot name="button"></slot>
    <slot name="select"></slot>
    <slot name="input"></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#main {
  border-radius: 1rem;
}
</style>
