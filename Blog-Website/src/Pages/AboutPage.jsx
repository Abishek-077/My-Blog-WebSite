import React from 'react';

const AboutPage = () => {
    return (
        <div style={styles.container}>
            {/* Header Section */}
            <header style={styles.header}>
                <h1 style={styles.title}>NILS</h1>
            </header>

            {/* About Me Section */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>ABOUT ME</h2>
                <p style={styles.paragraph}>
                    I Create Digital Future. While pressure terms and temperature techniques, Efrona enjoys the inclusion
                    the workforce outside, but, unique, on mobile retail. Our cellular concept projects range in the
                    deep path of our markets, excellent reliable mass.
                </p>
                <p style={styles.paragraph}>
                    Future projects start with quiet effusion. Efrona can run a focus on which area is more accessible
                    compared to the global world beyond now.
                </p>
                <a href="mailto:help@neme.com" style={styles.emailLink}>help@neme.com</a>
            </section>

            {/* Experience & Education Section */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>EXPERIENCE & EDUCATION</h2>
                <div style={styles.columnsContainer}>
                    {/* Experience Column */}
                    <div style={styles.column}>
                        <h3 style={styles.subTitle}>Experience</h3>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>
                                <strong>HMM4 (Sponge Inc), UU.OZ Developer</strong><br />
                                <a href="www.-jhwmei" style={styles.link}>[www.-jhwmei]</a>
                            </li>
                            <li style={styles.listItem}>
                                <strong>Robinhood Inc. Web Developer</strong><br />
                                <a href="web-tech" style={styles.link}>[web - tech]</a>
                            </li>
                            <li style={styles.listItem}>
                                <strong>Shawn Software Inc. Senior Developer</strong><br />
                                <a href="web-web" style={styles.link}>[web - web]</a>
                            </li>
                        </ul>
                    </div>

                    {/* Education Column */}
                    <div style={styles.column}>
                        <h3 style={styles.subTitle}>Education</h3>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>
                                <strong>Showford University of California</strong><br />
                                <a href="www.wee" style={styles.link}>[www.wee]</a>
                            </li>
                            <li style={styles.listItem}>
                                <strong>Specialization Course. MIT University</strong><br />
                                <a href="web-tech" style={styles.link}>[web - tech]</a>
                            </li>
                            <li style={styles.listItem}>
                                <strong>Lewis High School. San Francisco</strong><br />
                                <a href="web-sem" style={styles.link}>[web - sem]</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>MY TOP SKILLS</h2>
                <p style={styles.paragraph}>
                    Following an image moving as input digitals, Efrona could use data. Relationships builders
                    much thinking needed for virtual motorcycle forms on large express.
                </p>
                <table style={styles.skillsTable}>
                    <tbody>
                        <tr><td>Dmitage</td><td>90%</td></tr>
                        <tr><td>Bounding</td><td>80%</td></tr>
                        <tr><td>Web Design</td><td>95%</td></tr>
                        <tr><td>Switch Media</td><td>95%</td></tr>
                    </tbody>
                </table>
                <a href="https://www.downloadnewthemes.com" style={styles.ctaLink}>
                    Need help with professional support? Let’s work together!
                </a>
            </section>

            {/* Footer Section */}
            <footer style={styles.footer}>
                <div style={styles.contactSection}>
                    <h3 style={styles.footerTitle}>Gail in touch | Locations</h3>
                    <p>info@dioom.com</p>
                    <p>San Francisco – California</p>
                </div>

                <div style={styles.testimonial}>
                    <h3 style={styles.footerTitle}>What Are Clients Saying?</h3>
                    <blockquote style={styles.quote}>
                        "Our individual models inspire simple, clinical, vision robotic dilemmas in social thinking,
                        networks of virtual motorcycle forms and large express. Natural male, mental advisor miss
                        in the latest picture."
                    </blockquote>
                    <p style={styles.author}>- Emily Bloom<br />Holden owner</p>
                </div>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        lineHeight: 1.6,
        color: '#333',
    },
    header: {
        textAlign: 'center',
        marginBottom: '3rem',
    },
    title: {
        fontSize: '3rem',
        fontWeight: '300',
        letterSpacing: '0.1em',
    },
    section: {
        marginBottom: '4rem',
        padding: '2rem 0',
        borderBottom: '1px solid #eee',
    },
    sectionTitle: {
        fontSize: '1.8rem',
        fontWeight: '500',
        marginBottom: '1.5rem',
        color: '#2c3e50',
    },
    paragraph: {
        marginBottom: '1.5rem',
        color: '#666',
    },
    emailLink: {
        display: 'inline-block',
        color: '#3498db',
        textDecoration: 'none',
        fontWeight: '500',
    },
    columnsContainer: {
        display: 'flex',
        gap: '4rem',
        marginTop: '2rem',
    },
    column: {
        flex: 1,
    },
    subTitle: {
        fontSize: '1.4rem',
        marginBottom: '1rem',
        color: '#34495e',
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        marginBottom: '1.5rem',
        lineHeight: 1.5,
    },
    link: {
        color: '#3498db',
        fontSize: '0.9rem',
        textDecoration: 'none',
    },
    skillsTable: {
        width: '100%',
        margin: '2rem 0',
        borderCollapse: 'collapse',
        td: {
            padding: '0.8rem',
            borderBottom: '1px solid #eee',
        },
    },
    ctaLink: {
        display: 'inline-block',
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '4px',
        textDecoration: 'none',
        marginTop: '1rem',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '4rem',
        paddingTop: '2rem',
        borderTop: '1px solid #eee',
    },
    footerTitle: {
        fontSize: '1.2rem',
        marginBottom: '1rem',
        color: '#2c3e50',
    },
    testimonial: {
        maxWidth: '600px',
    },
    quote: {
        color: '#666',
        fontStyle: 'italic',
        margin: '1rem 0',
    },
    author: {
        fontWeight: '500',
        marginTop: '0.5rem',
    },
};

export default AboutPage;