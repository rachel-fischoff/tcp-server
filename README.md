# echo tcp server built in node.js
node.js TCP echo server with Dockerfile

# Steps for downloading & running locally 
1. Do you have **homebrew** installed? 
   1. no, install at [Homebrew](https://docs.brew.sh/Installation)
   2. yes, open the terminal and run `brew install telnet` and continue on **step 3**
2. Do you have **telnet** installed? 
   1. yes, go to **step 3**
   2. no, open the terminal and run `brew install telnet`
2. Clone the repo `git clone https://github.com/rachel-fischoff/tcp-server.git `
3. Navigate into the directory and start it up.

    ```shell
    cd tcp-server/
    NPM install
    ```
4. Run `telnet localhost 80`
