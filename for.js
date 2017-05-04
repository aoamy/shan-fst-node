/**
 * Created by Administrator on 2017/5/3.
 */

// 求和
module.exports = function( a, b )
{
	let _s = 0;
	for( let i = a; i <= b; i++ )
	{
		_s += i;
	}
	return _s;
};
// console.log(add(2,10));