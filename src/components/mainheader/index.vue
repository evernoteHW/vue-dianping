<template>
	<div class="mainheader">
		<div class="content-wrapper">
			<div class="avater">
				<img :src="seller.avater" width="64" height="64">
			</div>
		</div>
		<div class="content">
		</div>
			<div class="bulletin-wrapper">
		</div>
	</div>
</template>

<script type="text/javascript">
  export default {
  	props: {
  		seller: {
  			type: Object
  		}
  	},
  	created () {
  		console.log('------')
		console.log(this.$props)
		console.log('------')
  	}
  }
</script>

<style>
</style>
