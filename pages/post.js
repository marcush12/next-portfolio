import Layout from '../components/Layout';
import { withRouter } from "next/router";

const Post = ({router}) => (
  <Layout title={router.query.title}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit molestias doloremque atque? Omnis perferendis iusto itaque, dignissimos modi nemo.</p>
    </Layout>
  )


export default withRouter(Post)
