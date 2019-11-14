import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.div`
	${tw`font-mono text-blue-700 flex h-screen w-100 text-center flex-col`}
`

const Landing: React.FC = () => (
	<Container>
		<h1>Transactions</h1>
	</Container>
)

export default Landing
