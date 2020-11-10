/* File from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/src/client/home.jsx 
AND https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-08/src/client/home.jsx */

import React from "react";
import { Link } from "react-router-dom";


export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.user) {
            this.props.fetchAndUpdateUserInfo();
        }
    }

    render() {

        const user = this.props.user;

        return (
            <div className="indexContainer">

                    <p className={"welcome-text"}>
                        Welcome to Pokemon lootbox game,
                        this is where you can fulfill your gambling addiction with pokemons.
                    </p>

                    {user ? (
                    <div>
                        <div className={"action"}>
                            <Link to={"/pokemonlist"} className={"play"}>
                                All available pokemon
                            </Link>
                        </div>
                        <div className={"action"}>
                            <Link to={"/collection"} className={"play"}>
                                My collection
                            </Link>
                        </div>
                        <div className={"action"}>
                            <Link to={"/lootbox"} className={"play"}>
                                Play lootbox
                            </Link>
                        </div>
                    </div>
                    ) : (
                        <div>
                            <p>Login to see your collection and start opening lootboxes</p>

                            <div className={"action"}>
                                <Link to={"/pokemonlist"} className={"play"}>
                                    All available pokemon
                                </Link>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}
