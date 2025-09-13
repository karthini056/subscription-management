import React from "react";
import SubscriptionDashboard from "./SubscriptionDashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
       <div className="dashboard-images">
        <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=600&q=80" alt="Teamwork" title="Teamwork" />
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Online Payment" title="Online Payment" />
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Cloud Technology" title="Cloud Technology" />
      </div>
      <SubscriptionDashboard />
    </div>
  );
}

export default App;
