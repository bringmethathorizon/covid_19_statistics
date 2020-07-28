import React from 'react';
import {CountryInterface} from "../interfaces/CountryInterface";

interface countryItemProps {
    countryItem: any
}

const List = (props: countryItemProps) => {

    return(
        <div className="ListContainer">
            {props.countryItem.map((val: any, key: any) =>
                <li className="List"
                    key={key}
                > {val}
                </li>
            )}
        </div>
    )
};

export default List;
