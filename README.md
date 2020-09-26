# BasakBeykoz
The development repo for the small business project:
Branding, Marketing and Website prepared for life coach Basak Beykoz.

### The intermediary production repo
You can see corresponding intermediary production repo at [basakbeykoz_p](https://github.com/utkusarioglu/basakbeykoz_p).


### Stack and Structure
This script works with docker and is intended to run on a single VM on GCP.
It is intended that when the development is finalized, the production code will 
be stripped of its containers and other tools that would be overkill for a small 
wordpress project.

The project uses WordPress and its usual stack for backend. React, Redux and Typescript for its frontend.

## Contents

### Documents

The repo contains some of the documents that are created in order to plan and
execute the project. You can find these in `./docs`

### Theme

The repo contains the BasakBeykoz WordPress theme. The theme lies in: `./themes/basakbeykoz`
During development, it is advised that the developer access the theme 
using the bash command `code t*/*/re*` for Visual Studio Code.
This scoping allows a mental separation with the react-focused theme files and
the rest of the repo.

## Usage

### Initialization

The file `./docker-compose_init.sh` will initialize the project by syncing the 
backups, building the containers and loading the latest database image.

### Regular usage

`./docker-compose_up.sh` is intended to be used for starting up the project.
This script inteds to make it easier to start containers and CRA scripts with
one command.

### Building docker image

`./docker_build.sh` is intended to create production build for the react app and
then place this into the docker build. The docker file will be tagged as:
`utkusarioglu/basakbeykoz:<year><month><day>`.
This script does not push the image to docker hub.

### Syncing with intermediary production

`./scripts/dev/sync_with_production.sh` is intended to sync the dev code with 
intermediary production. This script is called by `./docker-compose_init.sh.`

