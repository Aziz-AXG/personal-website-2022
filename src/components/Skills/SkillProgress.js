import { useState } from "react";

const SkillProgress = ({ progressDone }) => {
            const [style, setStyle] = useState({});

            setTimeout(() => {
                        const newStyle = {
                                    opacity: 1,
                                    width: `${progressDone}%`
                        }

                        setStyle(newStyle);
            }, 4200);

            return (
                        <div className="progress">
                                    <div className="progressDone" style={style}>
                                                {progressDone}%
                                    </div>
                        </div>
            )
}

export default SkillProgress;