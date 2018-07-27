
//----------
Sample Code
// ---------
// $(function(){
//   $('#test').click(function () {
//     $(this).text("クリックされました");
//   });
// });
//
// $(function(){
//   $('.test').click(function () {
//     $(this).text("クリックされました");
//   });
// });
//
// $(function(){
//   $('p').click(function () {
//     $(this).text("クリックされました");
//   });
// });
//
// $(function(){
//   $('div p').click(function () {
//     $(this).text("クリックされました");
//   });
// });
//
// $(function(){
//   $('p').click(function () {
//     $(this).text("クリックされました");
//   });
// });
//
// $(function(){
//   $('p').mouseover(function () {
//     $(this).text("マウスオーバーしました");
//   });
// });
//
// $(function(){
//   $('p').mouseout(function () {
//     $(this).text("マウスアウトしました");
//   });
// });
//
// $(function(){
//   $("input").focus(function(){
//     $("input").css('background-color', '#ffff00')
//   }).blur(function(){
//     $("input").css('background-color', '#ffffff')
//   });
//
//   $(function(){
//
//   $('#bg01').mouseover(function () {
//     $(this).css("background-color","#333333");
//   });
//
//   $('#bg02').mouseover(function () {
//     $(this).css("background-color","#666666");
//   });
//
//   $('#bg03').mouseover(function () {
//     $(this).css("background-color","#999999");
//   });
//
//   $('#bg04').mouseover(function () {
//     $(this).css("background-color","#cccccc");
//   });
// });
//
// $(function(){
//
//   $('#bg01').mouseover(function () {
//     $(this).fadeOut("slow");
//   });
//
// });
//
// $(function(){
//   $('p').click(function () {
//     $('p').after('<div>test</div>');
//   });
// });
//
// $(function(){
//   $('div').click(function () {
//     $(this).css('width','40px').css('height','40px');
//   });
// });
//
// $(function(){
//   $('p').click(function () {
//     if($(this).hasClass("on")){ //これはif文　ここからonというclassが付いている時の処理
//       $(this).removeClass("on");
//       $("a",this).text("ココをクリックすると「on」というclassがつきます")
//     }
//     else{ //ここからonというclassが付いていない時
//       $(this).addClass("on");
//       $("a",this).text("「on」というclassがつきました。もう一度クリックすると元に戻ります")
//     }
//   });
// });
