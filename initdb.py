from safe-chamber-92764.app import db
db.create_all()

export FLASK_ENV=development
flask run
