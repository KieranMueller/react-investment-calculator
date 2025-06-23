import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Table from './components/Table';
import type { InvestmentData } from './types';
import { calculateInvestmentResults } from './util/investment';
import Header from './components/Header';

function App() {
  const [investmentData, setInvestmentData] = useState<InvestmentData>();
  const [resultsData, setResultsData] = useState<any>([]);
  const calcFields = [
    {
      name: 'Initial Investment',
      label: 'initialInvestment',
    },
    {
      name: 'Annual Investment',
      label: 'annualInvestment',
    },
    {
      name: 'Expected Return',
      label: 'expectedReturn',
    },
    {
      name: 'Duration',
      label: 'duration',
    },
  ];

  function updateInvestmentData(event: React.ChangeEvent<HTMLInputElement>) {
    const newInvestmentData: any = {
      ...investmentData,
      [event.target.id as keyof InvestmentData]: event.target.valueAsNumber,
    };

    setInvestmentData(newInvestmentData);
    setResultsData(calculateInvestmentResults(newInvestmentData));
  }

  return (
    <div className="container">
      <Header />
      <Calculator updateInvestmentData={updateInvestmentData} calcFields={calcFields} />
      <Table
        resultsData={resultsData}
        initialInvestment={investmentData?.initialInvestment}
      />
    </div>
  );
}

export default App;
