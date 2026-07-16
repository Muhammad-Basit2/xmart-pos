import Button from "./components/common/Button";

function App() {

    function handleClick(){

        alert("Welcome to Xmart POS");

    }

    return(

        <div className="min-h-screen flex items-center justify-center">

            <Button

                title="Click Me"

                onClick={handleClick}

            />

        </div>

    );

}

export default App;