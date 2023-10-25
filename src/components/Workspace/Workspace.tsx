import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import PlayGround from './PlayGround/PlayGround'

type WorkspaceProps = {
    
};

const Workspace:React.FC<WorkspaceProps> = () => {
    
    return <Split>
        <ProblemDescription/>
        <PlayGround/>
        <div>code editor</div>
    </Split>
}
export default Workspace;