import { DescriptionFooterProps } from "./types/InformationPanel.types"
import './DescriptionFooter.scss';


export const DescriptionFooter = ({slogan, description}: DescriptionFooterProps) => {
  return (
    <div className="description-footer">
      {slogan ? <h2>{slogan}</h2> : ''}
      {description ? <p>{description}</p>:''}
    </div>
  )
}





