import PropTypes from 'prop-types';

import { Section, Title, StateItem, StateList } from './Statistics.styled';
import{getRandomHexColor} from '../utils/getColors';

const Statistics = props => {
  const { title, stats } = props;

  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StateList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StateItem key={id} style={{backgroundColor:getRandomHexColor()}}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StateItem>
          );
        })}
      </StateList>
    </Section>
  );
};

Statistics.propTypes ={
  title:PropTypes.string,
  stats:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired
  }))
  ,
};

export default Statistics;
