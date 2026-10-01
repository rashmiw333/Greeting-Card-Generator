import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState("");

  const generateGreeting = () => {
    if (name === "" || occasion === "") {
      setError("Please enter your name and select an occasion.");
      setGreeting("");
      return;
    }

    setError("");

    setGreeting(`Happy ${occasion} ${name}`);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">
            <div className="card-body p-4">

              <h1 className="text-center mb-2">
                Greeting Card Generator
              </h1>

              <p className="text-center text-muted mb-4">
                Create a personalized greeting
              </p>

              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Name</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              {/* Occasion */}
              <div className="mb-3">
                <label className="form-label">Occasion</label>

                <select
                  className="form-select"
                  value={occasion}
                  onChange={(event) => setOccasion(event.target.value)}
                >
                  <option value="">Select occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="New Year">New Year</option>
                </select>
              </div>

              {/* Error */}
              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              {/* Button */}
              <button
                className="btn btn-primary w-100"
                onClick={generateGreeting}
              >
                Generate Greeting
              </button>

              {/* Greeting */}
              {greeting && (
                <div className="alert alert-success text-center mt-4">
                  <h4 className="mb-0">{greeting}</h4>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;