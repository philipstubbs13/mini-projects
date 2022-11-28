# Docker Crash Course

- <https://www.youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7>

* What is Docker?

  - Containers
    - Node app
    - React app
    - Mongo db

* Containers vs VMs

  - Virtual Machines
    - has it's own full operating system and typically slower.
  - Containers
    - share the host's operating system and typically quicker.

* Docker Images

  - Like blueprints for containers
    - Runtime environment
    - Application code
    - Any dependencies
    - Extra configuration (e.g. env variables)
    - Commands

* Containers

  - Running instance of an image
  - Runs our application.
  - Isolated process

* Docker images
  - Images are made up from several "layers"
  * Parent image:
    - includes the OS and sometimes the runtime environment.
  * dependencies
  * source code
  * <https://hub.docker.com/>
