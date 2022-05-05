---
title: 小小地记录下HTTP的理解
kind: post
description: >-
  Well, just some thoughts on http and it's model...
date: '2021-09-25T02:38:31.953Z'
categories:
  - engineering
keywords:
  - http
  - network
  - protocol
published: true
private: false
language: en-US
cover: ./toa-heftiba-1399721-unsplash-optimized.jpg
coverAuthor: Toa Heftiba
coverOriginalUrl: https://unsplash.com/photos/_2HNqkk6FEU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
---

### HTTP Request Model

#### Two ends

A client

Anyone who initiates a request is a client

A server side

The one that returns the corresponding is the server side, and cannot actively connect to the client

#### Two Actions

one Request one Response

![](https://docimg9.docs.qq.com/image/bRm_wREQtw-ou_QKz6zNEA.png?w=1082&h=358)

  

### Stateless Protocal

cookie + session together to maintain the session

web socket is also http protocol, then protocol upgrade

Network topology -> how the node devices in the network are laid out

  

### Process

![](https://docimg3.docs.qq.com/image/Wk4miHkn4dkyF740wjS8Jw.png?w=1272&h=804)

1. the user has to access the url in the browser
    
2. the browser has to check the firewall/gateway/proxy step first, whether it can connect to the network?
    
3. to access the server through ip, but need to convert the url to ip, so to access the DNS server, domain name and ip mapping relationship. ipv4 unsigned integer, four bytes, a byte corresponds to a segment, the value range 0-255
    
4. it has to go through many routers to reach the target server
    
5. the browser reaches a server room, there are many servers in the server room, this ip is the entrance and exit of this server room, through the reverse proxy server forwarding, to the specific server
    
6. the server receives the request, starts working, after the stuff is ready, the data is given to the browser
    
7. the data comes back through the link
    
8. the browser internal processing, browser internal rendering, html to DOM, processing css, js, image layout synthesis, to the graphics card processing, and then presented to the user
    
9. end
    

History: The earliest Internet was the U.S. military's, ApaNet, for decentralized device connectivity. During the Cold War between the United States and the Soviet Union, nuclear war threatened to invent a decentralized communication method in order to prevent communication hubs from being knocked out. For example, both ends, connected to multiple data lines, redundant backup. Communication network is big center, big center hang small center, small center hang micro center, put many routers on the communication nodes, routers are connected to each other in a mesh. If one of the routers is knocked out, the mesh structure still has other pathways to reach. Home routers are pedestrian, real routers should be very large and expensive.

  

#### How to track a router

```
$: traceroute www.baidu.com

```
The icmp datagram protocol is used

If some routers are *, then it means that the router is not allowed to ping him.

  

#### Strategy

How do packets know which way to go? 
There are routing tables in the router, for primary use, with the location of the next hop (hop).

  

#### ping的协议

##### icmp_seq

The number of the ping's packet, ping is the icmp protocol, datagram protocol.

##### ttl

From your computer to the target server in the interval of how many routers, such as ttl = 48, then it is unix/linux protocol implementation of ttl default value is 64 (windows is 128), each after a router, the router will be the packet ttl -1, so is after 64 -48 = 16 routers. If the ttl is reduced to 0, the packet will be dropped to and will not be passed further.

In order to prevent the packet in the router unlimited transmission, if the router with a problem, the formation of a ring, never reach the destination, the packet will be infinite transmission. It will cause the router to collapse and cannot carry the invalid packets that have been processed.

  

### HTTP

http1,http2,http3

![](https://docimg2.docs.qq.com/image/b04eY4lDk3pg2AOP_It1Sg.png?w=1150&h=268)

  
http 1.0 short links, tcp has to be re-established every time data is sent

http 1.1 supports long links, multiplexing of tcp links, requesting a web page, css, js, images, not repeatedly disconnecting tcp, the same link until there is no more subsequent data, then disconnecting tcp

http3 uses udp protocol, in order to solve the problem of link efficiency. QUIC

HTTP default port number 80, HTTPS default port number 443

  

#### Working Process

One HTTP operation is called a transaction, and treating many small operations as one operation is called an atomic operation. That is, if there is an error in any of these steps, it will roll back all the previous operations and return to the initial state.

1. first the client and server need to establish a connection
    
2. after establishing the tcp connection, the client sends a request to the server in the following format: Uniform Resource Identifier (uri), protocol version number, followed by MIME information including the request modifier, client information and possible content
    
3. the server receives the request and returns a response message in the format of a status line including the protocol version number, a success or failure status code, MIME information including server information, entity information, etc.
    
4. the client receives the corresponding display in the browser and disconnects
    

The above description is http1.0 short connection, if it is a long link then it is step 2, 3 repeat until there is no data request, then disconnect.

  

#### Request

![](https://docimg6.docs.qq.com/image/iuQrMklv5NReZC9M6xRUQg.png?w=1082&h=572)

![](https://docimg2.docs.qq.com/image/3zqOQu2lzj4Z0Unz0pSREw.png?w=744&h=268)

There is no space between the message line and the message body, there is a carriage return (0x0D)/r and a line feed (0x0A)/n

ASCII code, one character corresponds to one number, there are visible and invisible characters (control characters)

##### ASCII encoding -- Carriage return and line feed

ASCII is the ancient character that came from English typewriters.

![](https://docimg9.docs.qq.com/image/9ffsa6kN3dCaYfV2J52bLw.png?w=700&h=525)

When the key is pressed, the middle part is the lead, which will lift the lead up and knock it onto the ribbon, and then hit the paper. The paper is rolled on the rollers, and the rollers move as you hit the keyboard. After typing a line, the rollers of the rolled paper reach the head, and the rollers should return to their position and type the next line again. This back operation is called carriage return. Carriage return is not enough, you still have to roll a line, called line feed.

So when designing the HTTP protocol, you have to add carriage returns and line feeds. But now in the windows/linux system design, only line feeds

  
Post Office -> Telegraph Network -> Telephone Network -> Internet

Why did the width of a horse's ass in ancient Rome determine the diameter of an American rocket?

The width of the horse's ass determines the width of the wagon ruts, the standard of the ruts used for two thousand years until the first industrial revolution, there are trains, the width of the train's narrow gauge railroad is the width of the ruts, at first the wagon pulled the car to run, and then there was a steam engine. U.S. rockets are too big, you have to use the railroad tracks with, still the specification of the narrow gauge railroad. Later made the platform for the launch of rockets, transport to the launch platform of rockets.
  

#### Response

![](https://docimg3.docs.qq.com/image/ewsDZj9J9fVI9pOe-fElxQ.png?w=1258&h=614)

  

#### Request Method

GET requests for the resource identified by the uri

POST appends new data to the resource identified by the uri

HEAD request to get the resource response message header identified by the uri, incomplete GET, no response body returned

PUT request for the server to store a resource and identify it with the uri

DELETE requests that the server delete the resource identified by the uri

TRACE requests the server to send back the received request, mainly for testing or diagnostics, equivalent to ECHO of the basic protocol

CONNECT The HTTP 1.1 protocol is reserved for proxy servers that can pipe connections, such as HTTP proxies

OPTIONS requests to query server performance, or support methods, such as the MongoDB web service, specifically using OPTIONS to get the db performance parameters

  

#### Request Header

##### Accept

Tell the server what format data the client accepts, almost all formats, such as image/webp format, webp is a rule set by google, other browsers do not support, join the server did not return the corresponding format according to the Accept inside, then it may not be displayed

##### Accept-Encoding

Whether to support data compression, http1.1 text format, not compact enough to take up more space, consume network bandwidth, in order to save consumption so compression

##### Accept-Language

Similar to Accept, but expresses the accepted language classified in natural language, such as zh-cn, us-en

##### Authorization

When the client requests the server, the server determines whether this field has permission to view the resource, and returns 401 if it does not.


##### Cookie

At the time of request it is in a field, at the time of response the cookie is returned one by one

##### Host

Server Host

##### User-Agent

Tell the server the basic conditions of the client environment


##### Referer

The source, the current request of the last requested resource is what is used to prevent chain, anti-crawler. Now the crawler set is getting deeper and deeper, now the anti-crawler are server-side to detect, using machine learning, big data to find that the request is too intensive or inconsistent with the behavior of other users, in determining the crawler

  

#### 响应报头


##### Content-Encoding

The client sends a request for compression, the server supports compression, and if the media type in the Content-Type is to be decoded, the decompression method of the response must be used

##### Content-Type

Type of content, returned content

##### Date

缓存策略，已过时。

##### Expires

缓存策略，给出响应过期的日期和时间

##### Last-Modified

用于指示资源的最后修改日期和时间

##### Server

是哪一个服务器种类，此报头和请求中的User-Agent是对应的

##### Set-Cookie

设置cookie

##### Location

重定向到一个新的位置，通常在更换域名的时候

##### Cache-Control

协商缓存

  

#### Status Code

Three digits, with five possible values

1xx Indication used in asynchronous processing, indicating that the request has been received, continue processing, because HTTP has a time limit, a long time client will resend, so return 1xx. for example, the protocol upgrade, indicating that there is a follow-up work to do

2xx success

3xx redirected The resource has changed location, or the server redirected to another address

4xx The server thinks there is a problem with the client, the resource does not exist, insufficient permissions, etc.

5xx Server side error, failed to fulfill a legitimate request

  

#### Cookie & Session

To solve the problem of HTTP statelessness and to solve the problem of statelessness of the client

The server has to know who the client is. In the past, the computer was fixed and the IP was fixed, and the server maintained the session through the IP. Now it's a mobile network it won't work

Each time the HTTP request is completed, TCP is broken, the server's stack does not save the IP, the state can not be saved. Rely on cookies and sessions to maintain state

Cookies exist in the browser and Sessions exist in the server

  

##### Which side creates Cookie?

Server-side generation, but in fact browsers can also generate cookies

The API provided by the browser has createCookie, which means that the client can also generate

Generally, it is the server that sends the cookie.

The server side sends multiple cookies, through Set-Cookie

Cookie has five attributes, name, path to take effect, time to take effect, whether to take effect for the browser or app

If the client's first request does not bring a cookie, the server thinks it is the first time to come, will issue a cookie, and then the second or Nth time the client will request again with the returned cookie, the same as the access card, a card to enter, did not expire to enter.

Cookies are generally used in the session login, some bad companies, a degree, will add a lot of cookies in the cookie, in order to identify you, track you, through the big data to touch, push a little advertising

  

#### HTTP Cache

Cache is to improve performance, reduce IO (IO characteristics, slow speed, easy to form a performance bottleneck) overhead, reduce input and output overhead, input and output is for the CPU

Network is IO, cross-hardware communication

Cache outside the IO, if there is a cache directly go to the contents of the cache, no longer to IO

##### Advantage

For requests that are static resources that do not change frequently, such as html, images, logos, etc.

But if it is SSR, html is rendered on the server side and changes frequently, it should not be cached.

For the client, reduce the corresponding latency

Network bandwidth is an extremely valuable resource for the server, reduce the consumption of network bandwidth and save money

  

##### Caching Policies and Mechanisms

![](https://docimg3.docs.qq.com/image/tG6Kdxu99cQ-ehu8EouKVA.png?w=752&h=614)

The first request is not cached locally, and the server decides the caching policy, which is configured by the server, a step called cache negotiation

Cache-Control Negotiation Cache

  

For the second to the nth time, the priority is to find the mandatory caching policy and whether the cache is available locally

![](https://docimg3.docs.qq.com/image/eP7OqhJNDRmcZEKHyjkx4A.png?w=808&h=770)

If there is no mandatory caching, then the freshness period (Expires) is the time of the request

Going to the right branch there are two strategies for comparing the cache, comparing whether the current resource is the same as the original one. The client has to send the characteristics of the file to the server, which relies on the MD5 fingerprint of the file and also on the timestamp generated by the file. The fingerprint of the file is more reliable and the timestamp can be changed. For example, the touch command in linux creates the touch index.js if it does not exist, and modifies the timestamp of the file if it already exists.

Etag has a higher priority, whether the fingerprint of the file is changed, because it is more reliable, if there is no Etag policy there is only a timestamp policy

###### Compare Strategy Etag

The server will return the Etag field, the browser in the request header with If-None-Match field, the md5 value. The server receives the MD5 to check whether the md5 of the file is consistent, if consistent will return 304, 304 local jump, the browser receives 304 will read the cache directly from the browser. If there is a change, it will have to be re-pushed to return 200 status code, and the new resource will be written to the cache

* to avoid collisions in the air *

For example, when editing online documents, the server side will be the current document content is typed into the md5 value returned to the client through the Etag header field.

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4

```

When the client saves the document, it will POST a request to the server and include the If-Match field for the Etag value

```
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"

```

If the server side determines that the hash does not match, then the document is not the latest, has been modified, then it will return 412 on behalf of Precondition Failed precondition failure error.

  

###### Compare Strategy Last-Modified

The server returns the Last-Modified field, and the browser takes the If-Modified-Since field with it on the next request with the previously returned timestamp. This policy is checked only when the Etag policy fails. The same process as Etag, the difference is that this is the check timestamp

  

###### Strong Caching

In a period of time, do not repeat the request to the server, with cache. When the cache time expires, the cache policy is compared and the data is pulled again when it expires, and the time is extended when it does not expire.

###### Compare Caching

Etag/If-None-Match Policy

Check if the file has changed based on the md5 of the file

Last-Modified/If-Modified-Since Policy

Check the file against its timestamp