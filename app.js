const http = require('http')
const { readFileSync } = require('fs')

//retreive files
const homePage = readFileSync('./index.html')
const homeStyles = readFileSync('./styles.css')
const homeBackground = readFileSync('./dark_theme.css')
const homeDesktop = readFileSync('./desktop.css')
const homeImage = readFileSync('./photos/example2.png')
const homeLogic = readFileSync('./three.js')




const server = http.createServer((req, res) => {
    //console.log(req.method)
    const url = req.url
    console.log(url) 

    //home page
    if (url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }

    //styles
    else if (url === '/styles.css') {
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }

    else if (url === '/dark_theme.css') {
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeBackground)
        res.end()
    }

    else if (url === '/desktop.css') {
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeDesktop)
        res.end()
    }

    //image
    else if (url === '/photos/example2.png') {
        res.writeHead(200, {'content-type':'image/png'})
        res.write(homeImage)
        res.end()
    }

    //logic
    else if (url === '/three.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }

    // 404
    else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
 
})

server.listen(5000)