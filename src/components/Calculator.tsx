export default function Calculator({updateInvestmentData}: any) {
  return (
    <div className="calc">
      <div className="row">
        <div className="box">
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input id="initialInvestment" type="number" onChange={updateInvestmentData} />
        </div>
        <div className="box">
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input id="annualInvestment" type="number" onChange={updateInvestmentData}/>
        </div>
      </div>
      <div className="row">
        <div className="box">
          <label htmlFor="expectedReturn">Expected Return</label>
          <input id="expectedReturn" type="number" onChange={updateInvestmentData}/>
        </div>
        <div className="box">
          <label htmlFor="duration">Duration</label>
          <input id="duration" type="number" onChange={updateInvestmentData}/>
        </div>
      </div>
    </div>
  );
}
