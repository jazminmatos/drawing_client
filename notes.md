### Flow of User Submission:

- index.js:
  - new instance of UserService (i.e. URL) is created
  - user clicks submit
  - Call .getUser() on UserService instance
- userservice.js:
  - .getUser() runs a fetch GET request to retrieve usernames from backend
    - JSON is parsed
      - iterate through JSON object trying to find (or filter if can't do unique usernames?) username === value of input field (id="username-input")
      - create a user instance using the newly parsed JSON data
- user.js:
  - handles the creation of the user instance
- userservice.js: \* append the instance onto the DOM using the putOnDom() instance method
- user.js:
  - handles putOnDOM() instance method
    - uses userHTML() instance method to format the HTML and append it to the DOM
