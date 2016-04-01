
function linear (m, x, b){
	var y = (m*x) + b;  
	return y; 
}
alert (linear( 3, 2, 4));

function quadratic (a, b, c, x){
	var y = powerFunction (a, x, 2) + linear(b, x, c);
	return y; 
}
// alert (quadratic (3, 4, 2, 5));

function powerFunction ( a, x, b){
	var y = a*Math.pow(x, b);
	return y; 
}
//	alert (powerFunction (3, 2, 4)); 

4(1.5)^2+((7(1.5))+5)1.5+3

 bx + c   (bcx)
 mx + b   (mbx)

linear (quadratic (4,7, 5, 1.5), (powerFunction (3, 2, 4)), 1.5);


quadratic (4,7, 5, 1.5)

y = ax^b 
		  ax^2 + bx + c
y= ax^3 + bx^2 + cx + d

axb
ax^3                    a  b  c  x
						
function cubicFunction (a, x, b, c, d){
	var y = powerFunction (a, x, 3) + quadratic (b, c, d, x);
	return y; 
}








