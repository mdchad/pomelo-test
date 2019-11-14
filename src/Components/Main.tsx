import React, {useEffect, useReducer} from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import axios from 'axios'
import TransactionCard from "./TransactionCard";

const Container = styled.div`
	${tw`font-mono text-teal-400 flex h-full w-100 text-center flex-col bg-gray-800 items-center`}
`

const Button = styled.button`
	${tw`bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded cursor-pointer border-teal-500 hover:border-teal-700 mb-8`}
`;

const Main: React.FC = () => {
	const initialState: { loading: boolean, data: any[], error: boolean } = { loading: false, data: [], error: false };

	function reducer(state: any, action: { type: string, payload?: any[]}) {
		switch (action.type) {
			case 'FETCHING':
				return {...state, loading: true };
			case 'FETCHED_SUCCESSFUL':
				return {...state, loading: false, data: action.payload };
			case 'ERROR':
				return {...state, loading: false, error: true };
			case 'REFUND':
				state.data.map((transaction: any, i: number) => {
					if (i % 2 === 0) {
						transaction.state = 'REFUNDED'
					}
					return { ...transaction }
				});
				return {...state}
			default:
				throw new Error();
		}
	}


	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchData = async () => {
		dispatch({ type: 'FETCHING' });
		try {
			const result = await axios.get('http://www.mocky.io/v2/5dcd37bf2e00006700729c99');
			dispatch({ type: 'FETCHED_SUCCESSFUL', payload: result.data.items})
		} catch (e) {
			dispatch({ type: 'ERROR' });
			console.error(e)
		}
	};

	useEffect(() => {
		fetchData()
	}, []);

	return (
		<Container>
			<h1 data-cy='main-title'>Transactions</h1>
			<Button data-cy='refund-button' onClick={() => dispatch({ type: 'REFUND' })}>REFUND</Button>
			{state.loading ? <h1 data-cy='loading'>Loading...</h1> : null }
			{state.data.length ? <TransactionCard data={state.data}/> : null }
			{state.error ? <h1>Error fetching data</h1> : null }
		</Container>
	)
};

export default Main
