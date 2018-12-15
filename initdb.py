from gw-bellybutton.app import db
db.create_all()

export FLASK_ENV=development
flask run
