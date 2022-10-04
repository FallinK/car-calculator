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
@import "@/assets/scss/variables.scss";

html {
  font-family: Nekst;
  font-weight: 900;
  // font-size: 30px;
  font-size: 3.3vh;
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
@media (max-width: $bp-large) {
	[class*="__container"] {
		max-width: 1024px;
	}
	html {
		font-size: 30px;
	}
}

/*TABLET*/
@media (max-width: $bp-medium) {
	[class*="__container"] {
		max-width: 768px;
	}
}

/*MOBILE*/
@media (max-width: $bp-small) {
	[class*="__container"] {
		max-width: none;
    padding: 0 20px;
	}
}

@media (max-width: $bp-xsmall) {
	html {
		font-size: 9vw;
	}
}
</style>