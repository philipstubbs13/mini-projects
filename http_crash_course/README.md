# HTTP crash course and exploration

* <https://www.youtube.com/watch?v=iYM2zFP3Zn0>
* What is http?
  * hyper text transfer protocol
  * communication between web servers and clients
  * http requests / reponses
  * loading pages, form submit, ajax calls, etc.
* HTTP is stateless
  * every request is completely independent.
  * similar to transactions.
  * programming, local storage, cookies, sessions, are used to create enhanced user experiences.
* HTTPS
  * hyper text transfer protocol secure
  * data sent is encrypted.
  * ssl /tls
  * install certificate on web host.
* HTTP methods
  * GET - retrieves data from the server.
  * POST - submit data to the server.
  * PUT - update data already on the server.
  * DELETE - Deletes data from the server.
* HTTP header fields
  * General
    * Request URL
    * Request Method
    * Status Code
    * Remote Address
    * Referrer Policy
  * Response
    * Server
    * Set-Cookie
    * Content-Type
    * Content-Length
    * Date
  * Request
    * Cookies
    * Accept-xxx
    * Content-Type
    * Content-Length
    * Authorization
    * User-Agent
    * Referrer
* HTTP status codes
  * 1xx: Informational
    * Request received / processing.
  * 2xx: Success
    * Successfully received, understood and accepted.
  * 3xx: Redirect
    * Further action must be taken / redirect.
  * 4xx: Client Error
    * Request does not have what it needs.
  * 5xx: Server Error
    * Server failed to fulfill an apparent valid request.
  * Common
    * 200 - OK
    * 201 - OK created
    * 301 - Moved to new URL
    * 304 - Not modified (cached version)
    * 404 - Not found
    * 500 - server error
* HTTP/2
  * Major revision of HTTP
  * Under the hood changes
  * Respond with more data
  * Reduce latency by enabling full request and response multiplexing.
  * Fast, efficient, and secure