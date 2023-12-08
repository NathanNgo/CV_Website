import styles from "./App.module.css"
import PageContent from "./PageContent.js"

function App() {
    return (
        <div className={styles.background}>
            <div className={styles.outerContainer}>
                <div className={styles.innerContainer}>
                    <div className={styles.page}>
                        <div className={styles.pageContent}>
                            <PageContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App