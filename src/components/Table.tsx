import Row from './Row';

export default function Table({ resultsData, initialInvestment }: any) {
  console.log(resultsData);
  let totalInterest = 0;
  let investedCapital = initialInvestment;

  return (
    <div className="table">
      <li className='bold'>Year</li>
      <li className='bold'>Investment Value</li>
      <li className='bold'>Interest (Year)</li>
      <li className='bold'>Total Interest</li>
      <li className='bold'>Invested Capital</li>
      {resultsData.map((result: any) => {
        totalInterest += result.interest;
        investedCapital += result.annualInvestment;
        if (result && result.year && totalInterest && investedCapital)
          return (
            <Row
              key={result.year}
              rowData={result}
              totalInterest={totalInterest}
              investedCapital={investedCapital}
            />
          );
      })}
    </div>
  );
}
