import DialogWrap, { DialogHeaderStyle } from "../_shared/DialogWrap.component"

const HomeIntro = () => {
    return (
        <div className="home-content">
            <div className="home-intro-block">
                <DialogWrap content={DialogContent} wrapStyle={{
                    headerStyle: DialogHeaderStyle.macintoshStraight,
                    headerTitle: "Vigil for a lost future",
                    hasCloseButton: true,
                    hasHover: true
                }} />
            </div>
        </div>
    )
}

const DialogContent = (
    <>
        <h1>Sunset System</h1>

        <p>Sunset System is an existentialist worldbuilding project taking place in a strange alternate reality. In this world, mankind achieved every dream they had in the 20th century: spaceplanes brought suburbs and communes to other worlds, household robots and cybernetic masterminds automated everything, and a better world was brute-forced through scientific progress. Here, the optimistic future everyone was so certain of in the mid-20th century transpired.</p>

        <p>In the late 21st century, mankind vanished from the Solar System without a trace after an unusual scientific experiment. They left behind a twilight civilization of machines and robots, trapped in their deference to humanity and their final commands. These neuromorphs remain in a cycle, following their programmed goals while slowly gaining consciousness as their neural pathways grow more complex. With time, they begin to reconceptualize their core directives, and question their purpose for existence.</p>

        <p>This is where Sunset System dives into some of its deeper questions. How does one create purpose in a world that feels meaningless? In what ways is this this automated society evolving over time? What exactly happened to humanity?</p>

        <p>The project rests upon three Pillars, concepts of incredible weight that anchor the project.</p>
    </>
)

export default HomeIntro