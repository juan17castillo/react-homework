import React,{Component} from 'react';
import Navbar from './Navbar';

class Home extends Component{

    render() {
        return (
            <React.Fragment>

                <Navbar/>

                <div className="container">
                    <section>
                        <h1>Home</h1>
                    </section>
                </div>
            </React.Fragment>
        );
    }

}
export default Home;