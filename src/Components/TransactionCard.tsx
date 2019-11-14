import React from 'react'
import styled from "styled-components";
import tw from 'tailwind.macro'

interface Props {
	data: any[]
}

const ContainerCard = styled.div`
	${tw`max-w-sm rounded overflow-hidden shadow-lg bg-white mb-8`}
`;

const Pill = styled.span`
	${tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2`}
`;

const PillContainer = styled.div`
	${tw`px-6 py-4`}
`;

const Title = styled.div`
	${tw`font-bold text-xl mb-4`}
`;

const Text = styled.div`
	${tw`text-gray-700 text-base text-left`}
`;

const Wrapper = styled.div`
	${tw`px-6 py-4`}
`;

const Small = styled.small`
	${tw`text-gray-500 text-left text-sm`}
`

const TransactionCard: React.FC<Props> = (props) => {
	console.log(props)
	return (
		<div>
			{props.data.map(transaction => {
				const createdAt = new Date(transaction.created)
				return (
					<ContainerCard key={transaction.id}>
						<Wrapper>
							<Title>{transaction.currency} {transaction.amount}</Title>
							<Small>{transaction.id}</Small>
							<Text>
								{createdAt.toDateString()}
							</Text>
							<Text>
								{transaction.provider}
							</Text>
						</Wrapper>
						<PillContainer>
							<Pill>{transaction.state}</Pill>
						</PillContainer>
					</ContainerCard>
				)
			})}
		</div>
	)
}

export default TransactionCard
