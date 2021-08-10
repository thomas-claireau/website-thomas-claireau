import { signIn, useSession } from 'next-auth/client';

import style from './AuthModal.module.scss';

export default function AuthModal({ providers }) {
	const [session, loading] = useSession();

	return (
		<div className={style['auth-modal']}>
			<div className={style['modal']}>
				{Object.values(providers).map((provider) => (
					<div key={provider.name}>
						<button onClick={() => signIn(provider.id)}>
							Sign in with {provider.name}
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
