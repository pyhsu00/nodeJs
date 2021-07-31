var http = require('http'); // 預設裡就有http資料夾

// 使用http資料夾裡的功能
http.createServer((request, response)=>{
    // request是使用者提供的各種資訊
    console.log(request)
    console.log(request.url)

    // response依照使用者的request回傳的資料
        //寫入表頭：狀態、回傳型態
        //回傳內容
        // 例如：純文字
        // response.writeHead(200, {"Content-Type":"text/plain"}); 
        // response.write('jjjjjjj');
    //  例如：html
    response.writeHead(200, {"Content-Type":"text/html"})
    response.write('<h1>jjjjjjj</h1>');
    response.end()
}).listen(8080)//post
