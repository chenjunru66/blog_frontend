<!-- @format -->

<template>
	<Layout>
		<!-- Page Header -->
		<header
			class="masthead"
			style="background-image: url('/img/contact-bg.jpg')"
		>
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="page-heading">
							<h1>Contact Me</h1>
							<span class="subheading"
								>Have questions? I have answers.</span
							>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<p>
						Want to get in touch? Fill out the form below to send me
						a message and I will get back to you as soon as
						possible!
					</p>
					<!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
					<!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
					<!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
					<form name="sentMessage" id="contactForm" novalidate>
						<div class="control-group">
							<div
								class="form-group floating-label-form-group controls"
							>
								<label>Name</label>
								<input
									type="text"
									class="form-control"
									placeholder="Name"
									id="name"
									required
									v-model="form.name"
									data-validation-required-message="Please enter your name."
								/>
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="control-group">
							<div
								class="form-group floating-label-form-group controls"
							>
								<label>Email Address</label>
								<input
									type="email"
									class="form-control"
									placeholder="Email Address"
									id="email"
									required
									v-model="form.email"
									data-validation-required-message="Please enter your email address."
								/>
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls"
							>
								<label>Phone Number</label>
								<input
									type="tel"
									class="form-control"
									placeholder="Phone Number"
									id="phone"
									required
									v-model="form.phone"
									data-validation-required-message="Please enter your phone number."
								/>
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="control-group">
							<div
								class="form-group floating-label-form-group controls"
							>
								<label>Message</label>
								<textarea
									rows="5"
									class="form-control"
									placeholder="Message"
									id="message"
									required
									v-model="form.message"
									data-validation-required-message="Please enter a message."
								></textarea>
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<br />
						<div id="success"></div>
						<button
							type="submit"
							class="btn btn-primary"
							id="sendMessageButton"
							@click.prevent="onSubmit"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</div></Layout
	>
</template>

<script>
import axios from "axios";
export default {
	name: "ConcatPage",
	//import引入的组件需要注入到对象中才能使用
	components: {},
	props: {},
	data() {
		//这里存放数据
		return {
			form: {
				email: "",
				name: "",
				phone: "",
				message: "",
			},
		};
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {
		async onSubmit() {
			try {
				const { data } = await axios({
					type: "post",
					url: GRIDSOME_API_URL + "/concats",
					data: this.form,
				});
				this.$router.push("/");
			} catch (error) {
				console.log("发送失败");
			}
		},
	},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {},
};
</script>
<style scoped></style>
