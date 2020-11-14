// import * as React from 'react';
// import redirect from './redirect';
// import { gql, useQuery } from '@apollo/client';

// const ViewerQuery = gql`
//   {
//     viewer {
//       email
//       id
//     }
//   }
// `;

// export const withAuth = <T extends object>(C: React.FC<T>) => {
//   return class AuthComponent extends React.Component<T> {
//     static async getInitialProps({ apolloClient, ...ctx }) {
//       console.log('apolloClient', apolloClient);
//       // const { data, loading, error } = await apolloClient.query({
//       //   query: ViewerQuery,
//       // });
//       // if (!data || !data.id) {
//       //   redirect(ctx, '/');
//       //   return {
//       //     me: null,
//       //   };
//       // }

//       return {
//         me: true,
//         //   me: response.data.me,
//       };
//     }

//     render() {
//       return <C {...this.props} />;
//     }
//   };
// };
