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
  const [isValidInput, setIsValidInput] = useState<boolean>(true);
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
    setIsValidInput(true);
    const inputId = event.target.id;
    const value: number = event.target.valueAsNumber;

    const newInvestmentData: any = {
      ...investmentData,
      [inputId as keyof InvestmentData]: value,
    };

    if (inputId === 'duration' && value < 0) {
      setIsValidInput(false);
      return;
    }

    setInvestmentData(newInvestmentData);
    setResultsData(calculateInvestmentResults(newInvestmentData));
  }

  return (
    <div className="container">
      <Header />
      <Calculator
        updateInvestmentData={updateInvestmentData}
        calcFields={calcFields}
      />
      {isValidInput ?
        <Table
          resultsData={resultsData}
          initialInvestment={investmentData?.initialInvestment}
        /> : <p>Please enter valid duration</p>
      }
    </div>
  );
}

export default App;
