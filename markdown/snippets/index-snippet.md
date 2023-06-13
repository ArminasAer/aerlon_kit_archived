```bash
server:~/wrk$ ./wrk -t12 -c400 -d30s
Running 30s test @ https://ericarthurc.com/blog
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    95.92ms    9.70ms 287.42ms   77.82%
    Req/Sec   344.39     46.28   610.00     81.93%
  123626 requests in 30.08s, 2.46GB read
Requests/sec:   4109.99
Transfer/sec:     83.81MB
```
