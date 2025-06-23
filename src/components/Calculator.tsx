export default function Calculator({ updateInvestmentData, calcFields }: any) {
  return (
    <div className="calc">
      {calcFields.map(({ label, name }: {label: string, name: string}) => (
        <div className="box">
          <label htmlFor={label}>{name}</label>
          <input id={label} type="number" onChange={updateInvestmentData} />
        </div>
      ))}
    </div>
  );
}
