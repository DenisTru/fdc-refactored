import { Review } from "./Review";
import './styles/ReviewPanel.scss'
import { Select } from '@mantine/core';
import { FiChevronDown } from 'react-icons/fi'

export const ReviewPanel = () => {
  return (
    <ol className="review-list">
      <span className="reviewPanel-description">248 reviews, sorted by&nbsp;
      {<Select
      size="sm"
      placeholder="default val"
      rightSection={<FiChevronDown size="16px"/>}
      rightSectionWidth={70}
      style={{width: '100px', display: 'inline-block', textDecoration: 'underline'}}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      variant="unstyled"
      maxDropdownHeight={280}
      data={['helpful', 'newest', 'relevant']}/>}
      </span>
      <li className="first-bullet"><Review/></li>
      <li><Review/></li>
      <li><Review/></li>
    </ol>
  );
}



