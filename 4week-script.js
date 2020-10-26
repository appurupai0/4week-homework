// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


	function btn(){
		// Q 1
		let message = document.getElementById('q1-text');
		console.log(message.textContent);

		// Q 2
		let moji = document.getElementById('q2-text');
		console.log(moji);
		moji.textContent = "この文字に変更されたよ";

		// Q 3
		let textcolor = document.getElementById('q3-text');
		console.log(textcolor);
		// 上のconsole.log()は文字や色の変更の時にはわざわざ書かなくてもよい
		textcolor.style.color = 'blue';

		// Q 4 (難)
		// 「for of」を使います。
		let change = document.getElementsByClassName('q4-text');
		console.log(change);
		for(let i = 0; i < change.length; i++){
			console.log(change[0]);
			// change[0].style.color = 'blue'
			// それぞれ色を変えたかったら、if文やswitch文で場合分けして、以下のように変えることができる。
			if(i == 0){
				change[i].style.color = 'red';
			}
			if(i == 1){
				change[i].style.color = 'yellow';
			}
			if(i > 1){
				change[i].style.color = 'orange';
			}
		}
		// Q 5
		let background = document.getElementsByClassName('q5-text');
		for(let number of background){
			console.log(number);
			number.style.backgroundColor = 'pink';
		}
	}


// for of
// 配列の繰り返し処理を、回数を意識せずにつ和える書き方（for ofは配列限定の繰り返し処理）
// 変数を繰り返している間に親の配列から1つづつ取り出した値を格納する変数
// for (let 変数 of 親の変数){
	// 処理
// }