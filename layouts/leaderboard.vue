<template>
	<div id="layout">
		<div class="leaderboards">
			<Header/>
			<div id="page">
				<nuxt/>
			</div>
		</div>

		<Footer/>
	</div>
</template>

<script>
    export default {
        name: "App",
    };
</script>
