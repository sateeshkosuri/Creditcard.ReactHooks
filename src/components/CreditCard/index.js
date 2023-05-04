import {useState} from 'react'
import {
  BgContainer,
  LeftCard,
  Heading,
  HrLine,
  CreditCardDetails,
  CardNumber,
  CardHolderName,
  Name,
  RightCard,
  Card,
  Title,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumbers] = useState()
  const [name, setName] = useState()

  const onNumbersEnter = event => {
    setNumbers(event.target.value)
  }

  const onNameEnter = event => {
    setName(event.target.value)
  }

  return (
    <BgContainer>
      <LeftCard>
        <Heading>CREDIT CARD</Heading>
        <HrLine />
        <CreditCardDetails data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <Name>{name}</Name>
        </CreditCardDetails>
      </LeftCard>
      <RightCard>
        <Card>
          <Title>Payment Method</Title>
          <Input
            type="digit"
            placeholder="Card Number"
            value={number}
            onChange={onNumbersEnter}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onNameEnter}
          />
        </Card>
      </RightCard>
    </BgContainer>
  )
}

export default CreditCard
