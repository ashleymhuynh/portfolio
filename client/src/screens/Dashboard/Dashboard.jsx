import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import AllComments from "../../components/AllComments/AllComments";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className="Dashboard">
        <h1 className="header">Ashley's Dashboard! 🧚</h1>
        <div className="dashboard-container">
          <div className="new-project-container">
            <Link to={`/newproject`}>
              <button className="dashboard-new-project">
                New Project Form
              </button>
            </Link>
          </div>
          <div className="endorsement-approval">
            <h4>Endorsements That Needs Approval</h4>
            <div className="endorsements-container">
              <AllComments />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
