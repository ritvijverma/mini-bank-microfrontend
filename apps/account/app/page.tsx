"use client";

import { useEffect, useState } from "react";

type Account = {
  accountNumber: string;
  accountType: string;
  balance: number;
  status: string;
};

export default function Home() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const getAccounts = async () => {
      const response = await fetch("/api/accounts");
      const data = await response.json();

      setAccounts(data);
    };

    getAccounts();
  }, []);

  return (
    <main>
      <h1>Account Summary</h1>

      {accounts.map((account) => (
        <div key={account.accountNumber}>
          <p>Account: {account.accountNumber}</p>
          <p>Type: {account.accountType}</p>
          <p>Balance: ₹{account.balance}</p>
          <p>Status: {account.status}</p>
          <hr />
        </div>
      ))}
    </main>
  );
}