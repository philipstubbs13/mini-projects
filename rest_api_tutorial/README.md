# REST API Tutorial (Node, Express & Mongo)

* <https://www.youtube.com/playlist?list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8>

* What is a REST API?
  * API: application programming interface
  * REST: REpresentationl State Transfer
    * Architectual style of the web.
    * A standard / set of guidelines by which we can structure and create API's.
    * REST APIs have identifiable properties...
* REST Properties
  * They make use of resource-based URL's.
  * They make use of HTTP methods.
    * GET - used to retrieve data from the server.
    * POST - Used to send data to the server.
    * PUT - used to update data.
    * DELETE - used to delete data.
  * They make use of HTTP Status Codes
    * 200 means OK
    * 404 means resource not found.
    * 500 means server error.
* HTTP methods
  * A way of telling the server what type of request we are making...
  * GET - Reading/retrieving data.
  * POST - create new data and store it.
  * PUT - Update / edit existing data.
  * DELETE - Delete data from the db.
* API routes
  * Read/retrieve data
    * GET request to http://www.ninjago.com/api/ninjas
  * Create new data
    * POST request to http://www.ninjago.com/api/ninjas
  * Update existing data
    * PUT request to http://www.ninjago.com/api/ninjas/id
  * Delete data:
    * DELETE request to http://www.ninjago.com/api/ninjas/id