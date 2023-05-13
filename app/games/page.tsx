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
					<Link href="/" className="text-slate-400 hover:text-slate-200 hover:underline md:text-lg">
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
								className="link"
							>
								these
							</a>{' '}
							<a
								href="https://boardgametheories.com/the-seven-best-social-deduction-games/"
								target="_blank"
								rel="noreferrer"
								className="link"
							>
								two
							</a>{' '}
							articles.
						</p>
					</div>
					<div className="h-8 lg:h-12"></div>

					<CardGrid>
						<Card title="Secret Hitler" link="https://secrethitler.io/"></Card>
						<Card title="Resistance" link="https://netgames.io/games/avalon/"></Card>
						<Card title="Deception: Murder in Hong Kong" link="https://krimi.vercel.app/"></Card>
						<Card title="Coup" link="http://coup.thebrown.net/"></Card>
						<Card title="Just One" link="https://just1.herokuapp.com/"></Card>
						<Card title="Hanabi" link="https://hanab.live/">
							2-5 player
						</Card>
						<Card title="Illusion" link="https://pandasaurusgames.com/products/illusion">
							Can't find an online version unfortunately
						</Card>
						<Card title="A Fake Artist Goes to NY" link="https://github.com/kcgidw/fao">
							Taken down, unfortunately. Links to Github.
						</Card>
						<Card title="Spyfall" link="https://www.spyfall.app/"></Card>
						<Card title="Codenames" link="https://codenames.game/"></Card>
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
						<Card title="Love Letter" link="https://netgames.io/games/love-letter/"></Card>

						<Card title="Poker" link="https://pokerchips.io/">
							Linked website (pokerchips.io) only handles the chips
						</Card>
						<Card
							title="One Night Ultimate Werewolf"
							link="https://netgames.io/games/onu-werewolf/"
						></Card>
						<Card
							title="Pretty Clever"
							link="https://boardgamegeek.com/boardgame/244522/s-pretty-clever"
						>
							1-4 players. Can't find online version
						</Card>
						<Card title="Letter Jam" link="https://boardgamegeek.com/boardgame/275467/letter-jam">
							Can't find online version
						</Card>
						<Card
							title="Ricochet Robots"
							link="https://boardgamegeek.com/boardgame/51/ricochet-robots"
						>
							Can't find online version
						</Card>
						<Card title="Wordle (Together)" link="https://wordle.thecodingwizard.me/">
							Custom Unlimited Wordle game that supports link sharing
						</Card>
					</CardGrid>

					<div className="h-8 lg:h-12"></div>
					<div className={sectionBodyClasses}>
						<p>
							Also looking to try Werewords, Bang! The Dice Game, Letter Jam, Cross Talk, Floor
							Plan, or other miscellaneous roll and write games. Suggestions?{' '}
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
