import { useState, useRef } from "react";
export default function SubscriptionDashboard() {
  const [tab, setTab] = useState("overview");
  const [currentPlan, setCurrentPlan] = useState("Fibernet Pro");
  const overviewRef = useRef(null);
  const [modal, setModal] = useState(null);

  return (
  <div className="p-6" style={{ background: '#e6e6fa', minHeight: '180vh' }}>
      <h1 className="text-3xl font-bold text-purple-600 mb-2">
        Subscription Dashboard
      </h1>
      <p className="text-gray-600 mb-4">
        Welcome back, Karthini Muntha. Manage your broadband subscription.
      </p>

      {/* Tabs Navigation */}
      <div className="dashboard-nav">
        <button
          className={`dashboard-nav-btn${tab === "overview" ? " active" : ""}`}
          onClick={() => setTab("overview")}
        >
          Overview
        </button>
        <button
          className={`dashboard-nav-btn${tab === "plans" ? " active" : ""}`}
          onClick={() => setTab("plans")}
        >
          Plans
        </button>
        <button
          className={`dashboard-nav-btn${tab === "billing" ? " active" : ""}`}
          onClick={() => setTab("billing")}
        >
          Billing
        </button>
      </div>

      {/* Overview Section */}
      {tab === "overview" && (
        <div className="dashboard-section" ref={overviewRef}>
          {/* Main Overview Card */}
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Current Plan</h2>
              <span className="bg-purple-700 px-3 py-1 rounded-full text-sm">
                Active
              </span>
            </div>
            <p className="text-lg mt-2">{currentPlan}</p>
            <p className="text-sm">100 Mbps • $49.99/month</p>

            {/* Progress Bar */}
            <div className="w-full bg-purple-300 h-3 rounded-full my-4">
              <div
                className="bg-purple-700 h-3 rounded-full"
                style={{ width: "68%" }}
              ></div>
            </div>
            <div className="flex items-center justify-between mt-2 mb-2" style={{fontWeight: 'bold'}}>
              <span className="text-primary-dark">342GB</span>
              <span className="mx-2 text-muted">/</span>
              <span className="text-primary">500GB</span>
            </div>

            {/* Usage Graph */}
            <div className="my-6 flex justify-center">
              <img
                src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Jan','Feb','Mar','Apr','May'],datasets:[{label:'Usage',data:[320,400,350,420,342]}]}}"
                alt="Data Usage Graph"
                style={{ maxWidth: '400px', width: '100%', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(80,80,120,0.10)' }}
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4">
              <p>Next renewal: 32 days</p>
              <div className="flex gap-2 flex-wrap">
                <button className="btn bg-success" style={{padding: '0.6rem 1.2rem'}} onClick={() => setModal('upgrade')}>Upgrade</button>
                <button className="btn bg-primary-dark" style={{padding: '0.6rem 1.2rem'}} onClick={() => setModal('downgrade')}>Downgrade</button>
      {/* Modal for Upgrade/Downgrade Info */}
      {modal && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{background: '#fff', borderRadius: '1rem', padding: '2rem', maxWidth: 400, width: '90%', boxShadow: '0 4px 24px rgba(80,80,120,0.18)'}}>
            <h2 style={{marginBottom: '1rem', color: '#9333ea'}}>
              {modal === 'upgrade' ? 'What is Upgrade?' : 'What is Downgrade?'}
            </h2>
            <p style={{marginBottom: '1.5rem', color: '#232946'}}>
              {modal === 'upgrade'
                ? 'Upgrade allows you to move to a higher plan with more speed, data, or features. You may pay a higher price for better service.'
                : 'Downgrade lets you switch to a lower plan with fewer features or lower cost. This can help you save money if you do not need premium features.'}
            </p>
            <button className="btn bg-primary" style={{padding: '0.5rem 1.5rem'}} onClick={() => setModal(null)}>Close</button>
          </div>
        </div>
      )}
                <button className="btn bg-accent" style={{padding: '0.6rem 1.2rem'}} onClick={() => alert('Subscribe option selected!')}>Subscribe</button>
                <button className="btn bg-danger" style={{padding: '0.6rem 1.2rem'}} onClick={() => alert('Cancel option selected!')}>Cancel</button>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="rounded-xl p-4 shadow text-center" style={{ background: '#d1fae5' }}>
                <p className="text-green-600 text-xl font-bold">
                  <span role="img" aria-label="money">💰</span> $12.00
                </p>
                <p>Monthly Savings</p>
              </div>
              <div className="rounded-xl p-4 shadow text-center" style={{ background: '#d1fae5' }}>
                <p className="text-orange-500 text-xl font-bold">
                  <span role="img" aria-label="calendar">📅</span> 32
                </p>
                <p>Days Left</p>
              </div>
              <div className="rounded-xl p-4 shadow text-center" style={{ background: '#d1fae5' }}>
                <p className="text-green-600 text-xl font-bold">
                  <span role="img" aria-label="check">✔️</span> Active
                </p>
                <p>Plan Status</p>
              </div>
            </div>
        </div>
      )}

      {/* Plans Section */}
      {tab === "plans" && (
        <div className="dashboard-section">
          <h2 className="text-2xl font-bold mb-4">Choose Your Perfect Plan</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                name: "Broadband Copper Basic",
                price: "$29.99",
                speed: "25 Mbps • 200GB",
                features: ["Basic Speed", "Email Support", "Standard Security"],
              },
              {
                name: "Fibernet Pro",
                price: "$49.99",
                speed: "100 Mbps • 500GB",
                features: [
                  "High Speed",
                  "Priority Support",
                  "Enhanced Security",
                  "No Throttling",
                ],
                popular: true,
              },
              {
                name: "Fibernet Ultra",
                price: "$79.99",
                speed: "200 Mbps • 1000GB",
                features: [
                  "Ultra Speed",
                  "24/7 Support",
                  "Advanced Security",
                  "SLA Guarantee",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl shadow ${plan.name === currentPlan ? "border-2 border-green-400" : ""}`}
                style={{ background: '#d1fae5' }}
              >
                {plan.popular && (
                  <p className="text-purple-600 font-bold text-sm mb-2">
                    Most Popular
                  </p>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-lg text-gray-700">{plan.price}</p>
                <p className="text-sm text-gray-500">{plan.speed}</p>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
                <button
                  className={`mt-4 w-full btn ${plan.name === currentPlan ? 'bg-success border-success' : 'bg-danger'}`}
                  style={{ fontSize: '1em', padding: '0.7rem 0' }}
                  onClick={() => {
                    setCurrentPlan(plan.name);
                    setTab('overview');
                    setTimeout(() => {
                      if (overviewRef.current) {
                        overviewRef.current.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  {plan.name === currentPlan ? "Current Plan" : "Select Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Billing Section */}
      {tab === "billing" && (
        <div className="dashboard-section">
          <h2 className="text-2xl font-bold mb-4">Billing History</h2>
          <div className="space-y-4">
            {[
              { name: "Fibernet Pro", date: "2025-09-15", amount: "$49.99" },
              { name: "Fibernet Pro", date: "2025-08-15", amount: "$49.99" },
              { name: "Broadband Copper", date: "2025-07-15", amount: "$39.99" },
            ].map((bill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl shadow flex justify-between items-center"
                style={{ background: '#d1fae5' }}
              >
                <div>
                  <p className="font-bold">{bill.name}</p>
                  <p className="text-gray-500 text-sm">{bill.date}</p>
                </div>
                <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full">
                  {bill.amount} paid
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
