//界面toast提示
/*使用方法 Toast('这是一个弹框',2000)*/
export function Toast(msg, duration) {
	duration = isNaN(duration) ? 3000 : duration;
	var m = document.createElement('div');
	m.innerHTML = msg;
	m.style.cssText = "font-family:siyuan;max-width:100%;min-width: 150rem;padding:0 14rem;height: 80rem;color: rgb(255, 255, 255);line-height: 40rem;text-align: center;border-radius: 4rem;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16rem;";
	document.body.appendChild(m);
	setTimeout(function() {
		var d = 0.5;
		m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
		m.style.opacity = '0';
		setTimeout(function() {
			document.body.removeChild(m)
		}, d * 1000);
	}, duration);
}
