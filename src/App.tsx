import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let items = [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}
    ]

  return (
    <div className={'App'}>
        <PageTitle title={"This is App Component"}/>

        <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

        <OnOff onChange={setSwitchOn} switchOn={switchOn}/>

        <UncontrolledAccordion titleValue={"Menu"} onChange={setAccordionCollapsed}/>

        <Rating value={ratingValue} onClick={setRatingValue}/>

        <UncontrolledRating onChange={setRatingValue}/>

        <Accordion titleValue={"Menu"}
                   items={items}
                   onClick={(value: any)=> alert(`user with ID ${value} should be happy`) }
                   collapsed = {accordionCollapsed}
                   onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType){
  return <h1>{props.title}</h1>
}


export default App;
