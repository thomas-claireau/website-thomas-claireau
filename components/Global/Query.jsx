import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';

import { Loading } from 'components/Global/Loading';
import { Error } from 'components/Global/Error';

const Query = ({ children, query, id }) => {
	const { data, loading, error } = useQuery(query, {
		variables: { id: id },
	});

	if (loading) return <Loading />;

	if (error) return <Error error={error} />;

	return children({ data, loading });
};

export default withApollo({ ssr: true })(Query);
