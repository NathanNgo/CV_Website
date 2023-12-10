import styles from "./PageContent.module.css"

function PageContent() {
    return (
        <div className={styles.grid}>
            <header>
                <h1><span className={styles.firstName}>NATHAN</span> &nbsp;NGO</h1>
                <h2>SOFTWARE ENGINEER</h2>
                <hr />
            </header>
            <section className={styles.secondaryInfo}>
                <section className={styles.secondarySubsection}>
                    <h3>CONTACTS</h3>
                    <p><b>Phone</b></p>
                    <p>0467611455</p>
                    <p><b>Email</b></p>
                    <p>nathanj238@gmail.com</p>
                    <p><b>LinkedIn</b></p>
                    <p>How about no?</p>
                    <p><b>GitHub</b></p>
                    <p>https://github.com/NathanNgo</p>
                    <hr />
                </section>
                <section className={styles.secondarySubsection}>
                    <h3>EDUCATION</h3>
                    <p>
                        <b>University of Sydney</b>
                        <p className={styles.date}>(2016 - 2020)</p>
                    </p>
                    <p>Bachelor of Science</p>
                    <ul>
                        <li>Major in Computer Science</li>
                        <li>Major in Physics</li>
                    </ul>
                    <hr />
                </section>
                <section className={styles.secondarySubsection}>
                    <h3>PROJECTS</h3>
                    <p><b>Project 1</b></p>
                    <p>Description of some project.</p>
                    <p><b>Project 2</b></p>
                    <p>Description of some project.</p>
                    <p><b>Project 3</b></p>
                    <p>Description of some project.</p>
                    <hr />
                </section>
                <section className={styles.secondarySubsection}>
                    <h3>REFEREES</h3>
                    <p><b>Available on request</b></p>
                    <hr />
                </section>
            </section>
            <section className={styles.mainInfo}>
                <section className={styles.mainSubsection}>
                    <h3>WORK EXPERIENCE</h3>
                    <p><b>Software Engineer, Animal Logic</b></p>
                    <p className={styles.date}>(2020 - 2023)</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis at metus sagittis egestas. Suspendisse potenti</li>
                        <li>Donec at lectus pharetra, porttitor augue a, sagittis odio.</li>
                        <li>Ut sed urna quam. Sed non justo in nulla tempus vulputate. Fusce nec enim pulvinar, placerat mi a, fermentum massa. Morbi pulvinar viverra egestas.</li>
                    </ul>
                    <br />
                    <p><b>Software Engineer, Cognian Technologies</b></p>
                    <p className={styles.date}>(2019 - 2020)</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis at metus sagittis egestas. Suspendisse potenti</li>
                        <li>Donec at lectus pharetra, porttitor augue a, sagittis odio.</li>
                        <li>Ut sed urna quam. Sed non justo in nulla tempus vulputate. Fusce nec enim pulvinar, placerat mi a, fermentum massa. Morbi pulvinar viverra egestas.</li>
                    </ul>
                    <br />
                    <p><b>Programming Tutor, Thingo</b></p>
                    <p className={styles.date}>(2018 - 2019)</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis at metus sagittis egestas. Suspendisse potenti</li>
                        <li>Donec at lectus pharetra, porttitor augue a, sagittis odio.</li>
                        <li>Ut sed urna quam. Sed non justo in nulla tempus vulputate. Fusce nec enim pulvinar, placerat mi a, fermentum massa. Morbi pulvinar viverra egestas.</li>
                    </ul>
                    <hr />
                </section>
            </section>
        </div>
    )
}

export default PageContent