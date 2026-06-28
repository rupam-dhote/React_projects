import styled from "styled-components"

const Rules = () => {
  return (
    <RulesCon>
        
        <h2>How to play dice game</h2>
        <div className="rule">
            <p>
            Select any number<br/>
            Click on dice image<br/>
            after click on  dice  if selected number is equal to dice number you will get same point as dice<br/> 
            if you get wrong guess then  1 point will be dedcuted
            </p>
        </div>
        
    </RulesCon>
  )
}
 const RulesCon=styled.div`
    background-color: #fbf1f1;
    max-width: 800px;
    margin: 0 auto;
    margin-top:40px;
    padding: 20px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .rule{
        margin-top:20px;
        p{
            font-weight: 400;
        }
    }
    
 `
export default Rules