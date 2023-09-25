// bt00 :biện luận pt bậc 2 một ẩn: a*x2 + b*x +c = 0 với mọi a

var a, b, c
	// Nhap a, b, c
	a = parseFloat(prompt('Nhap a = '))
	b = parseFloat(prompt('Nhap b = '))
	c = parseFloat(prompt('Nhap c = '))

	
	if(a == 0) {
		if(b == 0) {
			if(c == 0) {
				console.log("Phuong trinh VSN")
			} else {
				console.log("Phuong trinh VN")
			}
		} else {
			x = -c/b
			console.log("Nghiem phuong trinh x = " + x)
		}
	} else {
		dt = b*b - 4*a*c;
		if(dt < 0) {
			console.log("Phuong trinh vo nghiem")
		} else if(dt == 0) {
			x = -b/(2*a)
			console.log("Nghiem phuong trinh x1 = x2 = " + x)
		} else {
			x1 = (-b + Math.sqrt(dt))/(2*a)
			x2 = (-b - Math.sqrt(dt))/(2*a)
			console.log("Nghiem x1 = ${x1}, x2 = ${x2}")
		}
	}