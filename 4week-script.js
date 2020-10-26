// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


	function btn(){
		// Q 1
		let message = document.getElementById('q1-text');
		console.log(message);

		// Q 2
		let moji = document.getElementById('q2-text');
		console.log(moji);
		moji.textContent = "この文字に変更されたよ"

		// Q 3
		let textcolor = document.getElementById('q3-text');
		console.log(textcolor);
		// 上のconsole.log()は文字や色の変更の時にはわざわざ書かなくてもよい
		textcolor.style.color = 'blue';

		// Q 4 (難)
		// 「for of」を使います。
		let change = document.getElementsByClassName('q4-text');

		for(let num of change){
			console.log(change[0]);
			// change[0].style.color = 'blue'
			num.style.color = 'red'
		}
		// Q 5
		let background = document.getElementsByClassName('q5-text');
		for(let number of background){
			number.style.backgroundColor = 'pink';
		}
	}
