<template lang="html">
  <div class="content">
    <div id="container">
      <div id="welcome">
        <h1 class="well well--shadow">Welcome to BabuleBeer</h1>
      </div>

      <div id="button">
        <div>
          <button v-if="isLoggedIn == false" class="button">
            <router-link to="/Signin">Sign-In</router-link>
          </button>
        </div>

        <div id="img-home">
          <img src="../assets/Logo.png" alt="" />
        </div>
        <div>
          <button class="button" v-if="isLoggedIn == false">
            <router-link to="/Signup">Sign-Up</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: var(--mediumLightGrey);
}
#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
}
.button {
  width: 10rem;
}
#button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}
</style>
<style lang="scss" scoped>
//ANIMATIONS CSS
$color1: rgb(37, 37, 37);
$color2: white;
$color3: rgb(221, 221, 221);
$color4: rgb(93, 93, 98);

$cubic-bezier: cubic-bezier(0.68, -0.55, 0.265, 1.55);

//initial text-shadow function
@function textShadow($color) {
  //value variable: x-value, y-value, color value;
  $val: 0px 0px $color;
  //loop to create text-shadow variables moving 1px to the left and 1 down
  @for $i from 1 through 50 {
    $val: #{$val}, -#{$i}px #{$i}px #{$color};
  }
  //return value
  @return $val;
}

@function textAnimationShadow($color1, $color2, $color3, $color4, $color5) {
  $val1: 0px 0px $color1;
  $val2: 0px 0px $color2;
  $val3: 0px 0px $color3;
  $val4: 0px 0px $color4;
  $val5: 0px 0px $color5;
  @for $i from 1 through 10 {
    $val1: #{$val1}, -#{$i}px #{$i}px #{$color1};
  }
  @for $i from 11 through 20 {
    $val2: #{$val2}, -#{$i}px #{$i}px #{$color2};
  }
  @for $i from 21 through 30 {
    $val3: #{$val3}, -#{$i}px #{$i}px #{$color3};
  }
  @for $i from 31 through 40 {
    $val4: #{$val4}, -#{$i}px #{$i}px #{$color4};
  }
  @for $i from 41 through 50 {
    $val5: #{$val5}, -#{$i}px #{$i}px #{$color5};
  }
  @return $val1, $val2, $val3, $val4, $val5;
}

//mixin to create initial text-shadow
@mixin shadow($shadow-color) {
  text-shadow: textShadow($shadow-color);
}
//mixin to create animation shadow, can enter 5 color variables
@mixin animationShadow(
  $shadow-color1,
  $shadow-color2,
  $shadow-color3,
  $shadow-color4,
  $shadow-color5
) {
  text-shadow: textAnimationShadow(
    $shadow-color1,
    $shadow-color2,
    $shadow-color3,
    $shadow-color4,
    $shadow-color5
  );
}

h1 {
  font-family: "Bubbler One", sans-serif;
  text-align: center;
  font-weight: normal;
  font-size: 7rem;
  color: $color2;
  @include shadow($color1);
  animation: color 2s ease-in infinite;
}

@keyframes color {
  0%,
  10% {
    color: $color1;
    @include shadow($color3);
  }
  11%,
  20% {
    color: $color1;
    @include animationShadow($color3, $color3, $color3, $color3, $color1);
  }
  21%,
  30% {
    color: $color1;
    @include animationShadow($color3, $color3, $color3, $color1, $color1);
  }
  31%,
  40% {
    color: $color1;
    @include animationShadow($color3, $color3, $color1, $color1, $color1);
  }
  41%,
  50% {
    color: $color1;
    @include animationShadow($color3, $color1, $color1, $color1, $color1);
  }
  51%,
  60% {
    color: $color2;
    @include animationShadow($color1, $color1, $color1, $color1, $color1);
  }
  61%,
  100% {
    color: $color2;
    @include animationShadow($color1, $color1, $color1, $color1, $color1);
  }
}
</style>
