import Header from "./Common/Header";
import './Home.css';
import { useEffect, useState} from "react";

const Home = (props) => {
let [data,setData]=useState(""); {/*for all data   */}
let[name,setName]=useState("");
let[email,setEmail]=useState("");
let[contact,setContact]=useState("");
let[city,setCity]=useState("");
let[course,setCourse]=useState("");

useEffect(()=>{
setData (props.user);
},[]);

function getData(){
    alert(name);
    alert(email);
    alert(contact);
    alert(city);
    alert(course);
    console.log(mame,email,contact,city,course);
}

return (
    <div>
        <Header />
        <div className="home-base">
            <div className="home-form-data">
                <input type="text" className="home-input" placeholder="Enter Name "
                onChange={(e)=>setName(e.target.value)} value={ name } />
                <input type="text" className="home-input" placeholder="Enter Email"
                onChange={(e)=>setEmail(e.target.value)} value={ email } />
                <input type="number" className="home-input" placeholder="Enter Contact Number "
                onChange={(e)=>setContact(e.target.value)} value={contact} />
                <input type="text" className="home-input" placeholder="Enter City "
                onChange={(e)=>setCity(e.target.value)} value={city} />
                <input type="text" className="home-input" placeholder="Enter your course"
                onChange={(e)=>setCourse(e.target.value)} value={course} />
                <button className="home-button" onClick={ getData }>Show Data</button>
            </div>
            <div className="home-data">
               {
                    data.length>0 ? data.map((item,index)=>
                    <div>
                        <div>Name : { item.name } </div>
                        <div>Email : { item.email } </div>
                        <div>Contact : { item.contact } </div>
                        <div>City : { item.city } </div>
                        <br />
                    </div>
                    ) : 
                    <h1>No Data Found</h1>
               }
            </div>
        </div>  
    </div>
);
}



{/*
useEffect(()=>{
    setadata(user);
});
return(
<div>
    <Header />
    <div className="home-base">
<div className="home-form-data">
    <input type="text" className="home-input" placeholder="Enter Name " onChange={(e)=>setName(e.target.value)}value={ name } />

I

<input type="text" className="home-input" placeholder="Enter Email " />

<input type="number" className="home-input" placeholder="Enter Contact Number" />
<input type="text" className="home-input" placeholder="Enter City " />

<button className="home-button" onclick={ getData }>Show Data</button>

</div>

<div className="home-data">


</div>
{/* 
<div className ="home-data">
    Given data is ={Props.course.name}<br/>
    {props.course.email}
</div>

{/* 
<div className ="home-data">
    Given data is ={Props.course.name}<br/>
    {props.course.email}
</div>
<div className ="home-data">
    Given data is ={Props.course.name}<br/>
    {props.course.email}
</div>

{/* for all data automatically
<div className="home-data">
    {                    {/*condition 
        data.length>0 ? data.map((item,index)=>  
        <div>Name : {item.name}</div>
        <div>Name : {item.name}</div>
        <div>Name : {item.name}</div>
        <div>Name : {item.name}</div>
        
            ):
    }
</div>
    </div>
    
</div>
);
}*/}
export default Home; 