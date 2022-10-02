<template>
  <div class="wrapper">
    <cc-navbar></cc-navbar>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "@/assets/fonts/Gilroy/stylesheet.scss";
@import "@/assets/fonts/Nekst/stylesheet.scss";
@import "@/assets/scss/nullstyle.scss";

#app {
  font-family: Nekst;
  font-weight: 900;
  font-size: 30px;
}

.wrapper {
  display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
  position: relative;
}

[class*="__container"] {
  max-width: 1440px;
  margin: 0 auto;
	padding: 0 48px;
}


/*PC*/
@media (max-width: 1440.98px) {
	[class*="__container"] {
		max-width: 1024px;
	}
}

/*TABLET*/
@media (max-width: 1023.98px) {
	[class*="__container"] {
		max-width: 768px;
	}
}

/*MOBILE*/
@media (max-width: 767.98px) {
	[class*="__container"] {
		max-width: none;
    padding: 0 20px;
	}
}
</style>