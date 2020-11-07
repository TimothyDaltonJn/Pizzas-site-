import styled from 'styled-components';
import FeaturePic from '../../images/featured4.jpg'

export const FeatureContainer = styled.div`
background: linear-gradient( to right, rgba(0, 0, 0, 1), 
rgba(0, 0, 0, 0.1)), url(${FeaturePic});
height: 500px;
// max-height: 500px;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
text-align: center;
padding: 0 1rem;

h1 {
    font-size: clamp(3rem, 3.4vw, 5rem)
}
p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem)
}
`
export const FeatureButtom = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border-radius: 7px;
  background: #e31837;
  cursor: pointer;
  color: #fff;
  transition-duration: 0.4s;


  &:hover {
      background: rgb(255, 128, 0);
  }
`