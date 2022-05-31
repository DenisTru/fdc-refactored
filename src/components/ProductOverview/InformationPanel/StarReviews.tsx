import React from "react"
import './styles/StarReviews.scss'
import { StarReviewsProps } from "../types/InformationPanel.types";


export const StarReviews = (props: StarReviewsProps) => {

  const styles = { "--rating": props.rating} as React.CSSProperties;

  return (
    <>
        <div className="Stars" style={styles} aria-label="Rating of this product is 2.3 out of 5."></div>
        <a className="reviews-link" href='/'>Read All Reviews</a>
    </>
  )
}