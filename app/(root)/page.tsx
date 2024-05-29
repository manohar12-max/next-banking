import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Manohar",
    lastName: "Dhumal",
    email: "dhumal@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstname || "Guest"}
            subtext="Access and manage account"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={16920.3}
          />
        </header>
      </div>
      <RightSidebar user={loggedIn} transactions={[]}
       banks={[{currentBalance:123.40}, {currentBalance:450.40}]} />
    </section>
  );
};

export default Home;
