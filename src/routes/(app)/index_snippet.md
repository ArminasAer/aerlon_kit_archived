```bash
server:~/wrk$ ./wrk -t12 -c400 -d30s https://ericarthurc.com
Running 30s test @ https://ericarthurc.com
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.66s   182.85ms   2.00s    88.86%
    Req/Sec    23.32     18.15   151.00     81.05%
  6450 requests in 30.10s, 41.85MB read
  Socket errors: connect 0, read 0, write 0, timeout 1179
Requests/sec:    214.30
Transfer/sec:      1.39MB
```
