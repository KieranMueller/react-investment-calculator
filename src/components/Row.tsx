import { formatter } from "../util/investment";

export default function Row({rowData, totalInterest, investedCapital}: any) {
  return (
    <>
      <li className="row-cell">{rowData.year}</li>
      <li className="row-cell">{rowData.valueEndOfYear ? formatter.format(rowData.valueEndOfYear) : null}</li>
      <li className="row-cell">{rowData.interest ? formatter.format(rowData.interest) : null}</li>
      <li className="row-cell">{totalInterest ? formatter.format(totalInterest) : null}</li>
      <li className="row-cell">{investedCapital ? formatter.format(investedCapital) : null}</li>
    </>
  );
}
