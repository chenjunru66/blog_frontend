<!-- @format -->

<template>
	<Layout>
		<!-- Page Header -->
		<header
			class="masthead"
			style="background-image: url('/img/home-bg.jpg')"
		>
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="site-heading">
							<h1>{{ $page.tag.title }}</h1>
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
						v-for="post in $page.tag.posts"
						:key="post.id"
					>
						<g-link :to="'/post/' + post.id">
							<h2 class="post-title">
								{{ post.title }}
							</h2>
							<!-- <h3 class="post-subtitle">
								Problems look mighty small from 150 miles up
							</h3> -->
						</g-link>

						<hr />
					</div>
				</div>
			</div>
		</div>

		<hr />
	</Layout>
</template>
<page-query>
query($id:ID!) {
  tag:strapiTag(id:$id) {
  	id
	title
	
	posts{
		title
		id
	}
   }
}

</page-query>
<script>
export default {
	name: "TagPage",
	//import引入的组件需要注入到对象中才能使用
	components: {},
	props: {},
	data() {
		//这里存放数据
		return {};
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {},
};
</script>
<style scoped></style>
