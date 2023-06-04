import PropTypes from 'prop-types';

import {
  Table,
  TableHeader,
  HeaderRow,
  HeaderItem,
  TableItem,
} from './Transactions.styled';

const TransactionHistory = props => {
  const TransactionsArray = props.items;
  return (
    <Table>
      <TableHeader>
        <HeaderRow>
          <HeaderItem>Type</HeaderItem>
          <HeaderItem>Amount</HeaderItem>
          <HeaderItem>Currency</HeaderItem>
        </HeaderRow>
      </TableHeader>

      <tbody>
        {TransactionsArray.map(({ id, type, amount, currency }, idx) => {
          return (
            <tr
              key={id}
              style={{ backgroundColor: idx % 2 === 0 ? 'LightCyan' : 'white' }}
            >
              <TableItem>{type}</TableItem>
              <TableItem>{amount}</TableItem>
              <TableItem>{currency}</TableItem>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
