import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch'
import Error from './_error'
import { Component } from 'react';

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/marcush12')
    const statusCode = res.status > 200 ? res.status : false 
    const data =await res.json()

    return {user: data, statusCode}
  }

  // componentDidMount() {// hook to fetch data
  //   fetch('https://api.github.com/users/marcush12')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         user: data
  //       })
  //     })
  // }

  render() {
    const {user, statusCode} = this.props

    if(statusCode) {
      return <Error statusCode = {statusCode} />
    }
    
    return (
      <Layout title='About'>
        {/* {JSON.stringify(this.props.user)} */}
        <p>{user.name}</p>
        <img
          src={user.avatar_url}
          alt='Marcos'
          height='200px'
        />
      </Layout>
    );
  }
}
