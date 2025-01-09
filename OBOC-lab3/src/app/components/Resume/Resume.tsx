import styles from './Resume.module.css';
import Image from 'next/image';

const Resume = () => {
	return (
		<div className={styles.cvContainer}>
			<section className={styles.header}>
				<div className={styles.headerInfo}>
					<h1>{'Maxim Nazarov Dmitrievich'}</h1>
					<p>{'Gender: Male. Biography: Born in 2004 in the Republic of Mari El.'}</p>
					<p>
						{'+7 917 707 20 98'}<span>{' — Contact number'}</span>
					</p>
					<a href="mailto:maksim.nazarov@ispring.com">{'maksim.nazarov@ispring.com'}</a>
					<p>{'Location: Yoshkar-Ola'}</p>
					<p>{'From: Russia'}</p>
					<p>{'Open to opportunities'}</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>{'Expected Salary and Job Position'}</h2>
				<p>{'Fullstack Developer — $1700'}</p>
				<p>{'Specialization:'}</p>
				<ul>
					<li>{'Developer'}</li>
					<li>{'Employment: Part-time'}</li>
					<li>{'Work Schedule: Flexible hours, remote work'}</li>
					<li>{'Preferred commute time: No more than one hour'}</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>{'Experience — 1 year and 1 month'}</h2>
				<p>{'September 2023 — Present'}</p>
				<div className={styles.experience}>
					<h3>{'iSpring'}</h3>
					<p>{'Yoshkar-Ola'}</p>
					<p>{'Information technology, system integration, internet services.'}</p>
					<p>{'• Software development.'}</p>
					<h4>{'Programmer'}</h4>
					<p>{'Developed architecture and implemented frontend/backend parts of the application. Utilized MySQL, PHP (Symfony, Doctrine), TypeScript, Redux, React, Redux Toolkit, and RTK Query.'}</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>{'Education'}</h2>
				<p>{'Incomplete higher education — Expected graduation in 2026.'}</p>
				<p>{'Volga State University of Technology, Yoshkar-Ola.'}</p>
				<p>{'Faculty of Computer Science and Computer Engineering, Software Engineering.'}</p>
			</section>

			<section className={styles.section}>
				<h2>{'Skills'}</h2>
				<p>{'Russian — Native language.'}</p>
				<ul>
					<li>{ 'Russian'} </li>
					<li>{ 'English'} </li>
					<li>{'MySQL'}</li>
					<li>{'PHP'}</li>
					<li>{'Git'}</li>
					<li>{'SQL'}</li>
					<li>{'Symfony'}</li>
					<li>{'Docker'} </li>
					<li>{ 'REST API'} </li>
					<li>{ 'TypeScript'} </li>
					<li>{ 'React'} </li>
					<li>{ 'Redux'} </li>
					<li>{ 'Teamwork'} </li>
					<li>{ 'Time Management'} </li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>{ 'Additional Information'} </h2>
				<p> {'Chill guy'} </p>
			</section>

			<section>
				<h4> {'Resume updated on Jan 01, 2024 at 21:28'} </h4>
			</section>
		</div>
	);
};

export { Resume };
