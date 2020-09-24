import React from 'react'

import ItemDetails, {Record} from "../item-details";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceConsumer} from "../swapi-service-context";

const swapiService = new SwapiService();

const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPerson}
                            getImageUrl={getPersonImage}>

                            <Record field="gender" label="Gender"/>
                            <Record field="eyeColor" label="Eye Color"/>

                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};
const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return(
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}>

                            <Record field="model" label="Model"/>
                            <Record field="length" label="Length"/>
                            <Record field="costInCredits" label="Cost"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};
const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => {
                    return(
                        <ItemDetails
                            itemId={itemId}
                            getData={getStarship}
                            getImageUrl={getStarshipImage}>

                            <Record field="model" label="Model"/>
                            <Record field="length" label="Length"/>
                            <Record field="costInCredits" label="Cost"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
