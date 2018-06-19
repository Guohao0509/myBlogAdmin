<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
        <button class="btn btn-primary" type="button">Primary button</button>
        <button class="btn btn-sm btn-primary" type="button">Small primary button</button>
		<ul>
			<li>
				<a
					href="https://vuejs.org"
					target="_blank"
				>
					Core Docs
				</a>
			</li>
			<li>
				<a  href="https://forum.vuejs.org"
                    target="_blank">
					Forum
				</a>
			</li>
			<li>
				<a
					href="https://chat.vuejs.org"
					target="_blank"
				>
					Community Chat
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/vuejs"
					target="_blank"
				>
					Twitter
				</a>
			</li>
			<br>
			<li>
				<a
					href="http://vuejs-templates.github.io/webpack/"
					target="_blank"
				>
					Docs for This Template
				</a>
			</li>
		</ul>
		<h2>Ecosystem</h2>
		<ul>
			<li>
				<a
					href="http://router.vuejs.org/"
					target="_blank"
				>
					vue-router
				</a>
			</li>
			<li>
				<a
					href="http://vuex.vuejs.org/"
					target="_blank"
				>
					vuex
				</a>
			</li>
			<li>
				<a
					href="http://vue-loader.vuejs.org/"
					target="_blank"
				>
					vue-loader
				</a>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/awesome-vue"
					target="_blank"
				>
					awesome-vue
				</a>
			</li>
		</ul>
        
		<div>
			<el-button>默认按钮</el-button>
			<el-button type="primary" size="small">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</div>
		<div v-for="item in list" :key="item.id" @click="selected(item)">
			<el-radio :label="item.id" v-model="checked">{{ item.name }}</el-radio>
		</div>
		<el-button type="danger" @click="add()">危险按钮</el-button>
		
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			checked: 2,
			list: [
				{id: 1, name: '老朱1'},
				{id: 2, name: '老朱2'},
				{id: 3, name: '老朱3'},
				{id: 4, name: '老朱4'}
			]
		}
	},
	methods: {
		add () {
			this.list.push({id:4, name: '老朱4'});
			this.list.push({id:5, name: '老朱5'});
		},
		selected (item) {
			this.checked = item.id;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$font-color: red;
h1, h2 {
	font-weight: normal;
	color: $font-color;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
