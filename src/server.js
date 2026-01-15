import app from './app.js';
import { db } from './models/index.js';
import dotenv from 'dotenv';

const PORT = process.env.PORT;

const startServer = async () => {
    try {
        await db.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        
        await db.sync();
        console.log('Tabelas criadas ou atualizadas com sucesso.');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados', error);
        process.exit(1);
    }
};

startServer();