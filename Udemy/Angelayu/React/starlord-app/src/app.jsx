import React from 'react';
import Heading from "./Header"
import Footer from "./footer"
import Note from "./note"
function App() {
    return (<div><Heading Heading="Keeper" />
        <Note title="Welcome To Keeper" description="Start Use the App" />
        <Note title="This is another Card" description="Copied From the " />
        <Footer /> </div>
    );
}
export default App;