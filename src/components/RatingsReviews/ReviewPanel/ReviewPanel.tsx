import { useState } from "react";
import { Review } from "./Review";
import './styles/ReviewPanel.scss'
import { Select } from '@mantine/core';
import { FiChevronDown } from 'react-icons/fi'

export const ReviewPanel = () => {
  const [sort, setSort] = useState('relevance');

  const handleSelect = (e : string)  => {
    setSort(e)
  }
  return (
    <ol className="review-list">
      <span className="reviewPanel-description">248 reviews, sorted by&nbsp;
      {<Select
      size="sm"
      value={sort}
      onChange={handleSelect}
      rightSection={<FiChevronDown size="16px"/>}
      rightSectionWidth={60}
      style={{width: '100px', display: 'inline-block', textDecoration: 'underline'}}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      variant="unstyled"
      maxDropdownHeight={280}
      data={['helpful', 'newest', 'relevance']}/>}
      </span>
      <li className="first-bullet"><Review/></li>
      <li><Review/></li>
      <li><Review/></li>
    </ol>
  );
}



