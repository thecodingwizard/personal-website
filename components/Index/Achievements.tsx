import { CardGrid } from 'components/CardGrid/CardGrid';
import { Card } from 'components/CardGrid/Card';
import { linkClasses } from 'components/styles';

export const Achievements = () => (
	<CardGrid>
		<Card title="4x USACO Finalist" tags={['Competitive Programming', 'Olympiads']}>
			In{' '}
			<a
				href="http://www.usaco.org/index.php?page=finalists19"
				target="_blank"
				className={linkClasses}
			>
				2019
			</a>
			,{' '}
			<a
				href="http://www.usaco.org/index.php?page=finalists20"
				target="_blank"
				className={linkClasses}
			>
				2020
			</a>
			,{' '}
			<a
				href="http://www.usaco.org/index.php?page=finalists21"
				target="_blank"
				className={linkClasses}
			>
				2021
			</a>
			, and{' '}
			<a
				href="http://www.usaco.org/index.php?page=finalists22"
				target="_blank"
				className={linkClasses}
			>
				2022
			</a>
			, I was selected as part of 26 students to participate in the national USA Computing Olympiad
			training camp.
		</Card>
		<Card title="5x AIME Qualifier" tags={['Math', 'Olympiads']}>
			In 2017, 2018, 2019, 2020, and 2021, I qualified to take the American Invitational Mathematics
			Examination (AIME), which is offered to the top 2.5% of students.
		</Card>
	</CardGrid>
);
