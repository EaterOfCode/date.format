var dateFormatter = {
	format:function(date,str){
		return str.replace(/\%([A-Za-z\%])/g,function(a,b){
			if(!dateFormatter.formatters[b]){
				console.log(a + " is an invalid format option");
				return a;
			}
			return dateFormatter.formatters[b].apply(date);
		});
	},
	suffixer: function(str,len){
		str += "";
		while(str.length < len) str = '0' + str;
		return str;
	},
	getWeek:function(date,day){
		day = day===undefined?1:day;
		// source: https://gist.github.com/dblock/1081513
	    var target  = new Date(date.valueOf());
	    var dayNr   = (date.getDay() + 7-day) % 7;  
	    target.setDate(target.getDate() - dayNr + 3);  
	    var firstMiddle = target.valueOf();
	    target.setMonth(0, 1);  
	    if (target.getDay() != day+3) {  
	        target.setMonth(0, 1 + (((day+3) - target.getDay()) + 7) % 7);  
	    }  
	    return 1 + Math.ceil((firstMiddle - target) / 604800000);
	},
	days:[
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	months:[
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	formatters:{
		a:function(){
			return dateFormatter.days[this.getDay()].substr(0,3);
		},
		b:function(){
			return dateFormatter.months[this.getMonth()].substr(0,3);
		},
		c:function(){
			return this.getMonth()+1
		},
		d:function(){
			return dateFormatter.suffixer(this.getDate(),2);
		},
		e:function(){
			return this.getDate();
		},
		f:function(){
			return this.getMilliseconds();
		},
		H:function(){
			return dateFormatter.suffixer(this.getHours(),2);
		},
		h:function(){
			return dateFormatter.suffixer((this.getHours()-1)%12+1,2);
		},
		I:function(){
			return dateFormatter.formatters.h.apply(this);
		},
		i:function(){
			return dateFormatter.suffixer(this.getMinutes(),2);
		},
		j:function(){
			var newDate = new Date();
			newDate.setFullYear(this.getFullYear());
			newDate.setMonth(0);
			newDate.setDate(1);
			newDate.setHours(0,0,0,0);
			var elapsed = this - newDate;
			console.log(elapsed,this,newDate);
			return dateFormatter.suffixer(Math.floor(elapsed/1000/60/60/24)+1,3)
		},
		k:function(){
			return this.getHours();
		},
		l:function(){
			return (this.getHours()+1)%12+1;
		},
		m:function(){
			return dateFormatter.months[this.getMonth()];
		},
		p:function(){
			return this.getHours()>=12?"PM":"AM";
		},
		r:function(){
			return dateFormatter.format(this,'%h:%i:%s %p');
		},
		S:function(){
			return dateFormatter.suffixer(this.getSeconds(),2);
		},
		s:function(){
			return dateFormatter.formatters.S.apply(this);
		},
		T:function(){
			return dateFormatter.format(this,'%H:%i:%s');
		},
		U:function(){
			return dateFormatter.suffixer(dateFormatter.getWeek(this,0),2);
		},
		u:function(){
			return dateFormatter.suffixer(dateFormatter.getWeek(this),2);
		},
		V:function(){
			return dateFormatter.formatters.U.apply(this);
		},
		v:function(){
			return dateFormatter.formatters.u.apply(this);
		},
		W:function(){
			return dateFormatter.days[this.getDay()];
		},
		w:function(){
			return this.getDay();
		},
		X:function(){
			return this.getMonth()==0&&dateFormatter.getWeek(this,0)>50?this.getFullYear()-1:this.getMonth()==11&&dateFormatter.getWeek(this,0)<2?this.getFullYear()+1:this.getFullYear();
		},
		x:function(){
			return this.getMonth()==0&&dateFormatter.getWeek(this)>50?this.getFullYear()-1:this.getMonth()==11&&dateFormatter.getWeek(this)<2?this.getFullYear()+1:this.getFullYear();
		},
		Y:function(){
			return this.getFullYear();
		},
		y:function(){
			return this.getYear()%100;
		},
		"%":function(){
			return '%';
		}
	}
};

Date.prototype.format = function(str){
	return dateFormatter.format(this,str);
}
