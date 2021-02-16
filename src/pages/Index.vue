<!-- @format -->

<template>
	<Layout>
		<!-- Page Header -->
		<header
			class="masthead"
			:style="{
				backgroundImage: ` url(${GRIDSOME_API_URL}${
					$page.general.edges[0].node.cover
						? $page.general.edges[0].node.cover.url
						: ''
				})`,
			}"
		>
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="site-heading">
							<h1>{{ $page.general.edges[0].node.title }}</h1>
							<span class="subheading">{{
								$page.general.edges[0].node.subtitle
							}}</span>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<div
						class="post-preview"
						v-for="edge in $page.posts.edges"
						:key="edge.id"
					>
						<g-link :to="'/post/' + edge.node.id">
							<h2 class="post-title">
								{{ edge.node.title }}
							</h2>
							<!-- <h3 class="post-subtitle">
								Problems look mighty small from 150 miles up
							</h3> -->
						</g-link>
						<p class="post-meta">
							Posted by
							<a href="#"> </a>
							on {{ edge.node.created_at }}
						</p>
						<p>
							<span v-for="tag in edge.node.tags" :key="tag.id"
								><g-link :to="'/tag/' + tag.id">{{
									tag.title
								}}</g-link
								>&ensp;&ensp;</span
							>
						</p>
						<hr />
					</div>

					<!-- Pager -->
					<!-- <div class="clearfix">
						<a class="btn btn-primary float-right" href="#"
							>Older Posts &rarr;</a
						>
					</div> -->
					<Pager :info="$page.posts.pageInfo"></Pager>
				</div>
			</div>
		</div>

		<hr />
	</Layout>
</template>
<page-query>
query($page: Int) {
  	posts: allStrapiPost(perPage:10, page:$page) @paginate {
		pageInfo {
		totalPages
		currentPage
		}
		edges {
		node {
			id
			title
			created_at
			tags{
			title
			id
			}
		}
		}
	}
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
import { Pager } from "gridsome";
export default {
	metaInfo: {
		title: "Hello, world!",
	},
	name: "HomePage",
	components: {
		Pager,
	},
};
</script>

<style>
.home-links a {
	margin-right: 1rem;
}
</style>
