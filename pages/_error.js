import Layout from '../components/Layout';

const Error = ({statusCode}) => (
  <Layout title='Erro!!!'>
    {statusCode ? `PQP! Não foi possível carregar os dados do usuário: Status Code ${statusCode}` : `Não encontramos a página, desculpe`} 
    
  </Layout>
)

export default Error
