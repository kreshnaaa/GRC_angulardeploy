# Configure Nginx
$content = @"
worker_processes 1;
events {
  worker_connections 1024;
}
http {
  include mime.types;
  default_type application/octet-stream;
  sendfile on;
  keepalive_timeout 65;
  server {
    listen 2345;
    server_name 192.168.29.84;
    location / {
      root C:/Users/ADMIN/Desktop/selftest/actions-runner/grcdeploy/GRC_angulardeploy/GRC_angulardeploy/dist/grc/browser;
      index index.html index.htm;
    }
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
      root html;
    }
  }
}
"@
$Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllLines("C:/Users/ADMIN/Desktop/nginx-1.25.4/conf/nginx.conf", $content, $Utf8NoBomEncoding)

# Start Nginx
cd C:/Users/ADMIN/Desktop/nginx-1.25.4
./nginx.exe
