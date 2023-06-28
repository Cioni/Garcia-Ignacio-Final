import {useEffect, useReducer, useState} from 'react';
import axios from 'axios';

const initialState = {
    data: null,
    loading: true,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {...state, loading: true, error: null};
        case 'FETCH_SUCCESS':
            return {...state, loading: false, data: action.payload};
        case 'FETCH_FAILURE':
            return {...state, loading: false, error: action.payload};
        default:
            throw new Error('Invalid action type');
    }
};

export const useFetch = (url) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        return () => {
            setIsMounted(false);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_INIT'});

            try {
                const cachedData = localStorage.getItem(url);

                if (cachedData) {
                    dispatch({type: 'FETCH_SUCCESS', payload: JSON.parse(cachedData)});
                } else {
                    const response = await axios.get(url);

                    const json = response.data;
                    dispatch({type: 'FETCH_SUCCESS', payload: json});

                    localStorage.setItem(url, JSON.stringify(json));
                }
            } catch (error) {
                dispatch({type: 'FETCH_FAILURE', payload: error.message});
            }
        };

        if (isMounted) {
            fetchData();
        }

        return () => {
            setIsMounted(false);
        };
    }, [url, isMounted]);

    return state;
};