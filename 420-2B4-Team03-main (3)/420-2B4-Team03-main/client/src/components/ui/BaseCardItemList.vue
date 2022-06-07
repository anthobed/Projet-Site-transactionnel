<template lang="html">
  <div id="container-list">
    <div class="items">
      <div id="selectSale">
        <BaseSortOption></BaseSortOption>
      </div>
      <div id="item-list">
        <slot name="item-list"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import BaseSortOption from "../ui/BaseSortOption.vue";
export default {
  name: "BaseCardItemList",
  components: {
    BaseSortOption,
  },
};
</script>
<style>
#container-list {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem;

  z-index: 10;
}
.items {
  display: flex;
  flex-direction: column;
  margin: 1rem;

  width: 100%;
  font-size: 25px;
  background-color: var(--lightGrey);
  border-radius: 1rem;
  color: white;
  text-align: center;
}
#item-list {
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  align-items: center;
  height: 100%;
}

#selectSale {
  display: flex;
  flex-direction: row;
  color: var(--darkGrey);
  font-size: 20px;
  font-weight: bold;
  padding: 0.5rem;
  justify-content: space-between;
  background-color: var(--LightGrey);
  align-items: center;
  margin-bottom: 0rem;
}

.selectItemByPage {
  margin-left: 2rem;
  width: 10rem;
  height: 3rem;
  color: var(--darkGrey);
  background-color: var(--mediumGrey);
  font-size: 20px;
  font-weight: bold;
  border-radius: 0.5rem;
  text-align: center;
  margin-top: 0.5rem;
}
#icon-top {
  display: flex;
  flex-direction: row;
}
#icon-top div {
  display: flex;
  flex-direction: row;
  width: 10rem;
  height: 3rem;
  background-color: var(--mediumGrey);
  margin-top: 0.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 0.5rem;
}
#icon-top p {
  align-self: center;
  font-size: 25px;
  font-weight: 1000;
  padding: 0rem;
  margin-left: 0.5rem;
}
#icon-top .icon {
  font-size: 20px;
  margin-top: 0.75rem;
  margin-left: 1.25rem;
  margin-right: 0.5rem;
  padding: 0rem;
}
#icon-top .icon:hover {
  cursor: pointer;
  color: var(--lightGrey);
}
#more-option {
  color: var(--lightGrey);
  font-size: 20px;
  font-family: "Bubbler One", sans-serif;
  font-weight: bold;
  width: 100%;
  border-radius: 0.5rem;
  background-color: var(--darkGrey);
}
#more-option:hover {
  cursor: pointer;
  background-color: var(--mediumGrey);
}
#searching {
  width: 100%;
  height: 2.5rem;
  background-color: var(--lightGrey);
  border-radius: 0.5rem;
  text-align: center;
}
</style>
