//Javascript code
function parse(str){
	var x=str.indexOf("(");
	var y=str.indexOf(">");
	var command=str.substring(0,x);
	if(command=="print"){
			var xx=str.indexOf("(");
			var yy=str.indexOf(")");
			var parameters=str.substring(xx+1, yy);
			document.write(parameters);
		}
	if(command=="sum"){
			var xx=str.indexOf("(");
			var yy=str.indexOf(")");
			var dd=str.indexOf(",");
			var par1=str.substring(xx+1, dd);
			var par2=str.substring(dd+1, yy);
			var a=parseInt(par1);
			var b=parseInt(par2);
			document.write(a+b);
		}
	if(command=="sub"){
			var xx=str.indexOf("(");
			var yy=str.indexOf(")");
			var dd=str.indexOf(",");
			var par1=str.substring(xx+1, dd);
			var par2=str.substring(dd+1, yy);
			var a=parseInt(par1);
			var b=parseInt(par2);
			document.write(a-b);
		}
	if(command=="mult"){
			var xx=str.indexOf("(");
			var yy=str.indexOf(")");
			var dd=str.indexOf(",");
			var par1=str.substring(xx+1, dd);
			var par2=str.substring(dd+1, yy);
			var a=parseInt(par1);
			var b=parseInt(par2);
			document.write(a*b);
		}
	if(command=="div"){
			var xx=str.indexOf("(");
			var yy=str.indexOf(")");
			var dd=str.indexOf(",");
			var par1=str.substring(xx+1, dd);
			var par2=str.substring(dd+1, yy);
			var a=parseInt(par1);
			var b=parseInt(par2);
			document.write(a/b);
		}
	if(command=="if"){
			var xx=str.indexOf("(");
			var yy=str.indexOf(")");
			var dd=str.indexOf(">" || "<" || "=");
			var par1=str.substring(xx+1, dd);
			var par2=str.substring(dd+1, yy);
			var a=parseInt(par1);
			var b=parseInt(par2);
			var begin=str.indexOf("{");
			var end=str.indexOf("}");
			var resi=str.substring(begin+1,end);
			alert(resi);
			if(a>b){
			parse(resi);
			}
			if(a<b){
			parse(resi);
			}
		}
}





