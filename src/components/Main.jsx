import './Main.css';
import { useState } from 'react';

const Main = props => {

    const [activeId, setActiveId] = useState(null);

    return (

        <main>

            <div className="btnProgram">
                {
                    props.languagesProgram.map(singleLanguage => (
                        <button className={`btn-lang ${(singleLanguage.id === activeId) ? 'active' : ''}`}
                            onClick={() => setActiveId(singleLanguage.id)}

                            key={singleLanguage.id}>
                            {singleLanguage.title}
                        </button>
                    ))
                }

            </div>

            <div>
                {
                    props.languagesProgram.find(item => item.id === activeId)?.description
                }
            </div>


        </main>
    )
}

export default Main