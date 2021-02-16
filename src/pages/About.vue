<!-- @format -->

<template>
	<Layout>
		<!-- Page Header -->
		<header
			class="masthead"
			style="background-image: url('/img/about-bg.jpg')"
		>
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="page-heading">
							<h1>About Me</h1>
							<span class="subheading">This is what I do.</span>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					{{ $page.general.edges[0].node.title }}
				</div>
			</div>
		</div>
	</Layout>
</template>
<page-query>
query {
	general:allStrapiGeneral{
		edges {
		node {
			id
			title
			subtitle
			cover {
			url
			}
		}
		}
	}
}

</page-query>
<script>
export default {
	metaInfo: {
		title: "About us",
	},
	name: "AboutPage",
};
</script>
