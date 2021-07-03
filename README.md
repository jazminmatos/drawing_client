# Drawing App: drawing_client

This drawing web application allows you to pull up a reference image and draw. You can then save that drawing after submitting a username. Upon saving an image, it creates a button that allows you to see the drawing that you created.

# Installation Instructions

Clone the following repos and follow instructions:

- Backend: [drawing_api](https://github.com/jazminmatos/drawing_api)
  - Run bundle install
  - Start the PG database server: /usr/local/opt/postgresql/bin/pg_ctl -D /usr/local/var/postgres -l logfile start
  - Run rails db:create
  - Run rails db:migrate
  - Run rails s to start the Rails server
  - PostgreSQL troubleshooting:
    - Stop the PG database server: pg_ctl stop -D /usr/local/var/postgres -m fast
    - See all the servers that are running: ps -ef | grep postgres
    - Kill servers: brew services stop postgres
- Additional JSON file: [images-db](https://github.com/jazminmatos/images-db)
  - Start the json server: json-server --watch images.json --port 8000
- Frontend: [drawing_client](https://github.com/jazminmatos/drawing_client)
  - Open index.html

# Contributer's Guide

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# License

This is available as open source under the terms of the [MIT License](https://choosealicense.com/licenses/mit/).
