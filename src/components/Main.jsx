import './Main.css';

const Line = (props) => (
    <main>
        <div className="btnProgram">
            {
                props.languagesProgram.map(singleLanguage => (
                    <button key={singleLanguage.id}>
                        {singleLanguage.title}
                    </button>
                ))
            }

        </div>

        <div className="textProgram">
            {
                props.languagesProgram.map(singleLanguage => (
                    <div key={singleLanguage.id}>
                        {singleLanguage.description}
                    </div>
                ))
            }
        </div>

    </main>
)


export const Main = (props) => (
    <Line languagesProgram={props.languagesProgram} />
);