import * as types from '../actions/types';
import initialState from '../initial-state';

export default function trades(state = initialState.trades, action) {
	switch(action.type) {
		case types.REQUEST_TRADE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.REQUEST_TRADE_SUCCESS:
			return {
				...state,
				loading: false,
				outgoing: [
					...state.outgoing,
					action.tradeRequest,
				]
			};
		case types.REQUEST_TRADE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case types.APPROVE_TRADE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.APPROVE_TRADE_SUCCESS: {
			const approvedRequestIndex = state.incoming.findIndex(request => request.id === action.approvedRequestId);
			return {
				...state,
				loading: false,
				incoming: [
					...state.incoming.slice(0, approvedRequestIndex),
					{
						...state.incoming[approvedRequestIndex],
						status: 'APPROVED',
					},
					...state.incoming.slice(approvedRequestIndex+1),
				]
			};
		}
		case types.APPROVE_TRADE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case types.DENY_TRADE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.DENY_TRADE_SUCCESS:{
			const deniedRequestIndex = state.outgoing.findIndex(request => request.id === action.deniedRequestId);
			return {
				...state,
				loading: false,
				outgoing: [
					...state.outgoing.slice(0, deniedRequestIndex),
					{
						...state.outgoing[deniedRequestIndex],
						status: 'DENIED',
					},
					...state.outgoing.slice(deniedRequestIndex+1),
				]
			};
		}
		case types.DENY_TRADE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}
