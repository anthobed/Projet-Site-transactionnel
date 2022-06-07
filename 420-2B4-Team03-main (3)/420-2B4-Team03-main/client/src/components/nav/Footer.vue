<template lang="html">
  <div class="content">
    <div class="footer">
      <div>
        <button class="button" id="btn-backOnTop" @click="backOnTop">
          Back on top
        </button>
      </div>
      <div>
        <p>© All Right BabuleBeer Inc.</p>
      </div>

      <div>
        <button class="button" id="btn-backOnTop" @click="backOnTop">
          Back on top
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  methods: {
    backOnTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(221, 221, 221);
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  padding: 0.1rem;
  border-top: medium solid #000000;
  z-index: 11;
}
#btn-backOnTop {
  max-height: 3rem;
}
p {
  font-size: 25px;
  font-weight: bold;
}
</style>
