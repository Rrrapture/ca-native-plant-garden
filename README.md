Rachelle's California Native Plants app/api

npm install

http://12factor.net/


ideating 2016-04-07

There are good mysql drivers for node 

Good npm crud modules available for models,
abstraction of database (like ORM for node)

node - database migrations

MVP is SQL dumps / CSV - depends on source


My question was how do i get all the data for the app?
It's spread amongst multiple organizations, websites, APIs, databases
 - Jepson Manual project with UC Davis
   -- API ?
 - Theodore Payne Foundation
   -- wiki (one database) - could I access this?
   -- nursery inventory (another database) 
   -- cludgy online store - seeds, books, misc only not plants
 - Calflora
   -- native app
   -- ?
   http://www.cnplx.info/
   http://www.calflora.org/goalsAndAchievements.html#section4
 - Nicholas Hummingbird's Instagram feed
 - Instagram in general - what's the scraping / API policy?
 - Las Pilitas
    -- website
    -- API or database available?
    http://www.mynativeplants.com/
 - Books, authors...:0 it goes on....

What's the MVP - my purpose?
 - share with neighbors or friends
 - have dynamic reference for myself (like bookmarking? sharing?)
 - have photos, guides, plant information, in one place
 - relevent to California > Southern California > Los Angeles County > San Fernando Valley > 91406 (later will change or will need another dataset)
 - know what's in stock locally, or quickly call or email them
 - group plants you want to target together or have a project/share
 - be able to export/share information
   - spreadsheet, PDF? phone card like contacts or zip? print it.
     -- could also just be visible on a web page MVP - you can make pdf or copy all from there


Tech stack of the app
 - web, phone first
 - front end: React
 - Router, Controller - probably Redux
 
 - Node server
 - locally first, then aws? Heroku?
 - MySQL
 
 - Gulp if i decide to use task runner
 - stylus easy
 - bootstrap or forms template

 - host on github


If there's an api that's really good, just connect to that one MVP


Greater complexity if i'm gathering it from other places

Public data sources make information available in different ways

- they may only provide you with csv downloads

- or you can make a curl request and pipe it into a json file 

- then there are APIs: 
  -- paginated apis (think tumblr notes, limited to 50) where you can only grab the first 10 at a time.



figure out how each one 


depends on if I want to connect to it all at once,
or at different times in the application;

another option is to gather all the information from different sources,
and merge it together into my own dataset.


put it on github - node on mysql 

gulp


*********

MVP
neighbors first - Lake Balboa/Van Nuys area.


no need to login or sign up if you just want to do temporary query and list of plants
should I just make for los angeles? :-|
categories:
edible
shade
sun
cross referenced with companion plants

photos, something like drag  & drop landscape/space planner (not mvp:))

save, print, share a list of plants you will plant
list should have photo, description, where to plant, where to buy
mobile first (duh)

apis:

theodore payne (scraping?)
las pilitas (good example but mobile sucks and can't save)


connect to landscapers, vendors who can provide plants? 
ew don't want to do that ground work really

connect to physical retailer or online store to buy
(scrape or use api)

