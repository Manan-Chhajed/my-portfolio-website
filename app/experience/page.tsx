import Link from "next/link";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Work Experience</h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Passionate Software Developer on a mission to build impactful products that solve real-world problems.. Here's a summary of my experiences so far.
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Deutsche Bank</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    TDI Intern | June 2024 — July 2024
                </p>
                <p>
                    I interned with the Technology, Data, and Innovation (TDI) team at <a href="https://www.linkedin.com/company/deutsche-bank/">Deutsche Bank</a>, a leading global financial institution headquartered in Germany.
                </p>
                <ul>
                    <li>
                        Enhanced CRC application by implementing multilingual support using React-i18next and Spring Boot, enabling language selection persistence and dynamic translation fetching, resulting in a user-friendly experience for global users.
                    </li>
                    <li>
                        Developed a translation management interface with React AG Grid, enabling users to add and edit translations. Reduced manual translation efforts by up to 60% through integration with DB Translate API for automatic pre-population.
                    </li>
                    <li>
                        Implemented multilingual template upload and retrieval for report visualization using Spring Boot APIs and Oracle database, improving user experience across 15+ Deutsche Bank entities.
                    </li>
                    <li>
                        Led end-to-end delivery of 2 projects, including design, development, deployment, and comprehensive documentation, while collaborating with a team of 8 for design discussions and ensuring smooth project handover.
                    </li>
                </ul>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">TLE Eliminators</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Teaching Assistant and Video Editorialist | Dec 2023 — May 2024
                </p>
                <p>

                    At <a href="https://www.linkedin.com/company/tle-eliminators/">TLE Eliminators</a>, I actively resolved student doubts live and recorded video solutions for coding problems.
                </p>
                <ul>
                    <li>
                        Resolved 140+ complex programming queries, reflecting exceptional problem-solving and debugging abilities.
                    </li>
                    <li>
                        Delivered 30+ video editorials of coding problems, leveraging teamwork and iterative feedback for high-quality content
                    </li>
                </ul>
            </div>
        </section>
    )
}
