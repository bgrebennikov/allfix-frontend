import styled from "styled-components";


const ThanksSection = styled.section`
  padding: 27vh 2em;
  text-align: center;
  min-height: 44vh;
  
  & h1{
    font-size: 22pt;
  }
  & p{
    margin-top: .2em;
  }
`


export default function ThanksPage() {
    return (
        <ThanksSection>
            <h1>Спасибо за обращение!</h1>
            <p>Мастер с вами свяжется в течении 30 минут</p>
        </ThanksSection>
    )
}