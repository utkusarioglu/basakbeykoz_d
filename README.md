# BasakBeykoz

The repo for the small business project: Branding, Marketing and Website
prepared for life coach Basak Beykoz.

### Stack and Structure

This script works with docker and is intended to run on a single VM on GCP. It
is intended that when the development is finalized, the production code will be
stripped of its containers and other tools that would be overkill for a small
WordPress project.

The project uses WordPress and its usual stack for backend. React, Redux and
Typescript for its frontend.

## Contents

### Documents

The repo contains some of the documents that are created in order to plan and
execute the project. You can find these in `./docs`

### Theme

The repo contains the BasakBeykoz WordPress theme. The theme lies in:
`./themes/basakbeykoz`. During development, it is advised that the developer
access the theme using the bash command `code t*/*/re*` for Visual Studio Code.
This scoping allows a mental separation with the react-focused theme files and
the rest of the repo.

### Architecture

The architecture is inspired by [7-1](https://sass-guidelin.es/#architecture),
[atomic design](https://bradfrost.com/blog/post/atomic-web-design/) and the
general ideas that most react projects use.

There are 7 notable items in the theme src folder:

1. **Components**: React components
2. **Config**: Aggregates the config that the app uses
3. **Services**: Modules that are responsible for endpoints such as REST
4. **Static**: Static items that the code uses, such as fonts
5. **Store**: Redux store and related items such as types
6. **Styles**: Styles that don't directly relate to any specific component
7. **Index.tsx**: entrypoint

Some of these have some subsections that are described below:

#### _Components_

Components are divided into 4 types:

1. **Routes**: These are the components that are returned as the route. They can
   have styling. But they aren't connected to the store.
2. **Layout**: These create the main regions on the interface such as the header
   or the canvas where the wp renders are attached. They are expected to have
   styles and they aren't connected to the store.
3. **Features**: These are components that have connection to the store either
   through dispatching actions or receiving state info. They do not have styling
   nor do they output anything that is directly rendered on the screen. Features
   carry their own types in case they have any that is different from the store
   slices, and their own actions and reducers. There is no general reducers or
   actions folder in this project.
4. **Views**: These are either atomic or molecular components that the user
   interacts with. They get their store related objects from the features layer.

It's possible to omit the feature layer if the chain starting from route has no
relation with the state. However, every route is expected to have its own route
component,

#### _Config_

Config aggregates all the config information that the app has access to. While
some values are received from .env, there is a few that is received from
index.php through the window object.

In order to allow a symmetric interface for all these values, the config folder
was implemented in this project.

#### _Store_

In addition to the store, store folder also contains some types that are only
related to the store. Features house their types, reducers and logic in their
own folders.

#### _Styles_

Styles folder contains two different types of style modules:

1. Global styles such as variables, mixins, functions, typography and alike
2. Styles that belong to elements that belong to other vendors, such as
   scrollbar styling or WordPress.

WordPress styling is a big part of the styles folder. It was decided that
WordPress renders shall be treated as a separate concern, apart from the
Component that renders the WordPress content, Canvas.view.

## Usage

### Dev Initialization

The file `./dev_init.sh` will initialize the project by syncing the backups,
building the containers and loading the latest database image.

### Regular dev usage

`./dev_up.sh` is intended to be used for starting up the project. This script
inteds to make it easier to start containers and CRA scripts with one command.

### Local testing

`./test_up.sh` is intended for building the production build of the theme and
running it agains the exact structure with the production code, except for the
location of the wordpress uploads and the backups.

### Initializing production environment

`./prod_init.sh` script intends to prepare the production vm to run the
necessary containers with the relevant disk mounts and files. Later this could
be switched to a jenkins approach.

### Updating production code

`./prod_update.sh` script updates the aspects of production that are supplied as
params. The details on this feature can be read from the script file

## Backup management

As this is a small project, it was decided early on that the files uploaded by
the client during their content creation phase, will be backed up to this dev
repo. Considering the relatively small size of the actual content, this approach
seems to work for this project and will continue.
