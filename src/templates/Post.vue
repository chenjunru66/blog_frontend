<!-- @format -->

<template>
	<Layout>
		<!-- Page Header -->
		<header
			class="masthead"
			:style="{
				backgroundImage: ` url(${GRIDSOME_API_URL}${
					$page.post.cover ? $page.post.cover.url : ''
				})`,
			}"
		>
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="post-heading">
							<h1>
								{{ $page.post.title }}
							</h1>
							<!-- <h2 class="subheading">
								Problems look mighty small from 150 miles up
							</h2> -->
							<span class="meta"
								>Posted by
								<a href="#">Start Bootstrap</a>
								on {{ $page.post.created_at }}</span
							>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!-- Post Content -->
		<article>
			<div class="container">
				<div class="row">
					<div
						class="col-lg-8 col-md-10 mx-auto"
						v-html="mdToHtml($page.post.content)"
					></div>
				</div>
			</div>
		</article>
	</Layout>
</template>
<page-query>
query($id:ID!) {
  post:strapiPost(id:$id) {
  	id
	title
	content
	cover{
		url
	}
	tags{
		title
		id
	}
}
}

</page-query>
<script>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

export default {
	name: "PostPage",
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
	methods: {
		mdToHtml(html) {
			return md.render(html);
		},
	},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {},
};
</script>
<style scoped></style>
