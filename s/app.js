new Vue({
	el: "#vue-app",
	data: {
		// name: "helloVue",
		job: "web",
		websit:"https://www.baidu.com",
		value:"cccccc",
		tag: "<a href='https://www.baidu.com'>tt</a>",
		age:30,
		X:0,
		Y:0,
		name:"",
		age:"",
		a:0,
		b:0,
		age:20,
		changeColor:false,
		changeLength:false,
		characters:["Mario","Luffy","Yoshi"],
		users:[
			{name:"Henry",age:30},
			{name:"Bucky",age:24},
			{name:"Emily",age:18}
		]
	},
	methods:{
		greet: function(time){
			return 'Good ' + (time ? time : 'zzzz') + " " + this.name + '!';
		},
		add:function(v){
			this.age += v;
		},
		subtract:function(v){
			this.age -= v;
		},
		updateXY:function(event){
			// console.log(event);
			this.X = event.offsetX;
			this.Y = event.offsetY
		},
		stopMoving:function(event){
			event.stopPropagation();
		},
		logName:function(){
			this.name = this.$refs._name.value;
		},
		logAge:function(){
			this.age = this.$refs._age.value;
		},
		// addToA:function(){
		// 	console.log("add to A");
		// 	return this.age + this.a;
		// },
		// addToB: function(){
		// 	console.log("add to B")
		// 	return this.b + this.age;
		// }
	},
	computed:{
		addToA:function(){
			console.log("add to A");
			return this.age + this.a;
		},
		addToB: function(){
			console.log("add to B")
			return this.b + this.age;
		},
		compClasses: function(){
			return {
				changeColor: this.changeColor,
				changeLength:this.changeLength
			}
		}
	}
});