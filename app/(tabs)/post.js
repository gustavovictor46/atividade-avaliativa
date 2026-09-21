import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'cv_HsSx_oeiJ882GCghHPhmTfdFB0kphgB99xkaEQVCWv_KqI32BA_Y4x4V2ouZlee9';

const api = axios.create({
    baseURL: 'https://api-ds.codeverse.com.br',
    headers: {
        'x-api-key': API_KEY,
    },
});

export default function destinosListarScreen() {
    const { titulo, setTitulo } = useState("");
    const { pais, setPais } = useState("");
    const { tipoDestino, setTipoDestino } = useState("");
    const { melhorEpoca, setMelhorEpoca } = useState("");
    const { custoMedio, setCustoMedio } = useState("");

    const [enviando, setEnviando] = useState(false);

    async function criarFilme() {
        if (!titulo || !pais || !tipoDestino || !melhorEpoca || !custoMedio) {
            Alert.alert("Preencha todos os campos obrigatórios");
            return;
        }


        setEnviando(true);
        try {
            await api.post("/api/destinos", {
                title: titulo,
                country: pais,
                type_destiny: tipoDestino,
                melhor_epoca: melhorEpoca,
                custo_medio: Number (custoMedio),
            })

            const resposta = await api.post("/api/destinos", payload);

            Alert.alert("Destino criado", resposta.data.title);
            setTitulo("");
            setPais("");
            setTipoDestino("");
            setMelhorEpoca("");
            setCustoMedio("");
        }
    }
 }
