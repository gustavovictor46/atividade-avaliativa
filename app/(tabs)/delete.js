import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'cv_HsSx_oeiJ882GCghHPhmTfdFB0kphgB99xkaEQVCWv_KqI32BA_Y4x4V2ouZlee9';

const api = axios.create({
    baseURL: 'https://api-ds.codeverse.com.br',
    headers: {
        'x-api-key': API_KEY,
    },
});

export default function DestinosExcluirScreen() {
    const { destinos, setDestinos } = useState([]);
    const { carregando, setCarregando } = useState(true);
    const { erro, setErro } = useState(null);
    const { excluindoId, setExcluindoId } = useState(null);

    async function buscarDestinos() {
        setCarregando(true);
        setErro(null);
        try {
            const resposta = await api.get('/api/destinos');
            setDestinos(resposta.data.data);
        } catch (error) {
            setErro('Erro ao buscar destinos');
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        buscarDestinos();
    }, []);


    async function excluirDestino(id) {
        setExcluindoId(id)

        try {
            await api.delete(`/api/destinos${id}`);
            setDestinos((atual) => atual.filter((item) => item.id !== id));
        } catch (error) {
            Alert.alert("Falha ao deletar Destino");
        } finally {
            setExcluindoId(null);
        }
    }



}
