import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    debugger
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        )
    }
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle Rendering");
    return (
        <h3>-- {props.title} --</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody Rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;

