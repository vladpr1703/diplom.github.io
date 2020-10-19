import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import { createUseStyles } from 'react-jss';

const histStyle = createUseStyles({
    button: {
        fontSize: '20px',
        fontFamily: 'ZCOOL QingKe HuangYou'       
    },
    historyOutput: {
        fontFamily: 'Quicksand',
        fontSize: '17px'
    }

}
)

const History = () => {
    let { result } = useContext(NumberContext);
    const classes = histStyle();
    function addItemLocalStorage(){
        let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) existingEntries = [];
        localStorage.setItem("entry", Object.values(result).join(''));
        existingEntries.push(Object.values(result).join(''));
        localStorage.setItem("allEntries", JSON.stringify(existingEntries.filter((e, i, a) => e !== '' && a.indexOf(e) == i)))
    }

    function localClear(){
        localStorage.clear();
        window.location.reload();
    }

    return (
    <>
        <div >{addItemLocalStorage()}
            <pre className={classes.historyOutput}>
                {JSON.parse(localStorage.getItem('allEntries')).join('\n')}
            </pre>
        </div>
        <button className={classes.button} onClick={() => localClear()}>Clear History</button>
    </>
    );
}

export default History;