import { useContext } from 'react';
import { Web3Context } from '../components/Web3Context';
import Image from 'next/image';

import NavBar from '../components/navbar/NavBar';
import NewGame from '../components/NewGame';
import AllGames from '../components/AllGames';

export default function Home() {
	const { contract } = useContext(Web3Context);
	return (
		<>
			<NavBar />
			<div className="text-center mb-5">
				<h1 className="text-2xl">CoinFlip CKB Game</h1>
				<h2 className="text-xl mb-4">by Sambit Sargam</h2>
				{!contract && (
					<div className="p-clamp mx-auto">
						<Image src="/metamask.svg" width={200} height={200} />
						<p className="mt-6">
							To use this dApp, switch your network to Godwoken testnet, or go to{' '}
							<a
								className="text-blue-400 underline"
								href="https://github.com/sambitsargam/godwoken"
								target="_blank"
							>
								Github ReadMe file
							</a>{' '}
							and see the instructions on how to run 
						</p>
						<br />
						<p>
							If you're using testnet CKB, you will need some test ckb which you
							can get at a faucet.
							<br />
							<a
								className="text-blue-400 underline"
								href="https://dev.ckb.tools/create-layer2-account"
								target="_blank"
							>
								https://dev.ckb.tools/create-layer2-account
							</a>
						</p>
					</div>
				)}
			</div>
			{contract && (
				<main>
					<NewGame />
					<AllGames />
				</main>
			)}
		</>
	);
}
