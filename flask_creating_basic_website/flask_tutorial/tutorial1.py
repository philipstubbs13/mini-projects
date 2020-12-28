from flask import Flask, redirect, url_for, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
  return render_template("index.html")

@app.route("/login", methods=["POST", "GET"])
def login():
  if request.method == "POST":
    user = request.form["nm"]
    return redirect(url_for("user", usr=user))
  else:
    return render_template("login.html")

@app.route("/<usr>")
def user(usr):
  return f"<h1>{usr}</h1>"

@app.route("/test")
def test():
  return render_template("new.html")

# @app.route("/<name>")
# def user(name):
#   return f"Hello {name}!"

# @app.route("/admin/")
# def admin():
#   return redirect(url_for("user", name="Admin!"))

if __name__ == "__main__":
  app.run(debug=True)