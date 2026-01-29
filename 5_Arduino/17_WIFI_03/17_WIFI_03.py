from flask import Flask, request, jsonify
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

@app.route("/data")
def data():
    print("🔥🔥🔥 ESP 요청 들어옴 🔥🔥🔥")
    print("ARGS =", dict(request.args))
    time.sleep(0.5)   # 일부러 느리게
    return jsonify(ok=True)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)