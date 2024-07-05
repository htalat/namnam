# Namnam

This app is used for maintaining your book collection (the reason why is a no brainer for namnam)

## Getting Started

- Clone the repo `git clone https://github.com/htalat/namnam`
- Run the app locally `npm run dev`
- Lint: `npm run lint`

Ideally, each task should be it's own commit with no build or lint errors.

## Todo

- fix the title and the content on the tab header to whatever you like not this boilerplate stuff
- currently, something is broken. Clicking on a row should mark the book as read but it does not. Fix this bug! Clicking on a row should toggle the status.
- we need to clean up the code as well now. Everything seems to be one place. Move book related to its own place
- Hmmm, maybe clicking on a row is not the ideal way in terms of usability.
- Okay lets do some feature work now. Add a search bar at the top
  - it should start filtering after 3 charcters typed
- Add a summary to the top, like total books, how many read or a %

- it would be nice to consolidate the logic, Add a BookContextProvider.
- how about we actually save this data in localstorage and fetch from it when we load the page?

- namnam needs to add books daily. Add a way to add books
- maybe also add a delete functionality

- lets save the data to actual server
