# Frog React Gallery

## How to use this project

1. Clone this repo
```
git clone git@github.com:ThomasDHolt/FrogReactGallery.git
```
2. Enter the client folder
```
cd FrogReactGallery

cd client
```
3. Install NPM packages
```
npm i
```

## How to run this project

1. Enter the client folder
```
cd FrogReactGallery

cd client
```
2. Run the Dev script
```
npm run dev
```

## What requirements did I achieve?

- I implemented useState multiple times throughout my React components, observing multiple states such as the selected image url.
- I implemented useEffect when fetching data from the frog API, this is to ensure that we are not fetching every time the component re-renders.
- I split my JSX code up into multiple React components, creating a codebase which is readable and maintainable.
- I used map() when rendering the image thumbnails to handle each image individually, allowing me to pass individual image data to a thumbnail component.
- I implemented an anchor tag for the thumbnails which displays each selected image individually, updating a main image url state and re-rendering the main image canvas.
- Each image has alt text that is fetched from the frog API.
- Thumbnails can be navigated with TAB and selected with ENTER.
- The styling for the page is fairly minimal, however I took care to ensure that there is contrast when hovering over a thumbnail. Furthermore, I also used Tailwind's dark attribute to define a colour scheme for when the user's browser is set for darkmode.

## Were there any requirements or goals that I was unable to achieve?
- Implementing Unsplash API into the application would have required me to develop a Back-End for the application, since .env can't be read client-side, and I ran out of time to do so, therefore implementing Unsplash would have to be a future goal.
- Since I stuck with the frog API, it didn't make sense to implement a search bar since the sample size is so small that any positive impact would be negligible.
- API keys aren't necessary since frog API doesn't require any API keys.

## Extra Reflection
- Going from vanilla HTML, CSS to React and Tailwind was quite a big step and getting used to how these two frameworks work was challenging at times, especially alt-tabbing back and forth between the Tailwind documentation. I think though the more I practice, the better I will get with these frameworks.
- After the momumental project I was a part of in week 5, going to a simple gallery meant this week's assignment wasn't quite as interesting as I would have liked. I will definitely practice in my own time creating a fully fledged website so I can stretch my legs a bit more with these new frameworks.
