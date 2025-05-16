# Tool & Shortcut

工作上常用的工具或快捷

## Mac

- `kill -9 {pid}` ：kill process by process id

### Shortcut
- `Command` + `shift` + `.`：顯示隱藏檔
- `Command` + `R`：重新整理
- 右上`touch`鍵：鎖定螢幕

### Git

- `git log -p -- filename`：git查詢指定檔案log

### Network

- `lsof -iTCP -P`：查詢本機當前為TCP監聽的程序(-P:顯示port號)
  ```bash
  david@QY-fe-3 temp % lsof -iTCP -P
  COMMAND     PID  USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
  com.docke  3409 david  142u  IPv6 0x4c68b1434e39932d      0t0  TCP *:5432 (LISTEN)
  com.docke  3409 david  151u  IPv6 0x4c68b1434e399b2d      0t0  TCP *:8080 (LISTEN)
  Google    17535 david   20u  IPv4 0x4c68b13e81fba155      0t0  TCP 10.45.110.108:60424->104.26.0.211:443 (ESTABLISHED)
  Google    17535 david   32u  IPv4 0x4c68b13e80b758a5      0t0  TCP 10.45.110.108:54611->td-in-f188.1e100.net:5228 (ESTABLISHED)
  Google    17535 david   35u  IPv4 0x4c68b13e81f218a5      0t0  TCP 10.45.110.108:57265->lb-140-82-113-25-iad.github.com:443 (ESTABLISHED)
  Google    17535 david   38u  IPv4 0x4c68b13e80bff515      0t0  TCP 10.45.110.108:51542->th-in-f188.1e100.net:5228 (ESTABLISHED)
  Google    17535 david   47u  IPv4 0x4c68b13e81fb9645      0t0  TCP 10.45.110.108:52694->149.154.170.100:443 (ESTABLISHED)
  Google    17535 david   87u  IPv4 0x4c68b13e8243c285      0t0  TCP 10.45.110.108:52668->104.18.35.23:443 (ESTABLISHED)
  ```
- `lsof -i :3000`：Find the process by port
  ```bash
  david@QY-fe-3 temp % lsof -i :5432
  COMMAND    PID  USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
  com.docke 3409 david  142u  IPv6 0x4c68b1434e39932d      0t0  TCP *:postgresql (LISTEN)
  ```

## Windows

## Others

### Nmap

- `ncat -v -4 'url port'`：使用tcp連線到指定url，須自行輸入內容
  ```bash
  david@QY-fe-3 ~ % ncat -v -4 127.0.0.1 3000
  Ncat: Version 7.95 ( https://nmap.org/ncat )
  Ncat: Connected to 127.0.0.1:3000.
  GET /html HTTP/1.1          <--- 手動輸入請求並按下enter送出

  HTTP/1.1 200 OK
  Content-Type: text/html; charset=utf-8
  Date: Wed, 09 Apr 2025 07:17:53 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>測試</title>
  </head>
  <script>
      console.log('run', document)
      window.onloadstart = function(){ console.log('load start'); }
      window.onload = function(){ console.log('load done'); }
  </script>
  <body>
      <h2>測試內容</h2>
      <div>immediate data</div>
      <div data-suspense-id="chunk1">
          <div>Chunk 1 loading ...</div>
      </div>
      <div data-suspense-id="chunk2">
          <div>Chunk 2 loading ...</div>
      </div>
  </body>
  </html>

  david@QY-fe-3 ~ %
  ```
