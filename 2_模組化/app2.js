var date = '2021', title="b learn", not="noshow"

//共存寫法
// module.exports={
//     data: date,
//     title: title
// }

//各自寫法
exports.data= date
exports.title=title
exports.bark = function(){
    return 'bark'
}