import { Link } from "react-router-dom";
export const Homepage = () => {

    return (
      <div
        style={{
          backgroundColor: "#800080",
          color: "white",
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <header>
          <h1>Smart Insole Analytics</h1>
        </header>
        <p>Welcome! Please select whether you would like to stream your data in realtime or upload via MicroSD card.</p>
        <div style={{ marginTop: "20px" }}>
        <Link to="/bluetooth">
          <button style={{ marginRight: "10px" }}>Realtime</button>
        </Link>
        <Link to="/fileupload">
          <button>Upload</button>
        </Link>

      </div>
      </div>
    );
  };
  
