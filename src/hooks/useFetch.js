    import { useEffect } from 'react';
    import api from '../config/api';
    import dataCharactersStore from "../store/characterStore";

    const useFetch = () => {
        const { setCharacters, setSelectedCharacter } = dataCharactersStore();

        useEffect(() => {
            api.get('/characters')
                .then((response) => {
                    setCharacters(response.data);
                    if (response.data.length > 0) {
                        setSelectedCharacter(response.data[0]);
                    }
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log('Lỗi API:', error);
                });
                
        }, [setCharacters, setSelectedCharacter]);
    }
    export default useFetch;