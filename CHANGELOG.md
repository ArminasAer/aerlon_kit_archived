# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.7] - 2023-06-23

#### Fixed

- navbar height and color

## [0.5.6] - 2023-06-23

#### Changed

- not in love with the light theme, removing theme toggles for now

## [0.5.5] - 2023-06-22

#### Fixed

- added z-indexs to navigation and wip bar to make sure the collapse button is not stack on top

## [0.5.4] - 2023-06-22

#### Added

- testing out a collapsable div for featured posts

#### Changed

- upgraded to svelte 4
- main theme color changed to a red; not sure if it will stay

## [0.5.3] - 2023-06-19

#### Fixed

- adjusted version bar and navigation bar to 'sticky' correctly on scroll

#### Added

- drop shadow on navigation bar to improve light theme look

## [0.5.2] - 2023-06-18

#### Fixed

- add more manual height to expanded navbar link to account for version bar

## [0.5.1] - 2023-06-18

#### Fixed

- moved navigation layout to top level layout and removed `()` top level route group, which hopefully fixed old components not removing on client side changes

## [0.5.0] - 2023-06-17

#### Changed

- site theme and name are inline now (Aerlon)
- adjused home page (station) to use its own layout
  - very much a WIP, goal is to make it look like the site is in the air at an airship station

#### Added

- top development versioning bar
  - this will be removed when the core website is around version 1.0

## [0.4.8] - 2023-06-14

#### Changed

- adjusted the home page for now

## [0.4.7] - 2023-06-14

#### Fixed

- added onMount delay to theme toggle to prevent flashing and css animation on reload

#### Removed

- took down wip message

## [0.4.6] - 2023-06-13

#### Fixed

- removed bad css transition on navbar

## [0.4.5] - 2023-06-13

#### Changed

- markdown in again handled as local files and prerendered by the server before deployment
- some small css clean up

#### Added

- unstyled readme content based on the repos readme.md file
  - needs styling

## [0.4.4] - 2023-06-12

#### Changed

- moving back to prerendering html and turning off ISR
  - will also move back to parsing local markdown file and remove calls to cockroachdb for now

## [0.4.3] - 2023-06-10

#### Added

- trying Vercel ISR

## [0.4.2] - 2023-06-10

#### Changed

- `/` page code snippet is now centered

#### Fixed

- font name didn't change from last commit, fixed now

## [0.4.1] - 2023-06-10

#### Fixed

- blog index is now sorting posts by date and then alphabetically

#### Changed

- cleaned up some of the code base
  - removed folders and files from the local file parsing

## [0.4.0] - 2023-06-10

#### Changed

- reconfigured to use prisma instead of local files
- now deploying on Vercel

## [0.3.2] - 2023-06-08

#### Changed

- more navbar work
  - fixed up the icons
  - code base is probably stable on the navbar for now
  - will need to clean it up still

## [0.3.1] - 2023-06-08

#### Changed

- more work on the navbar [WIP]
  - placeholder icons
  - missing some width calculations
  - css class names need to be cleaned up
  - the navbar is complex and takes time to get right

## [0.3.0] - 2023-06-07

#### Changed

- main theme coloring to orange
- a lot more work on the navigation bar
  - still a massive WIP, technically broken right now

## [0.2.5] - 2023-05-25

#### Changed

- working through cleaning up the current code base, so lots of micro changes for now

## [0.2.4] - 2023-05-21

#### Added

- custom cadcadia mono font added for code snippets

#### Changed

- more adjustments on the navbar
- added code snippet to the home page

## [0.2.4] - 2023-05-20

#### Added

- loading custom font now

#### Changed

- more adjustments to the navbar
  - the whole nav/side bar need to be rewritten still

#### Removed

- custom color stlying, may bring it back but sleeker

## [0.2.3] - 2023-05-20

#### Added

- new `/` path

#### Changed

- adjusted blog index to route `/blog`
- more navbar adjustments, more to come

## [0.2.2] - 2023-05-19

#### Changed

- Made the navabr links all hide at certain width

## [0.2.1] - 2023-05-19

#### Changed

- Added one second delay on transition effect so it doesn't trigger on quick page routing

## [0.2.0] - 2023-05-18

- Prerender HTML dev 1

## [0.1.0] - 2023-05-12

- Init Commit
