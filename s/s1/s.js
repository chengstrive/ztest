let one = new Vue({
	el:"#vue-app-one",
	data:{
		title:"vue one 内容"
	},
	methods:{

	},
	computed:{
		greet:function(){
			return "Hello App One";
		}
	}
})

let two = new Vue({
	el:"#vue-app-two",
	data:{
		title:"vue two 内容"
	},
	methods:{
		changeTitle:function(){
			one.title = "已经改名了";
		}
	},
	computed:{
		greet:function(){
			return "Hello App Two";
		}
	}
})

two.title = "two也变了"