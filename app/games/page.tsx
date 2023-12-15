import Link from 'next/link';
import { SectionTitle } from 'components/SectionTitle';
import { CardGrid } from 'components/CardGrid/CardGrid';
import { Card } from 'components/CardGrid/Card';
import { containerClasses, linkClasses, sectionBodyClasses } from 'components/styles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Games | Nathan Wang',
	robots: 'noinex'
};

export default function Games() {
	return (
		<div>
			<main className="bg-slate-950 min-h-screen">
				<div className={containerClasses}>
					<Link href="/" className="text-slate-400 hover:text-slate-200 md:text-lg">
						&larr; Back to Main Site
					</Link>
					<div className="h-4"></div>
					<SectionTitle>Party Games</SectionTitle>

					<div className={sectionBodyClasses}>
						<p>
							These are some of my favorite games to play with friends. If you're looking for more,
							check out{' '}
							<a
								href="https://www.dicebreaker.com/mechanics/social-deduction/best-games/best-social-deduction-games"
								target="_blank"
								rel="noreferrer"
								className={linkClasses}
							>
								these
							</a>{' '}
							<a
								href="https://boardgametheories.com/the-seven-best-social-deduction-games/"
								target="_blank"
								rel="noreferrer"
								className={linkClasses}
							>
								two
							</a>{' '}
							articles.
						</p>
					</div>
					<div className="h-8 lg:h-12"></div>

					<CardGrid>
						<Card title="Castlefall" link="https://www.bpchen.com/castlefall/#lobby">
							USACO Camp 2023. Fast-paced lightweight talking game, best with 8 / 6 / 10 people.
						</Card>
						<Card title="Secret Hitler" link="https://secrethitler.io/">
							Favorite social deduction game. Best with 7, 9, or 10.
						</Card>
						<Card title="Resistance" link="https://netgames.io/games/avalon/">
							More social deduction!
						</Card>
						<Card title="Deception: Murder in Hong Kong" link="https://krimi.vercel.app/">
							Social deduction board game — longer, slightly more complex.
						</Card>
						<Card title="Coup" link="http://coup.thebrown.net/">
							Fun, lightweight card game
						</Card>
						<Card title="Just One" link="https://just1.herokuapp.com/">
							Word guessing game, similar to Castlefall
						</Card>
						<Card title="Hanabi" link="https://hanab.live/">
							2-5 players. USACO Camp 2019. Lots of strategy / conventions
						</Card>
						<Card title="Illusion" link="https://pandasaurusgames.com/products/illusion">
							Very lightweight card game related to optical illusions. Can't find an online version
							unfortunately
						</Card>
						<Card title="A Fake Artist Goes to NY" link="https://github.com/kcgidw/fao">
							A game about drawing / figuring out who the imposter is. Got taken down. Links to
							Github.
						</Card>
						<Card title="Spyfall" link="https://www.spyfall.app/">
							Party game: Guess who the imposter is!
						</Card>
						<Card title="Codenames" link="https://codenames.game/">
							Guessing words. Party game
						</Card>
						<Card
							title="Talking Games"
							link="U2FsdGVkX1+MY8vp8/0r6Ss5zQ4pI2zdFeOIEtZ9BS6DtHR99k9b3MnSFMZpkFrQPhL42+yRJ4q4zxk5w2mTzw=="
							encrypted
						>
							We're Not Really Strangers, Big Talk, 36 Questions, etc. Encrypted link due to
							copyright concerns.
						</Card>
						<Card title="Decrypto" link="https://netgames.io/games/enigma/">
							3-10 players
						</Card>
						<Card title="Love Letter" link="https://netgames.io/games/love-letter/">
							Lightweight simple card game
						</Card>

						<Card title="Poker" link="https://www.pokernow.club/">
							Poker! If you just need chip counters, use pokerchips.io
						</Card>
						<Card
							title="One Night Ultimate Werewolf"
							link="https://netgames.io/games/onu-werewolf/"
						>
							Werewolf, but all in one night
						</Card>
						<Card
							title="Pretty Clever"
							link="https://boardgamegeek.com/boardgame/244522/s-pretty-clever"
						>
							1-4 players, roll & write. Can't find online version
						</Card>
						<Card title="Letter Jam" link="https://boardgamegeek.com/boardgame/275467/letter-jam">
							Can't find online version. Make lots of words with letters
						</Card>
						<Card title="Ricochet Robots" link="https://rrobots.tcw.sh/">
							Move robots around, and think fast! Note: online game is very unpolished.
						</Card>
						<Card title="Wordle (Together)" link="https://wordle.thecodingwizard.me/">
							Custom Unlimited Wordle game that supports link sharing
						</Card>
						<Card title="For Sale" link="https://forsale.tcw.sh/">
							3 - 6 players, light bidding game
						</Card>
						<Card title="Super Coin Box" link="https://thecodingwizard.github.io/super-coin-box/">
							Not actually a party game &mdash; just a simplistic one-player online video game!
						</Card>
					</CardGrid>

					<div className="h-8 lg:h-12"></div>
					<div className={sectionBodyClasses}>
						<p>
							Also looking to try Werewords, Bang! The Dice Game, Cross Talk, Floor Plan, or other
							miscellaneous roll and write games. Suggestions?{' '}
							<a
								href="mailto:nathan.r.wang@gmail.com"
								target="_blank"
								rel="noreferrer"
								className={linkClasses}
							>
								Shoot me an email!
							</a>
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
