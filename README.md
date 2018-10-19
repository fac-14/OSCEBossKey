# O S C E B O S S K E Y

[![Build Status](https://travis-ci.org/fac-14/OSCEBossKey.svg?branch=master)](https://travis-ci.org/fac-14/OSCEBossKey) [![codecov](https://codecov.io/gh/fac-14/OSCEBossKey/branch/master/graph/badge.svg)](https://codecov.io/gh/fac-14/OSCEBossKey)

:sparkles: **[VIEW THE APP](https://oscebosskey.herokuapp.com/)** :sparkles:

## Doctor doctor, I think I'm a bell?

:ambulance: Let's see if we can't give this a ring, then.

We wanted to make an **OSCE revision app** using the [JAMstack](https://jamstack.org/)...

... that's **responsive**, **mobile first** and features **swipe functionality**\
... that's rendered in **React** on the client side\
... that's styled with **SASS** and **styled-components**\
... that uses an **Express proxy server** to route our **Airtable** requests and hide our precious API key\
... that we can deploy on **Heroku**\
... with unit and integration tests with **Jest** & **React Testing Library**

## Wait, what's an OSCE?

"An objective structured clinical examination (OSCE) is a modern type of examination often used in health sciences," says Wikipedia. It is a hands-on, real-world test that, in short, has actors roleplay a medical condition while a medical student looks to diagnose. Pretty cool!

## Our Tech Stack

:love_letter: React (with React Router, HammerJS and Styled Components)\
:information_desk_person: Express\
:gift: Parcel\
:heart_eyes_cat: Babel\
:books: Airtable\
:relieved: Jest, React Testing Library, Supertest and Codecov\
:bulb: ESLint / Prettier\
:family: Eve, Martin, Monika & Nathalie

## How do I run this code locally?

**Prerequisites:** Node.js, NPM and no allergies to terminals.

```bash
$ git clone https://github.com/fac-14/OSCEBossKey.git
$ cd OSCEBossKey
$ npm i # this will likely take a couple of minutes
$ echo "AIRTABLE_API_KEY=the_actual_key_here" >> .env
$ npm test # this will make sure you're all setup and good to go
$ npm run
```

Then point your browser to `localhost:3333` (or the port the server says in your terminal) and you're golden :+1:

## Functionality

The app is divided into four main sections, with our work in this sprint being on creating a full user journey across the **History** section. Here's what they do:

1. **History: A journey where an actor assumes the role of a patient with a medical history - such as a 52-year-old heavy smoker with chest pain.** _(Our focus for this sprint!)_
2. **Examinations**: A medical student would follow a procedure without the associated history, such as investigating a hip or ankle.
3. **Extras**: Additional information and reference about common procedures, such as inhaler technique.
4. **Stats**: Data visualisations of user journey over time, ultimately to show students which areas they are doing well in and areas that need more attention.

Our _History_ section allows users to either study from a pre-created list, or add (and then revise) their own cases to the list. Swipeable screens allow the actor taking on the role of the patient to understand their medical history while the medical student diagnoses, as well as easily check off the things they observe the medical student doing.

All in all, much easier than lugging around a backpack of heavy textbooks!

## Some of the nicest bits

- **Resuable Components**: We are obsessed by code drier than Jacob's Cream Crackers, so being able to re-use as much as possible - such as in our [api calls](https://github.com/fac-14/OSCEBossKey/blob/2184ff3510355e5429940e707b44a5ac32f85ee9/src/app.js#L29-L41) and [category listing component](https://github.com/fac-14/OSCEBossKey/blob/2184ff3510355e5429940e707b44a5ac32f85ee9/src/components/CategoryListing.js#L76-L85) - gives us major warm fuzzies.
- **Pure Utility Functions**: We :heart: React, but we also like keeping our functions pure - so we created our [utility functions as testable pure functions](https://github.com/fac-14/OSCEBossKey/tree/master/src/utils) and then imported them into React as necessary.
- **TDD API calls**: We built our [API responses up with pure TDD](https://github.com/fac-14/OSCEBossKey/blob/master/__test__/app.test.js), which was totally :ok_hand: because they're rock-solid and we can trust they work.
- **Swipe Right (& Left)**: Our user journeys are mobile-focused, where swipe actions are a normal user behaviour. But browsers still have a bit of a tricky time making them work. We researched a _lot_ of ways around this, and ended up using HammerJS because it had a small footprint, [easy implementation](https://github.com/fac-14/OSCEBossKey/blob/2184ff3510355e5429940e707b44a5ac32f85ee9/src/components/Pages/Revision/RevisionContainer.js#L61-L73) and the functionality we needed.

## Prototyping

As we were a pair-programming duo & a keen PO, we definitely took time to **prototype** everything out in Figma to make sure we were aligned and we could focus on implementing the code in a clean, efficient way - because it would be a little frustrating to realise you need to make an all-important button from scratch because you forgot to plan for it :scream:

Our Figma prototypes served us really well in testing our user journey until we were at a stage where our app got to the point it was able to be demonstrated. Here's how it looked:

![Our prototyping in action...](https://i.imgur.com/YGTdLUM.png)

## And the next sprint...

We are **super proud** of the work we managed to do in a single sprint, but there's obviously loads of stuff we weren't able to include. We think we've got a totally kickass MVP but if we had more time we'd look at:

1. Coding out the Examinations and Extras sections - we have basic support in now, but this could be expanded on for sure
2. More tests! Test ALL THE THINGS! We think we've done a good job here but we're always striving for the best.
3. Creating a robust authentication system (this is an entire sprint of its own)
4. With proper user support, we'd love to make a really awesome statistics page - detailing things like average score and most missed marks
5. Transform our potent webapp into a React Native delight
